@echo off
title Salah Times - Launcher
color 0A

echo.
echo  ========================================
echo   ☽  Salah Times - Windows Desktop App
echo  ========================================
echo.

:: Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] Node.js is not installed!
    echo.
    echo  Please download and install Node.js from:
    echo  https://nodejs.org  (choose the LTS version)
    echo.
    pause
    start https://nodejs.org
    exit /b 1
)

echo  ✓ Node.js found: 
node --version

:: Check if dependencies are installed
if not exist "node_modules\" (
    echo.
    echo  Installing dependencies (first time only, ~2 minutes)...
    echo.
    npm install
    if errorlevel 1 (
        echo.
        echo  [ERROR] Failed to install dependencies.
        echo  Try running as Administrator or check your internet connection.
        pause
        exit /b 1
    )
)

echo.
echo  ✓ Dependencies ready
echo  ✓ Starting Salah Times...
echo.

npm start

pause
