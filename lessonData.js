// src/lessonData.js

const lesson = {
	story: {
		hebrew: `בּוֹקֶר אֶחָד, נֹעָה הֶחְלִיטָה לְצֵאת לְטִיּוּל בַּפַּארְק. הִיא לָבְשָׁה שִׂמְלָה כְּחוּלָה וְנָעֲלָה נַעֲלֵי סְפּוֹרְט. בַּפַּארְק, הִיא רָאֲתָה צִפֳּרִים שָׁרוֹת וְיֶלֶד מְשַׂחֵק בַּכַּדּוּר. נֹעָה הִצְטָרְפָה אֵלָיו וְהֵם שִׂחֲקוּ יַחַד. לְאַחַר הַמִּשְׂחָק, הֵם יָשְׁבוּ עַל הַדֶּשֶׁא וְאָכְלוּ גְּלִידָה. זֶה הָיָה יוֹם מְהַנֶּה!`,
		transliteration: `Boker echad, Noa hechlitah latzet letiyul ba-park. Hi lavshah simlah kchulah ve-na'alah na'alei sport. Ba-park, hi ra'atah tziporim sharot ve-yeled mesachek ba-kadur. Noa hitztarfah elav ve-hem sicheku yachad. Le'achar ha-mis'chak, hem yashvu al ha-deshe ve-achlu glidah. Zeh hayah yom mehane!`,
		english: `One morning, Noa decided to go for a walk in the park. She wore a blue dress and sport shoes. In the park, she saw birds singing and a boy playing with a ball. Noa joined him, and they played together. After the game, they sat on the grass and ate ice cream. It was an enjoyable day!`,
	},
	grammar: [
		// Include grammar explanations as objects with title and content
		{
			title: "1. Verb Conjugation in Past Tense",
			content: `In Hebrew, verbs are conjugated according to gender and number.
  
  - **הֶחְלִיטָה (hechlitah)** - *She decided*  
    Root: ח-ל-ט (decision). The suffix **-ָה** indicates feminine singular in past tense.
  
  - **לָבְשָׁה (lavshah)** - *She wore*  
    Root: ל-ב-שׁ (wear). The suffix **-ָה** indicates feminine singular in past tense.
  
  - **רָאֲתָה (ra'atah)** - *She saw*  
    Root: ר-א-ה (see). The suffix **-ָה** indicates feminine singular in past tense.
  
  - **הִצְטָרְפָה (hitztarfah)** - *She joined*  
    Root: צ-ר-ף (join). The suffix **-ָה** indicates feminine singular in past tense.`,
		},
		// Add more grammar points...
	],
	exercises: [
		{
			type: "comprehension",
			questions: [
				{
					question: "מָה הֶחְלִיטָה נֹעָה לַעֲשׂוֹת בַּבֹּקֶר?",
					options: [
						"לצאת לטיול בפארק",
						"לקרוא ספר בבית",
						"לבשל ארוחת בוקר",
						"ללכת לבית הספר",
					],
					correctAnswer: "לצאת לטיול בפארק",
				},
				// Add more comprehension questions...
			],
		},
		{
			type: "matching",
			pairs: [
				{ hebrew: "נֹעָה", english: "Noa" },
				{ hebrew: "פַּארְק", english: "Park" },
				{ hebrew: "צִפֳּרִים", english: "Birds" },
				{ hebrew: "גְּלִידָה", english: "Ice cream" },
				{ hebrew: "דֶּשֶׁא", english: "Grass" },
			],
		},
		{
			type: "fillInTheBlanks",
			sentences: [
				{
					sentence: "_______ הֶחְלִיטָה לָצֵאת לְטִיּוּל בַּ_______",
					options: {
						blank1: ["נֹעָה", "יֶלֶד", "גְּלִידָה"],
						blank2: ["פַּארְק", "בַּיִת", "חֲנוּת"],
					},
					correctAnswers: {
						blank1: "נֹעָה",
						blank2: "פַּארְק",
					},
				},
				// Add more fill-in-the-blanks sentences...
			],
		},
	],
};
module.exports = lesson;
