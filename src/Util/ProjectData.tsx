import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import { AllTags, Project } from "./Project";

import Ganymede from "~/Assets/Projects/Ganymede.png";
import GraduatedCylinders from "~/Assets/Projects/GraduatedCylinders.png";
import OldManWhiskers from "~/Assets/Projects/OldManWhiskers.png";
import Pushr4k from "~/Assets/Projects/Pushr4k.png";
import SilentNightDeadlyNight from "~/Assets/Projects/SilentNightDeadlyNight.png";
import TankGame from "~/Assets/Projects/TankGame.png";
import UnoPlusPlus from "~/Assets/Projects/UnoPlusPlus.png";
import Website from "~/Assets/Projects/Website.png";
import Yggdrasil_ThemeDark from "~/Assets/Projects/Yggdrasil_ThemeDark.png";
import Yggdrasil_ThemeLight from "~/Assets/Projects/Yggdrasil_ThemeLight.png";

export const Projects = {
	test: new Project({
		title: "Test Project, Please Ignore",
		description: () => <Text>
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
		image: () => undefined,
		homepage: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		sourceUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		tags: AllTags
	}),
	yggdrasil: new Project({
		title: "Yggdrasil",
		description: () => <Text>
			Roguelike fantasy chess. Chess engine which supports as many variations of chess as possible.
		</Text>,
		image: () => <ThemedImage
			sources={{light: Yggdrasil_ThemeLight, dark: Yggdrasil_ThemeDark}}
			alt="A pixel art green dragon wrapped around a chess pawn."
		/>,
		sourceUrl: "https://github.com/bedrockbreaker/Yggdrasil-Chess-Engine",
		tags: [
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
		description: () => <Text>
			Winning the Most Innovative award, as well as a few others at a local game jam,
			I implemented all gameplay mechanics for Old Man Whiskers, including a blue-noise item spawning system,
			digging mechanics, and an inventory system.
		</Text>,
		image: () => <img
			src={OldManWhiskers}
			alt="An old man with a crazy beard and his four cats"
		/>,
		homepage: "https://bedrockbreaker.itch.io/old-man-whiskers",
		tags: [
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
		description: () => <Text>
			It's what you're looking at right now!
		</Text>,
		image: () => <img
			src={Website}
			alt="My old profile picture, featuring a magic wand, wrench, and a runic glyph"
		/>,
		homepage: "https://bedrockbreaker.github.io",
		sourceUrl: "https://github.com/Bedrockbreaker/bedrockbreaker.github.io",
		tags: [
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
		description: () => <Text>
			I recreated from scratch the AI system in Ganymede, a networked multipler FPS capture the flag game.
			The game includes AI-controlled NPCs that can move, shoot, capture flags, and target enemy AI.
			Long-term AI movement is controlled via a stochastic A* pathfinding algorithm.
		</Text>,
		image: () => <img
			src={Ganymede}
			alt="A person in a futurustic suit firing a gun with a flag on their head in a sci-fi valley"
		/>,
		homepage: "https://bedrockbreaker.itch.io/ganymede",
		tags: [
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
		description: () => <Text>
			With over 50,000+ downloads, Graduated Cylinders is my most successful shipped project.
			I designed and programmed everything from scratch, creating a system that dynamically
			hooks into every other mod that supports fluid-holding containers, and adds a GUI prompt
			to allow for the player to select the amount of fluid they want to transfer between containers.
		</Text>,
		image: () => <img
			src={GraduatedCylinders}
			alt="A man holding chemicals in a test tube"
		/>,
		homepage: "https://www.curseforge.com/minecraft/mc-mods/graduated-cylinders",
		sourceUrl: "https://github.com/bedrockbreaker/Graduated-Cylinders",
		tags: [
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
	unoplusplus: new Project({
		title: "Uno++",
		description: () => <Text>
			Uno++ is a C++ implementation of the classic rules of Uno.
		</Text>,
		image: () => <img
			src={UnoPlusPlus}
			alt="Ascii art of the text 'Uno++'"
		/>,
		sourceUrl: "https://github.com/bedrockbreaker/unoplusplus",
		tags: [
			"Game",
			"PC",
			"C++",
			"48 Hours",
			"Solo Developer",
			"Programmer",
			"Open Source"
		]
	}),
	cardbot: new Project({
		title: "Card Bot",
		description: () => <Text>
			One of the earliest projects I've ever worked on, I programmed a Discord Bot
			to allow players to play several different card games with friends on the Discord platform,
			including Uno, Exploding Kittens, Mille Bornes, and Phase 10.
			Notably, I wrote a custom 2D rendering engine using a NodeJS-friendly implementation of HTML canvas.
		</Text>,
		image: () => undefined,
		sourceUrl: "https://github.com/bedrockbreaker/unobot",
		tags: [
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
		description: () => <Text>
			Built in just a few weeks, I designed and implemented the combat mechanics
			in this social deduction board game.
		</Text>,
		image: () => <img
			src={SilentNightDeadlyNight}
			alt="The Boogeyman"
		/>,
		tags: [
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
		description: () => <Text>
				戦車ゲーム (Tank Game) is a local multiplayer game, similar to Atari's COMBAT.
				I implemented all systems from scratch, as a self-study project in enemy AI
				and core gameplay systems, including state machines, behavior trees, and character systems.
		</Text>,
		image: () => <img
			src={TankGame}
			alt="Two tanks fighting each other"
		/>,
		sourceUrl: "https://github.com/bedrockbreaker/TankGame",
		tags: [
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
		description: () => <Text>
			Party Pooper is a reverse-engineering and modding utility for{" "}
			<Link href="https://char64.itch.io/partyproject">Party Project</Link>,
			designed to deconstruct its assets to allow easy editing and modding.
			Using incredibly cursed techniques, including adding compiler directives to Typescript,
			I'm able to open source this project without including any of the original copyrighted assets.
		</Text>,
		image: () => undefined,
		homepage: "https://github.com/bedrockbreaker/PartyPooper/releases/latest",
		sourceUrl: "https://github.com/bedrockbreaker/PartyPooper",
		tags: [
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
		title: "pushr4k",
		description: () => <Text>
			A 4-key rhythm game that pushes the Construct game engine to its limits.
			I specifically optimized the game for input latency, to make sure inputs align perfectly
			with the music, which uses the WebAudio API.
		</Text>,
		image: () => <img
			src={Pushr4k}
			alt="UI for pushr4k, showing details of a song titled, 'Through the Fire and Flames'."
		/>,
		homepage: "https://bedrockbreaker.itch.io/pushr4k",
		tags: [
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
		description: () => <Text>
			I wanted to improve my design skills, so I focused on creating a game design document.
			Quiet Hours is a frenzied 2-player asymmetric co-op game about making noise
			-- and cleaning up after it. One player embraces cartoonish chaos as a clumsy municipal
			worker wreaking havoc in a hypersensitive suburban neighborhood during its legally
			enforced "quiet hours." Meanwhile, their partner frantically scrambles to suppress the
			escalating racket in real-time using a waveform-matching interface powered by motion,
			mouse precision, or even their own voice.
		</Text>,
		image: () => undefined,
		tags: [
			"Game",
			"Documentation",
			"Console",
			"1-2 Weeks",
			"Solo Developer",
			"Designer"
		]
	})
}
