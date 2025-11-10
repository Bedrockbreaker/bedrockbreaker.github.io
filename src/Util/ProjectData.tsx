import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import i18n from "./i18n";
import { AllTags, Project } from "./Project";

import BrickByBrick from "~/Assets/Projects/BrickByBrick.png";
import CardBot from "~/Assets/Projects/CardBot.png";
import GachaGoobers_ThemeDark from "~/Assets/Projects/GachaGoobers_ThemeDark.png";
import GachaGoobers_ThemeLight from "~/Assets/Projects/GachaGoobers_ThemeLight.png";
import Ganymede from "~/Assets/Projects/Ganymede.png";
import GraduatedCylinders from "~/Assets/Projects/GraduatedCylinders.png";
import JohnLemon from "~/Assets/Projects/JohnLemon.png";
import Katalyst from "~/Assets/Projects/Katalyst.png";
import Memento from "~/Assets/Projects/Memento.png";
import OldManWhiskers from "~/Assets/Projects/OldManWhiskers.png";
import Placeholder_ThemeDark_en_US from "~/Assets/Projects/Placeholder_ThemeDark_en-US.png";
import Placeholder_ThemeLight_en_US from "~/Assets/Projects/Placeholder_ThemeLight_en-US.png";
import Placeholder_ThemeDark_ja_JP from "~/Assets/Projects/Placeholder_ThemeDark_ja-JP.png";
import Placeholder_ThemeLight_ja_JP from "~/Assets/Projects/Placeholder_ThemeLight_ja-JP.png";
import Pushr4k from "~/Assets/Projects/Pushr4k.png";
import SilentNightDeadlyNight from "~/Assets/Projects/SilentNightDeadlyNight.png";
import TankGame from "~/Assets/Projects/TankGame.png";
import Tumblyroos from "~/Assets/Projects/Tumblyroos.png";
import Website from "~/Assets/Projects/Website.png";
import Yggdrasil_ThemeDark from "~/Assets/Projects/Yggdrasil_ThemeDark.png";
import Yggdrasil_ThemeLight from "~/Assets/Projects/Yggdrasil_ThemeLight.png";

function NoImage() {
	return i18n.language === "ja-JP"
		? <ThemedImage
			sources={{light: Placeholder_ThemeLight_ja_JP, dark: Placeholder_ThemeDark_ja_JP}}
			alt={i18n.t("component.project-card.no-image-alt")}
			className="rounded-md"
		/>
		: <ThemedImage
			sources={{light: Placeholder_ThemeLight_en_US, dark: Placeholder_ThemeDark_en_US}}
			alt={i18n.t("component.project-card.no-image-alt")}
			className="rounded-md"
		/>;
}

