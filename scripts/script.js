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
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "2. Surat Al-Baqarah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/002.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: true
        },
				{
					name: "3. Surat Ali 'Imran",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/003.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "4. Surat An-Nisa",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/004.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "5. Surat Al-Ma'idah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/005.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: true
        },
				{
					name: "6. Surat Al-An'am",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/006.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "7. Surat Al-A'raf",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/007.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: true
        },
				{
					name: "8. Surat Al-Anfal",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/008.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "9. Surat At-Tawbah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/009.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "10. Surat Yunus",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/010.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }

          ,
				{
					name: "11. Surat Hud",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/011.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "12. Surat Yusuf",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/012.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "13. Surat Ar-Ra'd",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/013.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "14. Surat Ibrahim",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/014.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "15. Surat Al-Hijr",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/015.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "16. Surat An-Nahl",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/016.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "17. Surat Al-Isra",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/017.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "18. Surat Al-Kahf",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/018.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "19. Surat Maryam",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/019.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "20. Surat Taha",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/020.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "21. Surat Al-Anbya",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/021.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "22. Surat Al-Haj",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/022.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "23. Surat Al-Mu'minun",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/023.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "24. Surat An-Nur",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/024.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "25. Surat Al-Furqan",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/025.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "26. Surat Ash-Shu'ara",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/026.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "27. Surat An-Naml",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/027.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "28. Surat Al-Qasas",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/028.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "29. Surat Al-'Ankabut",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/029.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "30. Surat Ar-Rum",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/030.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "31. Surat Luqman",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/031.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "32. Surat As-Sajdah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/032.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "33. Surat Al-Ahzab",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/033.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "34. Surat Saba",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/034.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "35. Surat Fatir",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/035.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "36. Surat Yaseen",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/036.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "37. Surat As-Saffat",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/037.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "38. Surat Sad",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/038.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },
				{
					name: "39. Surat Az-Zumar",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/039.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "40. Surat Ghafir",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/040.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "41. Surat Fussilat",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/041.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "42. Surat Al-Jathiya",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/042.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "43. Surat Az-Zumar",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/043.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},

				{
					name: "44. Surat Az-Zumar",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/044.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "45. Surat Al-Jathiya",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/045.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "46. Surat Al-Ahqaf",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/046.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "47. Surat Muhammad",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/047.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "48. Surat Al-Fath",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/048.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "49. Surat Al-Hujurat",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/049.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "50. Surat Qaf",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/050.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "51. Surat Adh-Dhariyat",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/051.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "52. Surat At-Tur",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/052.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "53. Surat An-Najm",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/053.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "54. Surat Al-Qamar",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/054.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "55. Surat Ar-Rahman",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "56. Surat Al-Waqi'a",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/056.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "57. Surat Al-Hadid",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/057.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "58. Surat Al-Mujadila",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/058.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "59. Surat Al-Hashr",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/059.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "60. Surat Al-Mumtahina",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/060.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "61. Surat As-Saff",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/061.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "62. Surat Al-Jumu'a",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/062.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "63. Surat Al-Munafiqun",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/063.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "64. Surat At-Taghabun",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/064.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "65. Surat At-Talaq",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/065.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "66. Surat At-Tahrim",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/066.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "67. Surat Al-Mulk",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "68. Surat Al-Qalam",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/068.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "69. Surat Al-Haaqqa",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/069.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "70. Surat Al-Ma'arij",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/070.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "71. Surat Nuh",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/071.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "72. Surat Al-Muzzammil",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/072.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "73. Surat Al-Muddaththir",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/073.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "74. Surat Al-Qiyama",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/074.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "75. Surat Al-Insan",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/075.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "76. Surat Al-Mursalat",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/076.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "77. Surat An-Naba",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/077.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "78. Surat An-Nazi'at",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/078.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "79. Surat Abasa",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/079.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "80. Surat At-Takwir",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/080.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "81. Surat Al-Infitar",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/081.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "82. Surat Al-Mutaffifin",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/082.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "83. Surat Al-Inshiqaq",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/083.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "84. Surat Al-Burooj",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/084.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "85. Surat At-Tariq",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/085.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "86. Surat Al-Ala",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/086.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "87. Surat Al-Ghashiyah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/087.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "88. Surat Al-Fajr",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/088.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "89. Surat Al-Balad",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/089.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "90. Surat Ash-Shams",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/090.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "91. Surat Al-Lail",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/091.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "92. Surat Adh-Dhuhaa",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/092.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
},
				{
					name: "93. Surat Ad-Duhaa",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/093.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "94. Surat Ash-Sharh",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/094.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "95. Surat At-Tin",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/095.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "96. Surat Al-'Alaq",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/096.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "97. Surat Al-Qadr",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/097.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "98. Surat Al-Bayyinah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/098.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "99. Surat Az-Zalzalah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/099.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "100. Surat Al-'Adiyat",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/100.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "101. Surat Al-Qari'ah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/101.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "102. Surat At-Takathur",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/102.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "103. Surat Al-'Asr",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/103.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "104. Surat Al-Humazah",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/104.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "105. Surat Al-Fil",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/105.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "106. Surat Quraysh",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/106.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "107. Surat Al-Ma'un",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/107.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "108. Surat Al-Kawthar",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/108.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        },

				{
					name: "109. Surat Al-Kafirun",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/109.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "110. Surat An-Nasr",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/110.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "111. Surat Al-Lahab",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/111.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "112. Surah Al-Ikhlas",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/112.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "113. Surat Al-Falaq",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/113.mp3",
					url: "https://quranicaudio.com/quran/5",
					favorited: false
        }
          ,

				{
					name: "114. Surat Al-Naas",
					artist: "Mishary Alafasy",
					source: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/114.mp3",
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

	}


});
