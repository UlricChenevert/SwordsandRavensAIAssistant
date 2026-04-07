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
    }
    sentPromptToServer() {
        if (this.RawMode())
            throw "Unimplemented";
        if (!this.GeminiKey()) {
            this.ErrorMessage("Gemini key is empty! No data can be extracted!");
            return;
        }
        if (!this.Prompt()) {
            this.ErrorMessage("prompt is empty! No data can be extracted!");
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            },
            body: this.convertToJSON()
        };
        this.ErrorMessage(undefined);
        this.Response(undefined);
        this.isLoading(true);
        console.log(options);
        fetch(SERVER_URL, { ...options, signal: AbortSignal.timeout(30_000) })
            .then(response => response.json())
            .then(response => {
            if (response.metadata?.InError)
                throw response.metadata.errorMessage ?? "Server returned an error.";
            return this.Response(response.body?.reply);
        })
            .catch(err => this.ErrorMessage(String(err)))
            .finally(() => { this.isLoading(false); });
    }
    downloadGameData() {
        this.ErrorMessage(undefined);
        this.isLoading(true);
        const onMessage = (message) => {
            if (message.type !== 'dataDownloaded')
                return;
            chrome.runtime.onMessage.removeListener(onMessage);
            if (message.data)
                this.GameData(message.data);
            this.isLoading(false);
        };
        chrome.runtime.onMessage.addListener(onMessage);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tabId = tabs[0]?.id;
            if (tabId == null) {
                this.ErrorMessage('No active tab found');
                this.isLoading(false);
                return;
            }
            chrome.tabs.sendMessage(tabId, { type: 'injectScript' });
        });
    }
    buildContext() {
        const data = this.GameData();
        if (!data)
            return null;
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
            "context": this.buildContext(),
            "aiRetrievalType": "rag",
            "adviseRetrievalType": this.PromptType() ?? "other",
            "model": this.Model()
        });
    }
}
