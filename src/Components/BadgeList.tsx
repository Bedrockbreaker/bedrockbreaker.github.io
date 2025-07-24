import { useTranslation } from "react-i18next";

import { Badge } from "./Badge";
import { HoverTilt } from "./HoverTilt";
import { Link } from "./Link";
import { GetCategoryFromTag, Project } from "~/Util/Project";

export function BadgeList({project, className = ""}: {project: Project, className?: string}) {
	const { t } = useTranslation();

	return <div className={"flex flex-row flex-wrap gap-1 " + className}>
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
	</div>;
}
