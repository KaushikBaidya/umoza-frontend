/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			height: { 100: "30rem" },
			gridTemplateRows: {
				twoRows: "56px 1fr",
				threeRows: "56px 1fr 56px",
				twoRowsReverse: "1fr 44px",
			},
			gridTemplateColumns: {
				layout: "240px 1fr",
			},
			colors: {
				primary: "#273238",
				primarydark: "#20292e",
				secondary: "#eaedf7",
				success: "#19b159",
				danger: "#f16d75",
				info: "#01b8ff",
				warning: "#ff9b21",
				darker: "#111827",
				dark: "#1f2937",
				lighter: "#f3f4f6",
				light: "#e2e4e8",
				orange: "#ff7722",
				yam: "#CC5801",
				umojablue: "#00296B",
				umojayellow: "#FAAE40",
				umojayellowdark: "#9D5F04",
				umojayellowlight: "#FEEFD9",
			},
			fontFamily: {
				// display: ["Oswald"],
				// body: ['"Open Sans"'],
				sans: ["Helvetica"],
			},
			screens: {
				"3xl": "1920PX",
				// print: { raw: "print" },
			},
			backgroundImage: {
				// termsofservice: "url('./images/termsofservice.jpg')",
				// privacypolicy: "url('./images/privacypolicy.jpg')",
				slide1:
					"url('../assets/heroBg/WhatsApp-Image-2024-04-09-at-11.11.49-e1713171241383.jpeg')",
				slide2:
					"url('../assets/heroBg/WhatsApp-Image-2024-04-09-at-11.16.46-e1713171222313.jpeg')",
				slide3:
					"url('../assets/heroBg/Umoja-Picture-1-scaled-e1713171190232.webp')",
				aboutBg: "url('../assets/about-background.webp')",
				careerBg: "url('../assets/careerbackground.jpg')",
				boardBg: "url('../assets/boardackground.jpg')",
				excutiveBg: "url('../assets/executivebackground.jpg')",
				jobBg: "url('../assets/jobbackground.jpg')",
				footerBg: "url('../assets/Umoja-footer.png')",
				patternBg: "url('../assets/umoja-pattern.png')",
				policies: "url('../assets/policies/download.jpeg')",
			},
		},
	},
	variants: {
		extend: {
			transitionProperty: ["hover", "focus"],
			transitionDuration: ["hover", "focus"],
			transitionDelay: ["hover", "focus"],
			animation: ["group-hover", "hover", "focus"],
			fontWeight: ["hover", "focus"],
			display: ["group-hover"],
			opacity: ["group-hover"],
			translate: ["active", "group-hover", "hover", "focus"],
			transform: ["group-hover", "hover", "focus"],
			width: ["group-hover", "hover"],
			height: ["group-hover", "hover"],
			padding: ["group-hover", "hover"],
			scale: ["group-hover", "hover"],
			backgroundColor: ["checked", "odd", "even"],
			borderColor: ["checked"],
			borderWidth: ["hover", "focus"],
		},
	},
	plugins: [],
};
