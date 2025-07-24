import { Trans } from "react-i18next";

import { Divider } from "~/Components/Divider";
import { HoverTilt } from "~/Components/HoverTilt";
import { LI, UL } from "~/Components/List";
import { Text } from "~/Components/Text";
import { Projects } from "~/Util/ProjectData";

export function SIP() {
	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Text variant="h1" className="mx-auto text-center">
			<Trans i18nKey="sip.header">
				text <span className="italic">text</span>
			</Trans>
		</Text>
		<Text variant="lead" className="mx-auto text-center" t="sip.subtitle"/>
		<Divider/>
		<HoverTilt className="max-w-xl mx-auto">{Projects.memento.GetImage()}</HoverTilt>
		<Text variant="h3" className="-mb-6" t="sip.overview.header"/>
		<Text t="sip.overview.description"/>
		<Text variant="h3" className="-mb-6" t="sip.innovation.header"/>
		<UL>
			<LI><Text t="sip.innovation.description.0"/></LI>
			<LI><Text t="sip.innovation.description.1"/></LI>
		</UL>
	</div>;
}
