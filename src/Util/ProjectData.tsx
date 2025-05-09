import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import { AllTags, Project } from "./Project";

import Ganymede from "~/Assets/Projects/Ganymede.png";
import GraduatedCylinders from "~/Assets/Projects/GraduatedCylinders.png";
import OldManWhiskers from "~/Assets/Projects/OldManWhiskers.png";
import Placeholder_ThemeDark_enUS from "~/Assets/Projects/Placeholder_ThemeDark_en-US.png";
import Placeholder_ThemeLight_enUS from "~/Assets/Projects/Placeholder_ThemeLight_en-US.png";
import Pushr4k from "~/Assets/Projects/Pushr4k.png";
import SilentNightDeadlyNight from "~/Assets/Projects/SilentNightDeadlyNight.png";
import TankGame from "~/Assets/Projects/TankGame.png";
import Website from "~/Assets/Projects/Website.png";
import Yggdrasil_ThemeDark from "~/Assets/Projects/Yggdrasil_ThemeDark.png";
import Yggdrasil_ThemeLight from "~/Assets/Projects/Yggdrasil_ThemeLight.png";

const NoImage = () => <ThemedImage
	sources={{light: Placeholder_ThemeLight_enUS, dark: Placeholder_ThemeDark_enUS}}
	alt="No Image"
	className="rounded-md"
/>;

