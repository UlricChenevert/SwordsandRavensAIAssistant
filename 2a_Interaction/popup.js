// "action": {
//     "default_popup": "UI.html"
//   },
const form = document.querySelector('form');
if (!form)
    throw "Form is null!";
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop page reload
    if (!event.target)
        throw "Event target is empty! No data can be extracted!";
    debugger;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const geminiKey = data["gemini-key"];
    if (!geminiKey)
        throw "Gemini key is empty! No data can be extracted!";
    const prompt = data["prompt"];
    if (!prompt)
        throw "prompt is empty! No data can be extracted!";
    sentPromptToServer(prompt.toString(), geminiKey.toString());
});
function sentPromptToServer(message, geminiKey) {
    console.log(`Request Sent with ${message} and key ${geminiKey}`);
}
console.log(window);
export {};
