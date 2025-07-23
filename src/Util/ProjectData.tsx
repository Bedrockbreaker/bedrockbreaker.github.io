import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import i18n from "./i18n";
import { AllTags, Project } from "./Project";

import Ganymede from "~/Assets/Projects/Ganymede.png";
import GraduatedCylinders from "~/Assets/Projects/GraduatedCylinders.png";
import Memento from "~/Assets/Projects/Memento.png";
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
	alt={i18n.t("component.project-card.no-image-alt")}
	className="rounded-md"
/>;

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
			"serialization",
			"data-driven-design",
			"game",
			"pc",
			"godot",
			"csharp",
			"2-4-weeks",
			"solo-developer",
			"programmer",
			"designer",
			"artist",
			"work-in-progress",
			"open-source"
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
			"core-mechanics",
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
			"1-3-months",
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
			"core-mechanics",
			"combat-design",
			"ai-behavior",
			"multiplayer-logic",
			"pathfinding",
			"game",
			"pc",
			"unreal-engine",
			"blueprint",
			"cpp",
			"1-3-months",
			"solo-developer",
			"programmer",
			"designer",
			"work-in-progress"
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
		hasDetails: true,
		homepage: {url: "https://www.curseforge.com/minecraft/mc-mods/graduated-cylinders", icon: "curseforge"},
		source: {url: "https://github.com/bedrockbreaker/Graduated-Cylinders"},
		tags: [
			"ux-interaction-design",
			"cross-mod-compatibility",
			"mod",
			"pc",
			"minecraft",
			"java",
			"3-months",
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
			"1-2-weeks",
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
		image: NoImage,
		hasDetails: true,
		source: {url: "https://github.com/bedrockbreaker/unobot"},
		tags: [
			"multiplayer-logic",
			"rendering-pipeline",
			"game",
			"discord",
			"nodejs",
			"javascript",
			"3-months",
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
			"2-4-weeks",
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
			"1-3-months",
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
			"devtools",
			"asset-pipelines",
			"build-tooling",
			"tool",
			"pc",
			"construct",
			"typescript",
			"2-4-weeks",
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
		hasDetails: true,
		homepage: {url: "https://bedrockbreaker.itch.io/pushr4k", icon: "itchio"},
		tags: [
			"input-systems",
			"save-load-systems",
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
			"1-2-weeks",
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
		hasDetails: true,
		source: {url: "https://github.com/bedrockbreaker/Memento"},
		tags: [
			"core-mechanics",
			"devtools",
			"save-load-systems",
			"narrative-systems",
			"ux-interaction-design",
			"game",
			"pc",
			"unreal-engine",
			"cpp",
			"3-months",
			"solo-developer",
			"programmer",
			"designer"
		]
	})
};

const projectKeyMap = new Map(Object.entries(Projects).map(([key, value]) => [value, key]));
export function GetProjectKey(project: Project) {
	return projectKeyMap.get(project);
}
