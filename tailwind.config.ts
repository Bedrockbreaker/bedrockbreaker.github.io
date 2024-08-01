import type { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
			},
			colors: {
				bglight: "#FFFFFF",
				bgdark: "#262626",
				textlight: "#000000",
				textdark: "#FFFFFF",
			}
		}
	},
	plugins: [],
	darkMode: "selector"
} satisfies Config;