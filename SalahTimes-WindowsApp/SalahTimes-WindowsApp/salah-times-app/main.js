'use strict';

const { app, BrowserWindow, Tray, Menu, shell, ipcMain, nativeImage } = require('electron');
const path = require('path');
const os = require('os');

let mainWindow;
let tray;
let isQuitting = false;

// ── Helper: resolve asset path (works in both dev and packaged) ──
function assetPath(...parts) {
  return path.join(app.isPackaged ? process.resourcesPath : __dirname, ...parts);
}

// ── Create the main app window ──
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 780,
    minWidth: 900,
    minHeight: 600,
    fullscreen: true,           // Start in fullscreen
    alwaysOnTop: true,          // Always stay on top of other windows
    frame: false,               // Custom title bar
    transparent: false,
    backgroundColor: '#0a0c14',
    title: 'Salah Times',
    icon: assetPath('assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: true,
    },
    show: false,
  });

  mainWindow.loadFile('src/index.html');

  // Show window gracefully when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
    mainWindow.setAlwaysOnTop(true, 'screen-saver'); // Strongest always-on-top level
  });

  // Minimize to tray instead of closing
  mainWindow.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault();
      mainWindow.hide();
      if (tray) {
        tray.displayBalloon({
          title: 'Salah Times',
          content: 'Running in the background. Click the tray icon to restore.',
          iconType: 'info',
        });
      }
    }
  });

  // Open external links in browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

// ── System Tray ──
function createTray() {
  const icon = nativeImage.createFromPath(assetPath('assets', 'tray.png'));
  tray = new Tray(icon.resize({ width: 16, height: 16 }));

  const menu = Menu.buildFromTemplate([
    {
      label: '☽  Salah Times',
      enabled: false,
    },
    { type: 'separator' },
    {
      label: '📖  Show App',
      click: () => {
        mainWindow.show();
        mainWindow.focus();
        mainWindow.setAlwaysOnTop(true, 'screen-saver');
      },
    },
    {
      label: '🔔  Toggle Azan',
      click: () => {
        mainWindow.webContents.send('toggle-azan');
      },
    },
    { type: 'separator' },
    {
      label: '⛶  Fullscreen',
      click: () => {
        mainWindow.show();
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
      },
    },
    {
      label: '📌  Toggle Always On Top',
      click: () => {
        const isOnTop = mainWindow.isAlwaysOnTop();
        if (isOnTop) {
          mainWindow.setAlwaysOnTop(false);
        } else {
          mainWindow.setAlwaysOnTop(true, 'screen-saver');
        }
      },
    },
    { type: 'separator' },
    {
      label: '✕  Quit',
      click: () => {
        isQuitting = true;
        app.quit();
      },
    },
  ]);

  tray.setToolTip('Salah Times — Prayer Times App');
  tray.setContextMenu(menu);

  tray.on('double-click', () => {
    mainWindow.show();
    mainWindow.focus();
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
  });
}

// ── IPC handlers (renderer → main) ──
ipcMain.on('window-minimize', () => mainWindow.minimize());
ipcMain.on('window-maximize', () => {
  if (mainWindow.isMaximized()) mainWindow.restore();
  else mainWindow.maximize();
});
ipcMain.on('window-close', () => mainWindow.close());
ipcMain.on('window-fullscreen', () => mainWindow.setFullScreen(!mainWindow.isFullScreen()));
ipcMain.on('window-always-on-top', () => {
  const isOnTop = mainWindow.isAlwaysOnTop();
  if (isOnTop) {
    mainWindow.setAlwaysOnTop(false);
  } else {
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
  }
});

ipcMain.handle('get-platform', () => process.platform);
ipcMain.handle('get-version', () => app.getVersion());
ipcMain.handle('get-always-on-top', () => mainWindow.isAlwaysOnTop());
ipcMain.handle('get-fullscreen', () => mainWindow.isFullScreen());

// ── App lifecycle ──
app.whenReady().then(() => {
  createWindow();
  createTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  isQuitting = true;
});