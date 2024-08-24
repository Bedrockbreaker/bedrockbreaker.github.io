import { Carousel, CarouselContent, CarouselItem } from "../components/ui/Carousel";
import { ProjectTile } from "../components/ProjectTile";
import { Text } from "../components/Text";

export function BoardsGPEPage() {
	return <div className="flex justify-center">
		<div className="flex flex-col max-w-5xl flex-grow">
			<Text variant="h1" className="text-center">
				Game Programming
			</Text>
			<Text className="text-center">
				Heyo! Unless you're a subject matter expert at my university, you probably don't want to be here.
				<br/>
				You'll only find my degree requirements and how I've fulfilled them on this page. Pretty boring stuff, ya' know?
			</Text>
			<Carousel
					// TODO: add next, prev buttons
					// TODO: add carousel dots
				>
					<CarouselContent>
						<CarouselItem>
							<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
								1. Implement multiple completed games, including 3D games, using common tools, languages, and software for web, console, PC, or mobile platforms.
							</Text>
							<div
								className="flex flex-col gap-6 mt-10"
							>
								<ProjectTile project={"ganymede"} orientation="left-dominant">
									<Text>
										Ganymede is a network multiplayer FPS capture the flag game created as a final project for GPE104: Introduction to Game Programming.
									</Text>
									<Text>
										Players compete in two teams, vying to capture the other team's flag.
										The team with the most flags captured at the end of the game wins.
									</Text>
								</ProjectTile>
								<ProjectTile project={"yggdrasil"} orientation="right-dominant"/>
								<ProjectTile project={"graduatedcylinders"} orientation="left-dominant"/>
								<ProjectTile project={"unoplusplus"} orientation="right-dominant"/>
								<ProjectTile project={"cardbot"} orientation="left-dominant"/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
								2. Design, develop, and implement the architecture and infrastructure needed to support a complete game project
							</Text>
						</CarouselItem>
						<CarouselItem>
							<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
								3. Implement and analyze fundamental data structures and algorithms associated with game applications supporting gameplay mechanics.
							</Text>
						</CarouselItem>
						<CarouselItem>
							<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
								4. Use software development processes to analyze a project problem and to design, build and test a corresponding software solution.
							</Text>
						</CarouselItem>
						<CarouselItem>
							<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
								5. Demonstrate development skills using multiple programming languages, development environments, and platforms, including advanced and/or experimental topics in game programming.
							</Text>
						</CarouselItem>
						<CarouselItem>
							<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
								6. Establish collaboration, mentorship, and professional leadership skills by working with other disciplines to deliver highly polished and completed projects.
							</Text>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
		</div>
	</div>;
}