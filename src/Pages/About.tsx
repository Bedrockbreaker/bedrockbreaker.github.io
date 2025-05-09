import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "~/Components/Carousel";
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
import { Button } from "~/Components/Button";

export function About() {
	const { prefersReducedMotion } = useAccessibility();
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();

	useEffect(() => {
		if (carouselApi === undefined) return;

		carouselApi.reInit({}, [
			Autoplay({
				active: true,
				delay: 7000,
				stopOnInteraction: false,
				stopOnFocusIn: true,
				stopOnMouseEnter: true,
				jump: prefersReducedMotion === "reduce"
			})
		]);
	}, [carouselApi, prefersReducedMotion]);

	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<div className="flex flex-row gap-6 -mt-6">
			<div className="min-w-max text-center pt-6">
				<Text variant="h1">Jenson Searle</Text>
				<Text variant="h3">Tools & Gameplay Programmer</Text>
				<div className="flex justify-center mt-6">
					<HoverTilt>
						<ThemedImage
							sources={{light: HomepageLogo_ThemeLight, dark: HomepageLogo_ThemeDark}}
							alt="A pixel art green dragon wrapped around a chess pawn."
							width={256}
							height={256}
						/>
					</HoverTilt>
				</div>
			</div>
			<Carousel
				opts={{loop: true}}
				setApi={setCarouselApi}
				className="grow max-w-[832px]"
			>
				<CarouselContent>
					<CarouselItem><ProjectCard project="pushr4k"/></CarouselItem>
					<CarouselItem><ProjectCard project="yggdrasil"/></CarouselItem>
					<CarouselItem><ProjectCard project="ganymede"/></CarouselItem>
					<CarouselItem><ProjectCard project="graduatedcylinders"/></CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
		<Text variant="lead" className="text-center">
			Any sufficiently advanced technology is indistinguishable from magic.
		</Text>
		<Text variant="muted" className="text-right mr-6">- Arthur C. Clarke</Text>
		<Divider/>
		<article className="mt-6">
			<Text variant="h4" className="-mb-6">About Me</Text>
			<Text className="-mt-6">
				I'm a game developer with a background spanning both engineering and design.
				I specialize in tools development and gameplay systems, with a strong focus on
				cross-disciplinary collaboration.
			</Text>
			<Text>
				My work spans from full-stack web applications to internal game development tooling.
				I've contributed to projects using Unreal Engine, Unity, and custom engines,
				working primarily in C++, C#, and TypeScript. I also maintain open-source tools and
				have authored a Minecraft mod with over 50,000 downloads.
			</Text>
			<Text>
				I'm also seeking opportunities to join a Japanese game studio where I can contribute
				to system- and narrative-driven gameplay experiences as a team. My Japanese
				proficiency is about at an N4-N3 level, and is climbing higher every day. Long-term,
				I wish to become a Japanese citizen.
			</Text>
			<Text variant="h4" className="mt-12 -mb-6">Current Projects</Text>
			<Text>
				I'm developing several long-term systems projects focused on narrative,
				interoperability, and extensibility, including:
			</Text>
			<UL>
				<LI>
					A systemic narrative-driven action-adventure game, supporting
					state-dependent puzzle logic and save / load progression systems, designed
					to decouple narrative structure from level scripting -- enabling non-linear
					storytelling and reusable narrative modules.
				</LI>
				<LI>
					A multi-part media tool for managing music libraries in{" "}
					<Link href="https://jellyfin.org/">Jellyfin</Link>, solving the problem of
					fragmented personal music libraries by allowing users to aggregate multiple
					metadata sources and build playlists from them.
				</LI>
				<LI>
					A modding framework for the chaotic multiplayer party game{" "}
					<Link href="https://char64.itch.io/partyproject">Party Project</Link>,
					allowing users to create and share custom boards, events, and minigames
					with runtime safety.
				</LI>
			</UL>
			<Text variant="h4" className="mt-12 -mb-6">Contact</Text>
			<Text>
				Contact me directly at: <Button
					kind="outline"
					asChild
					aria-label="Email me"
				>
					<Link
						href="mailto:searlejenson@gmail.com"
						hasExternalIcon={false}
						hasUnderline={false}
					>
						searlejenson@gmail.com
					</Link>
				</Button>
			</Text>
			<Text>
				Explore my <Link href="/portfolio">portfolio</Link> to see examples of my work in
				action.
			</Text>
		</article>
	</div>;
}
