import { SERVER_URL } from "../Config/General.js"
import ko from "knockout"

export const GeminiModel = {
    "Flash 2.0 (free)": "gemini-2.0-flash",
    "Pro 2.5":          "gemini-2.5-pro",
} as const

export const  AdviceType = {
    "Combat" : "combat",
    "Track Bid" : "track-bid",
    "Wildling Bid" : "wildling-bid",
    "Other" : "other"
} as const

interface TrackBid {
    Track: string
    Amount: number
    Faction: string
    currentGameStateReferenceIndex: number
}

interface WildlingBid {
    Amount: number
    Faction: string
    currentGameStateReferenceIndex: number
}

interface RoundData {
    HouseSnapshotData: Record<string, unknown>
    IronThroneTrack: string[]
    FiefdomTrack: string[]
    KingsCourtThroneTrack: string[]
    Round: number
    LogIndex: number
}

interface ExtractedGameData {
    TrackBids: TrackBid[]
    WildlingBids: WildlingBid[]
    combatLogs: unknown[]
    Rounds: RoundData[]
    Players: unknown[]
    Settings: unknown
}

export class ExtensionModel {
    isLoading: KnockoutObservable<boolean>
    AdvancedMode: KnockoutObservable<boolean>
    GameData: KnockoutObservable<ExtractedGameData | undefined>
    TokensIn: KnockoutObservable<number | undefined>
    TokensOut: KnockoutObservable<number | undefined>

     constructor (
        public GeminiKey : KnockoutObservable<string | undefined>,
        public Prompt : KnockoutObservable<string | undefined>,
        public PromptType : KnockoutObservable<typeof AdviceType[keyof typeof AdviceType] | undefined>,
        public RawMode : KnockoutObservable<boolean | undefined>,
        public RawJSON : KnockoutObservable<string | undefined>,
        public ErrorMessage : KnockoutObservable<string | undefined>,
        public Context : KnockoutObservable<string | undefined>,
        public Response : KnockoutObservable<string | undefined>,
        public Model : KnockoutObservable<typeof GeminiModel[keyof typeof GeminiModel]>,
    ) {
        this.isLoading = ko.observable(false)
        this.AdvancedMode = ko.observable(false)
        this.GameData = ko.observable<ExtractedGameData | undefined>(undefined)
        this.TokensIn = ko.observable<number | undefined>(undefined)
        this.TokensOut = ko.observable<number | undefined>(undefined)

        this.RawMode.subscribe((isRawMode)=>{
            if (!isRawMode) return

            this.RawJSON(this.convertToJSON())
        })

        this.AdvancedMode.subscribe((isAdvancedMode)=>{
            if (isAdvancedMode) return
            this.RawMode(false)
        })

    }

    sentPromptToServer() {
        if (this.RawMode()) throw "Unimplemented"

        if (!this.GeminiKey()) {this.ErrorMessage("Gemini key is empty! No data can be extracted!"); return}
        if (!this.Prompt()) {this.ErrorMessage("prompt is empty! No data can be extracted!"); return}

        const options = {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            },
            body: this.convertToJSON()
            };

        this.ErrorMessage(undefined)
        this.Response(undefined)

        this.isLoading(true);

        console.log(options)

        fetch(SERVER_URL, { ...options, signal: AbortSignal.timeout(30_000) })
            .then(response => response.json())
            .then(response => {
                if (response.metadata?.InError) throw response.metadata.errorMessage ?? "Server returned an error."

                this.TokensIn(response.body?.tokenInput)
                this.TokensOut(response.body?.tokenOutput)
                return this.Response(response.body?.reply)
            })
            .catch(err => this.ErrorMessage(String(err)))
            .finally(()=>{this.isLoading(false);})
    }

    downloadGameData() {
        this.ErrorMessage(undefined)
        this.isLoading(true)

        const onMessage = (message: { type: string, data?: ExtractedGameData }) => {
            if (message.type !== 'dataDownloaded') return
            chrome.runtime.onMessage.removeListener(onMessage)
            if (message.data) this.GameData(message.data)
            this.isLoading(false)
        }
        chrome.runtime.onMessage.addListener(onMessage)

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tabId = tabs[0]?.id
            if (tabId == null) {
                this.ErrorMessage('No active tab found')
                this.isLoading(false)
                return
            }
            chrome.tabs.sendMessage(tabId, { type: 'injectScript' })
        })
    }

    private buildContext(): object | null {
        const data = this.GameData()
        if (!data) return null

        const latestRound = data.Rounds.at(-1)
        if (!latestRound) return null

        const roundLogIndex = latestRound.LogIndex
        const base = { gameState: latestRound, players: data.Players }

        switch (this.PromptType()) {
            case 'track-bid':
                return { ...base, trackBids: data.TrackBids.filter(b => b.currentGameStateReferenceIndex >= roundLogIndex) }
            case 'wildling-bid':
                return { ...base, wildlingBids: data.WildlingBids.filter(b => b.currentGameStateReferenceIndex >= roundLogIndex) }
            case 'combat':
                return { ...base, combat: data.combatLogs.at(-1) ?? null }
            default:
                return base
        }
    }

    convertToJSON() {
        return JSON.stringify(
            {
                "geminiKey": this.GeminiKey() ?? "",
                "prompt": this.Prompt() ?? "",
                "context": this.buildContext(),
                "aiRetrievalType": "rag",
                "adviseRetrievalType": this.PromptType() ?? "other",
                "model": this.Model()
            }
        )
    }
}
