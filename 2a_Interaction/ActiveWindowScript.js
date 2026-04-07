// have to enable "Access your data for *://swordsandravens.net" in about:addons
function inject() {
    const script = document.createElement("script");
    script.textContent = `
    // This runs in the REAL page context
    console.log("window var:", window);

    // To send it back to the content script:
    window.dispatchEvent(new CustomEvent("myext-data", {
      detail: { value: window }
    }));
  `;
    document.documentElement.appendChild(script);
    script.remove();
}
// Listen for the data sent back from page context
window.addEventListener("myext-data", (e) => {
    console.log("Received from page:", e);
});
inject();
export {};
