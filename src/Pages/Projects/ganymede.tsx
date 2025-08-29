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
		<div className="max-sm:flex max-sm:flex-col -mb-4">
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
					<span className="italic">text</span> text
				</Trans>
			</Text>
		</div>

		<Text variant="h2" t="project.ganymede.problem.header"/>
		<Text t="project.ganymede.problem.description.0"/>
		<Text t="project.ganymede.problem.description.1"/>

		<Text variant="h2" t="project.ganymede.process.header"/>
		<Text variant="h3" t="project.ganymede.process.prototypes.header"/>
		<Text t="project.ganymede.process.prototypes.description"/>
		<Text variant="h3" t="project.ganymede.process.iteration.header"/>
		<Text variant="h4" t="project.ganymede.process.iteration.why-ctf.header"/>
		<Text t="project.ganymede.process.iteration.why-ctf.description"/>
		<Text variant="h4" t="project.ganymede.process.iteration.spell-system.header"/>
		<Text t="project.ganymede.process.iteration.spell-system.description.0"/>
		<Text t="project.ganymede.process.iteration.spell-system.description.1"/>
		<Text t="project.ganymede.process.iteration.spell-system.description.2"/>
		<Text variant="h4" t="project.ganymede.process.iteration.ai-system.header"/>
		<Text t="project.ganymede.process.iteration.ai-system.description"/>
		<Text variant="h4" t="project.ganymede.process.iteration.blueprint-spiral.header"/>
		<Text t="project.ganymede.process.iteration.blueprint-spiral.description.0"/>
		<Text t="project.ganymede.process.iteration.blueprint-spiral.description.1"/>

		<Text variant="h2" t="project.ganymede.final-result.header"/>
		<Text variant="h3" t="project.ganymede.final-result.core-gameplay.header"/>
		<Text t="project.ganymede.final-result.core-gameplay.description"/>
		<Text variant="h3" t="project.ganymede.final-result.ai-architecture.header"/>
		<Text t="project.ganymede.final-result.ai-architecture.description"/>
		<Text variant="h3" t="project.ganymede.final-result.tools.header"/>
		<Text t="project.ganymede.final-result.tools.description"/>
		<Text variant="h3" t="project.ganymede.final-result.gallery.header"/>
		<Text variant="h4" t="project.ganymede.final-result.gallery.technical-architecture.header"/>
		<Text t="project.ganymede.final-result.gallery.technical-architecture.description"/>
		<Text variant="h4" t="project.ganymede.final-result.gallery.screenshots.header"/>
		<Text t="project.ganymede.final-result.gallery.screenshots.description"/>

		<Text variant="h2" t="project.ganymede.reflection.header"/>
		<Text variant="h3" t="project.ganymede.reflection.right.header"/>
		<Text t="project.ganymede.reflection.right.description"/>
		<Text variant="h3" t="project.ganymede.reflection.wrong.header"/>
		<Text t="project.ganymede.reflection.wrong.description"/>
		<Text variant="h3" t="project.ganymede.reflection.lessons.header"/>
		<Text t="project.ganymede.reflection.lessons.description"/>

		<Text variant="h2" t="project.ganymede.status.header"/>
		<Text t="project.ganymede.status.description"/>
	</div>;
}
