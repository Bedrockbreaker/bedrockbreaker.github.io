import AutoHeight from "embla-carousel-auto-height"

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/Carousel";
import { ProjectTile } from "../components/ProjectTile";
import { Text } from "../components/Text";

export function BoardsGPEPage() {
	return <div className="flex justify-center">
		<div className="flex flex-col max-w-7xl flex-grow">
			<Text variant="h1" className="text-center">
				Game Programming
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
							1. Implement multiple completed games, including 3D games, using common tools, languages, and software for web, console, PC, or mobile platforms.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="ganymede" orientation="left-dominant">
								<Text>
									Ganymede is a network multiplayer FPS capture the flag game created as a final project for GPE104: Introduction to Game Programming.
								</Text>
								<Text>
									Players compete in two teams, vying to capture the other team's flag.
									The team with the most flags captured at the end of the game wins.
								</Text>
							</ProjectTile>
							<ProjectTile project="yggdrasil" orientation="right-dominant"/>
							<ProjectTile project="graduatedcylinders" orientation="left-dominant"/>
							<ProjectTile project="unoplusplus" orientation="right-dominant"/>
							<ProjectTile project="cardbot" orientation="left-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							2. Design, develop, and implement the architecture and infrastructure needed to support a complete game project
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="ganymede" orientation="left-dominant">
								<Text>
									Ganymede is a network multiplayer FPS capture the flag game created as a final project for GPE104: Introduction to Game Programming.
								</Text>
								<Text>
									The game includes a main menu that allows the player to enter a username.
									Then, they can either host or join a new game, (or quit entirely).
								</Text>
								<Text>
									After hosting/joining a game, players are sorted into two competing teams.
									The 10 minute match timer is paused until any player leaves their spawn area.
									At any time during the game, players can pause their local game, and quit or resume.
									After the match ends, a leaderboard is displayed, with stats listed for each player, separated by team.
									Players can then return to the main menu to either quit or play again.
								</Text>
							</ProjectTile>
							<ProjectTile project="oldmanwhiskers" orientation="right-dominant"/>
							<ProjectTile project="unoplusplus" orientation="left-dominant"/>
							<ProjectTile project="cardbot" orientation="right-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							3. Implement and analyze fundamental data structures and algorithms associated with game applications supporting gameplay mechanics.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="ganymede" orientation="left-dominant">
								<Text>
									Ganymede is a network multiplayer FPS capture the flag game created as a final project for GPE104: Introduction to Game Programming.
								</Text>
								<Text>
									The game includes AI-controlled NPCs that can move, shoot, capture flags, and die.
									Throughout the map is a hand-built network of "key points" which form a directed graph of nodes.
									The AI then uses a stochastic A* pathfinding algorithm to navigate the graph, determined by the softmax of edge weights between neighboring nodes.
								</Text>
								<Text>
									Players have various spells they can cast when they shoot, and can be afflicted by different status effects.
									These spells and status effects are designed with OOP in mind, creating a heiarchy of branching "sub-types" that concrete implementations can inherit from.
								</Text>
							</ProjectTile>
							<ProjectTile project="oldmanwhiskers" orientation="right-dominant"/>
							<ProjectTile project="yggdrasil" orientation="left-dominant"/>
							<ProjectTile project="graduatedcylinders" orientation="right-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							4. Use software development processes to analyze a project problem and to design, build and test a corresponding software solution.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="ganymede" orientation="left-dominant">
								<Text>
									Ganymede is a network multiplayer FPS capture the flag game created as a final project for GPE104: Introduction to Game Programming.
								</Text>
								<Text>
									AI-controlled NPCs in Ganymede will attempt to capture the opposing team's flag.
									To achieve this, they use a pathfinding algorithm to navigate the environment.
									However, using a standard pathfinding algorithm like A* would mean the AI would always choose the shortest path, which isn't necessarily fun or interesting.
								</Text>
								<Text>
									Instead, the traditional A* algorithm was modified to select a node from the open set (nodes yet to be "explored" for pathfinding) based on a random distribution determined by the softmax of edge weights between neighboring nodes.
									However, this caused another issue with numerical stability.
								</Text>
								<Text>
									Distances in UE5 are measured in centimeters, which are too large for the exponential function used in the softmax.
									To solve this, the largest distance in the open set was subtracted from each value beforehand, ensuring the range of values from the exponential was always between 0 and 1.
								</Text>
								<Text>
									Finally, to control the randomness of the pathfinding algorithm, a "temperature" parameter was added to the softmax function.
									This controls how much the optimal path is favored over other paths, with higher temperatures yielding more random paths.
								</Text>
							</ProjectTile>
							<ProjectTile project="yggdrasil" orientation="right-dominant"/>
							<ProjectTile project="graduatedcylinders" orientation="left-dominant"/>
							<ProjectTile project="unoplusplus" orientation="right-dominant"/>
							<ProjectTile project="cardbot" orientation="left-dominant"/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<Text variant="h2" className="mt-10 text-center border-accentblue dark:border-accentred">
							5. Demonstrate development skills using multiple programming languages, development environments, and platforms, including advanced and/or experimental topics in game programming.
						</Text>
						<div
							className="flex flex-col gap-6 mt-10"
						>
							<ProjectTile project="ganymede" orientation="left-dominant">
								<Text>
									Ganymede is a network multiplayer FPS capture the flag game created as a final project for GPE104: Introduction to Game Programming.
								</Text>
								<Text>
									The game includes AI-controlled NPCs that can move, shoot, capture flags, and die.
									Their behavior is determined by a behavior tree that selects tasks based on the AI's current state and priorities.
									A custom AI controller, custom behavior tasks, and custom behavior decorators (precondition checks) were created to support the behavior tree.
								</Text>
							</ProjectTile>
							<ProjectTile project="portfolio" orientation="right-dominant"/>
							<ProjectTile project="yggdrasil" orientation="left-dominant"/>
							<ProjectTile project="unoplusplus" orientation="right-dominant"/>
							<ProjectTile project="cardbot" orientation="left-dominant"/>
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