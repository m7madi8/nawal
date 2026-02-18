# تشغيل هذا السكربت من مجلد المشروع (د:\nawal omar) لتفادي تحذيرات pnpm
# Run from project root: .\scripts\clean-for-pnpm.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Leaf
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "Removing node_modules..." -ForegroundColor Yellow
if (Test-Path node_modules) {
    Remove-Item -Recurse -Force node_modules
    Write-Host "  Done." -ForegroundColor Green
} else {
    Write-Host "  Already gone." -ForegroundColor Gray
}

Write-Host "Removing package-lock.json (npm)..." -ForegroundColor Yellow
if (Test-Path package-lock.json) {
    Remove-Item -Force package-lock.json
    Write-Host "  Done." -ForegroundColor Green
} else {
    Write-Host "  Already gone." -ForegroundColor Gray
}

Write-Host "`nNow run:  pnpm install" -ForegroundColor Cyan
