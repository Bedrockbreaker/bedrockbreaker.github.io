import { Trans, useTranslation } from "react-i18next";

import { Divider } from "./Divider";
import { Link } from "./Link";
import { Text } from "./Text";
import { ThemedImage } from "./ThemedImg";

import Github_ThemeDark from "~/Assets/Socials/Github_ThemeDark.svg";
import Github_ThemeLight from "~/Assets/Socials/Github_ThemeLight.svg";
import Linkedin_ThemeDark from "~/Assets/Socials/Linkedin_ThemeDark.svg";
import Linkedin_ThemeLight from "~/Assets/Socials/Linkedin_ThemeLight.svg";

export function Footer() {
	const { t } = useTranslation();

	return <footer className="sticky mt-24 text-sm bg-darker">
		<Divider className="bg-accent"/>
		<div className="flex justify-center">
			<div className="flex flex-col p-6 gap-6 max-w-7xl grow">
				<div className="flex flex-col gap-6 md:flex-row md:justify-between">
					<Link href="/" hasUnderline={false}>{t("footer.about")}</Link>
					<Link href="/portfolio" hasUnderline={false}>{t("footer.portfolio")}</Link>
					<Link href="/resume" hasUnderline={false}>{t("footer.resume")}</Link>
				</div>
				<Divider/>
				<div className="flex flex-row flex-wrap gap-x-3 gap-y-1">
					<span className="w-full">{t("footer.follow-me")}</span>
					<Link
						href="https://github.com/Bedrockbreaker"
						aria-label={t("footer.socials.github")}
						hasExternalIcon={false}
					>
						<ThemedImage
							sources={{light: Github_ThemeLight, dark: Github_ThemeDark}}
							alt={t("footer.socials.github-alt")}
							className="inline-block w-6 h-6"
						/>
					</Link>{" "}
					<Link
						href="https://www.linkedin.com/in/jenson-searle"
						aria-label={t("footer.socials.linkedin")}
						hasExternalIcon={false}
					>
						<ThemedImage
							sources={{light: Linkedin_ThemeLight, dark: Linkedin_ThemeDark}}
							alt={t("footer.socials.linkedin-alt")}
							className="inline-block w-6 h-6"
						/>
					</Link>
				</div>
				<div className="flex flex-col gap-6 md:flex-row md:justify-between">
					<Text>
						<Trans i18nKey="footer.copyright">
							text {{year: new Date().getFullYear()}} text
							<Link
								href="https://github.com/Bedrockbreaker/bedrockbreaker.github.io/blob/main/LICENSE"
								hasExternalIcon={false}
							>
								text
							</Link>
						</Trans>
					</Text>
					<Link href="https://github.com/Bedrockbreaker/bedrockbreaker.github.io">
						{t("footer.view-source")}
					</Link>
				</div>
			</div>
		</div>
	</footer>
}
