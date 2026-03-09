### Overview

A data collection and analysis toolkit for the online Game of Thrones board game. The end goal is a real-time strategic assistant that predicts player actions and recommends optimal plays, powered by a hybrid of traditional ML models (prediction) and an LLM (explanation).

---

### Goals

Wreck everyone in Game of Thrones through well-informed stats, strategy, and LLM analysis :)

The assistant will:
1. **Predict opponent actions** — forecast what neighboring players are likely to bid, which orders they will place, and which house cards they will play
2. **Recommend your own actions** — suggest optimal bids and orders given predicted opponent behavior
3. **Evaluate action quality** — score a proposed action based on patterns from historical high-performing games
4. **Explain reasoning** — produce a concise natural-language summary of why a recommendation makes sense

---

### High-level Process

**Phase 1: Data Collection (in progress)**

The injection script hooks into the game client's `onMessage` deserialization pipeline via Tampermonkey and captures game events as they happen. Data is downloaded as JSON at the end of each game.

Target: ~1,000 games across multiple players. The scraper is already built — this is purely a data collection problem.

**Phase 2: ML Model Training**

Convert raw game JSON to tabular features and train XGBoost/LightGBM models for bid prediction, house card prediction, and action quality scoring. These models are fast, interpretable, and well-suited for structured game data.

**Phase 3: LLM Explanation Layer**

Use an LLM to translate ML model outputs into natural-language recommendations. This does not require fine-tuning — the ML predictions plus a compact game state summary are passed as context to a capable base model (Claude or GPT-4) via API.

**Phase 4: Assistant Interface**

A lightweight interface that accepts current game state, runs the ML models, and presents recommendations during live play.

---

### Development Cycle (Extraction)

Run tasks with VSCode Task Runner:
- Watch Typescript (`watch.ps1`)
- Serve Injection Script (`host.ps1`)
- Reload authenticated page

---

### Project Structure

```
0_Extraction/         - Browser injection script (TypeScript, compiled to JS)
  Data/               - Raw scraped JSON files (one per game session)
!Contracts/           - TypeScript type definitions for scraped data
2_Reporting/          - Python analysis and visualization
  Contracts/          - Python mirrors of the TS contracts
  Framework/          - Data loader, reporting engine
  Modules/            - Display, per-analyzer modules
Training/             - ML training pipeline
  format_data.py      - Joins events to game state via reference index, outputs features
  train_bids.py       - XGBoost bid prediction model (per track)
  train_cards.py      - XGBoost house card prediction model
  train_quality.py    - XGBoost action quality scoring model
  evaluate.py         - Evaluation metrics vs baselines on held-out test games
Inference/
  predict.py          - Runs ML models against current game state
  explain.py          - LLM explanation layer (API call with ML output as context)
```

---

### Why Hybrid ML + LLM (Not LLM for Everything)

Fine-tuning an LLM to output `"5"` for a bid prediction would work, but is the wrong tool:
- XGBoost on tabular features trains in minutes on CPU and reliably outputs numbers
- LLMs hallucinate numeric outputs and need careful parsing
- At 1,000 games the LLM would likely be outperformed by gradient boosting on structured features

The LLM's actual strength is **reasoning and language** — taking ML predictions and explaining *why* a bid of 5 makes sense given the current board position. That requires no fine-tuning, just a well-structured prompt.

---

### Data Collected Per Game

Each scraped game file contains:

| Field | Description |
|-------|-------------|
| `Players` | Player IDs and usernames (6-7 per game) |
| `combatLogs` | All battles: armies, house cards, support, wounds, winner (~46/game) |
| `TrackBids` | Bids on Iron Throne / Fiefdom / King's Court tracks (~78/game) |
| `WildlingBids` | Power token bids against wildling invasions (~25/game) |
| `Rounds` | Full game state snapshot at every log entry (~1,100/game) |

Both `combatLogs` and `TrackBids` carry a `currentGameStateReferenceIndex` that points directly into the `Rounds` array, giving full board context (unit positions, order tokens, all faction resources) at the moment of each decision without duplicating data.

`Rounds` (as `LogIndexToGameRound`) additionally provides: track position arrays, wildling/dragon strength, Valyrian Steel Blade usage, victory track standings, and Iron Bank state.

**At 1,000 games:**
- ~46,000 labeled combat encounters
- ~78,000 labeled bid decisions
- ~1,100,000 game state snapshots

---

### Data Pipeline

#### The State Join

Every prediction task starts with the same join:

```
event.currentGameStateReferenceIndex
    -> Rounds[index]                    (LogIndexToGameRound)
       - ironThroneTrack: Factions[]   (ordered = rank 1..N)
       - fiefdomsTrack: Factions[]
       - kingsCourtTrack: Factions[]
       - housesOnVictoryTrack
       - wildlingStrength, vsbUsed
    -> ExtractedGameStateData[index]   (unit positions, order tokens, resource snapshots)
```

