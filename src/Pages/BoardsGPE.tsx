import { Divider } from "~/Components/Divider";
import { HoverTilt } from "~/Components/HoverTilt";
import { LI, OL } from "~/Components/List";
import { ProjectCard } from "~/Components/ProjectCard";
import { Text } from "~/Components/Text";

import CardBotGameplay from "~/Assets/Projects/CardBot/Gameplay.png";

export function BoardsGPE() {
	return <>
		<Text variant="h1" className="mx-auto text-center" t="boards.gpe.header"/>
		<Divider/>
		<OL className="marker:text-2xl marker:font-semibold marker:tracking-tight">
			<div className="border-l-2 border-tag-1-bg pl-8">
				<LI>
					<Text t="boards.gpe.objectives.0" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>3D game. See project tags.</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>3D game. See project tags.</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>2D game. See project tags.</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.tankgame.title" variant="h4"/>
							<Text>3D game. See project tags.</Text>
							<ProjectCard project="tankgame"/>
						</LI>
						<LI>
							<Text t="project.oldmanwhiskers.title" variant="h4"/>
							<Text>3D game. See project tags.</Text>
							<ProjectCard project="oldmanwhiskers"/>
						</LI>
						<LI>
							<Text t="project.gachagoobers.title" variant="h4"/>
							<Text>2D game. See project tags.</Text>
							<ProjectCard project="gachagoobers"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<Text>2D game. See project tags.</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>3D game. See project tags.</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-2-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gpe.objectives.1" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>
								Starts in the main menu, with a text field to input the Host IP address or to host the
								game. The match timer at the top of the screen initially says "Leave Spawn to Start
								Match," allowing multiple players to join. Throughout the game, kills and flag captures
								appear in the upper right corner. Players can also press escape during a match to show
								the "pause" menu, with a resume and quit button. Once the match ends after 10 minutes,
								a results screen appears, showing a leaderboard with the number of flag captures and
								kills for each player, as well as the winning team. Players can then choose to play
								again or return to the main menu.
							</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>
								Contains several help commands to indicate how to play the various games it supports.
								The bot's status is set to "/help" to nudge players to use these commands. Starting a
								game walks the player through the process of creating a game and inviting players,
								including setting optional game rules, and then waits for players to join. Once all
								players have join, the game starts, showing additional help commands to indicate how to
								play.
							</Text>
							<div className="grid grid-cols-1 smd:grid-cols-2 gap-6">
								<HoverTilt className="my-auto">
									<img src={CardBotGameplay} className="rounded-md"/>
								</HoverTilt>
								<ProjectCard project="cardbot"/>
							</div>
						</LI>
						<LI>
							<Text t="project.tankgame.title" variant="h4"/>
							<Text>
								Main menu has a settings screen to adjust Main, SFX, and Music volumes. There is also a
								text field to input a specific seed for RNG, or to leave blank for the daily seed.
								There is an additional split screen mode to allow for two players, toggleable on the
								main menu. Pressing escape will pause the game and show a full screen pause menu,
								allowing players to return to the main menu.
							</Text>
							<ProjectCard project="tankgame"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>
								There is a title screen, which leads to a settings/song select screeen. Volume,
								input offset adjustment, scroll speed, and extra particle options can be adjusted here.
								There is also a credits button with a rolling credits screen, and a persistent
								scoreboard for each song, including the song's title, BPM, and difficulty. During a
								song, the last 50 inputs' timings are shown (relative to a perfect input), the average
								timing, as well as the current combo, score, overall accuracy, and time remaining. After
								the song, a results screen is shown, with the song details, longest combo, accuracy,
								score, number of misses, and overall rank. A back button returns to the song select
								screen.
							</Text>
							<ProjectCard project="pushr4k"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<Text>
								The main menu has a settings screen to adjust Main, SFX, and Music volumes. There is
								also a credits screen, and play button to start a game. When a player completes an
								ending (whether win or loss), a button appears to return to the main menu.
							</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-3-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gpe.objectives.2" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>
								Makes extensive use of Graph Theory to optimize storing save states in a directed
								acyclic graph. A Save History object is used to query metadata about the loaded save
								slot, such as branching factor, depth, kinds of changes made to a particular object,
								etc.
							</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>
								Contains an overengineered data processing pipeline to allow for a highly configurable
								and extensible spell system. Any particular spell can be broken down into a series of
								"deliveries," which generate data to be used for spell effects. Pathfinding for AI
								entities also uses a custom implementation of the A* algorithm, which explores nodes
								based on a softmax function. See Details link.
							</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>
								Implements a moddable framework to allow for arbitrary chess pieces to be added. Makes
								heavy use of factory patterns, builder patterns, and dependency injection to allow for
								the degree of modularity required.
							</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>
								Implements a from-scratch 3D renderer using projection matrices to visualize a subset of
								the game world within a UI 2D canvas. Uses a custom networking packet system to allow
								for communication between connected clients and the server. Uses a modified shunting
								yard algorithm to parse and evaluate string expressions. Converts textures to the
								CIE*LAB color space to find the best corresponding text color for a given texture.
								Creates a custom registry to allow for other mods to extend the existing systems. Uses
								proper localization practices, and has been translated into multiple languages by the
								community.
							</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.tcresearchsolver.title" variant="h4"/>
							<Text>
								Basically the purest example of algorithms and data structures here.
								Implements the algorithm from the Dreyfus-Wagner research paper to solve the Steiner
								tree problem on a state-restricted graph (positionally adjacent nodes may not
								necessarily be connected). In the case of 2 terminals, the algorithm degenerates into a
								shortest path problem (A*).
							</Text>
							<ProjectCard project="tcresearchsolver"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>
								Built a rendering engine on top of HTML Canvas that solves the issue of asynchronous
								asset loading and rendering. Many, many data structures and algorithms are used in the
								individual card games, such as the Fischer-Yates shuffle, state machines, stacks,
								queues, etc.
							</Text>
							<ProjectCard project="cardbot"/>
						</LI>
						<LI>
							<Text t="project.oldmanwhiskers.title" variant="h4"/>
							<Text>
								Generating a new item will uniformly select an item type, with a blue noise position
								to avoid picking positions that are too close to existing items. At each generation
								step, N*2 candidates are generated uniformly across the bounded 2D plane (where N is the
								number of previously generated items, minimum 1), and the best candidate (farthest from
								all existing item spawn positions) is selected.
							</Text>
							<ProjectCard project="oldmanwhiskers"/>
						</LI>
						<LI>
							<Text t="project.gachagoobers.title" variant="h4"/>
							<Text>
								Randomized gacha mechanics include weighted sampling which is modified over time,
								i.e. obtaining the same item is less likely over time. AI behaviors were implemented
								with simple state machines. Pickup generation was implemented with uniform random
								distribution over pre-placed spawn points, but capped at a certain maximum number of
								pickups.
							</Text>
							<ProjectCard project="gachagoobers"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<Text>
								The social media algorithm used follows a weighted random sampling according to both
								the player's liked posts and the tags associated with the existing pool of posts. To
								ensure the game is always completable, a specific number of posts are first selected
								from each required tag pool, and then a weighted random sample is taken from the 
								remaining posts. The more a tag is liked (via posts with that tag), the more likely
								it is to be selected.
							</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-4-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gpe.objectives.3" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.tcresearchsolver.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="tcresearchsolver"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="cardbot"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="pushr4k"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-5-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gpe.objectives.4" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.portfolio.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="portfolio"/>
						</LI>
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="cardbot"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="pushr4k"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-6-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gpe.objectives.5" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.silentnight.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="silentnight"/>
						</LI>
						<LI>
							<Text t="project.tumblyroos.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="tumblyroos"/>
						</LI>
						<LI>
							<Text t="project.katalyst.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="katalyst"/>
						</LI>
						<LI>
							<Text t="project.oldmanwhiskers.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="oldmanwhiskers"/>
						</LI>
						<LI>
							<Text t="project.gachagoobers.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="gachagoobers"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
					</OL>
				</LI>
			</div>
		</OL>
	</>;
}
