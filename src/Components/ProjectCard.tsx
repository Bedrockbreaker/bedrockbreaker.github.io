import { useTranslation } from "react-i18next";

import { Badge } from "./Badge";
import { Button } from "./Button";
import { HoverTilt } from "./HoverTilt";
import { GetSourceTranslationKey, GetUrlIcon } from "./Icons";
import { Link } from "./Link";
import { Text } from "./Text";
import { GetCategoryFromTag, Project } from "~/Util/Project";
import { GetProjectKey, Projects } from "~/Util/ProjectData";

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
				<Text variant="h4" className="@smd:hidden">{t(`project.${GetProjectKey(project)}.title`)}</Text>
			</div>
			<div className="w-full max-w-64 @smd:max-w-none @smd:w-1/3 flex items-center justify-center">
				<HoverTilt>{project.GetImage()}</HoverTilt>
			</div>
			<div className="w-full @smd:w-2/3 flex flex-col gap-6 @smd:-mt-6">
				<Text variant="h4" className="hidden @smd:block">{t(`project.${GetProjectKey(project)}.title`)}</Text>
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
								aria-label={t("component.project-card.view-tags", { tag: t("tags." + tag) })}
							>
								<Badge kind={GetCategoryFromTag(tag).badgeKind}>{t("tags." + tag)}</Badge>
							</Link>
						</HoverTilt>;
					})}
				</div>
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
						: undefined}
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
