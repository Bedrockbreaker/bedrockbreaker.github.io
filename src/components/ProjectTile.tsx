import { useMemo } from "react";
import { Text } from "./Text";
import { Badge } from "./ui/Badge";

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
			className={`flex-grow ${orientation === "left-dominant" ? "mr-6" : "ml-6"}`}
		>
			<img
				src={new URL(`${project.imgSrc}`, import.meta.url).href}
				alt={project.imgAlt}
				// BUG: causes scrolling issues when navigating to the containing page
				// width={project.imgSize[0]}
				// height={project.imgSize[1]}
				className="w-full object-cover rounded-md hover:scale-105 hover:drop-shadow-lg transition-all duration-300 --tw-shadow:unset"
				style={{imageRendering: project.imgIsPixelated ? "pixelated" : "auto"}}
			/>
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
			className={`flex-grow-[2] ${orientation === "left-dominant" ? "text-left" : "text-right"}`}
		>
			<Text variant="h3">
				{project.title}
			</Text>
			{project.tags && <div
				className={`flex flex-row flex-wrap gap-2 mt-2 ${orientation === "left-dominant" ? "justify-start" : "justify-end"}`}
			>
				{project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
			</div>}
			{children ?? <Text variant="p">{project.description}</Text>}
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
	description?: string;
	url?: string;
	sourceUrl?: string;
}

export class Project {
	imgSrc: string;
	imgAlt: string;
	imgSize: [number, number];
	imgIsPixelated?: boolean;
	title: string;
	tags?: string[];
	description?: string;
	url?: string;
	sourceUrl?: string;
	
	constructor(project: ProjectDetails) {
		this.imgSrc = new URL(`../assets/${project.imgSrc}`, import.meta.url).href;
		this.imgAlt = project.imgAlt;
		this.imgSize = project.imgSize;
		this.imgIsPixelated = project.imgIsPixelated ?? false;
		this.title = project.title;
		this.tags = project.tags;
		this.description = project.description;
		this.url = project.url;
		this.sourceUrl = project.sourceUrl;
	}
}

export const projects = {
	ganymede: new Project({
		imgSrc: "projects/ganymede.png",
		imgAlt: "A person in a futurustic suit firing a gun with a flag on their head in a sci-fi valley",
		imgSize: [766, 766],
		title: "Ganymede",
		tags: ["Game", "PC", "UE5", "Blueprint", "3D", "Multiplayer"],
		description: "Placeholder description",
		url: "https://bedrockbreaker.itch.io/ganymede",
		sourceUrl: "https://gitlab.com/bedrockbreaker1/Ganymede"
	}),
	yggdrasil: new Project({
		imgSrc: "projects/yggdrasil.png",
		imgAlt: "A green dragon wrapped around a white chess pawn",
		imgSize: [32, 32],
		imgIsPixelated: true,
		title: "Yggdrasil",
		tags: ["Game", "PC", "Godot", "C#", "2D", "Multiplayer"],
		description: "Placeholder description",
		sourceUrl: "https://github.com/bedrockbreaker/Yggdrasil-Chess-Engine"
	}),
	graduatedcylinders: new Project({
		imgSrc: "projects/graduated-cylinders.png",
		imgAlt: "A man holding chemicals in a test tube",
		imgSize: [256, 256],
		title: "Graduated Cylinders",
		tags: ["Mod", "PC", "Minecraft", "Java"],
		description: "Placeholder description",
		url: "https://www.curseforge.com/minecraft/mc-mods/graduated-cylinders",
		sourceUrl: "https://github.com/bedrockbreaker/Graduated-Cylinders"
	}),
	cardbot: new Project({
		imgSrc: "placeholder-square.png",
		imgAlt: "A white chess queen",
		imgSize: [32, 32],
		imgIsPixelated: true,
		title: "Discord Card Bot",
		tags: ["Game", "NodeJS", "JavaScript","2D", "Multiplayer"],
		description: "Placeholder description",
		sourceUrl: "https://github.com/bedrockbreaker/unobot"
	})
};