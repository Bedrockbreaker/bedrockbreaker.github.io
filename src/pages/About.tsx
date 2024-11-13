import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import { Text } from "../components/Text";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "../components/ui/Carousel";
import { HoverTilt } from "../components/HoverTilt";
import { projects, ProjectTile } from "../components/ProjectTile";
import { useAccessibility } from "../hooks/useAccessibility";

import profileURL from "../assets/profile.png";

export function AboutPage() {
	const { prefersReducedMotion } = useAccessibility();
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!carouselApi) return;

		carouselApi.reInit({}, [Autoplay({
			delay: 5000,
			stopOnInteraction: false,
			stopOnFocusIn: true,
			stopOnMouseEnter: true,
			jump: prefersReducedMotion === "reduce" ? true : false
		})]);
	}, [prefersReducedMotion, carouselApi]);

	return <div className="flex justify-center">
		<div className="flex flex-col p-6 max-w-7xl flex-grow overflow-x-hidden">
			<div className="flex flex-row gap-6">
				<div className="min-w-max text-center">
					<Text variant="h1">
						Jenson Searle
					</Text>
					<Text>
						Game Programmer & Designer | Fullstack Developer
					</Text>
					<div className="flex justify-center mt-6">
						<HoverTilt>
							<img
								src={profileURL}
								alt="Profile picture"
								width={128}
								height={128}
								style={{imageRendering: "pixelated"}}
							/>
						</HoverTilt>
					</div>
				</div>
				<Carousel
					// TODO: add pause, next, prev buttons
					// TODO: add carousel dots
					opts={{loop: true}}
					setApi={setCarouselApi}
					className="flex-grow"
				>
					<CarouselContent>
						{Object.entries(projects)
							.filter(([_name, project]) => project.isFeatured)
							.map(([name, project]) => {
							return <CarouselItem key={name}>
								<ProjectTile project={project} />
							</CarouselItem>;
						})}
					</CarouselContent>
				</Carousel>
			</div>
			<Text>
				I'm a game programmer and designer based in the US,
				currently working as a fullstack developer at{" "}
				<Text variant="a" to="https://www.communitylifehelp.org/" isExternal>Community Life Help</Text>.
				<br/>
				Though, I'd love to someday live and work in Japan.
				<br/>
				Contact me at{" "}
				<Text variant="a" to="mailto:searlejenson@gmail.com">searlejenson@gmail.com</Text>.
				<br/>
				Note: Site under construction.
			</Text>
		</div>
	</div>;
}