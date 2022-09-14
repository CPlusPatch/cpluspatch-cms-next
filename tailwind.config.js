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
				cyber: ["Blender Pro Bold", "sans-serif"],
				exo: ["'Exo 2'", "sans-serif"],
				cygun: ["Cygun Regular", "sans-serif"]
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
