import { Divider } from "~/Components/Divider";
import { LI, OL } from "~/Components/List";
import { Text } from "~/Components/Text";

export function BoardsGPE() {
	return <>
		<Text variant="h1" className="mx-auto text-center" t="boards.gpe.header"/>
		<Divider/>
		<OL>
			<LI><Text t="boards.gpe.objectives.0"/></LI>
			<LI><Text t="boards.gpe.objectives.1"/></LI>
			<LI><Text t="boards.gpe.objectives.2"/></LI>
			<LI><Text t="boards.gpe.objectives.3"/></LI>
			<LI><Text t="boards.gpe.objectives.4"/></LI>
			<LI><Text t="boards.gpe.objectives.5"/></LI>
		</OL>
	</>;
}
