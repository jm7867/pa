# ☽ Salah Times — Windows Desktop App

Beautiful Islamic prayer times application built with Electron.  
Runs natively on **Windows 10 & 11** (x64 and x86).

---

## 📁 Project Structure

```
salah-times-app/
├── main.js              ← Electron main process
├── preload.js           ← Secure IPC bridge
├── package.json         ← Build config
├── src/
│   └── index.html       ← The full app UI
├── assets/
│   ├── icon.ico         ← App icon (Windows .ico)
│   ├── icon.png         ← App icon (PNG 256×256)
│   └── tray.png         ← System tray icon (PNG 16×16)
├── azan.mp3             ← Azan audio file (place here)
├── quran/               ← Quran MP3 files (001.mp3 … 114.mp3)
│   └── 001.mp3
└── nashed/              ← Nasheed MP3 files + manifest
    ├── manifest.json    ← ["01 - track.mp3", "02 - track.mp3"]
    └── 001.mp3
```

---

## 🚀 Quick Start (Development)

### Prerequisites
- **Node.js 18+** — https://nodejs.org (LTS version)
- **Git** (optional)

### Steps

```bash
# 1. Open a terminal / PowerShell in the project folder

# 2. Install dependencies (~5 min first time)
npm install

# 3. Run the app directly
npm start
```

The app window will open immediately.

---

## 📦 Build a Windows Installer (.exe)

```bash
# Install dependencies first
npm install

# Build both installer + portable .exe
npm run build:all
```

Output will be in the `dist/` folder:
- `Salah Times Setup 1.0.0.exe` — Full installer (with Start Menu + Desktop shortcut)
- `SalahTimes-Portable-1.0.0.exe` — Portable, no install needed

### Build only installer
```bash
npm run build
```

### Build only portable
```bash
npm run build:portable
```

---

## 🎵 Adding Audio Files

### Azan
Place your azan audio file as `azan.mp3` in the root folder.

### Quran (Mishari Al-Afasi)
Place surah MP3s in the `quran/` folder named `001.mp3` through `114.mp3`.

Free source: https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/

### Nasheed
1. Place MP3 files in the `nashed/` folder
2. Create `nashed/manifest.json`:
```json
["01 - Nasheed Name.mp3", "02 - Another Track.mp3"]
```

---

## 🖥️ App Features

| Feature | Description |
|---------|-------------|
| 📍 Auto Location | Uses GPS/IP to detect your city |
| 🕌 8 Prayer Times | Imsak, Fajr, Sunrise, Ishraq, Zuhr, Asr, Maghrib, Isha |
| 📅 Calendar | Bi-weekly and monthly view |
| 📅 Hijri Date | Shows Islamic calendar date |
| 🔔 Azan Alert | Plays azan audio at prayer time |
| 🎨 5 Themes | Midnight Gold, Emerald, Desert, Sapphire, Crimson |
| 📐 Methods | 12 calculation methods (ISNA, MWL, Egyptian, etc.) |
| 🕌 Madhab | Shafi'i or Hanafi Asr calculation |
| 📖 Quran Player | 114 surahs with progress + volume |
| 🎵 Nasheed Player | Your own MP3 collection |
| 🌡 Weather | Live temperature + conditions |
| 💻 System Tray | Minimize to tray, runs in background |
| ⛶ Fullscreen | Full-screen mode support |

---

## 🔧 Settings Saved Between Sessions

All settings are saved automatically using `localStorage`:
- Selected theme
- Calculation method
- Madhab (school)
- Azan on/off
- Last played surah
- Last played nasheed track

---

## ⚙️ Calculation Methods Available

| Value | Authority |
|-------|-----------|
| 0 | Karachi — South Asia |
| 1 | MWL — Muslim World League |
| 2 | ISNA — North America *(default)* |
| 4 | Umm al-Qura, Makkah |
| 5 | Egyptian General Authority |
| 7 | UOIF — France |
| 8 | Gulf Region |
| 9 | Kuwait |
| 12 | Qatar |
| 13 | Singapore |

---

## 🪟 Windows Compatibility

| OS | Support |
|----|---------|
| Windows 11 (x64) | ✅ Full |
| Windows 10 (x64) | ✅ Full |
| Windows 10 (x86) | ✅ Full |
| Windows 8.1 | ⚠️ Partial (Electron 22) |
| Windows 7 | ❌ Not supported |

---

## 🛠 Troubleshooting

**App doesn't detect location?**  
→ Click Allow when Windows asks for location permission, or use the Refresh button.

**No prayer times loading?**  
→ Ensure you have an internet connection. The app uses aladhan.com API.

**Azan not playing?**  
→ Place `azan.mp3` in the root folder. Click anywhere in the app once to unlock audio.

**Build fails on Windows?**  
→ Run PowerShell as Administrator, or add `--no-sandbox` to electron args.

---

## 📝 License

MIT — Free to use, modify and distribute.
