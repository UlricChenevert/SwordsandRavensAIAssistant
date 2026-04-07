.\node_modules\.bin\esbuild .\2a_Interaction\extensionSource.ts --bundle --outfile=.\2a_Interaction\extension.js
Copy-Item .\0_Extraction\bundledInjectionScript.js .\2a_Interaction\injectionScript.js
