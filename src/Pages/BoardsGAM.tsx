import { useTranslation } from "react-i18next";
import { Divider } from "~/Components/Divider";
import { LI, OL } from "~/Components/List";
import { Text } from "~/Components/Text";

export function BoardsGAM() {
	const { t } = useTranslation();

	return <>
		<Text variant="h1" className="mx-auto text-center">{t("boards.gam.header")}</Text>
		<Divider/>
		<OL>
			<LI><Text>{t("boards.gam.objectives.0")}</Text></LI>
			<LI><Text>{t("boards.gam.objectives.1")}</Text></LI>
			<LI><Text>{t("boards.gam.objectives.2")}</Text></LI>
			<LI><Text>{t("boards.gam.objectives.3")}</Text></LI>
			<LI><Text>{t("boards.gam.objectives.4")}</Text></LI>
			<LI><Text>{t("boards.gam.objectives.5")}</Text></LI>
		</OL>
	</>;
}
