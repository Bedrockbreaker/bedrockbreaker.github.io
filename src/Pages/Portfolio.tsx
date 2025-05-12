import { Divider } from "~/Components/Divider";
import { ProjectCard } from "~/Components/ProjectCard";
import { Text } from "~/Components/Text";

export function Portfolio() {
	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Text variant="h1" className="mx-auto text-center">Portfolio</Text>
		<Text variant="lead" className="mx-auto text-center">
			A curated collection of technical and creative projects across gameplay and tools
			programming as well as systems design.
		</Text>
		<Divider/>
		<div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			<ProjectCard project="ganymede"/>
			<ProjectCard project="graduatedcylinders"/>
			<ProjectCard project="pushr4k"/>
			<ProjectCard project="quiethours"/>
			<ProjectCard project="cardbot"/>
			<ProjectCard project="oldmanwhiskers"/>
			<ProjectCard project="yggdrasil"/>
			<ProjectCard project="tankgame"/>
			<ProjectCard project="partypooper"/>
			<ProjectCard project="tcresearchsolver"/>
			<ProjectCard project="silentnight"/>
			<ProjectCard project="portfolio"/>
		</div>
	</div>;
}
