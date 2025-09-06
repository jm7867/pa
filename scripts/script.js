new Vue({
	el: "#app",
	data() {
		return {

			audio: null,
			circleLeft: null,
			barWidth: null,
			duration: null,
			currentTime: null,
			isTimerPlaying: false,
			tracks: [
				{
					name: " 1. Surat Al-Fatihah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "2. Surat Al-Baqarah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/002.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: true
        },
				{
					name: "3. Surat Ali 'Imran",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/003.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "4. Surat An-Nisa",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/004.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "5. Surat Al-Ma'idah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/005.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: true
        },
				{
					name: "6. Surat Al-An'am",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/006.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "7. Surat Al-A'raf",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/007.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: true
        },
				{
					name: "8. Surat Al-Anfal",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/008.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "9. Surat At-Tawbah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/009.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "10. Surat Yunus",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/010.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }

          ,
				{
					name: "11. Surat Hud",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/011.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "12. Surat Yusuf",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/012.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "13. Surat Ar-Ra'd",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/013.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "14. Surat Ibrahim",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/014.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "15. Surat Al-Hijr",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/015.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "16. Surat An-Nahl",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/016.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "17. Surat Al-Isra",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/017.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "18. Surat Al-Kahf",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/018.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "19. Surat Maryam",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/019.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "20. Surat Taha",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/020.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "21. Surat Al-Anbya",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/021.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "22. Surat Al-Haj",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/022.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "23. Surat Al-Mu'minun",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/023.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "24. Surat An-Nur",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/024.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "25. Surat Al-Furqan",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/025.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "26. Surat Ash-Shu'ara",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/026.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "27. Surat An-Naml",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/027.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "28. Surat Al-Qasas",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/028.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "29. Surat Al-'Ankabut",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/029.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "30. Surat Ar-Rum",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/030.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "31. Surat Luqman",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/031.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "32. Surat As-Sajdah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/032.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "33. Surat Al-Ahzab",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/033.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "34. Surat Saba",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/034.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "35. Surat Fatir",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/035.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "36. Surat Yaseen",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/036.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "37. Surat As-Saffat",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/037.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "38. Surat Sad",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/038.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "39. Surat Az-Zumar",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/039.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "40. Surat Ghafir",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/040.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "41. Surat Fussilat",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/041.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "42. Surat Al-Jathiya",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/042.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "43. Surat Az-Zumar",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/043.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},

				{
					name: "44. Surat Ad-Dukhan",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/044.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "44. Surat Az-Zumar",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/044.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "45. Surat Al-Jathiya",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/045.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "46. Surat Al-Ahqaf",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/046.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "47. Surat Muhammad",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/047.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "48. Surat Al-Fath",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/048.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "49. Surat Al-Hujurat",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/049.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "50. Surat Qaf",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/050.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "51. Surat Adh-Dhariyat",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/051.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "52. Surat At-Tur",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/052.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "53. Surat An-Najm",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/053.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "54. Surat Al-Qamar",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/054.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "55. Surat Ar-Rahman",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "56. Surat Al-Waqi'a",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/056.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "57. Surat Al-Hadid",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/057.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "58. Surat Al-Mujadila",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/058.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "59. Surat Al-Hashr",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/059.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "60. Surat Al-Mumtahina",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/060.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "61. Surat As-Saff",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/061.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "62. Surat Al-Jumu'a",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/062.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "63. Surat Al-Munafiqun",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/063.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "64. Surat At-Taghabun",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/064.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "65. Surat At-Talaq",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/065.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "66. Surat At-Tahrim",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/066.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "67. Surat Al-Mulk",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "68. Surat Al-Qalam",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/068.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "69. Surat Al-Haaqqa",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/069.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "70. Surat Al-Ma'arij",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/070.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "71. Surat Nuh",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/071.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "72. Surat Al-Muzzammil",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/072.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "73. Surat Al-Muddaththir",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/073.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "74. Surat Al-Qiyama",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/074.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "75. Surat Al-Insan",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/075.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "76. Surat Al-Mursalat",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/076.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "77. Surat An-Naba",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/077.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "78. Surat An-Nazi'at",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/078.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "79. Surat Abasa",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/079.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "80. Surat At-Takwir",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/080.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "81. Surat Al-Infitar",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/081.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "82. Surat Al-Mutaffifin",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/082.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "83. Surat Al-Inshiqaq",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/083.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "84. Surat Al-Burooj",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/084.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "85. Surat At-Tariq",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/085.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "86. Surat Al-Ala",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/086.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "87. Surat Al-Ghashiyah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/087.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "88. Surat Al-Fajr",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/088.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "89. Surat Al-Balad",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/089.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "90. Surat Ash-Shams",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/090.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "91. Surat Al-Lail",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/091.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "92. Surat Adh-Dhuhaa",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/092.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "93. Surat Ad-Duhaa",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/093.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "94. Surat Ash-Sharh",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/094.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "95. Surat At-Tin",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/095.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "96. Surat Al-'Alaq",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/096.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "97. Surat Al-Qadr",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/097.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "98. Surat Al-Bayyinah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/098.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "99. Surat Az-Zalzalah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/099.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "100. Surat Al-'Adiyat",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/100.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "101. Surat Al-Qari'ah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/101.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "102. Surat At-Takathur",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/102.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "103. Surat Al-'Asr",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/103.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "104. Surat Al-Humazah",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/104.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "105. Surat Al-Fil",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/105.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "106. Surat Quraysh",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/106.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "107. Surat Al-Ma'un",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/107.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "108. Surat Al-Kawthar",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/108.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "109. Surat Al-Kafirun",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/109.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "110. Surat An-Nasr",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/110.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "111. Surat Al-Lahab",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/111.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "112. Surah Al-Ikhlas",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/112.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "113. Surat Al-Falaq",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/113.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "114. Surat Al-Naas",
					artist: "Mishari Rashid al-`Afasy",
					cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
					source: "http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/114.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }



      ],
			currentTrack: null,
			currentTrackIndex: 0,
			transitionName: null
		};
	},
	methods: {
		play() {
			if (this.audio.paused) {
				this.audio.play();
				this.isTimerPlaying = true;
			} else {
				this.audio.pause();
				this.isTimerPlaying = false;

				localStorage.setItem('audioCurrentTime', this.audio.currentTime.toString());

			}
		},
		generateTime() {
			let width = (100 / this.audio.duration) * this.audio.currentTime;
			this.barWidth = width + "%";
			this.circleLeft = width + "%";
			let durmin = Math.floor(this.audio.duration / 60);
			let dursec = Math.floor(this.audio.duration - durmin * 60);
			let curmin = Math.floor(this.audio.currentTime / 60);
			let cursec = Math.floor(this.audio.currentTime - curmin * 60);
			if (durmin < 10) {
				durmin = "0" + durmin;
			}
			if (dursec < 10) {
				dursec = "0" + dursec;
			}
			if (curmin < 10) {
				curmin = "0" + curmin;
			}
			if (cursec < 10) {
				cursec = "0" + cursec;
			}
			this.duration = durmin + ":" + dursec;
			this.currentTime = curmin + ":" + cursec;
		},
		updateBar(x) {
			let progress = this.$refs.progress;
			let maxduration = this.audio.duration;
			let position = x - progress.offsetLeft;
			let percentage = (100 * position) / progress.offsetWidth;
			if (percentage > 100) {
				percentage = 100;
			}
			if (percentage < 0) {
				percentage = 0;
			}
			this.barWidth = percentage + "%";
			this.circleLeft = percentage + "%";
			this.audio.currentTime = (maxduration * percentage) / 100;
			this.audio.play();
		},
		clickProgress(e) {
			this.isTimerPlaying = true;
			this.audio.pause();
			this.updateBar(e.pageX);
		},
		prevTrack() {
			this.transitionName = "scale-in";
			this.isShowCover = false;
			if (this.currentTrackIndex > 0) {
				this.currentTrackIndex--;
			} else {
				this.currentTrackIndex = this.tracks.length - 1;
			}
			this.currentTrack = this.tracks[this.currentTrackIndex];
			this.resetPlayer();
		},
		nextTrack() {
			this.transitionName = "scale-out";
			this.isShowCover = false;
			if (this.currentTrackIndex < this.tracks.length - 1) {
				this.currentTrackIndex++;
			} else {
				this.currentTrackIndex = 0;
			}
			this.currentTrack = this.tracks[this.currentTrackIndex];
			this.resetPlayer();
		},
		resetPlayer() {
			this.barWidth = 0;
			this.circleLeft = 0;
			this.audio.currentTime = 0;
			this.audio.src = this.currentTrack.source;
			setTimeout(() => {
				if (this.isTimerPlaying) {
					this.audio.play();
				} else {
					this.audio.pause();
				}
			}, 300);
		},
		favorite() {
			this.tracks[this.currentTrackIndex].favorited = !this.tracks[
				this.currentTrackIndex
			].favorited;
		}
	},

	created() {
		let vm = this;
		this.currentTrack = this.tracks[0];
		this.audio = new Audio();

		// Check if there is a stored playback time and current track index in localStorage
		const storedTime = localStorage.getItem('audioCurrentTime');
		const storedTrackIndex = localStorage.getItem('audioCurrentTrackIndex');

		if (storedTime && storedTrackIndex) {
			this.audio.currentTime = parseFloat(storedTime);
			this.currentTrackIndex = parseInt(storedTrackIndex, 10);
			this.currentTrack = this.tracks[this.currentTrackIndex];
		}

		this.audio.src = this.currentTrack.source;
		this.audio.ontimeupdate = function () {
			vm.generateTime();
		};
		this.audio.onloadedmetadata = function () {
			vm.generateTime();
		};
		this.audio.onended = function () {
			vm.nextTrack();
			vm.isTimerPlaying = true;
		};

		// Save playback time and current track index to localStorage before page unload
		window.onbeforeunload = function () {
			localStorage.setItem('audioCurrentTime', vm.audio.currentTime.toString());
			localStorage.setItem('audioCurrentTrackIndex', vm.currentTrackIndex.toString());
		};

		// this is optional (for preload covers)
		for (let index = 0; index < this.tracks.length; index++) {
			const element = this.tracks[index];
			let link = document.createElement('link');
			link.rel = "prefetch";
			link.href = element.cover;
			link.as = "image";
			document.head.appendChild(link);
		}
	}


});
