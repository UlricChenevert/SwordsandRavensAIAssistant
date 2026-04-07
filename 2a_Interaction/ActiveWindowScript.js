// have to enable "Access your data for *://swordsandravens.net" in about:addons
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type !== 'injectScript') return;

    fetch(chrome.runtime.getURL('injectionScript.js'))
        .then(r => r.text())
        .then(src => {
            window.addEventListener('sar-data-downloaded', (e) => {
                chrome.runtime.sendMessage({ type: 'dataDownloaded', data: e.detail });
            }, { once: true });

            const script = document.createElement('script');
            script.textContent = src;
            document.documentElement.appendChild(script);
            script.remove();

            sendResponse({ ok: true });
        });

    return true; // keep channel open for async sendResponse
});
