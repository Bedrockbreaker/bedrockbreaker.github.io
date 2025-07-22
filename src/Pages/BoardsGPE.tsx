import { useTranslation } from "react-i18next";
import { Divider } from "~/Components/Divider";
import { LI, OL } from "~/Components/List";
import { Text } from "~/Components/Text";

export function BoardsGPE() {
	const { t } = useTranslation();

	return <>
		<Text variant="h1" className="mx-auto text-center">{t("boards.gpe.header")}</Text>
		<Divider/>
		<OL>
			<LI><Text>{t("boards.gpe.objectives.0")}</Text></LI>
			<LI><Text>{t("boards.gpe.objectives.1")}</Text></LI>
			<LI><Text>{t("boards.gpe.objectives.2")}</Text></LI>
			<LI><Text>{t("boards.gpe.objectives.3")}</Text></LI>
			<LI><Text>{t("boards.gpe.objectives.4")}</Text></LI>
			<LI><Text>{t("boards.gpe.objectives.5")}</Text></LI>
		</OL>
	</>;
}
