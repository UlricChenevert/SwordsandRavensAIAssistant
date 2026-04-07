### Overview

A data collection and analysis toolkit for the online Game of Thrones board game. The end goal is a real-time strategic assistant powered by a RAG (Retrieval-Augmented Generation) pipeline: historical game situations are embedded into a vector store, and at inference time the LLM retrieves the most similar past situations — with their outcomes — to reason over and produce recommendations.

---

### Goals

Wreck everyone in Game of Thrones through well-informed stats, strategy, and LLM analysis :)

The assistant will:
1. **Predict opponent actions** — retrieve similar past situations where opponents faced the same conditions and surface what they bid / played
2. **Recommend your own actions** — suggest optimal bids and orders by grounding the LLM in retrieved historical precedents with known outcomes
3. **Evaluate action quality** — score a proposed action by comparing it against retrieved strong/weak plays in analogous positions
4. **Explain reasoning** — produce a concise natural-language summary grounded in specific retrieved examples, not just abstract patterns

---

### High-level Process

**Phase 1: Data Collection (complete)**

The injection script hooks into the live game client object via a browser extension and captures game state on demand. Data is downloaded as JSON. A Tampermonkey version also exists for automated capture at the end of each game.

**Phase 2: Feature Extraction & Embedding (complete)**

Raw game JSON is converted into structured game-state feature vectors for each decision point (bids, combats) and embedded into a vector database (ChromaDB). Separate corpora exist for combats, track bids, wildling bids, and general rules.

**Phase 3: RAG Inference Layer (complete)**

At inference time, the current game state is embedded and used to query the vector store for the K most similar historical situations. The retrieved examples — state, action taken, and outcome — are passed to the LLM as context alongside the relevant rules. The LLM (Gemini) reasons over these grounded examples to produce a recommendation.

**Phase 4: Assistant Interface (complete)**

A Firefox browser extension provides a live in-game assistant. It extracts the current game state directly from the page, attaches the relevant context (combat log, track bids, or wildling bids depending on advice type), and queries the RAG server — all without leaving the game.

---

### RAG Architecture

```
Current game state
    │
    ▼
Feature extraction (same features as stored in corpus)
    │
    ▼
Embedding model → query vector
    │
    ▼
Vector store (FAISS / Chroma / Pinecone)
    │  top-K nearest neighbors
    ▼
Retrieved examples:
  { game_state_summary, action_taken, outcome }  × K
    │
    ▼
LLM prompt:
  "Given the current state [compact summary],
   here are K similar historical situations and what happened:
   [retrieved examples]
   What should I do, and why?"
    │
    ▼
Natural-language recommendation + reasoning
```

**Retrieval corpus schema (one record per decision point):**

| Field | Description |
|-------|-------------|
| `embedding` | Dense vector of game state features at decision time |
| `game_state_summary` | Compact text serialization of board state |
| `decision_type` | `bid_iron_throne`, `bid_fiefdom`, `bid_kings_court`, `house_card`, etc. |
| `faction` | Faction making the decision |
| `action_taken` | The bid value or card played |
| `outcome_label` | `strong` / `neutral` / `weak` (based on final rank) |
| `outcome_detail` | Final castle count, rank, win/loss |

---

### Development Cycle

Run tasks with the VSCode Task Runner (`.vscode/tasks.json`):

| Task | Description |
|------|-------------|
| Watch Typescript | Compiles `.ts` → `.js` on save |
| Bundle Injection | Watches `0_Extraction/**/*.js` and rebuilds `injectionScript.js` |
| Watch Content Script | Watches `2a_Interaction/**/*.ts` and rebuilds `ActiveWindowScript.js` (IIFE, no module wrapper) |
| Watch Extension | Watches `2a_Interaction/**/*.js` and rebuilds `extension.js` |
| Serve Injection Script | Hosts the injection script locally for Tampermonkey |
| Run Analysis | Runs the reporting pipeline |

---

### Project Structure

