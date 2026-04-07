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

export class ExtensionModel {
    isLoading: KnockoutObservable<boolean>
    AdvancedMode: KnockoutObservable<boolean>

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
                // 'Accept-Encoding': 'gzip, deflate, br',
                // Connection: 'keep-alive',
                'Content-Type': 'application/json'
            },
            body: this.convertToJSON()
            };

        this.ErrorMessage(undefined)
        this.Response(undefined)

        this.isLoading(true);

        fetch(SERVER_URL, options)
            .then(response => response.json())
            .then(response => {
                if (response.metadata?.InError) throw response.metadata.errorMessage ?? "Server returned an error."
                
                return this.Response(response.body?.reply)
            })
            .catch(err => this.ErrorMessage(String(err)))
            .finally(()=>{this.isLoading(false);})
    }

    downloadGameData() {
        this.ErrorMessage("Unimplemented")
    }

    convertToJSON() {
        return JSON.stringify(
            {
                "geminiKey": this.GeminiKey() ?? "", 
                "prompt": this.Prompt() ?? "",
                "context": this.Context() ?? "",
                "aiRetrievalType": "rag",
                "adviseRetrievalType": this.PromptType() ?? "other",
                "model": this.Model()
            }
        )
    }
}