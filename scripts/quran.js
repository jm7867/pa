< script >
	/* ----- Surah List ----- */
	const surahList = [
  "Al-Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah",
  "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus",
  "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr",
  "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha",
  "Al-Anbiya", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan",
  "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum",
  "Luqman", "As-Sajda", "Al-Ahzab", "Saba", "Fatir",
  "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir",
  "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya",
  "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf",
  "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman",
  "Al-Waqia", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahina",
  "As-Saff", "Al-Jumu'a", "Al-Munafiqun", "At-Taghabun", "At-Talaq",
  "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij",
  "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah",
  "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi'at", "Abasa",
  "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj",
  "At-Tariq", "Al-A'la", "Al-Ghashiya", "Al-Fajr", "Al-Balad",
  "Ash-Shams", "Al-Lail", "Ad-Duha", "Ash-Sharh", "At-Tin",
  "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzalah", "Al-Adiyat",
  "Al-Qari'a", "At-Takathur", "Al-Asr", "Al-Humaza", "Al-Fil",
  "Quraish", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "An-Nasr",
  "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
];

const TOTAL_SURAH = surahList.length;

/* ----- DOM Elements ----- */
const audio_quran = document.getElementById("audio_quran");
audio_quran.playsInline = true; // playsinline for WebView
audio_quran.volume = 0.4; // default 40%

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const surahLabel = document.getElementById("surah-name");

/* ----- Restore saved state ----- */
let index = Number(localStorage.getItem("surahIndex")) || 1;
let savedTime = Number(localStorage.getItem("time")) || 0;

/* ----- Load Surah ----- */
function loadSurah(i, autoplay = false) {
	if (i < 1) i = TOTAL_SURAH;
	if (i > TOTAL_SURAH) i = 1;
	index = i;

	const num = String(i).padStart(3, "0");
	audio_quran.src = `./quran/${num}.mp3`;
	surahLabel.textContent = surahList[i - 1];
	audio_quran.load();

	// Restore saved time only if same surah
	savedTime = (Number(localStorage.getItem("surahIndex")) === index) ? savedTime : 0;

	audio_quran.onloadedmetadata = () => {
		if (savedTime > 0 && savedTime < audio_quran.duration) {
			audio_quran.currentTime = savedTime;
		}
		if (autoplay) {
			playQuran();
		} else {
			playBtn.textContent = "▶";
		}
	};
}

/* ----- Play / Pause ----- */
async function playQuran() {
	try {
		await audio_quran.play();
		playBtn.textContent = "⏸";
	} catch (err) {
		console.warn("Playback blocked in WebView. Tap to play:", err);
	}
}

playBtn.onclick = () => {
	if (audio_quran.paused) {
		playQuran();
	} else {
		audio_quran.pause();
		playBtn.textContent = "▶";
	}
};

/* ----- Next / Prev ----- */
nextBtn.onclick = () => {
	loadSurah(index + 1, true);
};

prevBtn.onclick = () => {
	loadSurah(index - 1, true);
};

/* ----- Progress Bar ----- */
audio_quran.ontimeupdate = () => {
	if (audio_quran.duration) {
		progress.value = (audio_quran.currentTime / audio_quran.duration) * 100;
		localStorage.setItem("time", audio_quran.currentTime);
		localStorage.setItem("surahIndex", index);
	}
};

progress.oninput = () => {
	if (audio_quran.duration) {
		audio_quran.currentTime = (progress.value / 100) * audio_quran.duration;
	}
};

/* ----- Auto Next Surah ----- */
audio_quran.onended = () => {
	loadSurah(index + 1, true);
};

/* ----- Unlock Audio on First Tap for WebView ----- */
document.addEventListener('click', async function unlockAudio() {
	try {
		await audio_quran.play();
		audio_quran.pause();
		audio_quran.currentTime = savedTime || 0;
		document.removeEventListener('click', unlockAudio);
	} catch (e) {}
});

/* ----- Initial Load ----- */
loadSurah(index); <
/script>
