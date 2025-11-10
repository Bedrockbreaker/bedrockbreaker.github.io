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
							<Text variant="h4">What Makes a Good Game?</Text>
							<Text>https://uat.instructure.com/courses/6964/assignments/248649/submissions/7741</Text>
						</LI>
						<LI>
							<Text variant="h4">How Do We Derive Freedom From Rules?</Text>
							<Text>https://uat.instructure.com/courses/6964/assignments/248655/submissions/7741</Text>
						</LI>
						<LI>
							<Text variant="h4">Breaking Down Choice</Text>
							<Text>https://uat.instructure.com/courses/6964/assignments/248653/submissions/7741</Text>
						</LI>
						<LI>
							<Text variant="h4">Semiotics in Games</Text>
							<Text>https://uat.instructure.com/courses/6964/assignments/248650/submissions/7741</Text>
						</LI>
						<LI>
							<Text variant="h4">The Art of Guiding Players</Text>
							<Text>https://uat.instructure.com/courses/6964/assignments/248676/submissions/7741</Text>
						</LI>
						<LI>
							<Text variant="h4">Rewarding Players</Text>
							<Text>https://uat.instructure.com/courses/6964/assignments/248661/submissions/7741</Text>
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
							<Text>asdf</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.quiethours.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="quiethours"/>
						</LI>
						<LI>
							<Text t="project.taintedheart.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="taintedheart"/>
						</LI>
						<LI>
							<Text t="project.thsegmentationfault.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="thsegmentationfault"/>
						</LI>
						<LI>
							<Text t="project.shepherdofthestorm.title" variant="h4"/>
							<Text>asdf</Text>
							<ProjectCard project="shepherdofthestorm"/>
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
