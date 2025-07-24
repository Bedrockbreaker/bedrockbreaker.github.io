import { Divider } from "~/Components/Divider";
import { LI, OL } from "~/Components/List";
import { Text } from "~/Components/Text";

export function BoardsGAM() {
	return <>
		<Text variant="h1" className="mx-auto text-center" t="boards.gam.header"/>
		<Divider/>
		<OL>
			<LI><Text t="boards.gam.objectives.0"/></LI>
			<LI><Text t="boards.gam.objectives.1"/></LI>
			<LI><Text t="boards.gam.objectives.2"/></LI>
			<LI><Text t="boards.gam.objectives.3"/></LI>
			<LI><Text t="boards.gam.objectives.4"/></LI>
			<LI><Text t="boards.gam.objectives.5"/></LI>
		</OL>
	</>;
}
