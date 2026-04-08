import { DownloadData } from "../../0_Extraction/Framework/DownloadData.js";
import { SERVER_URL } from "../Config/General.js";
import ko from "knockout";
export const GeminiModel = {
    "Flash 2.0 (free)": "gemini-2.0-flash",
    "Pro 2.5": "gemini-2.5-pro",
};
export const AdviceType = {
    "Combat": "combat",
    "Track Bid": "track-bid",
    "Wildling Bid": "wildling-bid",
    "Other": "other"
};
export const AIRetrievalType = {
    "RAG": "rag",
    // "Few Shot" : "few-shot",
    "Zero Shot": "zero-shot",
};
export class ExtensionModel {
    GeminiKey;
    Prompt;
    PromptType;
    RawMode;
    RawJSON;
    ErrorMessage;
    Context;
    Response;
    Model;
    isLoading;
    AdvancedMode;
    GameData;
    AttachedContext;
    TokensIn;
    TokensOut;
    AIRetrievalType;
    RetrievalAmount;
    NoContext;
    constructor(GeminiKey, Prompt, PromptType, RawMode, RawJSON, ErrorMessage, Context, Response, Model) {
        this.GeminiKey = GeminiKey;
        this.Prompt = Prompt;
        this.PromptType = PromptType;
        this.RawMode = RawMode;
        this.RawJSON = RawJSON;
        this.ErrorMessage = ErrorMessage;
        this.Context = Context;
        this.Response = Response;
        this.Model = Model;
        this.isLoading = ko.observable(false);
        this.AdvancedMode = ko.observable(false);
        this.GameData = ko.observable(undefined);
        this.AttachedContext = ko.observable(null);
        this.TokensIn = ko.observable(undefined);
        this.TokensOut = ko.observable(undefined);
        this.AIRetrievalType = ko.observable(AIRetrievalType["RAG"]);
        this.RetrievalAmount = ko.observable(undefined);
        this.NoContext = ko.observable(false);
        this.RawMode.subscribe((isRawMode) => {
            if (!isRawMode)
                return;
            this.RawJSON(this.convertToJSON());
        });
        this.AdvancedMode.subscribe((isAdvancedMode) => {
            if (isAdvancedMode)
                return;
            this.RawMode(false);
        });
        this.PromptType.subscribe(() => {
            this.AttachedContext(null);
        });
        this.AIRetrievalType.subscribe((newValue) => {
            if (newValue != AIRetrievalType["Zero Shot"])
                return;
            this.RetrievalAmount(0);
        });
    }
    async sentPromptToServer() {
        this.ErrorMessage(undefined);
        this.Response(undefined);
        this.isLoading(true);
        try {
            let body;
            if (this.RawMode()) {
                if (this.RawJSON() === undefined) {
                    this.ErrorMessage("JSON Empty!");
                    return;
                }
                body = this.RawJSON();
            }
            else {
                if (!this.GeminiKey()) {
                    this.ErrorMessage("Gemini key is empty! No data can be extracted!");
                    return;
                }
                if (!this.Prompt()) {
                    this.ErrorMessage("Prompt is empty! No data can be extracted!");
                    return;
                }
                const context = this.NoContext() ? null : await this.getContext();
                body = JSON.stringify({
                    "geminiKey": this.GeminiKey() ?? "",
                    "prompt": this.Prompt() ?? "",
                    "context": context,
                    "aiRetrievalType": this.AIRetrievalType(),
                    "adviseRetrievalType": this.PromptType() ?? "other",
                    "retrievalAmount": this.RetrievalAmount() ?? null,
                    "model": this.Model()
                });
            }
            console.log(body);
            const response = await fetch(SERVER_URL, {
                method: 'POST',
                headers: { Accept: '*/*', 'Content-Type': 'application/json' },
                body,
                signal: AbortSignal.timeout(30_000)
            });
            const json = await response.json();
            if (json.metadata?.InError)
                throw json.metadata.errorMessage ?? "Server returned an error.";
            DownloadData(response, "output");
            this.TokensIn(json.body?.tokenInput);
            this.TokensOut(json.body?.tokenOutput);
            this.Response(json.body?.reply);
        }
        catch (err) {
            this.ErrorMessage(String(err));
        }
        finally {
            this.isLoading(false);
        }
    }
    sendToTab(messageType) {
        return new Promise((resolve, reject) => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const tabId = tabs[0]?.id;
                if (tabId == null) {
                    reject(new Error('No active tab found'));
                    return;
                }
                chrome.tabs.sendMessage(tabId, { type: messageType }, resolve);
            });
        });
    }
    async downloadGameData() {
        this.ErrorMessage(undefined);
        this.isLoading(true);
        try {
            await this.sendToTab('injectScript');
        }
        catch (e) {
            this.ErrorMessage(String(e));
        }
        this.isLoading(false);
    }
    async getContext() {
        const response = await this.sendToTab('getContext');
        if (!response?.data)
            throw new Error('Failed to extract game context.');
        const context = this.buildContext(response.data);
        this.AttachedContext(context);
        return context;
    }
    buildContext(data) {
        const latestRound = data.Rounds.at(-1);
        if (!latestRound)
            return null;
        const roundLogIndex = latestRound.LogIndex;
        const base = { gameState: latestRound, players: data.Players };
        switch (this.PromptType()) {
            case 'track-bid':
                return { ...base, trackBids: data.TrackBids.filter(b => b.currentGameStateReferenceIndex >= roundLogIndex) };
            case 'wildling-bid':
                return { ...base, wildlingBids: data.WildlingBids.filter(b => b.currentGameStateReferenceIndex >= roundLogIndex) };
            case 'combat':
                return { ...base, combat: data.combatLogs.at(-1) ?? null };
            default:
                return base;
        }
    }
    convertToJSON() {
        return JSON.stringify({
            "geminiKey": this.GeminiKey() ?? "",
            "prompt": this.Prompt() ?? "",
            "context": this.AttachedContext(),
            "aiRetrievalType": this.AIRetrievalType(),
            "adviseRetrievalType": this.PromptType() ?? "other",
            "retrievalAmount": this.RetrievalAmount() ?? null,
            "model": this.Model()
        });
    }
}
