	// ---- Full list of 114 Surah names ----
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

	const TOTAL_TRACKS = surahList.length;

	const audio_quran = document.getElementById("audio_quran");
	const playBtn = document.getElementById("play");
	const prevBtn = document.getElementById("prev");
	const nextBtn = document.getElementById("next");
	const progress = document.getElementById("progress");
	const volume = document.getElementById("volume");
	const surahLabel = document.getElementById("surah-name");

	/* ---- Restore saved state ---- */
	let index = Number(localStorage.getItem("surahIndex")) || 1;
	let savedTime = Number(localStorage.getItem("time")) || 0;
	let savedVolume = Number(localStorage.getItem("volume"));

	if (!isNaN(savedVolume)) {
		audio_quran.volume = savedVolume;
		volume.value = savedVolume;
	} else {
		volume.value = 1;
	}

	/* ---- Load a Surah by index ---- */
	function loadTrack(i, autoplay = false) {
		const num = String(i).padStart(3, "0");
		audio_quran.src = `./quran/${num}.mp3`;
		surahLabel.textContent = surahList[i - 1] || `Surah ${i}`;
		audio_quran.load();

		// Reset saved time for new Surah
		savedTime = 0;
		localStorage.setItem("time", 0);

		if (autoplay) {
			audio_quran.play();
			playBtn.textContent = "⏸";
		} else {
			playBtn.textContent = "▶";
		}
	}

	/* ---- Initial load ---- */
	loadTrack(index);

	/* ---- Restore playback position only if continuing last Surah ---- */
	audio_quran.onloadedmetadata = () => {
		if (savedTime < audio_quran.duration && savedTime > 0) {
			audio_quran.currentTime = savedTime;
		}
	};

	/* ---- Play / Pause ---- */
	playBtn.onclick = () => {
		if (audio_quran.paused) {
			audio_quran.play();
			playBtn.textContent = "⏸";
		} else {
			audio_quran.pause();
			playBtn.textContent = "▶";
		}
	};

	/* ---- Next / Prev ---- */
	nextBtn.onclick = () => {
		index = index % TOTAL_TRACKS + 1;
		loadTrack(index, true);
	};

	prevBtn.onclick = () => {
		index = index === 1 ? TOTAL_TRACKS : index - 1;
		loadTrack(index, true);
	};

	/* ---- Progress bar ---- */
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

	/* ---- Volume ---- */
	volume.oninput = () => {
		audio_quran.volume = volume.value;
		localStorage.setItem("volume", volume.value);
	};

	/* ---- Auto next Surah ---- */
	audio_quran.onended = () => {
		nextBtn.click();
	};
