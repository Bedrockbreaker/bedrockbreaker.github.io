const tags = {
	type: [
		"Game",
		"Mod",
		"Tool",
		"Documentation",
		"Portfolio"
	],
	role: [
		"Programmer",
		"Designer",
		"Artist"
	],
	teamSize: [
		"Solo Developer",
		"2-4 Team Members",
		"5-14 Team Members",
		"15+ Team Members"
	],
	time: [
		"48 Hours",
		"1-2 Weeks",
		"2-4 Weeks",
		"1-3 Months",
		"3+ Months"
	],
	engine: [
		"Unreal Engine",
		"Unity",
		"Godot",
		"Minecraft",
		"NodeJS",
		"Board Game",
		"Construct"
	],
	platform: [
		"PC",
		"Console",
		"Website",
		"Discord"
	],
	lang: [
		"C++",
		"C#",
		"Java",
		"JavaScript",
		"TypeScript",
		"Blueprint"
	],
	miscellaneous: [
		"Work in Progress",
		"Open Source"
	]
} as const;

export const AllTags = Object.values(tags).flat();

type Tag = typeof tags[keyof typeof tags][number];

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
		this.GetDescription = description ?? (() => null);
		this.GetImage = image ?? (() => null);
		this.homepage = homepage;
		this.sourceUrl = sourceUrl;
		this.tags = tags ?? [];
		this.isFeatured = isFeatured ?? false;
	}
}
