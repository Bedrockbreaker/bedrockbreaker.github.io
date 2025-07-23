import { Trans, useTranslation } from "react-i18next";

import { Divider } from "./Divider";
import { GitHub, LinkedIn } from "./Icons";
import { Link } from "./Link";
import { Text } from "./Text";

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
						<GitHub/>
					</Link>{" "}
					<Link
						href="https://www.linkedin.com/in/jenson-searle"
						aria-label={t("footer.socials.linkedin")}
						hasExternalIcon={false}
					>
						<LinkedIn/>
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
