import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Button } from "~/Components/Button";
import { Card } from "~/Components/Card";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselDot,
	CarouselItem,
	CarouselNext,
	CarouselPause,
	CarouselPrevious
} from "~/Components/Carousel";
import { Divider } from "~/Components/Divider";
import { HoverTilt } from "~/Components/HoverTilt";
import { Link } from "~/Components/Link";
import { LI, UL } from "~/Components/List";
import { ProjectCard } from "~/Components/ProjectCard";
import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import { useAccessibility } from "~/Hooks/useAccessibility";

import HomepageLogo_ThemeDark from "~/Assets/UI/HomepageLogo_ThemeDark.png";
import HomepageLogo_ThemeLight from "~/Assets/UI/HomepageLogo_ThemeLight.png";

export function About() {
	const { t } = useTranslation();
	const { prefersReducedMotion } = useAccessibility();
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();

	useEffect(() => {
		if (carouselApi === undefined) return;

		carouselApi.reInit({}, [
			Autoplay({
				active: true,
				delay: 7000,
				// TODO: file bug report with embla
				// When the carousel is stopped and the user hovers/focuses on it,
				// autoplay starts up again after mouse leave/defocus.
				// However, this seems currently intentional:
				// (see https://www.embla-carousel.com/plugins/autoplay/#stoponinteraction)
				// This feels unintuive though. Not expected behavior to me, at least.
				//
				// stopOnInteraction: false,
				// stopOnFocusIn: true,
				// stopOnMouseEnter: true,
				jump: prefersReducedMotion === "reduce"
			})
		]);
	}, [carouselApi, prefersReducedMotion]);

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<div className="flex flex-row flex-wrap gap-6 justify-center -mt-6">
			<div className="flex flex-col md:max-xl:flex-row sm:max-xl:min-w-full xl:min-w-max text-center pt-6 justify-center">
				<div className="my-auto">
					<Text variant="h1" t="about.title"/>
					<Text variant="h3" t="about.subtitle"/>
				</div>
				<div className="flex justify-center mt-6">
					<HoverTilt>
						<ThemedImage
							sources={{light: HomepageLogo_ThemeLight, dark: HomepageLogo_ThemeDark}}
							alt={t("about.hero-alt")}
							width={256}
							height={256}
						/>
					</HoverTilt>
				</div>
			</div>
			<Carousel
				opts={{loop: true}}
				setApi={setCarouselApi}
				className="grow flex flex-col max-w-full big:max-w-[832px] mt-6"
			>
				<CarouselContent>
					<CarouselItem><ProjectCard project="ganymede"/></CarouselItem>
					<CarouselItem><ProjectCard project="graduatedcylinders"/></CarouselItem>
					<CarouselItem><ProjectCard project="katalyst"/></CarouselItem>
					<CarouselItem><ProjectCard project="memento"/></CarouselItem>
					<CarouselItem><ProjectCard project="cardbot"/></CarouselItem>
				</CarouselContent>
				<div className="flex flex-row mt-1 gap-1 items-center">
					<CarouselPrevious/>
					<CarouselNext/>
					<CarouselPause/>
					<div className="grow"/>
					{carouselApi?.scrollSnapList().map((_, index) => {
						return <CarouselDot key={index} snapIndex={index}/>;
					})}
				</div>
			</Carousel>
		</div>
		<Text variant="lead" className="text-center" t="about.quote"/>
		<Text variant="muted" className="text-right mr-6 mt-2" t="about.quote-author"/>
		<Divider/>
		<article className="mt-6">
			<Text variant="h4" className="-mb-6" t="about.about-me.header"/>
			<Text t="about.about-me.paragraphs.0"/>
			<Text t="about.about-me.paragraphs.1"/>
			<Text variant="h4" className="mt-12 -mb-6" t="about.current-projects.header"/>
			<Text t="about.current-projects.paragraphs.0"/>
			<UL>
				<LI>{t("about.current-projects.paragraphs.1")}</LI>
				<LI>
					<Trans i18nKey="about.current-projects.paragraphs.2">
						text <Link href="https://jellyfin.org/">text</Link> text
					</Trans>
				</LI>
				<LI>
					<Trans i18nKey="about.current-projects.paragraphs.3">
						text <Link href="https://char64.itch.io/partyproject">text</Link> text
					</Trans>
				</LI>
			</UL>
			<Text variant="h4" className="mt-12 -mb-6" t="about.working-in-japan.header"/>
			<Text t="about.working-in-japan.paragraphs.0"/>
			<Text t="about.working-in-japan.paragraphs.1"/>
			<Text t="about.working-in-japan.paragraphs.2"/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-12">
				<Card
					borderStyle="1"
					className="motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
				>
					<Text variant="h4" t="about.cards.0.header"/>
					<Text t="about.cards.0.description"/>
					<Button kind="outline" asChild className="mt-6">
						<Link href="/portfolio">{t("about.cards.0.call-to-action")}</Link>
					</Button>
				</Card>
				<Card
					borderStyle="5"
					className="motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
				>
					<Text variant="h4" t="about.cards.1.header"/>
					<Text t="about.cards.1.description"/>
					<Button kind="outline" asChild className="mt-6">
						<Link href="/resume">{t("about.cards.1.call-to-action")}</Link>
					</Button>
				</Card>
				<Card
					borderStyle="3"
					className={
						"md:max-lg:col-span-2 "
						+ "motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1"
					}
				>
					<Text variant="h4" t="about.cards.2.header"/>
					<Text t="about.cards.2.description"/>
					<Button kind="outline" asChild className="mt-6">
						<Link href="mailto:searlejenson@gmail.com" hasExternalIcon={false}>
							{t("about.cards.2.call-to-action")}
						</Link>
					</Button>
				</Card>
			</div>
		</article>
	</div>;
}
