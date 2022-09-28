/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				exo: ["'Exo 2'", "sans-serif"],
				openSans: ["'Open Sans'", "sans-serif"],
				inter: ["'Inter'", "sans-serif"]
			}
		},
		nightwind: {
			typography: true
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
}
