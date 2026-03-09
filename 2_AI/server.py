import os
from google import genai

client = genai.Client()

# Query the model (e.g., gemini-2.5-flash which is generally available in the free tier)
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents="Explain how to query the Gemini API for free."
)

print(response.text)