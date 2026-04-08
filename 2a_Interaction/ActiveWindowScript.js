"use strict";
(() => {
  // 2a_Interaction/ActiveWindowScript.ts
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type !== "injectScript" && message.type !== "getContext") return;
    fetch(chrome.runtime.getURL("injectionScript.js")).then((r) => r.text()).then((src) => {
      const script = document.createElement("script");
      script.textContent = src;
      document.documentElement.appendChild(script);
      script.remove();
      if (message.type === "injectScript") {
        window.addEventListener("sar-data-downloaded", () => {
          sendResponse({ ok: true });
        }, { once: true });
        window.dispatchEvent(new CustomEvent("sar-download-data"));
      } else {
        window.addEventListener("sar-data-downloaded", (e) => {
          sendResponse({ ok: true, data: e.detail });
        }, { once: true });
        window.dispatchEvent(new CustomEvent("sar-attach-data"));
      }
    });
    return true;
  });
})();
