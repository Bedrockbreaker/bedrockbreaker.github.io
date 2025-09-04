import { ExternalLinkIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ThemedImage } from "./ThemedImg";
import { UrlIcon } from "~/Util/Project";

import Bluesky_ThemeDark from "~/Assets/Socials/Bluesky_ThemeDark.svg";
import Bluesky_ThemeLight from "~/Assets/Socials/Bluesky_ThemeLight.svg";
import CurseForge_ThemeDark from "~/Assets/Socials/CurseForge_ThemeDark.svg";
import CurseForge_ThemeLight from "~/Assets/Socials/CurseForge_ThemeLight.svg";
import Github_ThemeDark from "~/Assets/Socials/Github_ThemeDark.svg";
import Github_ThemeLight from "~/Assets/Socials/Github_ThemeLight.svg";
import Itchio_ThemeDark from "~/Assets/Socials/Itchio_ThemeDark.svg";
import Itchio_ThemeLight from "~/Assets/Socials/Itchio_ThemeLight.svg";
import Linkedin_ThemeDark from "~/Assets/Socials/Linkedin_ThemeDark.svg";
import Linkedin_ThemeLight from "~/Assets/Socials/Linkedin_ThemeLight.svg";
import Yggdrasil_ThemeDark from "~/Assets/Socials/Yggdrasil_ThemeDark.svg";
import Yggdrasil_ThemeLight from "~/Assets/Socials/Yggdrasil_ThemeLight.svg";

export function Bluesky({className = ""}: {className?: string}) {
	const { t } = useTranslation();

	return <ThemedImage
		sources={{light: Bluesky_ThemeLight, dark: Bluesky_ThemeDark}}
		alt={t("component.icons.bluesky-alt")}
		className={"inline-block w-6 h-6 " + className}
	/>;
}

export function CurseForge({className = ""}: {className?: string}) {
	const { t } = useTranslation();

	return <ThemedImage
		sources={{light: CurseForge_ThemeLight, dark: CurseForge_ThemeDark}}
		alt={t("component.icons.curseforge-alt")}
		className={"inline-block w-6 h-6 " + className}
	/>;
}

export function GitHub({className = ""}: {className?: string}) {
	const { t } = useTranslation();

	return <ThemedImage
		sources={{light: Github_ThemeLight, dark: Github_ThemeDark}}
		alt={t("component.icons.github-alt")}
		className={"inline-block w-6 h-6 " + className}
	/>;
}

export function Itchio({className = ""}: {className?: string}) {
	const { t } = useTranslation();

	return <ThemedImage
		sources={{light: Itchio_ThemeLight, dark: Itchio_ThemeDark}}
		alt={t("component.icons.itchio-alt")}
		className={"inline-block w-6 h-6 " + className}
	/>;
}

export function LinkedIn({className = ""}: {className?: string}) {
	const { t } = useTranslation();

	return <ThemedImage
		sources={{light: Linkedin_ThemeLight, dark: Linkedin_ThemeDark}}
		alt={t("component.icons.linkedin-alt")}
		className={"inline-block w-6 h-6 " + className}
	/>;
}

export function Yggdrasil({className = ""}: {className?: string}) {
	const { t } = useTranslation();

	return <ThemedImage
		sources={{light: Yggdrasil_ThemeLight, dark: Yggdrasil_ThemeDark}}
		alt={t("component.icons.yggdrasil-alt")}
		className={"inline-block w-6 h-6 " + className}
	/>;
}

export function GetUrlIcon(icon?: UrlIcon) {
	switch (icon) {
		case "github": return <GitHub/>;
		case "bluesky": return <Bluesky/>;
		case "curseforge": return <CurseForge/>;
		case "itchio": return <Itchio/>;
		case "personal-website": return <Yggdrasil/>;
		case "external": // Fall through
		default: return <ExternalLinkIcon/>;
	}
}

export function GetSourceTranslationKey(icon?: UrlIcon) {
	switch (icon) {
		case "github": // Fall through
		default: return "component.project-card.view-source-github";
	}
}
