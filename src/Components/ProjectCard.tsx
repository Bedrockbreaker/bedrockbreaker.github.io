import { useTranslation } from "react-i18next";

import { Button } from "./Button";
import { HoverTilt } from "./HoverTilt";
import { GetSourceTranslationKey, GetUrlIcon } from "./Icons";
import { Link } from "./Link";
import { Text } from "./Text";
import { Project } from "~/Util/Project";
import { GetProjectKey, Projects } from "~/Util/ProjectData";
import { BadgeList } from "./BadgeList";

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
				<Text
					variant="h4"
					t={`project.${GetProjectKey(project)}.title`}
					className="@smd:hidden"
				/>
			</div>
			<div className="w-full max-w-64 @smd:max-w-none @smd:w-1/3 flex items-center justify-center">
				<HoverTilt>{project.GetImage()}</HoverTilt>
			</div>
			<div className="w-full @smd:w-2/3 flex flex-col gap-6 @smd:-mt-6">
				<Text
					variant="h4"
					className="hidden @smd:block"
					t={`project.${GetProjectKey(project)}.title`}
				/>
				<BadgeList project={project}/>
				{project.GetDescription()}
				<div className="flex flex-col @sm:flex-row mt-auto gap-1">
					{project.hasDetails
						? <Button
							kind="outline"
							asChild
							aria-label={t(
								"component.project-card.view-details-aria-label",
								{ project: t(`project.${GetProjectKey(project)}.title`) }
							)}
						>
							<Link href={`/portfolio/${GetProjectKey(project)}`}>
								{t("component.project-card.view-details")}
							</Link>
						</Button>
						: undefined
					}
					{project.homepage !== undefined
						? <Button
							kind="outline"
							asChild
							aria-label={t(
								"component.project-card.view-homepage-aria-label",
								{ project: t(`project.${GetProjectKey(project)}.title`) }
							)}
						>
							<Link href={project.homepage.url} hasExternalIcon={false}>
								{t("component.project-card.view-homepage")}
								{GetUrlIcon(project.homepage.icon)}
							</Link>
						</Button>
						: undefined
					}
					{project.source !== undefined
						? <Button
							kind="outline"
							asChild
							aria-label={t(
								"component.project-card.view-source-aria-label",
								{ project: t(`project.${GetProjectKey(project)}.title`) }
							)}
						>
							<Link href={project.source.url} hasExternalIcon={false}>
								{t(GetSourceTranslationKey(project.source.icon))}
								{GetUrlIcon(project.source.icon)}
							</Link>
						</Button>
						: undefined
					}
				</div>
			</div>
		</article>
	</div>;
}
