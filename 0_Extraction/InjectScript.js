// ==UserScript==
// @name         Capture Swords & Ravens Data
// @version      2026-1-11
// @description  Capture Game Data
// @author       You
// @match        https://swordsandravens.net/play/*
// @grant        none
// @require      http://localhost:3000/injectionScript.js
// ==/UserScript==
import { DownloadData } from "./Framework/DownloadData.js";
import { extractGameData } from "./Framework/ExtractGameData.js";
(function () {
    console.log("Injection script loaded!");
    function extractAndHandle(mode) {
        const gameClient = window.gameClient;
        if (!gameClient) {
            console.error("gameClient not found on window");
            return;
        }
        try {
            console.log(`--- EXTRACTING GAME STATE FOR ${gameClient.entireGame?.name} ---`);
            const extractedData = extractGameData(gameClient);
            const finalJSON = { [gameClient.authData.gameId]: extractedData };
            if (mode === 'download') {
                DownloadData(finalJSON, "GameOfThronesGameData");
                window.dispatchEvent(new CustomEvent('sar-data-downloaded'));
            }
            else {
                window.dispatchEvent(new CustomEvent('sar-data-downloaded', { detail: extractedData }));
            }
            console.log(`--- CAPTURED GAME STATE FOR ${gameClient.entireGame?.name} ---`);
        }
        catch (error) {
            console.error("Tampermonkey Hook Error:", error);
        }
    }
    window.addEventListener('sar-download-data', () => extractAndHandle('download'), { once: true });
    window.addEventListener('sar-attach-data', () => extractAndHandle('attach'), { once: true });
})();
