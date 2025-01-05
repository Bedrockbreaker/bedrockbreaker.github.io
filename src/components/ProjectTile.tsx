import { type ReactNode, useMemo } from "react";
import { Text } from "./Text";
import { Badge } from "./ui/Badge";
import { HoverTilt } from "./HoverTilt";

// TODO: support separate dark/light mode images

interface ProjectTileProps {
	project: Project | keyof typeof projects;
	orientation?: "left-dominant" | "right-dominant";
	children?: React.ReactNode | React.ReactNode[];
}

export function ProjectTile({
	project,
	orientation = "left-dominant",
	children
}: ProjectTileProps) {
	if (typeof project === "string") project = projects[project];

	const img = useMemo(() => {
		return <div
			className={`w-full md:w-1/3 ${orientation === "left-dominant" ? "mr-6" : "ml-6"}`}
		>
			<HoverTilt>
				<img
					src={new URL(`${project.imgSrc}`, import.meta.url).href}
					alt={project.imgAlt}
					width={project.imgSize[0]}
					height={project.imgSize[1]}
					className="w-full object-cover rounded-md"
					style={{imageRendering: project.imgIsPixelated ? "pixelated" : "auto"}}
				/>
			</HoverTilt>
			<div
				className="w-full flex flex-row justify-between px-2"
			>
				<span>
					{project.url &&
						<Text variant="a" to={project.url} isExternal>
							Project Page
						</Text>
					}
				</span>
				<span>
					{project.sourceUrl &&
						<Text variant="a" to={project.sourceUrl} isExternal>
							Source Code
						</Text>
					}
				</span>
			</div>
		</div>
	}, [project]);

	return <div
		className={`flex ${orientation === "left-dominant" ? "flex-col" : "flex-col-reverse"} lg:flex-row shadow-md rounded-lg overflow-visible`}
	>
		{orientation === "left-dominant" ? img : null}
		<div
			className={`w-2/3 ${orientation === "left-dominant" ? "text-left" : "text-right"}`}
		>
			<Text variant="h3">
				{project.title}
			</Text>
			{project.tags && <div
				className={`flex flex-row flex-wrap gap-2 mt-2 ${orientation === "left-dominant" ? "justify-start" : "justify-end"}`}
			>
				{project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
			</div>}
			{children ?? project.getDescription()}
		</div>
		{orientation === "right-dominant" ? img : null}
	</div>
}

interface ProjectDetails {
	imgSrc: string;
	imgAlt: string;
	imgSize: [number, number];
	imgIsPixelated?: boolean;
	title: string;
	tags?: string[];
	description?: () => ReactNode;
	url?: string;
	sourceUrl?: string;
	isFeatured?: boolean;
}

export class Project {
	imgSrc: string;
	imgAlt: string;
	imgSize: [number, number];
	imgIsPixelated?: boolean;
	title: string;
	tags?: string[];
	getDescription: () => ReactNode;
	url?: string;
	sourceUrl?: string;
	isFeatured?: boolean;
	
	constructor(project: ProjectDetails) {
		this.imgSrc = new URL(`../assets/${project.imgSrc}`, import.meta.url)
			.href;
		this.imgAlt = project.imgAlt;
		this.imgSize = project.imgSize;
		this.imgIsPixelated = project.imgIsPixelated ?? false;
		this.title = project.title;
		this.tags = project.tags;
		this.getDescription = project.description ?? (
			() => <Text>Placeholder description</Text>
		);
		this.url = project.url;
		this.sourceUrl = project.sourceUrl;
		this.isFeatured = project.isFeatured ?? false;
	}
}

export const projects = {
	yggdrasil: new Project({
		imgSrc: "projects/yggdrasil.png",
		imgAlt: "A green dragon wrapped around a white chess pawn",
		imgSize: [32, 32],
		imgIsPixelated: true,
		title: "Yggdrasil",
		tags: ["Game", "PC", "Godot", "C#", "2D", "Multiplayer"],
		description: () => <>
			<Text>
				Roguelike fantasy chess. Chess engine which supports as many variations of chess as possible.
			</Text>
		</>,
		sourceUrl: "https://github.com/bedrockbreaker/Yggdrasil-Chess-Engine",
		isFeatured: true
	}),
	oldmanwhiskers: new Project({
		imgSrc: "projects/oldmanwhiskers.png",
		imgAlt: "An old man with a beard and his four cats",
		imgSize: [1765, 1765],
		title: "Old Man Whiskers",
		description: () => <>
			<Text>
				Old Man Whiskers is a small game jam where Mr. Whiskers tries to keep his cats happy.
			</Text>
		</>,
		tags: ["Game", "PC", "UE5", "Blueprint", "3D", "Game Jam"],
		url: "https://bedrockbreaker.itch.io/old-man-whiskers",
		sourceUrl: "https://bitbucket.org/documentedbackups/gamejam/src/main/",
		isFeatured: true
	}),
	portfolio: new Project({
		imgSrc: "profile.png",
		imgAlt: "My profile picture",
		imgSize: [32, 32],
		imgIsPixelated: true,
		title: "This Website",
		description: () => <>
			<Text>
				It's what you're viewing right now!
			</Text>
		</>,
		tags: ["Website", "Portfolio", "TypeScript", "React"],
		url: "https://bedrockbreaker.github.io/",
		sourceUrl: "https://github.com/bedrockbreaker/bedrockbreaker.github.io"
	}),
	ganymede: new Project({
		imgSrc: "projects/ganymede.png",
		imgAlt: "A person in a futurustic suit firing a gun with a flag on their head in a sci-fi valley",
		imgSize: [766, 766],
		title: "Ganymede",
		description: () => <>
			<Text>
				Capture the enemy flag in this magic-infused techno world.
			</Text>
		</>,
		tags: ["Game", "PC", "UE5", "Blueprint", "3D", "Multiplayer"],
		url: "https://bedrockbreaker.itch.io/ganymede",
		sourceUrl: "https://gitlab.com/bedrockbreaker1/Ganymede",
		isFeatured: true
	}),
	graduatedcylinders: new Project({
		imgSrc: "projects/graduated-cylinders.png",
		imgAlt: "A man holding chemicals in a test tube",
		imgSize: [256, 256],
		title: "Graduated Cylinders",
		tags: ["Mod", "PC", "Minecraft", "Java"],
		description: () => <>
			<Text>
				Graduated Cylinders is a Minecraft mod.
			</Text>
		</>,
		url: "https://www.curseforge.com/minecraft/mc-mods/graduated-cylinders",
		sourceUrl: "https://github.com/bedrockbreaker/Graduated-Cylinders",
		isFeatured: true
	}),
	unoplusplus: new Project({
		imgSrc: "projects/unoplusplus.png",
		imgAlt: "Uno++",
		imgSize: [560, 560],
		title: "Uno++",
		description: () => <>
			<Text>
				Uno++ is a C++ implementation of the classic rules of Uno.
			</Text>
		</>,
		tags: ["Game", "C++", "2D", "Multiplayer"],
		sourceUrl: "https://github.com/bedrockbreaker/unoplusplus"
	}),
	cardbot: new Project({
		imgSrc: "placeholder-square.png",
		imgAlt: "A white chess pawn",
		imgSize: [32, 32],
		imgIsPixelated: true,
		title: "Card Bot",
		description: () => <>
			<Text>
				Card Bot is a Discord bot that allows you to play card games with your friends.
			</Text>
		</>,
		tags: ["Game", "NodeJS", "JavaScript","2D", "Multiplayer"],
		sourceUrl: "https://github.com/bedrockbreaker/unobot"
	}),
	kingsinheritance: new Project({
		imgSrc: "projects/kingsinheritance.png",
		imgAlt: "Stylized text which reads \"King's Inheritance\"",
		imgSize: [690, 690],
		title: "King's Inheritance",
		description: () => <>
			<Text>
				King's Inheritance is a competitive, elimination-style board game.
			</Text>
		</>,
		tags: ["Board Game", "Competitive", "Team"]
	}),
	silentnight: new Project({
		imgSrc: "projects/silentnightdeadlynight.png",
		imgAlt: "The Boogeyman",
		imgSize: [780, 780],
		title: "Silent Night, Deadly Night",
		description: () => <>
			<Text>
				Silent Night, Deadly Night is a hidden role, social deduction board game.
			</Text>
		</>,
		tags: ["Board Game", "Competitive", "Team"],
		isFeatured: true
	}),
	tankgame: new Project({
		imgSrc: "projects/tankgame.png",
		imgAlt: "Two tanks fighting each other",
		imgSize: [541, 541],
		title: "戦車ゲーム (Tank Game)",
		description: () => <>
			<Text>
				戦車ゲーム (Tank Game) is a local multiplayer game, similar to Atari's COMBAT.
			</Text>
		</>,
		tags: ["Game", "PC", "Unity", "C#", "3D", "Multiplayer"],
		sourceUrl: "https://github.com/bedrockbreaker/TankGame"
	}),
	partypooper: new Project({
		imgSrc: "placeholder-square.png",
		imgAlt: "A white chess pawn",
		imgSize: [32, 32],
		imgIsPixelated: true,
		title: "Party Pooper",
		description: () => <>
			<Text>
				Party Pooper is a modding utility for{" "}
				<Text variant="a" to="https://char64.itch.io/partyproject" isExternal>
					Party Project
				</Text>.
			</Text>
		</>,
		tags: ["Mod", "PC", "NodeJS", "TypeScript"],
		sourceUrl: "https://github.com/bedrockbreaker/PartyPooper",
		url: "https://github.com/bedrockbreaker/PartyPooper/releases/latest/"
	})
};