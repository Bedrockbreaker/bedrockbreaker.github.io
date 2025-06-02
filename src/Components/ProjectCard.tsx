import { useTranslation } from "react-i18next";

import { Badge } from "./Badge";
import { Button } from "./Button";
import { HoverTilt } from "./HoverTilt";
import { Link } from "./Link";
import { Text } from "./Text";
import { GetCategoryFromTag, Project } from "~/Util/Project";
import { Projects } from "~/Util/ProjectData";

export function ProjectCard({project}: {project: Project | keyof typeof Projects}) {
	if (typeof project === "string") project = Projects[project];
	const { t } = useTranslation();

	return <div className="@container">
		<article
			className={
				"flex flex-col @smd:flex-row items-center rounded-md border shadow-md p-6 "
					+ "gap-6 bg-dark transition-colors"
			}
		>
			<div className="-mt-6">
				<Text variant="h4" className="@smd:hidden">{project.title}</Text>
			</div>
			<div className="w-full max-w-64 @smd:max-w-none @smd:w-1/3 flex items-center justify-center">
				<HoverTilt>{project.GetImage()}</HoverTilt>
			</div>
			<div className="w-full @smd:w-2/3 flex flex-col gap-6 @smd:-mt-6">
				<Text variant="h4" className="hidden @smd:block">{project.title}</Text>
				<div className="flex flex-row flex-wrap gap-1">
					{project.tags.map(tag => {
						return <HoverTilt
							key={tag}
							allowDeviceRotation={false}
							intensity={5}
							disableShadow // Disable the default shadow, apply a different one
							className="hover:drop-shadow-md select-none"
						>
							<Link
								href={"/portfolio"}
								search={"?tags=" + encodeURIComponent(tag)}
								aria-label={t("component.project-card.view-tags", { tag })}
							>
								<Badge kind={GetCategoryFromTag(tag).badgeKind}>{tag}</Badge>
							</Link>
						</HoverTilt>;
					})}
				</div>
				{project.GetDescription()}
				<div className="flex flex-col @sm:flex-row mt-auto gap-1">
					{project.homepage
						? <Button
							kind="outline"
							asChild
							aria-label={t(
								"component.project-card.view-homepage-aria-label",
								{ project: project.title }
							)}
						>
							<Link href={project.homepage}>{t("component.project-card.view-homepage")}</Link>
						</Button>
						: undefined
					}
					{project.sourceUrl
						? <Button
							kind="outline"
							asChild
							aria-label={t(
								"component.project-card.view-source-aria-label",
								{ project: project.title }
							)}
						>
							<Link href={project.sourceUrl}>{t("component.project-card.view-source")}</Link>
						</Button>
						: undefined
					}
				</div>
			</div>
		</article>
	</div>;
}
