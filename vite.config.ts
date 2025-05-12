import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

import { CommitDates } from "./vite.plugins/CommitDates";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		CommitDates(),
		tailwindcss()
	],
	resolve: {
		alias: {
			"~": resolve(import.meta.dirname, "./src")
		}
	}
});
