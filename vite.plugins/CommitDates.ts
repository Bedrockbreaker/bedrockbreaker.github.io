import { Plugin } from "vite";

const GITHUB_REPO = "bedrockbreaker/bedrockbreaker.github.io";
const BRANCH = "gh-pages";
const FILES = ["Resume.pdf"] as const;

export type CommitDatesResult = {
	[key in typeof FILES[number]]?: string;
};

export function CommitDates(): Plugin {
	return {
		name: "vite-plugin-commit-dates",
		resolveId: async (id) => {
			if (id === "virtual:commit-dates") return id;
		},
		load: async (id) => {
			if (id !== "virtual:commit-dates") return;

			const results: CommitDatesResult = {};

			for (const file of FILES) {
				const url = `https://api.github.com/repos/${GITHUB_REPO}/commits`
					+ `?sha=${BRANCH}&path=${file}&page=1&per_page=1`;

				try {
					const response = await fetch(url, {
						headers: {
							"User-Agent": "vite-plugin-commit-dates",
							// "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
						}
					});

					if (!response.ok) {
						throw new Error(`Non-2XX response for ${file}: ${response.statusText}`);
					}

					const data = await response.json() as any;
					results[file] = data?.[0]?.commit?.committer?.date;
				} catch (error) {
					console.error(`Failed to fetch commit date for ${file}:`, error);
				}
			}

			return `export const commitDates = ${JSON.stringify(results)};`;
		}
	};
}
