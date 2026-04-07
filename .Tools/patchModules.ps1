# Patch node_modules files to fix CSP and strict-mode incompatibilities.
# Run this after `npm install`.

# --- knockout: replace eval("this") with globalThis ---
$koFile = ".\node_modules\knockout\build\output\knockout-latest.js"
(Get-Content $koFile -Raw) `
    -replace [regex]::Escape('var z=this||(0,eval)("this")'), 'var z=this||globalThis' |
    Set-Content $koFile -NoNewline
Write-Host "Patched: $koFile"

# --- knockout-secure-binding: add CJS support + fix undeclared 'op' ---
$ksbFile = ".\node_modules\knockout-secure-binding\dist\knockout-secure-binding.js"
$ksb = Get-Content $ksbFile -Raw

# Add CommonJS branch to UMD wrapper
$ksb = $ksb -replace `
    [regex]::Escape('    } else {
        factory(ko);
    }'), `
    '    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("knockout"));
    } else {
        factory(ko);
    }'

# Declare missing `op` variable in Parser.prototype.expression
$ksb = $ksb -replace `
    [regex]::Escape('    var root,
        nodes = [],
        node_value,
        ch = this.white();

    while (ch) {
      // unary prefix operators
      op = this.operator();'), `
    '    var root,
        op,
        nodes = [],
        node_value,
        ch = this.white();

    while (ch) {
      // unary prefix operators
      op = this.operator();'

$ksb | Set-Content $ksbFile -NoNewline
Write-Host "Patched: $ksbFile"
