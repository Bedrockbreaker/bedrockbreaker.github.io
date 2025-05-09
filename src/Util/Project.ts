export const tagCategories = {
	type: {
		badgeKind: "color1",
		tags: [
			"Game",
			"Mod",
			"Tool",
			"Documentation",
			"Portfolio"
		]
	},
	role: {
		badgeKind: "color2",
		tags: [
			"Programmer",
			"Designer",
			"Artist"
		]
	},
	focus: {
		badgeKind: "color3",
		tags: [
			"Core Mechanics",
			"Combat Design",
			"AI & Behavior",
			"Animation Systems",
			"Input Systems",
			"Multiplayer Logic",
			"Pathfinding",
			"Physics Systems",
			"Modding Tools",
			"Rendering Pipeline",
			"UI/UX Tooling",
			"Editor Extensions",
			"Devtools",
			"Save/Load Systems",
			"Serialization",
			"Data-Driven Design",
			"Narrative Systems",
			"Level Scripting",
			"Game Economy",
			"Procedural Generation",
			"Accessibility Design",
			"UX/Interaction Design",
			"Asset Pipelines",
			"Multithreading",
			"Performance Optimization",
			"Cross-Mod Compatibility",
			"Build Tooling",
			"Dynamic Loading"
		]
	},
	teamSize: {
		badgeKind: "color4",
		tags: [
			"Solo Developer",
			"2-4 Team Members",
			"5-14 Team Members",
			"15+ Team Members"
		]
	},
	time: {
		badgeKind: "color5",
		tags: [
			"48 Hours",
			"1-2 Weeks",
			"2-4 Weeks",
			"1-3 Months",
			"3+ Months"
		]
	},
	engine: {
		badgeKind: "color6",
		tags: [
			"Unreal Engine",
			"Unity",
			"Godot",
			"Minecraft",
			"NodeJS",
			"Board Game",
			"Construct"
		]
	},
	platform: {
		badgeKind: "color7",
		tags: [
			"PC",
			"Console",
			"Website",
			"Discord"
		]
	},
	lang: {
		badgeKind: "color8",
		tags: [
			"C++",
			"C#",
			"Java",
			"JavaScript",
			"TypeScript",
			"Blueprint"
		]
	},
	miscellaneous: {
		badgeKind: "color9",
		tags: [
			"Work in Progress",
			"Open Source"
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

interface ProjectOptions {
	title: string;
	description?: () => React.ReactNode;
	image?: () => React.ReactNode;
	homepage?: string;
	sourceUrl?: string;
	tags?: Tag[];
	isFeatured?: boolean;
}

export class Project {
	readonly title: string;
	readonly GetDescription: () => React.ReactNode;
	readonly GetImage: () => React.ReactNode;
	readonly homepage?: string;
	readonly sourceUrl?: string;
	readonly tags: Tag[];
	readonly isFeatured: boolean;

	constructor({
		title,
		description,
		image,
		homepage,
		sourceUrl,
		tags,
		isFeatured
	}: ProjectOptions) {
		this.title = title;
		this.GetDescription = description ?? (() => undefined);
		this.GetImage = image ?? (() => undefined);
		this.homepage = homepage;
		this.sourceUrl = sourceUrl;
		this.tags = tags ?? [];
		this.isFeatured = isFeatured ?? false;
	}
}
