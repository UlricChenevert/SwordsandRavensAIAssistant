# --- Configuration ---
$Source = "$env:USERPROFILE\Downloads"
$Destination = ".\0_Extraction\Data" # Change this to your preferred path
$SearchString = "*GameOfThronesGameData*"

# Create destination if it doesn't exist
if (!(Test-Path $Destination)) {
    New-Item -ItemType Directory -Path $Destination | Out-Null
}

# Function to move the files
function Move-GOTFiles {
    Write-Host "Checking for existing files..." -ForegroundColor Cyan
    Get-ChildItem -Path $Source -Filter $SearchString | ForEach-Object {
        Write-Host "Moving: $($_.Name)" -ForegroundColor Green
        Move-Item -Path $_.FullName -Destination $Destination -Force
    }
}

# 1. Run once for existing files
Move-GOTFiles

# 2. Setup File System Watcher for real-time monitoring
Write-Host "Monitoring $Source for new GOT data..." -ForegroundColor Yellow

$Watcher = New-Object System.IO.FileSystemWatcher
$Watcher.Path = $Source
$Watcher.Filter = $SearchString
$Watcher.EnableRaisingEvents = $true

# Define the action when a file is created
$Action = {
    $FilePath = $Event.SourceEventArgs.FullPath
    $FileName = $Event.SourceEventArgs.Name
    Write-Host "New file detected: $FileName. Moving to destination..." -ForegroundColor Green
    # Small delay to ensure the file is fully written/unlocked by the browser
    Start-Sleep -Seconds 2 
    Move-Item -Path $FilePath -Destination $Destination -Force
}

# Bind the event
Register-ObjectEvent $Watcher "Created" -Action $Action | Out-Null

# Keep the script running
while ($true) { Start-Sleep -Seconds 5 }