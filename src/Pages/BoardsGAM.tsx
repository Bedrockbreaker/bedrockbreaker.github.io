import { Divider } from "~/Components/Divider";
import { HoverTilt } from "~/Components/HoverTilt";
import { Link } from "~/Components/Link";
import { LI, OL } from "~/Components/List";
import { ProjectCard } from "~/Components/ProjectCard";
import { Text } from "~/Components/Text";

import BrickByBrickPrototyping1 from "~/Assets/Projects/BrickByBrick/Prototyping.png";
import BrickByBrickPrototyping2 from "~/Assets/Projects/BrickByBrick/Prototyping2.png";
import JohnLemonPrototyping from "~/Assets/Projects/JohnLemon/Prototyping.jpg";
import JohnLemonIteration from "~/Assets/Projects/JohnLemon/Iteration.png";
import SilentNightDeadlyNightSprintReview from "~/Assets/Projects/SilentNightDeadlyNight/SprintReview.png";

export function BoardsGAM() {
	return <>
		<Text variant="h1" className="mx-auto text-center" t="boards.gam.header"/>
		<Divider/>
		<OL className="marker:text-2xl marker:font-semibold marker:tracking-tight">
			<div className="border-l-2 border-tag-1-bg pl-8">
				<LI>
					<Text t="boards.gam.objectives.0" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>See Details link.</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.silentnight.title" variant="h4"/>
							<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 m-6">
								<div>
									<Text>Prototyping / Sprint Review:</Text>
									<HoverTilt><img src={SilentNightDeadlyNightSprintReview} className="rounded-md"/></HoverTilt>
								</div>
								<div className="text-center">
									<Text>Playtesting:</Text>
									<Link href="https://youtu.be/Y4V6K4rOHC8">https://youtu.be/Y4V6K4rOHC8</Link>
								</div>
								<div className="text-center wrap-anywhere">
									<Text>Final Game Rules:</Text>
									<Link href="https://docs.google.com/document/d/1gUOfjEiIBCkBf57GmUhppBCLW6_PD9zPanO6LsI_6LQ">https://docs.google.com/document/d/1gUOfjEiIBCkBf57GmUhppBCLW6_PD9zPanO6LsI_6LQ</Link>
								</div>
								<div className="text-center wrap-anywhere">
									<Text>Postmortem:</Text>
									<Link href="https://docs.google.com/document/d/1PyUJnE2H1PQ1k6v5KNgLRZ3w8JXBqW_exhJfJL6BBVE">https://docs.google.com/document/d/1PyUJnE2H1PQ1k6v5KNgLRZ3w8JXBqW_exhJfJL6BBVE</Link>
								</div>
							</div>
							<ProjectCard project="silentnight"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>
								Preproduction:{" "}
								<Link href="https://youtu.be/XGkx1bxHTGg">https://youtu.be/XGkx1bxHTGg</Link>
							</Text>
							<Text>
								See Project link for final game.
							</Text>
							<Text>
								Postmortem:{" "}
								<Link href="https://docs.google.com/document/d/11qNthC4FR2M_bFMrQzjyI7GZxsOEQS316dQtwMgGWjs">https://docs.google.com/document/d/11qNthC4FR2M_bFMrQzjyI7GZxsOEQS316dQtwMgGWjs</Link>
							</Text>
							<ProjectCard project="pushr4k"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-6">
								<div className="my-auto">
									<Text>Prototyping</Text>
									<HoverTilt><img src={BrickByBrickPrototyping1} className="rounded-md"/></HoverTilt>
								</div>
								<div className="my-auto">
									<Text>Playtesting & Refining</Text>
									<HoverTilt><img src={BrickByBrickPrototyping2} className="rounded-md"/></HoverTilt>
								</div>
							</div>
							<Text>See Project link for final game.</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-2-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gam.objectives.1" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.portfolio.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="portfolio"/>
						</LI>
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="cardbot"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="pushr4k"/>
						</LI>
						<LI>
							<Text t="project.oldmanwhiskers.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="oldmanwhiskers"/>
						</LI>
						<LI>
							<Text t="project.gachagoobers.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="gachagoobers"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>Need I say more?</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-3-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gam.objectives.2" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>
								The save/load system innovated in this project was specifically designed for
								puzzle-oriented gameplay in mind, on both PC and console. It skews toward a slightly
								older audience due to the understanding of solving complex problems needed to progress
								the game, which is intentional. Furthermore, the system was tailored toward singleplayer
								RPGs or Action-Adventure games, and was not intended for multiplayer. Puzzle mechanics
								and those listed genres tend to go hand-in-hand. This was further motivated
								to bring this mechanic into the narrative design space, where it could be used to
								directly enhance the experience, rather than just as a player comfort feature
								("ludonarrative harmony").
							</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>See Details link.</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.silentnight.title" variant="h4"/>
							<Text>
								Gameplay was tailored toward a slightly younger audience (about 12+), to allow for
								families to participate in the experience, while still being able to have a "spooky"
								aesthetic. The rules are relatively simple, and the individual games are short to
								facilitate quick, rapid fun.
							</Text>
							<ProjectCard project="silentnight"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>
								This project was tailored to the hardcore rhythm game audience, with a focus on 
								difficulty. Comfort features hardcore players are normally used to were implemented,
								such as timing adjustment, scroll speed, and disabling extra particle effects. The
								data behind the game was also designed to be as simple as possible, to allow for
								easy track creation and editing (data-driven design) -- songs are stored in a JSON file.
								Full menus, score saving, and performance details were also included, as well as
								optimizations to input and audio synchronization to achieve a better player experience.
							</Text>
							<ProjectCard project="pushr4k"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>Full Production Pipeline, within a game jam.</Text>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-6">
								<div className="my-auto">
									<Text>Prototyping</Text>
									<HoverTilt><img src={JohnLemonPrototyping} className="rounded-md"/></HoverTilt>
								</div>
								<div className="my-auto">
									<Text>Iteration</Text>
									<HoverTilt><img src={JohnLemonIteration} className="rounded-md"/></HoverTilt>
								</div>
							</div>
							<Text>Post-Mortem</Text>
							<Text>1. What went well?</Text>
							<Text>
								I'm most proud of what I was able accomplish during such a short time span. Full controls, camera/room systems, multiple interacting puzzle elements, etc. Also, our preproduction was insane, and very, very useful while I was programming -- it allowed me to stay focused on my tasks without going back to the other designers asking for clarification.
							</Text>
							<Text>2. What didn't go well?</Text>
							<Text>
								I relegated myself to a "programmer-only" position, which I probably shouldn't have done. I noticed early signs of mistakes on the first day, and then it hit me that our game was too generic after I had come home the first day. However, I effectively told myself it's not my problem (it most certainly was), and instead of raising the genuine concerns I had, fully committed to the existing vision, even though that's sunk-cost fallacy. I would've also had the team practice the presentation more to try to be more energetic. Although I heard a number of judges did like the presentation, it felt a little too "uhh... yeah... here's some more art... uhh..." to me. I probably would've also included some gameplay, but I recognize our final gameplay was just a walking simulator at the moment we would've needed to record.
							</Text>
							<Text>3. Feedback / What was learned?</Text>
							<Text>
								Practice jams (and/or treating existing jams as qualifiers for the team) would probably go a long way. It would also help team members learn how each other work, and avoid any potential issues with personality conflicts. Perhaps even a special topics class on Performance Game Development, since it's one thing to train for long-term dev vs. jams. I also agree with Baylee, and think allowing teams to create their own assets would've been more beneficial for all teams here. If other universities want their students to be competitive in the industry, they can't just teach their students a single topic in isolation. Even though I'm "just" programming and design, it's absolutely been beneficial being able to talk to artists on campus. (insert something about "harrison bergeron"...)
							</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-4-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gam.objectives.3" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text variant="h4">What Makes a Good Game? (GAM200 Assignment 1.1)</Text>
							<Text>I believe all great games have an engaging core gameplay loop, meaningful player choices, a polished feel, compelling progression systems, and a cohesive vision. Note that under this criteria, quite a lot of games are actually considered great in my opinion. I don't think popularity causes greatness at all.</Text>
							<Text>Engaging Core Gameplay Loop</Text>
							<Text>Here, I'm using the standard definition of the term ("the series of actions the players repeat most frequently"). I won't always be using the standard definition for the other elements, so look out for that. In order for a the core gameplay loop to actually be engaging, however, I feel it needs to be satisfying to the player, it needs to be intuitive, and it needs to have some form of iterative depth. Note that I'm specifically using the word "satisfying" instead of "fun" for a few reasons. Although the game design definition of "fun" does adequately fit, the normal connotation of fun is slightly too specific in my opinion -- it implies a certain level of immediate, often visceral reaction to gameplay, perhaps stemming from moment-to-moment enjoyment, surprise, or lighthearted engagement. Satisfaction, on the other hand, is deeper and more enduring, deriving from fulfillment rather than immediate joy. For example, I play a lot of Factorio-like games that involve a lot of complex mechanics to create large, planet-sprawling factories that chew through raw materials to automatically produce more advanced materials for better automations. The core gameplay loop technically just consists of placing down individual machines, hooking them together with pipes and conveyor belts, etc. Is that "fun," per se? Not really. But is it satisfying? Absolutely. Similarly, practicing a song over-and-over again in a rhythm game isn't necessarily that fun to me. But is the process satisfying? Absolutely. As for an intuitive gameplay loop, players need to be able to understand engage with the loop without undue frustration (I say "undue" for specific reasons.). Dark Souls is intuitive in this way because the fights are perceived to be fair -- if enemies didn't telegraph their attacks appropriately, then the interactions with the game would stop being intuitive. Finally, there needs to be some form of "iterative depth" to the gameplay. This doesn't mean the game needs to slowly become more difficult or complex over the gameplay. For example, in visual novels, the iterative depth simply comes from the narrative itself (the rising action and climax). In Tetris, clearing lines is simple yet endlessly engaging due to the escalating challenge.</Text>
							<Text>Player Agency and Meaningful Choices</Text>
							<Text>Second, players should feel their actions have an impact, creating a sense of ownership and investment. Without this, the "game" is now effectively a movie. Whether it would be a good movie would up for debate, but it's certainly no longer a great game. Decisions should yield perceptible consequences in strategy, narrative, tactics, or any other place the player is given a choice for. Ideally, the size of the consequences also match the size of the choice. If the player is talking with a minor NPC, any dialogue choices should probably only affect the immediate conversation and not the main plot. Additionally, the player should have freedom, but within certain constraints. Players (and humans in general) thrive in environments where they can creatively solve problems within well-designed boundaries. Having too many options leads to analysis paralysis, which harms the experience. Even if there aren't too many options, such as a choice between just two health items -- an apple that heals 5 hp and an orange that also heals 5 hp -- there isn't any meaningful difference between the two. While it could be considered "more realistic" for there to be such an option, it just adds extra baggage to the game and should likely be removed to keep meaning for each player choice.</Text>
							<Text>Polished Game Feel</Text>
							<Text>This one is a bit more vague, but I'm referring to the tactile, emotional, visual, auditory, and other feedback channels in response to player interactions. A high level of polish generally enhances immersion through responsive controls, sensory feedback, and maintaining consistency. Controls should feel precise and immediate where necessary, reducing undue frustration. Of course, there's a handful of games which are specifically made to break that trend, such as QWOP or Getting Over It, but those are the exceptions which prove the rule. Moreover, the visuals, audio, and haptics must reinforce the player actions (i.e. visual indicators of success, or satisfying sound effects). For example, if there was no feedback about a player's health being damaged over time by walking on a specific type of surface, it would be far more frustrating to that player as they die over and over trying to figure out what's killing them. Tying everything together is the consistency of the game itself. The physics, animations, and interactions need to align with the internal logic. If there's a sudden disconnect, it will feel incredibly jarring and immersion-breaking to the player. Celeste is a great example of a polished game that clearly responds immediately to player interaction -- every death is on the player's own hands, rather than feeling cheated by the game.</Text>
							<Text>Compelling Progression Systems</Text>
							<Text>Progression keeps players motivated by offering a sense of growth and achievement. This obviously doesn't mean every game needs an RPG progression mechanic, but that the player should feel the game "evolving" to changing circumstances. In narrative-driven games, this could simply be the progression of the plot. In skill-based games with little story, this could be the difficulty curve increasing as the player pushes themselves to perform better and better. In more open, sandbox-type games, this could provided by the players themselves as they set their own goals. The progression should essentially match the experience -- it needs to align with the game's pace, tone, and design. Ideally, progression should incentivize using all of the game's mechanics, pushing a player towards mastery. In the open world puzzle game The Witness, progression is tied to the player's understanding of not just the immediate puzzle mechanics, but of also the environment. After playing for some time, the player eventually realizes there are larger, "meta-puzzles" that have been hidden around them since the beginning, opening more and more parts of the game for exploration and solving.</Text>
							<Text>Cohesive Vision</Text>
							<Text>Finally, great games need to have a clear, cohesive creative vision that permeates every element of the game. Everything from mechanics, to art, to story, to audio, and every other bit of work need to work harmoniously towards a unified goal. One of the worst offenders of a game that would've otherwise been great is SquishCraft, in my opinion. It's a difficult puzzle game with amazing, unique mechanics, but the art and sound are some of the most atrocious piles of garbage I've ever had the displeasure of experiencing as a human being. It's not like I needed the game to have "quadruple-A" graphics, but if it was at least cohesive to any degree, the experience would've been infinitely better than the vomit-inducing eye- and ear-sore it currently is. If it was possible to play the game blind-folded, I would've. Cohesion also is also different from regular polish in that all elements of a game actually complement each other. If SquishCraft did have polished graphics and sound, but they didn't mesh with each other, it still wouldn't be a great game. Conversely, Journey achieves its cohesiveness through its minimalist design, evocative music, and seamless multiplayer integration. Every part of the game complements the other, since the only way for players to communicate with each other is through a single key press that causes their character to "chirp." It's minimal, like the design itself, and reinforces the emotional journey the game takes the players through.</Text>
							<Text>Greatest Games</Text>
							<Text>While I named quite a number of games in the previous sections, I don't think most of them are the greatest games throughout history. In general, while I think every great game is successful in each of the criteria I listed, the greatest games shaped major parts of the industry and shifted genres beyond their own. Additionally, although the reputation of a game through its marketing, studio, or designers can influence its initial popularity, those can't define the greatness of a game. Great studios/designers/marketing know the criteria of a great game, and strive for that. Starting at the way back in 1984, I think Tetris does deserve a spot on the pedestal of greatest games. It certainly has one of the best engaging core gameplay loops, where the act of arranging falling blocks into lines is endlessly satisfying and timeless in history. Players very much have meaningful control over their choices, with many different strategies having evolved over the year. The game is polished with immediate feedback and consistent interactions, and the progression of increasing difficulty is fantastic. The vision is cohesive of course, since it focuses on a singular core mechanic that naturally grew its reputation until becoming the most sold video game ever, only to be overtaken by Minecraft. Its design is so pure that is has transcended platforms, cultures, and decades. Speaking of Minecraft, I think it also deserves a spot on the pedestal of greatest games. Similar to Tetris, it likewise has universal appeal, with its pixelated art style and accessible mechanics making it inviting to players of all ages and cultures. Its unprecedented platform for creativity has allowed players to build, explore, and create in a sandbox that encourages limitless experimentation in a way that no other game as been able to match. After its success, I would also argue there have been many more games that include a survival crafting mechanic in their gameplay because of Minecraft -- including the single player mode of Fortnite itself. Minecraft's broad community and longevity thrives on modding, multiplayer, and user-generated content, sustaining its relevance for over 15 years, while also creating the genre of game I enjoy the most: factory-likes. Going a few years earlier than Minecraft, Half-Life 2 I feel also deserves to be labeled as one of the greatest games ever. It seamlessly blended narrative with the First-Person Shooter gameplay like no other previous game (including the original Half-Life), while also introducing some of the most advanced physics-based gameplay that was groundbreaking for its time. Along with its predecessor, Half-Life 2 not only redefined the FPS genre, but the games industry as a whole in terms of what it meant to create wholistic experiences with tightly integrated gameplay, narrative, technical innovation, and level design.</Text>
						</LI>
						<LI>
							<Text variant="h4">How Do We Derive Freedom From Rules? (GAM200 Assignment 2.1)</Text>
							<Text>One of the best examples of rules fostering freedom can be found in the tabletop role-playing games (TTRPGs) like Dungeons & Dragons. The explicit rules that govern character creation, abilities, and limitations define clear boundaries for gameplay. For instance, a wizard is restricted from wearing heavy armor or using large melee weapons effectively. Yet, these constraints are offset by the nearly limitless ways players can approach problems or interact with the world. A wizard might use spells to evade enemies, craft intricate traps, or broker peace in creative ways -- all while adhering to the game's rules. The explicit rules establish a structured framework, while the implicit rules, including collaboration and improvisation between players, empower them to explore possibilities and express their individuality. This dual-layered system is what allows players to feel both guided and free.</Text>
							<Text>Another excellent example is Minecraft. Its core mechanics -- placing and breaking blocks, crafting tools, and interacting with the environment -- are relatively straightforward. However, these explicit rules provide the foundation for nearly unlimited creativity. Players have used this system to construct everything from intricate machines to sprawling virtual metropolises. The freedom doesn't stem from the absence of rules, but from their ability to channel player creativity in meaningful ways.</Text>
							<Text>On the other hand, games that over-constrain players with poorly designed rules can obviously feel stifling. One notable example is Final Fantasy XIII. Critics (as well as myself) often cite its overly linear structure in the early chapters, which severely limited exploration and decision-making. The explicit rules forced players into narrow, predefined paths, dictating when and how they could engage with the game world. This lack of agency was especially disappointing for fans of the RPG genre (again, myself included), where player freedom is generally a core expectation. Even when the game eventually opened up, the initial impression of rigidity and restriction left a lasting negative impact on the overall experience.</Text>
							<Text>Overall, explicit and implicit rules each play a vital role in both preserving and fostering player freedom. Explicit rules provide necessary structure, ensuring consistency and fairness. Implicit rules, however, encourage players to innovate and make choices within the framework, often extending far beyond what the designers explicitly dictate or sometimes even imagined. When these two elements are in harmony, players can experience a robust sense of freedom, even within games with as strict rule sets as programmed software has to be. Essentially, rules should enable, not obstruct. By combining explicit limitations with implicit opportunities for creativity, games can provide players with both the structure and freedom to explore, innovate, and express themselves while preserving the integrity of the game's design.</Text>
						</LI>
						<LI>
							<Text variant="h4">Breaking Down Choice (GAM200 Assignment 2.2)</Text>
							<Text>For this assignment, I played Slay the Spire. It's a very popular roguelike game, where you slowly build a deck of cards (representing attacks, skills, etc.) as you fight your way to the top of the tower.</Text>
							<Text>In terms of choices, I'll go over:</Text>
							<Text>1. Choosing the next location to move to on the map</Text>
							<Text>2. Selecting a card to use during combat</Text>
							<Text>3. Choosing an action to take during a random map event</Text>
							<Text>Choosing the next location to move to on the map</Text>
							<Text>1.1. What happened before the player was given the choice?</Text>
							<Text>This is actually the very first choice the player will make in the entire game (and what my screenshot is showing). Prior to this point, the player will have gone through the main menu (adjusted any settings as they wish), and then hit "Play." It'll go to a character select screen, but only a single character is unlocked to start with. After that, it goes through a small "tutorial," which is a series of slides about the game's various mechanics. Finally, the player arrives at the map screen as shown. According to the legend, all of the rooms the player can start in actually function identically, but the paths beyond those rooms are different. Note that this choice appears after every map encounter (event on the legend). In terms of the internal state of the game, the player has either completed a previous encounter or just started a new run (playthrough). Their deck, relics (passive upgrades), current health, gold, and potion inventory (one-time use skills) reflect the outcomes of that encounter. Beyond the player's past chain of decisions, the only other part of the internal state is actually the seed of the run -- the entire map, all enemies, shops, rewards, etc. are deterministically derived from the seed that was generated at the start of the run.</Text>
							<Text>1.2. How is possibility of choice conveyed to the player?</Text>
							<Text>The game shows the map interface with highlighted (pulsating) nodes representing valid room (event) options connected to the player's current position (or just the starting rooms, when starting a new run). The types of rooms (indicated by the map's legend) are visually differentiated through their icons. Visual cues (such as hover effects or the dotted connections between rooms) also inform the points of interaction.</Text>
							<Text>1.3. How did the player make the choice?</Text>
							<Text>The player uses a mouse (or keyboard, or controller) to select their desired room. I played exclusively with a mouse, so when I hovered over a room, I could click it to select my choice. A confirmation sound and visual effect accompanies the selection as well, regardless of input device.</Text>
							<Text>1.4. What is the result of the choice? How will it affect future choices?</Text>
							<Text>The player progresses to the selected room and encounters its specific event (e.g., entering combat, triggering a random event, accessing a shop, etc.). This choice determines the immediate gameplay scenario and affects longer-term strategy, such as health/resource management or potential rewards. For example, choosing an elite room may risk health and possibly death, but offers a powerful relic in return.</Text>
							<Text>1.5. How is the result of the choice conveyed to the player?</Text>
							<Text>A transition animation plays as the player moves to the chosen room. Afterward, the new room's content (the "stuff" relevant to the specific event) appears, clearly signaling the result of the choice. As mentioned earlier, an audiovisual cue accompanies the selection the room, before the transition plays.</Text>
							<Text>Selecting a card to choose during combat</Text>
							<Text>2.1. What happened before the player was given the choice?</Text>
							<Text>The game state is visually reflecting the current turn in a battle, including the player's available energy ("4/3" in the screenshot, lower-left corner), cards in hand (bottom of screen), enemy intent (the "24" with a butcher knife icon over the enemy creature's head), and a lot of other UI elements that I don't think people care about me listing off. In the player's macro interactions, the battle is just one step in their journey to finishing their run. However, in their micro interactions, the player's deck composition, draw pile, current buffs/debuffs, etc. shape their tactical choices.</Text>
							<Text>2.2. How is the possibility of choice conveyed to the player?</Text>
							<Text>The player's hand of cards is clearly visible (and it was mentioned in the starting tutorial of the game). When the player hovers over a card (or selects it via keyboard/controller), it enlarges and raises its position to reveal its action text ("Deal 33 damage." in the screenshot), indicating its effects when played.</Text>
							<Text>2.3. How did the player make the choice?</Text>
							<Text>The player selects a card by clicking or dragging it onto the battlefield (with presumably similar mechanics for other input devices). The interface clearly distinguishes between valid and invalid targets for the card's effect with the massive red arrow. When the target is invalid, the arrow is grayed out.</Text>
							<Text>2.4. What is the result of the choice? How will it affect future choices?</Text>
							<Text>The card's effect resolves immediately (e.g. dealing damage, applying a debuff, blocking damage, etc.). Simultaneously, the player's energy pool is updated, subtracting the card's energy cost (the red/orange circle with a number in every card's top-right corner), and the card is moved to the discard pile (bottom right of the screen, with the stack of blue cards icon). Note that some cards have clearly indicated exceptions to this. Future choices are affected by the player's remaining energy, their cards in hand/in deck/discarded cards, and the evolving state of the battle. For example, using a high-cost card may limit subsequent actions, while damaging an enemy may prevent their attack due to specific effects.</Text>
							<Text>2.5. How is the result of the choice conveyed to the player?</Text>
							<Text>A number of visual effects (e.g., damage numbers, block shields, buff/debuff icons) happen at once (depending on the specific card played), and sound effects clearly represent the card's resolution. The enemy or player's statuses update accordingly, and animations further reinforce the result.</Text>
							<Text>Choosing an action to take during a random map event</Text>
							<Text>3.1. What happened before the player was given the choice?</Text>
							<Text>The player just entered a random event room on the map. Like the other choices, their deck composition, relics, health, and other resources set the context for how they evaluate the event's options. Each random event has a unique "story," with different options available for resolution. Some options require certain resource payments, are locked behind having certain types of cards in your deck, or other requirements which may offer better resolutions, assuming the player has enough forward thinking (and luck). In my specific screenshot, no particular option was locked behind any requirements (and I chose Forget, for those of you curious). Note that the overall game is split into different "acts," which act somewhat like "worlds" or "regions" in other games, containing a larger set of "levels" (rooms). Each act has a different set of random events that can appear.</Text>
							<Text>3.2. How is the possibility of choice conveyed to the player?</Text>
							<Text>A text-based interface represents the narrative description of the event, along with multiple clearly labeled options for resolution. Each option specifies its cost or requirements (if applicable), and the outcome of choosing it (e.g., "Remove a card: Lose 7 HP"). Not all outcomes even have a benefit either and are actively detrimental (in which case, the better options are usually locked behind certain requirements). Each option is an interactive button, showing where the player can click/select to make a decision.</Text>
							<Text>3.3. How did the player make the choice?</Text>
							<Text>The player clicks (or otherwise selects) the desired option. In some cases, additional choices (like selecting a specific card from their deck) follow the initial selection.</Text>
							<Text>3.4. What is the result of the choice? How will it affect future choices?</Text>
							<Text>The chosen action resolves immediately, generally modifying the player's deck, health, or other resources. For example, removing a card can streamline the deck, while transforming the card introduces unpredictability (the chance for a better card). For future gameplay, it alters the player's deck synergy and tactical flexibility in battles -- removing a basic "Strike" card (one of the starting cards you being with) might improve the chances of drawing more impactful cards during battle.</Text>
							<Text>3.5. How is the result of the choice conveyed to the player?</Text>
							<Text>The interface updates to show the immediate effects, such as the modified deck or reduced health. Visual or textual feedback reinforces the outcome, like a card disappearing from the deck or watching your gold counter tick down. Again, the usual sound effects accompany the visual effects.</Text>
							<Text>Describe the interactivity of the game</Text>
							<Text>Players spend most of their time in battles, engaging in turn-based decision making through careful card selection. This includes analyzing their hand, energy, enemy intents, and current resources to make optimal choices for each turn. Outside of combat, time is spent navigating the map, engaging with random events, spending gold at a shop, and managing deck-building choices. The primary input is selecting and playing cards from the player's hand (via dragging a card to a valid target, if using a mouse). Overall, the game's modes of interactivity score fairly high against the four mentioned in the textbook. There is certainly a high degree of cognitive interactivity, since players will generally need to analyze optimal strategic plays for current and future turns, balance their health/resource conservation with the desire for high-reward encounters, and think about potential deck synergies or adapting strategies based on what cards or relics become available. For functional interactivity, it only scores relatively moderately (granted, this mode of interactivity was the most difficult to understand as written, so I hope I interpreted it correctly). Tooltips and hover effects provide clarity on card effects, relics, and enemy intents, ensuring accessibility for new players like me. Transitions and animations are also fluid, with low latency and minimal interruption to the flow of the game. The physical input to the game can be done with just a mouse, making it very easy to pick up in that sense. For explicit interactivity, it also scores very high like cognitive interactivity. Choosing to play a specific card comes with clear rules governing energy cost, targeting, and effects. Navigating the map offers clear long-term strategic play ("if I take this path, I can get an extra relic, but this other path has a shop"), and randomized elements ensure every run presents new challenges. For beyond-the-object interactivity, it also scores quite high, I would say. There's certainly plenty of fan-created content in the form of mods (custom cards, relics, characters, etc.), and communities have grown around sharing strategies, deck builds, or just playing/discussing the game on various social media platforms. Arguably the most important, many people point to Slay the Spire as the game that revived the roguelike genre.</Text>
						</LI>
						<LI>
							<Text variant="h4">Semiotics in Games (GAM200 Assignment 4.1)</Text>
							<Text>Semiotics in Slay the Spire</Text>
							<Text>1. Health bars are incredibly common in video games, and represent what I would call a class of "resource bars" that are designed to show ratios at a glance. Although there is text over each health bar that displays the exact current and max health for its associated entity, these "raw numbers" are neither semiotic nor are they easily digestible. On the other hand, reading how "full" each bar is relays the relative amount of health each entity has much quicker. Health bars have been a staple of gaming for so long, that they've effectively entered the "basic gaming literacy" stage. Although, if a player did not know how to read these health bars, the text overlaid on top should make it fairly obvious as to what the bar represents, especially after the bar changes due to taking/healing damage.</Text>
							<Text>2. Choosing to represent the most common actions in the game as a deck of cards doesn't necessarily communicate explicit information. However, it does frame the actions in an intuitive way that allows players to understand actions similar to cards used in other games. This implicit information brings players' associations of how cards work in other games to this one, greatly simplifying the process of learning the game's mechanics. For example, if actions were framed as drawing marbles from a bag (mechanically the same, conceptually different), players would have a harder time understanding the information conveyed by the system as a whole.</Text>
							<Text>3. These icons are representative of enemy intentions, with the specific image corresponding to the type of action the enemy will perform. Shields are naturally associated with defense, so the player should understand the enemy intends to defend themself next. Similarly, swords would indicate the opposite -- the enemy intends to attack. If the player somehow didn't associate those icons with the types of actions an enemy can perform, hovering over them will reveal a tooltip explaining their meaning (though, that tooltip is obviously non-semiotic.). This type of communication is so common, there's a whole term for it: telegraphing. Games have been doing it nearly since they first existed, since any lack of telegraphing an enemy's intentions usually results in the players feeling cheated.</Text>
							<Text>4. Underneath the health bars in this screenshot, different icons for buffs and debuffs can be seen. Each type of (de)buff has an associated icon for quick recognition (the player can hover over the icon to learn how it works), as well as a number that usually indicates how "powerful" that effect is, along with that number being colored green or red, depending on if its a buff or debuff, respectively. The icon and the text's color are two different pieces of semiotic information, of course, but they're each related to the single mechanic they inform players about. Technically speaking, the text's color being associated with buffs/debuffs is never explicitly told to the player, but it's not an essential piece of information either. Green is a common symbol for "good," and red for "bad," so this association isn't necessarily a stretch for players to make.</Text>
							<Text>5. The image borders on each of the cards are designed to roughly indicate the card's power. "Burning Pact" is moderately powerful, and receives a light blue border, which is more fancy than the gray border surrounding "Strike." Similarly, "Barricade" is quite powerful, and its gold border reflects that. To some degree, players can intuitively pick this up from associating colors from other ranking systems (e.g., gold, silver, and bronze medals), but the exact meaning for each color varies between games, requiring players to spend some amount of time interacting with this game and its cards to really understand the relative power levels each color represents.</Text>
							<Text>Semiotics in Modded Minecraft</Text>
							<Text>1. Somewhat hidden, there's a blue box surrounding the 3 types of items shown. In the GUI itself, you can clearly see the same set of items. This box is used to indicate a "container" holding some set of items. As the player looks at different things that can store items, their contents are displayed in the HUD, allowing the player to quickly see inside of them without explicitly opening their GUI. Although it's never explicitly stated "these are the items contained here," players should be able to quickly pick up on that fact, and the box itself is shorthand for indicating that -- without it, players would still probably be able to understand the information displayed in the HUD, but it would take longer to form that association.</Text>
							<Text>2. Progress bars are nearly universal in all software. This one just has fancy graphics to make it look like a saw mill splitting logs into planks. As time progresses, the icon fills up from left to right, indicating the current progress of the action. This becomes apparent as when the progress bar fills up, it consumes some input and produces some output. Interestingly enough, the origins of the progress bar predate computers, being invented in the early 1900s, used for indicating progress on projects in factory jobs. The simple act of showing a project's progress graphically to the employees saw a significant increase in their efficiency and output.</Text>
							<Text>3. The lightning bolt icon here is overlaid on top of a normal inventory slot, hinting at its electrical utility. Batteries can be placed in that slot to provide the machine with energy, or rechargeable items can be placed there to draw energy from the machine (charging the item). Hovering over that slot reveals a tooltip explaining its functionality, but the lightning icon is there to provide quick reference to its utility. Lightning is electricity after all. Admittedly though, without the tooltip, the purpose of that slot would still be very unclear, making it not a very useful piece of semiotic information.</Text>
							<Text>4. This specific icon actually encodes multiple pieces of information. It's a toggleable button that enables/disables automatic item exporting. Its orange color signifies it specifically interacts with items (this is a somewhat agreed-upon standard used by multiple Minecraft mods), and the rightward-facing arrow (with the "3D" box shape, like a shipping package) hints at its function to do with exporting something. If its color was blue, it would signify the automatic export of fluids (which this particular machine doesn't create, hence the lack of a similar blue button). Players would be very unlikely to intuit the purpose of the button, so a tooltip is provided when hovering over it to explain its function. The use of orange/blue colors possibly stems from Portal, where the colors of the portals were respectively orange and blue and are loosely tied to the idea of transporting something.</Text>
							<Text>5. The final element here isn't the yellowish beige texture, but rather what's beneath it (and is therefore not exactly visible in my screenshot, unfortunately). The square area is certainly reminiscent of the inventory slots everywhere else in the image, but without that yellowish texture, it has a significantly darkened background and displays the outline of a water drop. It's no longer an item slot -- it's a "fluid slot." In this specific case, the machine is holding 10.1 kL of cutting lubricant. The similarity and placement of the fluid slot allows players to understand it functions similarly enough to an item slot (it's designed to hold something), but the differences in its design should clearly indicate it holds something else besides items (the water drop outline hinting at "fluids"  in general). Unlike most of the other things in this screenshot (and modded game in general), this doesn't have a tooltip explaining its usage. If a player didn't understand its usage immediately, they'd either need to look up its function, or just struggle for a really long time.</Text>
							<Text>Semiotics in Balatro</Text>
							<Text>1. The purple chip here (and elsewhere in the screenshot) signifies the relative difficulty of the run. When first playing the game, players will only have access to the easiest difficulty -- the white chip. As they progress, they unlock harder and harder difficulties, somewhat following a standard casino chip system: white -&gt; red -&gt; green -&gt; black -&gt; blue -&gt; purple -&gt; orange -&gt; gold. This connection allows players to associate higher-value chips with higher difficulties, and acts a shorthand for the difficulty level without needing to assign any specific "difficulty name" to each level. Players learn to naturally make this association, even if they never knew about chip ranking systems before, since starting a new run requires players to choose a difficulty where the UI explains exactly how each difficulty functions.</Text>
							<Text>2. For every small and big blind, skipping the blind rewards the player with a "tag," indicated by the icon. Each tag has a unique effect, explained by hovering the mouse over it. For example, the specific tag highlighted here rewards the player with a free uncommon joker in the next shop. The green of this tag represents the "uncommon" rarity of the joker, while another tag exists, colored red, that rewards the player with a free rare joker. However, not every tag has this rarity-to-color association, such as the tag for the big blind in this screenshot (it's not relevant to its effects). Notably, however, every joker card does have an associated rarity, each category with their own category. This association seems to have been originally introduced by the first Diablo game (1996), which in turn took inspiration from TTRPGs like Dungeons & Dragons, which further in turn took inspiration from real-world rarity classification systems jewelers and other collectors have been using for centuries. However, the modern color-rarity system widely used across the industry (white = common, green = uncommon, blue = rare, purple = epic, gold = legendary) was first introduced in World of Warcraft (2004).</Text>
							<Text>3. Next is another icon-based semiotic, standing as a shorthand for the thing it represents. Every boss blind puts a unique limitation on the gameplay (indicated by the text beneath the icon), forcing the player to adapt their strategies over time. The icons are fairly abstracted from their names, but in general, have a shape/structure similar to what you'd expect their name to look like ("The Window" in this case loosely resembling a streaked pane of glass). Players aren't necessarily expected to really understand this information, however, since the boss blind's name is almost always accompanied by the icon. This is essentially a rough version of pictograms, which have obviously been around for thousands of years.</Text>
							<Text>4. The card backs in Balatro differ depending on the specific deck the player chose at the start of their run. Each deck provides a special twist on the gameplay, each with a different back design. While each starting deck could've been given the same back design, with just some text near the deck specifying what kind of deck they have, the card backs encode that information directly without needing the addition of text. Though, many games do this same thing: using the same general design with different aesthetic variations for differentiation.</Text>
							<Text>5. Finally, this element is fairly abstract. It's not referring to any on-screen object in particular, but rather, to the relative placement of the blinds. Most humans naturally expect a series of objects to be ordered left-to-right, resulting in a linear sequence. If the blinds were ordered any other way, most players would have a hard time following which blind comes next, at least until they just memorize the new pattern. With this specific ordering, however, it's clear the small blind is first, the big blind is next, and the boss blind is last. This is almost certainly due to the way most languages are written left-to-right, since I know that UI interfaces in any software should be horizontally flipped for right-to-left languages.</Text>
						</LI>
						<LI>
							<Text variant="h4">The Art of Guiding Players (GAM200 Assignment 5.1)</Text>
							<Text>I'm certainly not a level designer, and I've never even remotely had the desire to be a level designer; however, the essay was very interesting to read. I essentially enjoy the concepts of level design -- not level design itself. There was certainly a lot more to consider in level design than I initially expected, so the article was particularly informative for me. In the section on metal mapping, allowing the player to compartmentalize their position and surrounding area was relatively new to me, especially since I actually suck at this in real life (I could tell you my address, but if you drop me off within a mile radius of it, I wouldn't know where I am. Literally.). Affordance isn't a new concept me though, but using it within game design is -- considering both the affordance and "non-affordance" of not just the level's critical path, but also of mechanics and characters. Similarly, treating level design as a language is intriguing, allowing the player to build up a "vocabulary" which they can use to quickly interact (communicate) with the game.</Text>
							<Text>Deconstruction of Portal 2's Chapter 9 Opening Level (The Part Where He Kills You)</Text>
							<Text>Portal 2's Chapter 9: The Part Where He Kills You is the final chapter of the game, opening with the player facing immediate peril (it's the part where Wheatley is attempting to kill them). The level is overall designed to maintain a delicate balance between creating an overwhelming sense of urgency (this doesn't come across in the video since it's a walkthrough) while ensuring that the player never feels truly lost. The environment is highly dynamic, but it always subtly guides the player forward using strong visual composition, affordance, pacing, and "vocab reminders."</Text>
							<Text>From the moment the level begins, the player's goal is abundantly clear: escape from Wheatley. The chapter's title explicitly states the stakes (it's the part where he's going to kill you), and Wheatley's dialogue reinforces the urgency of the situation. His lines immediately establish danger, and his constant taunting acts as a subtle guide, directing the player's focus. The level doesn't just rely on words, however -- it actively reinforces the goal through the environment. Spiked panels slam together to create obstacles, turrets threaten to riddle the player's body with holes, and collapsing structures push them forward. Moreover, unlike some games that rely on quest markers or UI prompts, this level ensures that players know what to do purely through environmental storytelling.</Text>
							<Text>Even as the facility around the player collapses, the level ensures that players can navigate intuitively through offering several vantage points and overviews. Frequently, the player is flung high into the air, offering them a quick glimpse of the layout ahead and giving them a broad understanding of the space. Individual rooms (even throughout the whole game) are also rarely symmetric, helping players to orient themselves -- especially as they navigate using portals. Despite the chaos, the layout for this level follows fundamental design rules -- openings are distinct, and there are few extraneous paths to avoid the player feeling frustrated in a narratively urgent situation.</Text>
							<Text>Furthermore, rather than relying on explicit arrows or instructions as previously mentioned, the level opts to directly players through more subtly through visual composition. Important paths are brightly lit, while dead ends or hazards are darker, or are clearly marked as such from the "vocabulary" the player has learned throughout the game. Similarly, moving elements like conveyor belts and platforms naturally attract the player's attention and almost always suggest the correct movement towards the next area. The designers also frequently place obstacles in a way that leaves only one logical exit path, funneling the player toward the correct route. One of the best examples of affordance occurs early in the level when Wheatley deploys an array of mechanical arms with spiked panels on their ends to crush the player (the part where he kills you). The solution -- using the dripping white moon gel to portal to an overhead catwalk -- is not explicitly marked, yet it stands out anyway. The catwalk is placed higher than the player's current position (but still within their field of view, since gamers are notorious for never looking up), naturally making it a a point of interest. Additionally, the area around the catwalk is well-lit, while the surround environment is cluttered with relatively darker machinery, making the escape route visually pop. If the player still somehow misses what they're supposed to do, the dialogue exchange between Wheatley and GLaDOS shifts focus to the white gel, acting as a reminder for players who need it, while most players will never hear it, escaping well before the conversation reaches that point.</Text>
							<Text>In fact, throughout most of the game, Portal 2 excels at reinforcing its mechanics without introducing unnecessary complexity or overbearing reminders. For this level explicitly, it doesn't introduce new mechanics here; instead, it causes players to interact with familiar ones in increasingly high-pressure situations -- white gel, propulsion funnels, spiked panels, etc. Connecting to the essay, this aligns with its principle that level design (and game design in general) should feel like a "language" -- new words should be introduced and reinforced over time, not suddenly thrown at the player. If this was the introduction to the white gel, players would be very confused on how to proceed, spending an inordinate amount of time trying to escape through trial-and-error.</Text>
							<Text>To maintain tension while keeping players on track, the level carefully manages its pacing as the player progresses -- open (navigable) spaces generally give the player a moment to breathe before the next sequence, and narrow corridors force urgency and try to prevent hesitation. Moreover, the level inconspicuously removes backtracking as an option, as doors close behind the player and structures collapse to ensure forward movement. Later in the opening sequence, the player is required to find various vantage points where they can gain momentum to cross large gaps -- a natural way to force movement while reinforcing previously learned mechanics. Another crucial element is its controlled stops, as the level doesn't rush players through the entire sequence -- it includes moments where they must pause and think, such as when they must line up a portal shot mid-escape. These moments act as pacing relief, ensuring the player doesn't feel overwhelmed.</Text>
							<Text>Finally, the game prefers a minimal UI and maximum environmental storytelling, such as relying on Wheatley's dialogue as an organic guide, where his voice lines not only reinforce objectives but also foreshadow upcoming events. Players also don't need an "escape" objective marker when giant crushers and deadly pits make the stakes abundantly clear. As the player moves throughout the level, they're always positioned to look ahead at the next goal, making it a series of "How do I get there?" puzzles, rather than "Where do I go?" exploration puzzles, with no quest marker in sight.</Text>
							<Text>Overall, The Part Where He Kills You is outstanding example of level design that still holds up for modern standards, in my opinion. Despite the chaotic nature of the environment, the level ensures that players always know where to go what to do through strong goal reinforcement via narrative and visual storytelling; accessible mental mapping that prevents confusion despite a dynamic space with portals; expert use of contrast, affordance, and motion to guide players subtly; controlled pacing that balances urgency with moments of problem-solving; and minimal UI reliance, keeping the player immersed in the world.</Text>
						</LI>
						<LI>
							<Text variant="h4">Rewarding Players (GAM200 Assignment 7.1)</Text>
							<Text>Part 1 - Personal Motivations</Text>
							<Text>The games I find most enjoyable include modded Minecraft (specifically "expert" modpacks, such as GregTech: New Horizons or Divine Journey 2), Factorio, Undertale and Deltarune, Chrono Trigger, Polybridge, The Talos Principle, Portal 2, and Osu!mania. Straightaway, many of you reading this can already identify some patterns: deep, complex systems and optimization; skill progression and mastery; creativity and problem-solving; and autonomy and exploration.</Text>
							<Text>Nearly all of these have high cognitive engagement, which I obviously really enjoy. (Modded) Minecraft, Factorio, and Polybridge involve resource management and optimization challenges; Portal 2, The Talos Principle, and Baba Is You require strong logic and spatial reasoning; Osu!mania is pattern-recognition heavy; and as soon as I can find a single-player RPG with as complex mechanics as these, you probably won't see me for the next decade (I'm open to recommendations.). All of these games also feature long-term progression systems that require deep planning and commitment, whether that's unlocking gameplay features, narrative progression and character development, or physical skill improvement. Osu!mania and Polybridge are the only games in this list that feature "multiplayer" functionality through global scoreboards, but I'm not particularly interested in these extrinsic rewards -- the satisfaction of overcoming a problem and seeing tangible improvement over time means far more to me.</Text>
							<Text>Being able to "figure things out" -- explore narrative choices, optimize long-term efforts, engage my brain and skillset -- are what I value the most deeply in my games. Conversely, games with "shallow" reward systems (simple loot drops or short dopamine hits without depth) feel unsatisfying to me. Being able to coast through a game will also not hold my attention for very long, and overly linear or restrictive games (lacking exploration, optimization, or problem-solving) feel too passive to me. Psychologically speaking, my preferences happen to align with self-determination theory, where I seek competence (mastery), autonomy (freedom to solve problems), and relatedness (emotional or narrative depth).</Text>
							<Text>Part 2 - Game Reward Analyses</Text>
							<Text>2.1. Factorio</Text>
							<Text>Factorio is fundamentally about efficiency and automation through incremental progress. Its reward structure is built around gradual mastery of not just its mechanics, but of knowing what, when, how, and why to optimize your gameplay for the long-term, as well as self-determined complexity.</Text>
							<Text>2.1.1. The Immediate Satisfaction of Automation</Text>
							<Text>Every few seconds to minutes, players are always placing new machines, conveyor belts, and other pieces of their growing factory to reduce otherwise manual tasks. Players like myself feel rewarded when tedious work can be eliminated, providing both tangible and psychological relief. When a factory reaches a new level of self-sufficiency, it reinforces the player's feeling of expertise, and provides them new knowledge of how to optimize their factory for the future, as well as on replays.</Text>
							<Text>2.1.2. Unlocking New Technologies</Text>
							<Text>Every 10-30 minutes, depending on how much a player is optimizing their factory, new "research" is unlocked, which expands the possibilities of what the player can interact with. Depending on the specific research unlocked, they now have access to faster conveyor belts, railroads and trains, nuclear technology, or complex decision-making circuitry. These unlocks encourage forward momentum while bringing fresh challenges, ensuring there is always a goal to chase.</Text>
							<Text>2.1.3. Scaling Up Production</Text>
							<Text>Throughout the entire game, but approximately noticeable every 30-60 minutes, players should be able to look back on their progress and feel it increase exponentially -- the transition from a small base to a sprawling megafactory provides a powerful sense of accomplishment (while the resource demands in the game likewise increase, to keep pacing the same). It's not just the progress itself that feels satisfying, but the ability to see yourself progressing faster.</Text>
							<Text>2.1.4. Overcoming Logistics Challenges</Text>
							<Text>When a bottleneck in the factory appears (typically in tandem as you unlock new technologies and scale up production), turning previously chaotic production chains into optimized networks is inherently rewarding for people who like to organize or solve logistical puzzles.</Text>
							<Text>2.1.5. Combat</Text>
							<Text>Combat in Factorio is often the subject of heated debate within the community (I personally prefer less combat), but its existence does help with pacing the game, engaging the player in a conflict to keep their factory surviving through an alien attack about every 15-45 minutes. As the player expands their factory, it produces more pollution, which attracts the unwanted attention of alien hordes. Rewards here are more indirect, but prevent stagnation, forcing the player to refine their defenses, providing tension and variety to the gameplay. If you view this mechanic as a "punishment," perhaps a more rewarding system would be to turn properly managing pollution into a benefit: unlocking special research or efficiency boosts.</Text>
							<Text>2.1.6. Endgame</Text>
							<Text>The ultimate goal of the base game is to launch a rocket into outer space, after about 20-50 hours of gameplay, resulting in a particularly effective reward that feels well-earned and climactic. It serves as a definitive conclusion, giving the player a satisfying payoff for their work. Some players take this a step further to really challenge their logistic capabilities and create factories designed to launch so many rockets a minute.</Text>
							<Text>2.2. Balatro</Text>
							<Text>Balatro's reward structure is designed to keep players hooked on risk and reward, providing frequent and varied payouts through its roguelike deck-building mechanics.</Text>
							<Text>2.2.1 Winning a Hand</Text>
							<Text>Every 5-10 seconds, players play a hand of cards to score increasing amounts of points, designed to keep players engaged with frequent, small dopamine hits. The unpredictability of winning a poker hand (assuming the player doesn't pull out a spreadsheet to calculate their score) combined with immediate in-game monetary rewards fuels the excite -- very similar to the psychological effects of gambling, but without the ability to lose your real life's savings.</Text>
							<Text>2.2.2. Randomized Shop Items</Text>
							<Text>Every round or few (~2-3 minutes), players will generally spend their earned money in a shop to buy additional perks for their current run. New joker cards change how their strategy evolves over time, and other shop items keep the gameplay fresh with no two runs feeling the same. Being able to put together a winning strategy through the randomly given cards can be immensely satisfying, especially when players realize how powerful certain combinations of cards are.</Text>
							<Text>2.2.3. Multiplying Winnings</Text>
							<Text>As the player progresses through multiple "levels" (antes,  ~5 minutes) and puts together a stronger and stronger hand, the amount of points they earn generally follows an exponential curve, reinforcing a feeling of rapid and exciting progression. Bigger numbers also keep players chasing even bigger wins.</Text>
							<Text>2.2.4. Boss Blinds & Leveling Up</Text>
							<Text>At the end of each ante is a "boss blind," signifying a more significant challenge that gates their way to higher difficulty and higher rewards. This structured pacing provides the next goal for players to reach, and overcoming each boss presents a opportunity to reward smart deck-building.</Text>
							<Text>2.2.5. Permanent Unlocks</Text>
							<Text>Every few runs (~1-3 hours), players are likely to have accomplished a new achievement to unlock new jokers available in shops or new decks of cards to change their starting strategies for each run. Even failed runs contribute to progress, reducing frustration while also encouraging continued play. However, after a while when the player has unlocked most items, failed runs can feel punishing with little chance to unlock more. Instead of a complete failure, some form of persistent currency or smaller rewards for failed runs could smooth out frustration in my opinion.</Text>
							<Text>2.2.6. The Thrill of Risk-Taking</Text>
							<Text>Throughout the entirety of the gameplay is the encouragement to take risks -- changing strategies, hoping for certain outcomes -- combining strategy with gambler's fallacy to keep engagement high. Even if you're grinding for a specific unlock, there's no guarantee to achieve it within a specific amount of time or effort, so every opportunity that approaches a desired outcome is fuel for dopamine.</Text>
							<Text>2.3. Risk of Rain 2</Text>
							<Text>Risk of Rain 2 generally offers a strong core reward loop through power scaling and item synergies, but its DLC disrupted the game's balance and introduced many game-breaking bugs, reducing the effectiveness of its reward structure for both me and many other people who vented their frustration online.</Text>
							<Text>2.3.1. Item Collection</Text>
							<Text>Depending on the stage (level) the player is in, items are regularly collected every few minutes, which help the player gain increasing levels of power, following the normal roguelike formula to create compounding gains. As mentioned for the previous two games, exponential/compounding progress is a great way to reward players, partially because "number go up."</Text>
							<Text>2.3.2. Character Progression</Text>
							<Text>Over the course of gameplay, characters can be unlocked approximately every few hours, which provides a very tangible feeling to a player's progress -- a sudden burst in reward to keep the player going in the long-term.</Text>
							<Text>2.3.3. Item Synergy</Text>
							<Text>Because items in Risk of Rain 2 are permanent, the rewards from item synergy are effectively continuous. Unfortunately, many of the new items introduced in the DLC are unbalanced, don't perform well against other options, or have other issues such as bugs when using them, which breaks the fairly good established synergy present in the base game.</Text>
							<Text>2.3.4. Stage Completion</Text>
							<Text>About every 5-10 minutes, players will complete a stage and advance to the next one, featuring more difficult enemies and different loot. Players can optionally stay in a stage as it progressively gets harder to farm for specifics, but advancing to the next stage marks a critical point in the gameplay when their strategy potentially needs to change, rewarding players for being able to make it through the previous stages. Unfortunately here as well, many enemies (including ones in the base game that were perfectly fine before) are riddled with bugs, such as flying enemies that shoot projectiles firing faster with higher screen refresh rates.</Text>
							<Text>2.3.5. Mythrix Fight</Text>
							<Text>Generally considered the main final boss, Mythrix is fought at the end of most runs, where they steal every ability the player has gathered throughout their current run. This provides a very satisfying end to the player's run, challenging them to really know and master the game's mechanics and providing an even more satisfying payoff when they finally beat them. Though, this boss can be incredibly punishing if a player becomes relatively overpowered during their run, resulting in an almost immediate fail state. Turning this on its head, perhaps players should earn more/better rewards for defeating Mythrix with weaker setups, rather than punishing players who happened to be lucky with more powerful ones -- incentivizing being as lean as possible to optimize the final boss rewards.</Text>
							<Text>2.3.6. Multiplayer Cooperation</Text>
							<Text>This isn't something I've actually done, but for people who enjoy playing with friends, this provides the opportunity to play a shared experience -- sharing the same frustrations and successes with someone generally heightens the emotional investment in a game, offering reward outside of the game itself.</Text>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-5-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gam.objectives.4" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.memento.title" variant="h4"/>
							<Text>See documentation at my <Link href="/sip" isExternal>SIP Page</Link>.</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>
								See systems and technical design documentation located on{" "}
								<Link href="https://github.com/Bedrockbreaker/Ganymede/blob/main/Docs/Spell%20System">
									GitHub
								</Link>.
							</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.quiethours.title" variant="h4"/>
							<Text>
								See GDD on{" "}
								<Link href="https://docs.google.com/document/d/1PiaSgn6ZvlJUFxICrY5LqgBXX222R4GH12rCTfxmGvw">
									Google Docs
								</Link>.
							</Text>
							<ProjectCard project="quiethours"/>
						</LI>
						<LI>
							<Text t="project.shepherdofthestorm.title" variant="h4"/>
							<Text>
								See narrative (story, quests, dialogue) documentation on
								<Link href="https://github.com/Bedrockbreaker/ShepherdOfTheStorm">GitHub</Link>.
							</Text>
							<ProjectCard project="shepherdofthestorm"/>
						</LI>
						<LI>
							<Text t="project.thsegmentationfault.title" variant="h4"/>
							<Text>
								See narrative (story, post-mortem) documentation on{" "}
								<Link href="https://docs.google.com/document/d/1NczmRsWnWvUHVq2nJ4UzJcB05DX8rCQ6lAswqDUL11g">
									Google Docs
								</Link>
							.</Text>
							<ProjectCard project="thsegmentationfault"/>
						</LI>
					</OL>
				</LI>
			</div>
			<div className="border-l-2 border-tag-6-bg pl-8 mt-6">
				<LI>
					<Text t="boards.gam.objectives.5" variant="h3"/>
					<OL className="marker:text-xl [&>li]:list-[lower-alpha]">
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>
								I'm the sole maintainer of this open source project, which has received much community
								feedback.
							</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.silentnight.title" variant="h4"/>
							<Text>Worked as one of the team leads for this school project.</Text>
							<ProjectCard project="silentnight"/>
						</LI>
						<LI>
							<Text t="project.tumblyroos.title" variant="h4"/>
							<Text>Lead Engineer at Tongue N' Cheek Productions, LLC.</Text>
							<ProjectCard project="tumblyroos"/>
						</LI>
						<LI>
							<Text t="project.katalyst.title" variant="h4"/>
							<Text>Lead Engineer at Tongue N' Cheek Productions, LLC.</Text>
							<ProjectCard project="katalyst"/>
						</LI>
						<LI>
							<Text t="project.oldmanwhiskers.title" variant="h4"/>
							<Text>
								Game Jam game -- Founders Jam 2024. Collaborated with one artist to produce my first
								ever game jam entry.
							</Text>
							<ProjectCard project="oldmanwhiskers"/>
						</LI>
						<LI>
							<Text t="project.gachagoobers.title" variant="h4"/>
							<Text>
								Game Jam game -- Global Game Jam 2025. Collaborated with two artist/designers and one
								programmer.
							</Text>
							<ProjectCard project="gachagoobers"/>
						</LI>
						<LI>
							<Text t="project.brickbybrick.title" variant="h4"/>
							<Text>
								Game Jam game -- GMTK Jam 2025. Collaborated with a subteam at Tongue N' Cheek
								(5 people total, including myself).
							</Text>
							<ProjectCard project="brickbybrick"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>
								Game Jam game -- Arizona Jam 2025. Collaborated with a team of 6 (including myself) to
								produce the award-losing game John Lemon's Ghastly Hassle.
							</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
					</OL>
				</LI>
			</div>
		</OL>
	</>;
}
