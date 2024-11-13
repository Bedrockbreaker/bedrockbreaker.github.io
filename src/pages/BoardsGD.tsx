import AutoHeight from "embla-carousel-auto-height"

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/Carousel";
import { ProjectTile } from "../components/ProjectTile";
import { Text } from "../components/Text";

export function BoardsGDPage() {
	return <div className="flex justify-center">
		<div className="flex flex-col max-w-7xl flex-grow">
			<Text variant="h1" className="text-center">
				Game Design
			</Text>
			<Text className="text-center">
				Heyo! Unless you're a subject matter expert at my university, you probably don't want to be here.
				<br/>
				You'll only find my degree requirements and how I've fulfilled them on this page. Pretty boring stuff, ya' know?
			</Text>
			<Carousel
				className="mt-6"
				plugins={[AutoHeight()]}
			>
				<CarouselContent
					className="flex items-start transition-[height] duration-1000 ease-out"
				>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							1. Prototype and complete original games for multiple platforms following the full game production pipeline.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="kingsinheritance" orientation="left-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							2. Create and implement game elements, systems and play mechanics using industry-standard tools, techniques, and production methods, including art or scripting/programming applications.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="yggdrasil" orientation="left-dominant"/>
							<ProjectTile project="graduatedcylinders" orientation="right-dominant"/>
							<ProjectTile project="oldmanwhiskers" orientation="left-dominant"/>
							<ProjectTile project="ganymede" orientation="right-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							3. Demonstrate effective game design practices and techniques within the project scope and context, such as genre, style, platform, and audience.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="kingsinheritance" orientation="left-dominant"/>
							<ProjectTile project="ganymede" orientation="right-dominant"/>
							<ProjectTile project="cardbot" orientation="left-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							4. Demonstrate the ability to evaluate game designs for a variety of gameplay mechanics, game applications, and game genres.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="ganymede" orientation="left-dominant"/>
							<ProjectTile project="kingsinheritance" orientation="right-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							5. Effectively articulate game design elements and mechanics across disciplines utilizing written and verbal communication skills.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="kingsinheritance" orientation="left-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							6. Establish collaboration, mentorship, and professional leadership skills by working with other disciplines to deliver highly polished and completed projects.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="graduatedcylinders" orientation="left-dominant"/>
							<ProjectTile project="oldmanwhiskers" orientation="right-dominant"/>
							<ProjectTile project="kingsinheritance" orientation="left-dominant"/>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="top-10"/>
				<CarouselNext className="top-10"/>
				<CarouselDots className="-top-6"/>
			</Carousel>
		</div>
	</div>;
}