```
0_Extraction/         - Game state extraction (TypeScript → bundled JS)
  Data/               - Raw scraped JSON files (one per game session)
  Framework/          - Extraction engine, data download utilities
  Modules/            - Per-feature extractors (bids, combat, rounds, players)
!Contracts/           - TypeScript type definitions for scraped data
2a_Interaction/       - Firefox browser extension (live assistant)
  manifest.json       - Extension manifest (Manifest V2)
  UI.html             - Popup interface
  extension.js        - Bundled popup logic (knockout, marked, DOMPurify)
  ActiveWindowScript.js - Content script: handles injectScript / getContext messages
  injectionScript.js  - Bundled extraction script injected into page context
  Config/             - Server URL constant
  Contracts/          - Extension data model (ExtensionModel.ts)
2_AI/                 - RAG inference server (Python / FastAPI)
  server.py           - FastAPI endpoint
  Contracts/          - Request/response models (Pydantic)
  Utilities/          - Prompt builder, game state → plain text serializer
  Services/           - ChromaDB vector store connections
  DB/                 - Persisted ChromaDB corpora (rules, combat, bids, wildlings)
2_Reporting/          - Python analysis and visualization
  Contracts/          - Python mirrors of the TS contracts
  Framework/          - Data loader, reporting engine
  Modules/            - Display, per-analyzer modules
.Tools/               - PowerShell build/watch scripts
```

---

### Why RAG (Not Fine-tuning or Pure ML)

**Fine-tuning** an LLM to output bid numbers would work, but requires retraining as the corpus grows and loses interpretability.

**Pure ML** (XGBoost etc.) on tabular features trains quickly and is accurate for numeric outputs, but produces no explanation and can't generalize to novel board states with qualitative context.

**RAG** combines both strengths:
- Retrieval grounds the LLM in real historical precedents — it's not hallucinating; it's citing specific past games
- The LLM's reasoning strength is used for what it's actually good at: synthesizing multiple examples and explaining *why* an action is good given this board state
- The corpus naturally improves as more games are collected — no retraining step
- Retrieved examples are inspectable, making recommendations auditable

ML models (XGBoost bid predictor, card predictor) remain useful as fast, lightweight signals that can be included as additional context in the RAG prompt alongside retrieved examples.

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
- ~1,100,000 game state snapshots → retrieval corpus

---

### Data Pipeline

#### The State Join

Every decision record starts with the same join:

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

This gives complete board state at the time of each bid or combat decision, which becomes the feature vector for embedding.

#### House Card Availability

A critical mechanic: played cards are discarded until reset. To reconstruct which cards are available at any combat decision, `format_data.py` scans all prior `combatLogs` in the same game for the same faction and subtracts played cards from the known starting deck. Available card set is included in the feature vector.

#### Outcome Labels

At the end of each game, rank all factions by final castle count:
- **Top 2** factions: their actions are labeled `strong`
- **Bottom 2** factions: their actions are labeled `weak`
- **Middle** factions: labeled `neutral`

These labels are stored in the retrieval corpus and surfaced to the LLM as part of each retrieved example.

#### Train / Val / Test Split (for retrieval evaluation)

- 80% corpus / 10% validation / 10% test
- **Split by game, not by event.** Events from the same game must never appear across splits.

---

### Retrieval Evaluation

Before using the system for recommendations, evaluate whether retrieval is actually finding meaningful neighbors:

| Metric | Description | Target |
|--------|-------------|--------|
| Outcome consistency | Do top-K neighbors share the same outcome label as the query? | > chance |
| Action overlap | For bids: is the retrieved median bid close to the query bid? | MAE < historical mean baseline |
| Retrieval diversity | Are neighbors from diverse games, not just the same session? | < 20% same-game neighbors |

If retrieval quality is poor, the issue is likely in the feature vector design — not the LLM.

---

### LLM Prompt Design

The LLM receives a structured prompt containing:
- Current game state (compact text serialization, ~300-500 tokens)
- K retrieved historical situations with: state summary, action taken, outcome label
- The decision to make (e.g. "how much should Stark bid on the Iron Throne?")

It returns a 3-5 sentence plain-language recommendation citing specific retrieved examples.

**Prompt serialization rules:**
- Natural language, not raw JSON
- Consistent field order every time (LLMs are sensitive to format variation)
- Omit irrelevant factions/regions to stay within token budget
- Retrieved examples sorted by similarity score (most similar first)

---

### Roadmap

- [x] Proof-of-concept scraper
- [x] Full extraction pipeline (combat, bids, wildlings, round snapshots)
- [x] ChromaDB corpora (rules, combat, track bids, wildling bids)
- [x] RAG inference server (FastAPI + Gemini)
- [x] Firefox browser extension with live game state extraction
- [x] In-extension advice types: Combat, Track Bid, Wildling Bid, Other
- [x] Collect ~250 games
- [ ] Evaluate retrieval quality (outcome consistency, action overlap)
- [ ] Tune prompt templates per decision type
- [ ] Production deployment (hosted server, shareable extension)
