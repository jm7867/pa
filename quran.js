
(function () {
	const surahList = ["Al-Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajda", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqia", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahina", "As-Saff", "Al-Jumu'a", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiya", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duha", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzalah", "Al-Adiyat", "Al-Qari'a", "At-Takathur", "Al-Asr", "Al-Humaza", "Al-Fil", "Quraish", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];

	const TOTAL_TRACKS = surahList.length;
	const quranAudio = document.getElementById("audio_quran"); // DIFFERENT name from 'audio'
	const playBtn = document.getElementById("play");
	const prevBtn = document.getElementById("prev");
	const nextBtn = document.getElementById("next");
	const progress = document.getElementById("progress");
	const volume = document.getElementById("volume");
	const surahName = document.getElementById("surah-name");
	const status = document.getElementById("status");

	let currentIndex = Number(localStorage.getItem("surahIndex")) || 1;
	let isPlaying = false;
	let isUnlocked = false;

	// Use DIFFERENT variable name: quranAudio instead of audio
	quranAudio.volume = 0.4;
	quranAudio.playsInline = true;
	volume.value = 0.4;

	// Add this to your existing inline Quran script, replace the loadTrack function:
	function loadTrack(index) {
		const num = String(index).padStart(3, "0");

		// First try local files
		quranAudio.src = `quran/${num}.mp3`;
		surahName.textContent = surahList[index - 1];
		status.textContent = "Loading...";

		// Reset position
		localStorage.setItem("time", "0");
		progress.value = 0;
		quranAudio.currentTime = 0;
		quranAudio.load();

		// Fallback: if fails, show offline message
		quranAudio.onerror = () => {
			status.textContent = "📡 Offline - Download quran/001.mp3";
			quranAudio.src = ""; // Stop trying to load
		};
	}

	function play() {
		quranAudio.play().then(() => {
			playBtn.textContent = "⏸";
			isPlaying = true;
			status.textContent = "Playing";
		}).catch(e => {
			status.textContent = "Click to unlock";
		});
	}

	function pause() {
		quranAudio.pause();
		playBtn.textContent = "▶";
		isPlaying = false;
		status.textContent = "Paused";
	}

	playBtn.onclick = () => {
		isUnlocked = true;
		if (isPlaying) pause();
		else play();
	};

	nextBtn.onclick = () => {
		currentIndex = currentIndex % TOTAL_TRACKS + 1;
		loadTrack(currentIndex);
		localStorage.setItem("surahIndex", currentIndex);
		if (isUnlocked && isPlaying) setTimeout(play, 500);
	};

	prevBtn.onclick = () => {
		currentIndex = currentIndex === 1 ? TOTAL_TRACKS : currentIndex - 1;
		loadTrack(currentIndex);
		localStorage.setItem("surahIndex", currentIndex);
		if (isUnlocked && isPlaying) setTimeout(play, 500);
	};

	volume.oninput = () => quranAudio.volume = volume.value;

	quranAudio.ontimeupdate = () => {
		if (quranAudio.duration && quranAudio.duration > 0) {
			progress.value = (quranAudio.currentTime / quranAudio.duration) * 100;
			localStorage.setItem("time", quranAudio.currentTime);
		}
	};

	progress.oninput = () => {
		if (quranAudio.duration) {
			quranAudio.currentTime = (progress.value / 100) * quranAudio.duration;
		}
	};

	quranAudio.onloadedmetadata = () => {
		status.textContent = "Ready";
	};

	quranAudio.onended = () => {
		nextBtn.click();
	};

	quranAudio.onerror = () => {
		status.textContent = "File not found";
	};

	// Unlock Quran audio
	document.addEventListener('click', function unlockQuran() {
		if (!isUnlocked) {
			quranAudio.play().then(() => {
				quranAudio.pause();
				isUnlocked = true;
			}).catch(() => { });
			document.removeEventListener('click', unlockQuran);
		}
	}, {
		once: true
	});

	// Load initial track
	loadTrack(currentIndex);
})();
