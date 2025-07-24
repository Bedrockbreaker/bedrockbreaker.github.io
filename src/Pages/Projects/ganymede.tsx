import { Trans, useTranslation } from "react-i18next";

import { BadgeList } from "~/Components/BadgeList";
import { Button } from "~/Components/Button";
import { HoverTilt } from "~/Components/HoverTilt";
import { GetUrlIcon } from "~/Components/Icons";
import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";
import { Projects } from "~/Util/ProjectData";

export function Ganymede() {
	const { t } = useTranslation();

	const project = Projects.ganymede;

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Text variant="h1" className="mx-auto text-center -mb-6" t="project.ganymede.title"/>
		<Text variant="h2" className="mb-6" t="project.ganymede.overview.header"/>
		<div className="max-sm:flex max-sm:flex-col">
			<div className="float-right flex flex-col m-6">
				<HoverTilt className="max-w-72 sm:w-72 mx-auto -mt-6">{Projects.ganymede.GetImage()}</HoverTilt>
				<div className="flex flex-col items-center sm:justify-end mt-6 gap-1">
					<Button
						kind="secondary"
						asChild
						aria-label={t(
							"component.project-card.view-homepage-aria-label",
							{ project: t("project.ganymede.title") }
						)}
						className="grow w-full max-w-72"
					>
						<Link href={project.homepage!.url} hasExternalIcon={false}>
							{t("component.project-card.view-homepage")}
							{GetUrlIcon(project.homepage!.icon)}
						</Link>
					</Button>
				</div>
			</div>
			<BadgeList project={project}/>
			<Text>
				<Trans i18nKey="project.ganymede.overview.description">
					<span className="italic inline">text</span> text
				</Trans>
			</Text>
		</div>
		<Text variant="h2" t="project.ganymede.problem.header"/>
		<Text t="project.ganymede.problem.description.0"/>
		<Text t="project.ganymede.problem.description.1"/>
		<Text variant="h2" t="project.ganymede.process.header"/>
		<Text t="project.ganymede.process.description"/>
		<Text variant="h2" t="project.ganymede.solution.header"/>
		<Text t="project.ganymede.solution.description"/>
		<Text variant="h2" t="project.ganymede.reflection.header"/>
		<Text t="project.ganymede.reflection.description"/>
	</div>;
}
