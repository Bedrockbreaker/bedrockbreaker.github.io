import { ProjectList } from "@/components/ProjectTile";
import { Text } from "../components/Text";

export function ProjectsPage() {
	return <div className="flex justify-center">
		<div className="flex flex-col max-w-7xl flex-grow">
			<Text variant="h1" className="text-center">
				Portfolio
			</Text>
			<Text className="text-center">
				Browse through some of my work!
			</Text>
			<ProjectList projects={[
				"graduatedcylinders",
				"ganymede",
				"oldmanwhiskers",
				"partypooper",
				"silentnight",
				"portfolio",
				"tankgame",
				"yggdrasil",
				"kingsinheritance",
				"unoplusplus",
				"cardbot"
			]}/>
		</div>
	</div>;
}