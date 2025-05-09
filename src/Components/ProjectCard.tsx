import { Badge } from "./Badge";
import { Button } from "./Button";
import { HoverTilt } from "./HoverTilt";
import { Link } from "./Link";
import { Text } from "./Text";
import { GetCategoryFromTag, Project } from "~/Util/Project";
import { Projects } from "~/Util/ProjectData";

export function ProjectCard({project}: {project: Project | keyof typeof Projects}) {
	if (typeof project === "string") project = Projects[project];

	return <article className="flex flex-row rounded-md border shadow-md p-6 gap-6 mt-6 bg-dark">
		<div className="w-1/3 flex items-center justify-center">
			<HoverTilt>{project.GetImage()}</HoverTilt>
		</div>
		<div className="w-2/3 flex flex-col gap-6">
			<Text variant="h4">{project.title}</Text>
			<div className="flex flex-row flex-wrap gap-1">
				{project.tags.map(tag => {
					return <HoverTilt
						key={tag}
						allowDeviceRotation={false}
						intensity={5}
						disableShadow // Disable the default shadow, apply a different one
						className="hover:drop-shadow-md select-none"
					>
						<Badge kind={GetCategoryFromTag(tag).badgeKind}>{tag}</Badge>
					</HoverTilt>;
				})}
			</div>
			{project.GetDescription()}
			<div className="flex mt-auto gap-1">
				{project.homepage
					? <Button
						kind="outline"
						asChild
						aria-label="View project homepage"
					>
						<Link href={project.homepage}>View Project</Link>
					</Button>
					: undefined
				}
				{project.sourceUrl
					? <Button
						kind="outline"
						asChild
						aria-label="View project source"
					>
						<Link href={project.sourceUrl}>View Source</Link>
					</Button>
					: undefined
				}
			</div>
		</div>
	</article>;
}
