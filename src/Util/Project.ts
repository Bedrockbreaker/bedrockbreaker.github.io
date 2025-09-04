export const tagCategories = {
	type: {
		badgeKind: "color1",
		tags: [
			"game",
			"mod",
			"tool",
			"documentation",
			"portfolio"
		]
	},
	role: {
		badgeKind: "color2",
		tags: [
			"programmer",
			"designer",
			"artist"
		]
	},
	focus: {
		badgeKind: "color3",
		tags: [
			"core-mechanics",
			"combat-design",
			"ai-behavior",
			"animation-systems",
			"input-systems",
			"multiplayer-logic",
			"pathfinding",
			"physics-systems",
			"modding-tools",
			"rendering-pipeline",
			"ui-ux-tooling",
			"editor-extensions",
			"devtools",
			"save-load-systems",
			"serialization",
			"data-driven-design",
			"narrative-systems",
			"level-scripting",
			"game-economy",
			"procedural-generation",
			"accessibility-design",
			"ux-interaction-design",
			"asset-pipelines",
			"multithreading",
			"performance-optimization",
			"cross-mod-compatibility",
			"build-tooling",
			"dynamic-loading"
		]
	},
	teamSize: {
		badgeKind: "color4",
		tags: [
			"solo-developer",
			"2-4-team-members",
			"5-14-team-members",
			"15-team-members"
		]
	},
	time: {
		badgeKind: "color5",
		tags: [
			"48-hours",
			"1-2-weeks",
			"2-4-weeks",
			"1-3-months",
			"3-months"
		]
	},
	engine: {
		badgeKind: "color6",
		tags: [
			"unreal-engine",
			"unity",
			"godot",
			"minecraft",
			"nodejs",
			"board-game",
			"construct"
		]
	},
	platform: {
		badgeKind: "color7",
		tags: [
			"pc",
			"console",
			"website",
			"discord"
		]
	},
	lang: {
		badgeKind: "color8",
		tags: [
			"cpp",
			"csharp",
			"java",
			"javascript",
			"typescript",
			"blueprint"
		]
	},
	miscellaneous: {
		badgeKind: "color9",
		tags: [
			"work-in-progress",
			"open-source"
		]
	}
} as const;

export const AllTags = Object.values(tagCategories).flatMap(category => category.tags);

export type Tag = typeof tagCategories[keyof typeof tagCategories]["tags"][number];

export function GetCategoryFromTag(tag: Tag) {
	return Object.values(tagCategories).find(category => {
		return (category.tags as readonly Tag[]).includes(tag);
	}) as typeof tagCategories[keyof typeof tagCategories];
}

export type UrlIcon = "external" | "github" | "curseforge" | "itchio" | "personal-website" | "bluesky";

interface UrlDetails {
	url: string;
	icon?: UrlIcon;
}

interface ProjectOptions {
	title: string;
	description?: () => React.ReactNode;
	image?: () => React.ReactNode;
	hasDetails?: boolean;
	homepage?: UrlDetails;
	source?: UrlDetails;
	tags?: Tag[];
}

export class Project {
	readonly title: string;
	readonly GetDescription: () => React.ReactNode;
	readonly GetImage: () => React.ReactNode;
	readonly hasDetails: boolean;
	readonly homepage?: UrlDetails;
	readonly source?: UrlDetails;
	readonly tags: Tag[];

	constructor({
		title,
		description,
		image,
		hasDetails,
		homepage,
		source,
		tags
	}: ProjectOptions) {
		this.title = title;
		this.GetDescription = description ?? (() => undefined);
		this.GetImage = image ?? (() => undefined);
		this.hasDetails = hasDetails ?? false;
		this.homepage = homepage;
		if (this.homepage !== undefined && this.homepage.icon === undefined) {
			this.homepage.icon = "external";
		}
		this.source = source;
		if (this.source !== undefined && this.source.icon === undefined) {
			this.source.icon = "github";
		}
		this.tags = tags ?? [];
	}
}
