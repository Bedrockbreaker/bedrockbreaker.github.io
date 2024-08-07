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
		<div className="flex flex-col p-6 max-w-5xl flex-grow">
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
				This is the about page. Site under construction.
			</Text>
		</div>
	</div>;
}