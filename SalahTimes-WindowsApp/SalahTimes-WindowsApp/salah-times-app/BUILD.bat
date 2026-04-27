@echo off
title Salah Times - Build Tool
color 0B

echo.
echo  ========================================
echo   ☽  Salah Times - Build Windows .exe
echo  ========================================
echo.
echo  This will create an installer in the dist/ folder.
echo.

:: Check Node
node --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] Node.js not found. Install from https://nodejs.org
    pause
    exit /b 1
)

:: Install deps
if not exist "node_modules\" (
    echo  Installing dependencies...
    npm install
)

echo.
echo  Choose build type:
echo   [1] Full Installer + Portable (recommended)
echo   [2] Installer only (.exe setup)
echo   [3] Portable only (single .exe, no install)
echo.
set /p choice=Enter choice (1/2/3): 

if "%choice%"=="1" goto buildall
if "%choice%"=="2" goto buildinstall
if "%choice%"=="3" goto buildportable
goto buildall

:buildall
echo.
echo  Building installer + portable...
npm run build:all
goto done

:buildinstall
echo.
echo  Building installer...
npm run build
goto done

:buildportable
echo.
echo  Building portable...
npm run build:portable
goto done

:done
echo.
if errorlevel 1 (
    echo  [ERROR] Build failed. Check the error above.
) else (
    echo  ✓ Build complete! Check the dist/ folder.
    echo.
    explorer dist
)
pause
