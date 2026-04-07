import { SERVER_URL } from "../Config/General.js"
import ko from "knockout"

export const GeminiModel = {
    "Flash 2.0 (free)": "gemini-2.0-flash",
    "Pro 2.5":          "gemini-2.5-pro",
} as const

export const AdviceType = {
    "Combat" : "combat",
    "Track Bid" : "track-bid",
    "Wildling Bid" : "wildling-bid",
    "Other" : "other"
} as const

export const AIRetrievalType = {
    "RAG" : "rag",
    // "Few Shot" : "few-shot",
    "Zero Shot" : "zero-shot",
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
    AttachedContext: KnockoutObservable<object | null>
    TokensIn: KnockoutObservable<number | undefined>
    TokensOut: KnockoutObservable<number | undefined>
    AIRetrievalType: KnockoutObservable<typeof AIRetrievalType[keyof typeof AIRetrievalType]>
    RetrievalAmount: KnockoutObservable<number | undefined>

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
        this.AttachedContext = ko.observable<object | null>(null)
        this.TokensIn = ko.observable<number | undefined>(undefined)
        this.TokensOut = ko.observable<number | undefined>(undefined)
        this.AIRetrievalType = ko.observable<typeof AIRetrievalType[keyof typeof AIRetrievalType]>(AIRetrievalType["RAG"])
        this.RetrievalAmount = ko.observable<number | undefined>(undefined)

        this.RawMode.subscribe((isRawMode)=>{
            if (!isRawMode) return

            this.RawJSON(this.convertToJSON())
        })

        this.AdvancedMode.subscribe((isAdvancedMode)=>{
            if (isAdvancedMode) return
            this.RawMode(false)
        })

        this.PromptType.subscribe(() => {
            this.AttachedContext(null)
        })

        this.AIRetrievalType.subscribe((newValue)=>{
            if (newValue != AIRetrievalType["Zero Shot"]) return

            this.RetrievalAmount(0)
        })
    }

    async sentPromptToServer() {
        this.ErrorMessage(undefined)
        this.Response(undefined)
        this.isLoading(true)

        try {
            let body: string
            if (this.RawMode()) {
                if (this.RawJSON() === undefined) { this.ErrorMessage("JSON Empty!"); return }
                body = this.RawJSON() as string
            } else {
                if (!this.GeminiKey()) { this.ErrorMessage("Gemini key is empty! No data can be extracted!"); return }
                if (!this.Prompt()) { this.ErrorMessage("Prompt is empty! No data can be extracted!"); return }
                const context = await this.getContext()
                body = JSON.stringify({
                    "geminiKey": this.GeminiKey() ?? "",
                    "prompt": this.Prompt() ?? "",
                    "context": context,
                    "aiRetrievalType": this.AIRetrievalType(),
                    "adviseRetrievalType": this.PromptType() ?? "other",
                    "retrievalAmount": this.RetrievalAmount() ?? null,
                    "model": this.Model()
                })
            }

            console.log(body)

            const response = await fetch(SERVER_URL, {
                method: 'POST',
                headers: { Accept: '*/*', 'Content-Type': 'application/json' },
                body,
                signal: AbortSignal.timeout(30_000)
            })
            const json = await response.json()
            if (json.metadata?.InError) throw json.metadata.errorMessage ?? "Server returned an error."

            this.TokensIn(json.body?.tokenInput)
            this.TokensOut(json.body?.tokenOutput)
            this.Response(json.body?.reply)
        } catch (err) {
            this.ErrorMessage(String(err))
        } finally {
            this.isLoading(false)
        }
    }

    private sendToTab(messageType: string): Promise<any> {
        return new Promise((resolve, reject) => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const tabId = tabs[0]?.id
                if (tabId == null) { reject(new Error('No active tab found')); return }
                chrome.tabs.sendMessage(tabId, { type: messageType }, resolve)
            })
        })
    }

    async downloadGameData() {
        this.ErrorMessage(undefined)
        this.isLoading(true)
        try {
            await this.sendToTab('injectScript')
        } catch (e) {
            this.ErrorMessage(String(e))
        }
        this.isLoading(false)
    }

    private async getContext(): Promise<object | null> {
        const response: { ok: boolean, data?: ExtractedGameData } = await this.sendToTab('getContext')
        if (!response?.data) throw new Error('Failed to extract game context.')
        const context = this.buildContext(response.data)
        this.AttachedContext(context)
        return context
    }

    private buildContext(data: ExtractedGameData): object | null {
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
                "context": this.AttachedContext(),
                "aiRetrievalType": this.AIRetrievalType(),
                "adviseRetrievalType": this.PromptType() ?? "other",
                "retrievalAmount": this.RetrievalAmount() ?? null,
                "model": this.Model()
            }
        )
    }
}
