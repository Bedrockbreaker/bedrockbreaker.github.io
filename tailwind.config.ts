import type { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
			},
			colors: {
				bglight: "#FFFFFF",
				bgdark: "#262626",
				textlight: "#000000",
				textdark: "#FFFFFF",
				accentblue: "#0078D4",
				accentred: "#670E0E",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	darkMode: "selector"
} satisfies Config;