export const Projects = {
	test: new Project({
		title: i18n.t("project.test.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.test.description")}
		</Text>,
		image: NoImage,
		homepage: {url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
		source: {url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", icon: "external"},
		tags: AllTags
	}),
	yggdrasil: new Project({
		title: i18n.t("project.yggdrasil.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.yggdrasil.description")}
		</Text>,
		image: () => <ThemedImage
			sources={{light: Yggdrasil_ThemeLight, dark: Yggdrasil_ThemeDark}}
			alt={i18n.t("project.yggdrasil.img-alt")}
			className="rounded-md"
		/>,
		source: {url: "https://github.com/bedrockbreaker/Yggdrasil-Chess-Engine"},
		tags: [
			"core-mechanics",
			"cross-mod-compatibility",
			"data-driven-design",
			"game",
			"pc",
			"godot",
			"csharp",
			"1-4-weeks",
			"solo-developer",
			"programmer",
			"designer",
			"artist",
			"work-in-progress",
			"open-source"
		]
	}),
	portfolio: new Project({
		title: i18n.t("project.portfolio.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.portfolio.description")}
		</Text>,
		image: () => <img
			src={Website}
			alt={i18n.t("project.portfolio.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://bedrockbreaker.github.io", icon: "personal-website"},
		source: {url: "https://github.com/Bedrockbreaker/bedrockbreaker.github.io"},
		tags: [
			"data-driven-design",
			"accessibility-design",
			"ux-interaction-design",
			"portfolio",
			"website",
			"typescript",
			"1-6-months",
			"solo-developer",
			"programmer",
			"designer",
			"work-in-progress",
			"open-source"
		]
	}),
	ganymede: new Project({
		title: i18n.t("project.ganymede.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.ganymede.description")}
		</Text>,
		image: () => <img
			src={Ganymede}
			alt={i18n.t("project.ganymede.img-alt")}
			className="rounded-md"
		/>,
		hasDetails: true,
		homepage: {url: "https://bedrockbreaker.itch.io/ganymede", icon: "itchio"},
		tags: [
			"combat-design",
			"ai-behavior",
			"data-driven-design",
			"game",
			"pc",
			"console",
			"unreal-engine",
			"blueprint",
			"cpp",
			"6-12-months",
			"solo-developer",
			"programmer",
			"designer"
		]
	}),
	graduatedcylinders: new Project({
		title: i18n.t("project.graduatedcylinders.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.graduatedcylinders.description")}
		</Text>,
		image: () => <img
			src={GraduatedCylinders}
			alt={i18n.t("project.graduatedcylinders.img-alt")}
			className="rounded-md"
		/>,
		// hasDetails: true,
		homepage: {url: "https://www.curseforge.com/minecraft/mc-mods/graduated-cylinders", icon: "curseforge"},
		source: {url: "https://github.com/bedrockbreaker/Graduated-Cylinders"},
		tags: [
			"ux-interaction-design",
			"cross-mod-compatibility",
			"mod",
			"pc",
			"minecraft",
			"java",
			"2-years-plus",
			"solo-developer",
			"programmer",
			"designer",
			"open-source"
		]
	}),
	tcresearchsolver: new Project({
		title: i18n.t("project.tcresearchsolver.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.tcresearchsolver.description")}
		</Text>,
		image: NoImage,
		source: {url: "https://github.com/bedrockbreaker/TCResearchSolver"},
		tags: [
			"pathfinding",
			"serialization",
			"data-driven-design",
			"tool",
			"pc",
			"cpp",
			"1-4-weeks",
			"solo-developer",
			"programmer",
			"open-source"
		]
	}),
	cardbot: new Project({
		title: i18n.t("project.cardbot.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.cardbot.description")}
		</Text>,
		image: () => <img
			src={CardBot}
			alt={i18n.t("project.cardbot.img-alt")}
			className="rounded-md"
		/>,
		// hasDetails: true,
		source: {url: "https://github.com/bedrockbreaker/unobot"},
		tags: [
			"multiplayer-logic",
			"rendering-pipeline",
			"game",
			"discord",
			"nodejs",
			"javascript",
			"1-6-months",
			"solo-developer",
			"programmer",
			"artist",
			"open-source"
		]
	}),
	silentnight: new Project({
		title: i18n.t("project.silentnight.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.silentnight.description")}
		</Text>,
		image: () => <img
			src={SilentNightDeadlyNight}
			alt={i18n.t("project.silentnight.img-alt")}
			className="rounded-md"
		/>,
		tags: [
			"combat-design",
			"multiplayer-logic",
			"ux-interaction-design",
			"game",
			"board-game",
			"1-4-weeks",
			"5-14-team-members",
			"designer"
		]
	}),
	tankgame: new Project({
		title: i18n.t("project.tankgame.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.tankgame.description")}
		</Text>,
		image: () => <img
			src={TankGame}
			alt={i18n.t("project.tankgame.img-alt")}
			className="rounded-md"
		/>,
		source: {url: "https://github.com/bedrockbreaker/TankGame"},
		tags: [
			"core-mechanics",
			"ai-behavior",
			"multiplayer-logic",
			"game",
			"pc",
			"unity",
			"csharp",
			"1-4-weeks",
			"solo-developer",
			"programmer",
			"designer",
			"open-source"
		]
	}),
	partypooper: new Project({
		title: i18n.t("project.partypooper.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.partypooper.description")}
		</Text>,
		image: NoImage,
		homepage: {url: "https://github.com/bedrockbreaker/PartyPooper/releases/latest", icon: "github"},
		source: {url: "https://github.com/bedrockbreaker/PartyPooper"},
		tags: [
			"modding-tools",
			"asset-pipelines",
			"build-tooling",
			"tool",
			"pc",
			"construct",
			"typescript",
			"1-4-weeks",
			"solo-developer",
			"programmer",
			"work-in-progress",
			"open-source"
		]
	}),
	pushr4k: new Project({
		title: i18n.t("project.pushr4k.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.pushr4k.description")}
		</Text>,
		image: () => <img
			src={Pushr4k}
			alt={i18n.t("project.pushr4k.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://bedrockbreaker.itch.io/pushr4k", icon: "itchio"},
		tags: [
			"input-systems",
			"data-driven-design",
			"performance-optimization",
			"game",
			"website",
			"construct",
			"javascript",
			"48-hours",
			"solo-developer",
			"programmer",
			"designer",
			"artist"
		]}),
	quiethours: new Project({
		title: i18n.t("project.quiethours.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.quiethours.description")}
		</Text>,
		image: NoImage,
		tags: [
			"core-mechanics",
			"multiplayer-logic",
			"ux-interaction-design",
			"game",
			"documentation",
			"console",
			"1-4-weeks",
			"solo-developer",
			"designer"
		]
	}),
	memento: new Project({
		title: i18n.t("project.memento.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.memento.description")}
		</Text>,
		image: () => <img
			src={Memento}
			alt={i18n.t("project.memento.img-alt")}
			className="rounded-md"
		/>,
		// hasDetails: true,
		source: {url: "https://github.com/bedrockbreaker/Memento"},
		tags: [
			"core-mechanics",
			"devtools",
			"save-load-systems",
			"game",
			"pc",
			"console",
			"unreal-engine",
			"cpp",
			"1-6-months",
			"solo-developer",
			"programmer",
			"designer"
		]
	}),
	tumblyroos: new Project({
		title: i18n.t("project.tumblyroos.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.tumblyroos.description")}
		</Text>,
		image: () => <img
			src={Tumblyroos}
			alt={i18n.t("project.tumblyroos.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://www.tongueincheek.dev/", icon: "external"},
		tags: [
			"core-mechanics",
			"ai-behavior",
			"physics-systems",
			"game",
			"pc",
			"console",
			"unreal-engine",
			"cpp",
			"1-6-months",
			"15-team-members",
			"programmer",
			"work-in-progress"
		]
	}),
	katalyst: new Project({
		title: i18n.t("project.katalyst.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.katalyst.description")}
		</Text>,
		image: () => <img
			src={Katalyst}
			alt={i18n.t("project.katalyst.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://bsky.app/profile/project-katalyst.bsky.social", icon: "bluesky"},
		tags: [
			"multiplayer-logic",
			"devtools",
			"level-scripting",
			"game",
			"pc",
			"console",
			"unity",
			"csharp",
			"15-team-members",
			"1-2-years",
			"programmer",
			"work-in-progress"
		]
	}),
	taintedheart: new Project({
		title: i18n.t("project.taintedheart.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.taintedheart.description")}
		</Text>,
		image: NoImage,
		tags: [
			"core-mechanics",
			"save-load-systems",
			"narrative-systems",
			"game",
			"pc",
			"console",
			"2-years-plus",
			"solo-developer",
			"programmer",
			"designer",
			"work-in-progress"
		]
	}),
	thsegmentationfault: new Project({
		title: i18n.t("project.thsegmentationfault.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.thsegmentationfault.description")}
		</Text>,
		image: NoImage,
		tags: [
			"narrative",
			"documentation",
			"1-6-months",
			"solo-developer",
			"designer"
		]
	}),
	shepherdofthestorm: new Project({
		title: i18n.t("project.shepherdofthestorm.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.shepherdofthestorm.description")}
		</Text>,
		image: NoImage,
		tags: [
			"narrative",
			"documentation",
			"solo-developer",
			"1-6-months",
			"designer"
		]
	}),
	oldmanwhiskers: new Project({
		title: i18n.t("project.oldmanwhiskers.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.oldmanwhiskers.description")}
		</Text>,
		image: () => <img
			src={OldManWhiskers}
			alt={i18n.t("project.oldmanwhiskers.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://bedrockbreaker.itch.io/old-man-whiskers", icon: "itchio"},
		tags: [
			"animation-systems",
			"input-systems",
			"procedural-generation",
			"game",
			"pc",
			"unreal-engine",
			"blueprint",
			"48-hours",
			"2-4-team-members",
			"programmer",
			"designer"
		]
	}),
	gachagoobers: new Project({
		title: i18n.t("project.gachagoobers.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.gachagoobers.description")}
		</Text>,
		image: () => <ThemedImage
			sources={{light: GachaGoobers_ThemeLight, dark: GachaGoobers_ThemeDark}}
			alt={i18n.t("project.gachagoobers.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://bedrockbreaker.itch.io/gacha-goobers", icon: "itchio"},
		source: {url: "https://github.com/Bedrockbreaker/GachaMall"},
		tags: [
			"ai-behavior",
			"level-scripting",
			"game-economy",
			"game",
			"pc",
			"unity",
			"csharp",
			"48-hours",
			"2-4-team-members",
			"programmer"
		]
	}),
	brickbybrick: new Project({
		title: i18n.t("project.brickbybrick.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.brickbybrick.description")}
		</Text>,
		image: () => <img
			src={BrickByBrick}
			alt={i18n.t("project.brickbybrick.img-alt")}
			className="rounded-md"
		/>,
		homepage: {url: "https://bedrockbreaker.itch.io/brick-by-brick", icon: "itchio"},
		source: {url: "https://github.com/Tongue-N-Cheek/BrickByBrick"},
		tags: [
			"data-driven-design",
			"narrative-systems",
			"procedural-generation",
			"game",
			"pc",
			"unity",
			"csharp",
			"1-4-weeks",
			"5-14-team-members",
			"programmer"
		]
	}),
	johnlemon: new Project({
		title: i18n.t("project.johnlemon.title"),
		description: () => <Text variant="muted">
			{i18n.t("project.johnlemon.description")}
		</Text>,
		image: () => <img
			src={JohnLemon}
			alt={i18n.t("project.johnlemon.img-alt")}
			className="rounded-md"
		/>,
		source: {url: "https://github.com/Bedrockbreaker/ArizonaJam2025"},
		tags: [
			"core-mechanics",
			"level-scripting",
			"animation-systems",
			"game",
			"pc",
			"unity",
			"csharp",
			"48-hours",
			"5-14-team-members",
			"programmer"
		]
	})
};

const projectKeyMap = new Map(Object.entries(Projects).map(([key, value]) => [value, key]));
export function GetProjectKey(project: Project) {
	return projectKeyMap.get(project);
}
