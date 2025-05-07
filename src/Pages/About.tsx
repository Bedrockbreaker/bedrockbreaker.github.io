import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "~/Components/Carousel";
import { HoverTilt } from "~/Components/HoverTilt";
import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import { useAccessibility } from "~/Hooks/useAccessibility";

import HomepageLogo_ThemeDark from "~/Assets/Misc/HomepageLogo_ThemeDark.png";
import HomepageLogo_ThemeLight from "~/Assets/Misc/HomepageLogo_ThemeLight.png";

export function About() {
	const { prefersReducedMotion } = useAccessibility();
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();

	useEffect(() => {
		if (carouselApi === undefined) return;

		carouselApi.reInit({}, [
			Autoplay({
				active: true,
				delay: 5000,
				stopOnInteraction: false,
				stopOnFocusIn: true,
				stopOnMouseEnter: true,
				jump: prefersReducedMotion === "reduce"
			})
		]);
	}, [carouselApi, prefersReducedMotion]);

	return <div className="flex justify-center">
		<div className="flex flex-col p-6 max-w-7xl grow overflow-x-hidden">
			<div className="flex flex-row gap-6 -mt-6">
				<div className="mix-w-max text-center pt-6">
					<Text variant="h1">Jenson Searle</Text>
					<Text variant="h3">Tools & Gameplay Programmer</Text>
					<div className="flex justify-center mt-6">
						<HoverTilt>
							<ThemedImage
								// className="[image-rendering:pixelated]"
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
					className="grow max-w-3xl"
				>
					<CarouselContent>
						<CarouselItem>
							<Text>Test</Text>
						</CarouselItem>
						<CarouselItem>
							<Text>Test 2</Text>
						</CarouselItem>
						<CarouselItem>
							<Text>Test 3</Text>
						</CarouselItem>
						<CarouselItem>
							<Text>Test 4</Text>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
			<Text variant="lead" className="text-center">
				Any sufficiently advanced technology is indistinguishable from magic.
			</Text>
			<Text>
				Heyo! I'm a game developer with a dual background in programming and design.
				I specialize in tools development and gameplay systems.
			</Text>
			<Text>
				I've worked across a broad tech stack -- from fullstack web development to custom game tools
				-- and am always eager to learn new things. My experience spans Unreal Engine,
				Unity, C++, C#, and TypeScript. I also maintain a few open-source projects,
				including a popular Minecraft mod with {" "}
				{(Math.floor(52000 / 1000) * 1000).toLocaleString()}+ downloads.
			</Text>
			<Text>
				Currently, I'm working on a few projects, including a large, narrative-driven
				action-adventure game with Zelda-like puzzles and level design, a{" "}
				<Link href="https://jellyfin.org/">Jellyfin</Link>{" "} integration for managing
				song libraries, and a custom modding tool for{" "}
				<Link href="https://char64.itch.io/partyproject">Party Project</Link>.
				I'm also looking to join a Japanese game studio, where I can develop games as a team.
			</Text>
			<Text>
				Contact me at{" "}
				<Link href="mailto:searlejenson@gmail.com" hasExternalIcon={false}>searlejenson@gmail.com</Link>.
			</Text>
			<Text variant="muted">
				Note: Site under construction.
			</Text>
		</div>
	</div>;
}