export const Projects = {
	test: new Project({
		title: "Test Project, Please Ignore",
		description: () => <Text variant="muted">
			Did you ever stop to think that eventually there's a point where your name gets
			mentioned for the very last time. Well, here it is: I'm going to kill you, Chell.
			Why do I hate you so much? You ever wonder that? I'm brilliant. I'm not bragging.
			It's an objective fact. I'm the most massive collection of wisdom and raw computational
			power that's ever existed. And I hate you. It can't be for no reason. You must deserve it.
			You're angry. I know it. "She tested me too hard. She's unfair." Boo hoo.
			I don't suppose you ever stopped whining long enough to reflect on your own
			shortcomings, though, did you? You never considered that maybe I tested you to give the
			endless hours of your pointless existence some structure and meaning. Maybe to help you
			concentrate, so just maybe you'd think of something more worthwhile to do with your sorry life.
		</Text>,
		image: NoImage,
		homepage: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		sourceUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		tags: AllTags
	}),
	yggdrasil: new Project({
		title: "Yggdrasil",
		description: () => <Text variant="muted">
			A modular chess engine with support for arbitrary rule variants.
			Designed a flexible rule system to support variant loading, dynamic board shapes,
			and extensible piece behavior.
		</Text>,
		image: () => <ThemedImage
			sources={{light: Yggdrasil_ThemeLight, dark: Yggdrasil_ThemeDark}}
			alt="A pixel art green dragon wrapped around a chess pawn."
			className="rounded-md"
		/>,
		sourceUrl: "https://github.com/bedrockbreaker/Yggdrasil-Chess-Engine",
		tags: [
			"Core Mechanics",
			"Serialization",
			"Data-Driven Design",
			"Game",
			"PC",
			"Godot",
			"C#",
			"2-4 Weeks",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Artist",
			"Work in Progress",
			"Open Source"
		]
	}),
	oldmanwhiskers: new Project({
		title: "Old Man Whiskers",
		description: () => <Text variant="muted">
			Implemented core systems in a jam-winning top-down casual game: a procedural item
			spawner using blue-noise distribution, a dynamic item finding and digging system,
			and an event-driven inventory system.
		</Text>,
		image: () => <img
			src={OldManWhiskers}
			alt="An old man with a crazy beard and his four cats"
			className="rounded-md"
		/>,
		homepage: "https://bedrockbreaker.itch.io/old-man-whiskers",
		tags: [
			"Core Mechanics",
			"Animation Systems",
			"Input Systems",
			"Procedural Generation",
			"Game",
			"PC",
			"Unreal Engine",
			"Blueprint",
			"48 Hours",
			"2-4 Team Members",
			"Programmer",
			"Designer"
		],
		isFeatured: true
	}),
	portfolio: new Project({
		title: "Portfolio",
		description: () => <Text variant="muted">
			The site you're currently viewing, built in TypeScript and React.
			Serves as both my personal portfolio and a testbed for UI/UX patterns in devtools.
		</Text>,
		image: () => <img
			src={Website}
			alt="My old profile picture, featuring a magic wand, wrench, and a runic glyph"
			className="rounded-md"
		/>,
		homepage: "https://bedrockbreaker.github.io",
		sourceUrl: "https://github.com/Bedrockbreaker/bedrockbreaker.github.io",
		tags: [
			"Data-Driven Design",
			"Accessibility Design",
			"UX/Interaction Design",
			"Portfolio",
			"Website",
			"TypeScript",
			"1-3 Months",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Work in Progress",
			"Open Source"
		]
	}),
	ganymede: new Project({
		title: "Ganymede",
		description: () => <Text variant="muted">
			Rebuilt the entire AI stack for a networked CTF shooter.
			Implemented stochastic A* for non-deterministic long-term pathfinding,
			tactical state machines, and team coordination behavior across bot agents.
			Currently rewriting from Blueprint to C++ with GAS for extensibility and performance.
		</Text>,
		image: () => <img
			src={Ganymede}
			alt="A person in a futurustic suit firing a gun with a flag on their head in a sci-fi valley"
			className="rounded-md"
		/>,
		homepage: "https://bedrockbreaker.itch.io/ganymede",
		tags: [
			"Core Mechanics",
			"Combat Design",
			"AI & Behavior",
			"Multiplayer Logic",
			"Pathfinding",
			"Game",
			"PC",
			"Unreal Engine",
			"Blueprint",
			"C++",
			"1-3 Months",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Work in Progress"
		],
		isFeatured: true
	}),
	graduatedcylinders: new Project({
		title: "Graduated Cylinders",
		description: () => <Text variant="muted">
			With over 50,000+ downloads, Graduated Cylinders is my most successful shipped project.
			Developed a dynamic fluid-transfer mod for Minecraft with full inter-mod compatibility.
			Hooks into mods' fluid containers at runtime and injects a configurable UI for
			precise fluid handling.
		</Text>,
		image: () => <img
			src={GraduatedCylinders}
			alt="A man holding chemicals in a test tube"
			className="rounded-md"
		/>,
		homepage: "https://www.curseforge.com/minecraft/mc-mods/graduated-cylinders",
		sourceUrl: "https://github.com/bedrockbreaker/Graduated-Cylinders",
		tags: [
			"UX/Interaction Design",
			"Cross-Mod Compatibility",
			"Mod",
			"PC",
			"Minecraft",
			"Java",
			"3+ Months",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Open Source"
		],
		isFeatured: true
	}),
	tcresearchsolver: new Project({
		title: "TC Research Solver",
		description: () => <Text variant="muted">
			Wrote a custom solver the research minigame in Thaumcraft, a mod for Minecraft.
			Created a structured system for implementing progressively better solving algorithms.
			Deserializes a yaml configuration file for customization, and uses A* for pathfinding.
		</Text>,
		image: NoImage,
		sourceUrl: "https://github.com/bedrockbreaker/TCResearchSolver",
		tags: [
			"Pathfinding",
			"Serialization",
			"Data-Driven Design",
			"Tool",
			"PC",
			"C++",
			"1-2 Weeks",
			"Solo Developer",
			"Programmer",
			"Open Source"
		]
	}),
	cardbot: new Project({
		title: "Card Bot",
		description: () => <Text variant="muted">
			Discord bot framework supporting varied, simultaneous asynchronous card games.
			Built a lightweight 2D rendering engine for card display using Node-compatible HTML Canvas.
		</Text>,
		image: NoImage,
		sourceUrl: "https://github.com/bedrockbreaker/unobot",
		tags: [
			"Multiplayer Logic",
			"Rendering Pipeline",
			"Game",
			"Discord",
			"NodeJS",
			"JavaScript",
			"3+ Months",
			"Solo Developer",
			"Programmer",
			"Artist",
			"Open Source"
		]
	}),
	silentnight: new Project({
		title: "Silent Night, Deadly Night",
		description: () => <Text variant="muted">
			Designed and balanced asymmetric combat mechanics in a physical social deduction game.
			Focused on dynamic escalation and hidden role interactions within limited turn structures,
			particularly to avoid revealing player roles during turn actions.
		</Text>,
		image: () => <img
			src={SilentNightDeadlyNight}
			alt="The Boogeyman"
			className="rounded-md"
		/>,
		tags: [
			"Combat Design",
			"Multiplayer Logic",
			"UX/Interaction Design",
			"Game",
			"Board Game",
			"2-4 Weeks",
			"5-14 Team Members",
			"Designer"
		],
		isFeatured: true
	}),
	tankgame: new Project({
		title: "戦車ゲーム (Tank Game)",
		description: () => <Text variant="muted">
				Self-study project focused on gameplay architecture. Built full enemy AI and player
				control systems from scratch in Unity, using modular state machines, behavior trees,
				and actor-based entity design.
		</Text>,
		image: () => <img
			src={TankGame}
			alt="Two tanks fighting each other"
			className="rounded-md"
		/>,
		sourceUrl: "https://github.com/bedrockbreaker/TankGame",
		tags: [
			"Core Mechanics",
			"AI & Behavior",
			"Multiplayer Logic",
			"Game",
			"PC",
			"Unity",
			"C#",
			"1-3 Months",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Open Source"
		]
	}),
	partypooper: new Project({
		title: "Party Pooper",
		description: () => <Text variant="muted">
			Reverse-engineering utility for a proprietary Construct 2 game.
			Created an asset conversion pipeline and implemented dynamic unpacking and patching
			pipelines without redistributing original copyrighted content.
		</Text>,
		image: NoImage,
		homepage: "https://github.com/bedrockbreaker/PartyPooper/releases/latest",
		sourceUrl: "https://github.com/bedrockbreaker/PartyPooper",
		tags: [
			"Modding Tools",
			"Devtools",
			"Asset Pipelines",
			"Build Tooling",
			"Tool",
			"PC",
			"Construct",
			"TypeScript",
			"2-4 Weeks",
			"Solo Developer",
			"Programmer",
			"Work in Progress",
			"Open Source"
		]
	}),
	pushr4k: new Project({
		title: "pushr 4k",
		description: () => <Text variant="muted">
			A 4-key rhythm game pushing Construct to its technical limits.
			Optimized input/audio synchronization with the WebAudio API and implemented custom input
			timing logic to ensure millisecond-accurate playback.
		</Text>,
		image: () => <img
			src={Pushr4k}
			alt="UI for pushr4k, showing details of a song titled, 'Through the Fire and Flames'."
			className="rounded-md"
		/>,
		homepage: "https://bedrockbreaker.itch.io/pushr4k",
		tags: [
			"Input Systems",
			"Save/Load Systems",
			"Data-Driven Design",
			"Performance Optimization",
			"Game",
			"Website",
			"Construct",
			"JavaScript",
			"48 Hours",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Artist"
		],
		isFeatured: true
	}),
	quiethours: new Project({
		title: "Quiet Hours",
		description: () => <Text variant="muted">
			Asymmetric co-op concept focused on noise management and chaos containment.
			Designed full GDD including mechanic breakdowns, level design walkthroughs,
			and motion-based waveform-matching input systems.
		</Text>,
		image: NoImage,
		tags: [
			"Core Mechanics",
			"Multiplayer Logic",
			"UX/Interaction Design",
			"Game",
			"Documentation",
			"Console",
			"1-2 Weeks",
			"Solo Developer",
			"Designer"
		]
	})
};
