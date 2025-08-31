import mdx from "@mdx-js/rollup";
import { resolve } from "node:path";
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import rehypeShiki from "@shikijs/rehype";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { CommitDates } from "./vite.plugins/CommitDates";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		{enforce: "pre", ...mdx({
			rehypePlugins: [[
				rehypeShiki,
				{
					themes: {light: "light-plus", dark: "dark-plus"},
					transformers: [transformerColorizedBrackets()]
				}
			]]
		})},
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
