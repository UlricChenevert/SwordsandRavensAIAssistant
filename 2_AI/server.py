from dotenv import load_dotenv
from pydantic import SecretStr
#from google import genai
from langchain_openai import ChatOpenAI
import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from langchain_core.output_parsers import StrOutputParser

from Configuration.Constants import GITHUB_ISSUES_URL, HOST_IP, PORT, USAGE_LIMIT

from Utilities.BuildPrompts import buildPrompts

from Contracts.RequestContracts import PromptRequest
from Contracts.ResponseContracts import GeneralResponse, PromptResponse, ResponseMetaData
import traceback

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler) # type: ignore
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["POST"], allow_headers=["Content-Type"])

load_dotenv()


@app.post("/")
@limiter.limit(USAGE_LIMIT)
def home(request: Request, body: PromptRequest) -> GeneralResponse[PromptResponse]:
    prompt = ""
    
    try:
        llm = ChatOpenAI(api_key=SecretStr(body.openaiKey), model=body.model, max_retries=0)

        prompt = buildPrompts(body.aiRetrievalType, body.prompt, body.context, body.adviseRetrievalType, body.retrievalAmount)
        result = llm.invoke(prompt)
        response = StrOutputParser().invoke(result)
        tokens_input = result.usage_metadata.get("input_tokens", 0) if result.usage_metadata else 0
        tokens_used = result.usage_metadata.get("output_tokens", 0) if result.usage_metadata else 0
        
        return GeneralResponse(
            body=PromptResponse(reply=response, tokenInput=tokens_input, tokenOutput=tokens_used),
            metadata=ResponseMetaData()
            )

    except Exception as e:
        

        error_str = repr(e)
        if "AuthenticationError" in error_str or "Incorrect API key" in error_str or "invalid_api_key" in error_str:
            error_message = "Invalid ChatGPT API key. Please check your key and try again."
        elif "PermissionDeniedError" in error_str:
            error_message = "ChatGPT API key does not have permission to use this model."
        elif "RateLimitError" in error_str or "quota" in error_str.lower():
            error_message = "ChatGPT API quota exceeded. Please try again later."
        else:
            error_message = f"An error occurred. Please try again later, and please submit an issue at {GITHUB_ISSUES_URL}."

            print(f"An error occurred: {e}\n\n=====================================================\n\n")
            traceback.print_exc()
            
            sanitized = body.model_copy(update={"openaiKey": "***"})
            print("===================================")
            print(prompt)
            print("===================================")
            print(sanitized)

        print(error_message)

        return GeneralResponse(
            body=PromptResponse(reply="", tokenInput=0, tokenOutput=0),
            metadata=ResponseMetaData(InError=True, errorMessage=error_message)
            )

if __name__ == "__main__":
    '''
    query= "How much should I bid on each track on the first turn playing as stark?"
    promptTemplate = ChatPromptTemplate.from_template(RAG_TEMPLATE)
    rules = combineTextFragments(ruleRetrieverService.invoke(query))
    prompt = promptTemplate.format_messages(rules=rules, question=query)
    llm_response = llmService.invoke(prompt)
    '''
    
    uvicorn.run(app, host=HOST_IP, port=PORT)