This gives complete board state at the time of each bid or combat decision.

#### House Card Availability

A critical mechanic: played cards are discarded until reset. To reconstruct which cards are available at any combat decision, `format_data.py` scans all prior `combatLogs` in the same game for the same faction and subtracts played cards from the known starting deck. The available card set becomes a feature for the card prediction model.

#### Train / Val / Test Split

- 80% train / 10% validation / 10% test
- **Split by game, not by event.** Events from the same game must never appear across splits — this would leak outcome information.

#### Labels: Action Quality

Using per-round rate-of-change (castle/troop/token delta) as a quality label is flawed due to attribution lag and survivorship bias. Instead:

- At the end of each game, rank all factions by final castle count
- **Top 2** factions: their actions are labeled `strong`
- **Bottom 2** factions: their actions are labeled `weak`
- **Middle** factions: labeled `neutral`
- Faction identity is included as a model feature, allowing the model to account for structural faction strength differences without conflating them with action quality

---

### ML Models

#### 1. Bid Prediction

**Task:** Given game state at bid time, predict what a faction will bid on each track.

**Why this matters for recommendations:** Bid decisions are simultaneous — the optimal bid depends on what you predict opponents will bid. The model is used in two steps:
1. Predict all opponent bids (descriptive)
2. Compute the minimum bid that achieves your desired track position given those predictions (prescriptive)

For example: if you want Iron Throne rank 1, bid `max(predicted_opponent_bids) + 1`. If rank 2-3 is acceptable, bid `median(predicted_opponent_bids)`.

**Features (per faction per bid event):**
- Current power tokens
- Current position on each track (numeric rank)
- Castle count, supply tier, land area count
- Round number
- Relative power token standing vs. all opponents
- Last round's bid on this track (from prior events in same game)

**Model:** XGBoost regressor, one per track. Or a multi-output regressor.

**Baseline to beat:** Always predict the per-track historical mean bid. If the model can't beat this, it has learned nothing.

#### 2. House Card Prediction

**Task:** Given combat context and available cards, predict which card a faction plays.

**Features:**
- Own army strength, support strength, garrison
- Opponent army strength, support strength, garrison
- Own available cards (binary feature per card)
- Opponent's remaining card count
- Round number, Valyrian Steel Blade holder

**Model:** XGBoost multi-class classifier (one class per possible card + "no card").

**Evaluation metric:** Top-3 accuracy (is the correct card in the top 3 predicted probabilities?). This is more useful than top-1 accuracy given the strategic uncertainty.

**Baseline:** Predict the historically most-played card for each faction.

#### 3. Action Quality Scorer

**Task:** Given a (game state, proposed action) pair, predict whether it is a strong, neutral, or weak play.

**Features:** Game state features (same as bid model) + the proposed action type/parameters.

**Model:** XGBoost classifier (3 classes).

**Note:** This model will have significant noise due to the difficulty of attributing outcomes to individual actions. Treat its output as a soft signal, not a ground truth.

---

### LLM Explanation Layer

The LLM is not trained — it receives a structured prompt containing:
- Current game state (compact text serialization, ~300-500 tokens)
- ML model predictions for opponent bids and likely house cards
- Recommended bid / action with quality score
- Faction-specific context (available cards, territory position)

It returns a 3-5 sentence plain-language summary of the recommendation and reasoning.

**Prompt serialization rules:**
- Natural language, not raw JSON
- Consistent field order every time (LLMs are sensitive to format variation)
- Omit irrelevant factions/regions to stay within token budget

This layer can use the Claude or OpenAI API. No fine-tuning needed.

---

### Evaluation

Each model is evaluated on held-out test games (never seen during training):

| Model | Primary Metric | Baseline |
|-------|---------------|----------|
| Bid prediction | Mean Absolute Error per track | Predict historical mean bid |
| Card prediction | Top-3 accuracy | Predict most common card per faction |
| Action quality | Accuracy vs. relative rank labels | Majority class (predict "neutral") |

A model that doesn't beat its baseline has not learned anything useful and should not be shipped.

---

### Roadmap

- [x] Proof-of-concept scraper (6 games collected)
- [ ] Collect ~1,000 games
- [ ] Build `Training/format_data.py` — state join, card availability tracking, label generation
- [ ] Smoke-test: train on 6 games end-to-end to validate the pipeline (not for model quality)
- [ ] Full training run on 1,000-game dataset
- [ ] Evaluate all models vs. baselines on held-out test games
- [ ] Build `Inference/predict.py` + `Inference/explain.py`
- [ ] User-facing assistant interface for live play