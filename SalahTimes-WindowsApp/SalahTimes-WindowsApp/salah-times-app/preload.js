const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe API to the renderer
contextBridge.exposeInMainWorld('electronAPI', {
  minimize:    () => ipcRenderer.send('window-minimize'),
  maximize:    () => ipcRenderer.send('window-maximize'),
  close:       () => ipcRenderer.send('window-close'),
  fullscreen:  () => ipcRenderer.send('window-fullscreen'),
  getVersion:  () => ipcRenderer.invoke('get-version'),
  getPlatform: () => ipcRenderer.invoke('get-platform'),

  // Listen for tray-triggered events
  onToggleAzan: (cb) => ipcRenderer.on('toggle-azan', cb),
});
