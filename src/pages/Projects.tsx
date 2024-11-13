import { ProjectTile } from "@/components/ProjectTile";
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
			<div
				className="flex flex-col gap-6 mt-10"
			>
				<ProjectTile project="yggdrasil" orientation="left-dominant"/>
				<ProjectTile project="oldmanwhiskers" orientation="right-dominant"/>
				<ProjectTile project="ganymede" orientation="left-dominant"/>
				<ProjectTile project="graduatedcylinders" orientation="right-dominant"/>
				<ProjectTile project="portfolio" orientation="left-dominant"/>
				<ProjectTile project="kingsinheritance" orientation="right-dominant"/>
				<ProjectTile project="unoplusplus" orientation="left-dominant"/>
				<ProjectTile project="cardbot" orientation="right-dominant"/>
			</div>
		</div>
	</div>;
}