import { Divider } from "~/Components/Divider";
import { HoverTilt } from "~/Components/HoverTilt";
import { Link } from "~/Components/Link";
import { LI, OL } from "~/Components/List";
import { ProjectCard } from "~/Components/ProjectCard";
import { Text } from "~/Components/Text";

import CardBotGameplay from "~/Assets/Projects/CardBot/Gameplay.png";

export function BoardsGPE() {
	return <>
		<Text variant="h1" className="mx-auto text-center" t="boards.gpe.header"/>
		<Divider/>
		<Link href="https://youtu.be/9DUSKLievDU">Boards Presentation Video</Link>
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
							<Text>
								Memento is actually inspired by a background project of mine, involving similar details
								in how its save system works. The issue with this kind of save system, however, is that
								simply storing a vector of all saves results in very high memory usage, and slow
								querying of data contained within the save files. Memento addresses this by using a
								dual-layer system of save files and an in-memory cache, and then organizes them into a
								directed acyclic graph. This allows the system to efficiently query data from only the
								saves that actually matter, and without having to keep all of the saves in memory.
							</Text>
							<Text>
								The exact implementation of this graph also needed to change throughout development, as
								the initial implementation details did not adequately support the intended use cases.
								In particular, the old graph system had a single path for saving, and two separate paths
								for loading a particular save. One would load the save as-is (so the player could go
								from the menu to their game without affecting the world state), and the other would
								trigger the creation of new save that connects to the most recent save (Sequence Parent)
								to the one that was just loaded (Branch Parent), so that the world would actually change
								in response to loading an older save. However, this subtly broke the design invariants.
							</Text>
							<Text>
								Specifically, I constructed 4 modes of operation for saving and loading objects:
							</Text>
							<Text>
								1. Normal Saving. For some dirty (unsaved) state A, branch parent state B, and sequence
								parent state C, it will save the write the dirty state A to the new save file. This is
								how normal objects in video games act, naturally. Note that states A, B, and C are not
								necessarily unique between each other.
							</Text>
							<Text>
								2. Transient Saving. For some states A, B, and C, it will serialize the branch parent
								state (but the dirty state A will persist in memory until the player quits the game).
								This gives the illusion that the object "forgets" what happened to it, always reverting
								to what it once was when the game is reloaded.
							</Text>
							<Text>
								3. Inheritence Saving. For some states A, B, and C, it will serialize the sequence
								parent state (and A persists in memory). This is weird and players are unlikely to
								comprehend what is going on with this kind of saving, but it's a natural consequence of
								the system.
							</Text>
							<Text>
								4. Custom Saving. For some states A, B, and C, it will serialize whatever it wants.
								Useful for more advanced cases that rely on particular logic for what they save, rather
								than rigid categories that are pre-defined by the system. For example, if a puzzle wants
								to change state after it's been solved twice, then that falls outside the categories
								listed above, and will require custom saving.
							</Text>
							<Text>
								For loading, the pattern is roughly the same:
							</Text>
							<Text>
								1. Normal Loading. For some serialized state A, branch parent state B, and sequence
								parent state C, it will load state A into memory (dirty state becomes A). This is also
								how normal objects in video games act.
							</Text>
							<Text>
								2. Canonical Loading. For some states A, B, and C, it will load the branch parent B into
								memory. This is also very difficult to reason about and understand, similar to
								inheritence saving from above.
							</Text>
							<Text>
								3. Anchored Loading. For some states A, B, and C, it will load the sequence parent C
								into memory. This gives the illusion that the object always loads the last state it was
								put into, regardless of timeline chronology (however, this isn't logically true, and
								part of what I want to explain with the rewritten system).
							</Text>
							<Text>
								4. Custom Loading. Same with saving, the object can do whatever it wants when loading.
							</Text>
							<Text>
								The issue with this system lies in applying these rules in a way that that doesn't break
								invariants the graph is meant to hold. Let's suppose there are just two saves, N1 and
								N2, and treaure chest with a property bOpen that should be "anchored."
							</Text>
							<Text>1. Let's suppose for N1, the chest is serialized as closed (bOpen = false).</Text>
							<Text>2. The chest is opened, changing the dirty state (bOpen = true).</Text>
							<Text>
								3. The game is saved, creating N2. The only method above that works for saving is Normal
								Saving. Both of N2's parents now point to N1.
							</Text>
							<Text>4. The player quits the game, and then plays again.</Text>
							<Text>
								5. N2 is loaded. Since the chest is "anchored," it should adopt the last state it was
								saved in, according to the player's sequence of events. Naively following the Anchored
								Loading here, the sequence parent of N2 is N1. N1's bOpen state for this chest is false.
								However, this is the incorrect state to load, and results in the player feeling like the
								game didn't save correctly.
							</Text>
							<Text>
								6. The only correct loading process here is to load the object normally. This loads N2's
								state, which has bOpen = true.
							</Text>
							<Text>
								7. Let's suppose the player new reloads N1. This creates a hidden node N3. Its branch
								parent is N1, and its sequence parent is N2.
							</Text>
							<Text>
								8. The dirty state is bOpen = true, the branch parent state is bOpen = false, and the
								sequence parent state is bOpen = true. Either saving the object normally (take dirty
								state), or via inheritence saving (take sequence parent state), works here. However,
								using both normal saving from earlier and Inheritence Saving now would be inconsistent,
								so the chest is normally saved here. 
							</Text>
							<Text>
								9. The player quits and rejoins again.
							</Text>
							<Text>
								10. The serialized state of N3 is bOpen = true, the branch parent state is bOpen = false,
								and the sequence parent state is bOpen = true. Either loading normally or using Anchored
								Loading works here, but again, using both normal loading from earlier and Anchored
								Loading now would be inconsistent, so the chest is normally loaded here.
							</Text>
							<Text>
								11. Notice how every operation throughout this process is Normal Saving or Loading. That
								suddenly contradicts the notion of how normal objects behave -- a "normal" object
								should've reset its state to N1 before saving. But this is exactly the behavior needed
								for an anchored object! If we assume all objects reset their state to the branch parent
								state before creating the hidden node, that fixes the flow for normal objects, but
								breaks anchored objects again.
							</Text>
							<Text>
								Ultimately, this system is inherently broken due to the way that I was trying to make
								saving and loading "orthogonal" operations. In reality, they are actually part of the
								same axis, and a different axis needed to be introduced to make a functional system.
							</Text>
							<Text>
								If you noticed, there was a subtle assumption about saving/loading objects in the broken
								flow I described above. Specifically, is was that all objects always reset to a
								particular parent's state before loading. If I remove that assumption and fix that as
								the second axis, then the system becomes functional. This also meant that I needed to
								change how the save/load flows worked. Instead of a single flow for saving and two for
								loading, there's only one each, and new "reload" flow. Standard saving and loading now
								work as expected for a normal video game, but this reload flow is what triggers the
								systems's varying behavior. Technically, it works by asking each object to reset its
								state to a particular point, and then asks it for what data should be serialized (which
								can be different!).
							</Text>
							<Text>
								Reloading is now along these two axes -- State Resetting and Serialization -- from the
								point of view of a new hidden save node:
							</Text>
							<Text>
								1. Normal Reset State. The object resets to its branch parent state (the branch parent
								state becomes the dirty state). This is how normal video games work, if they were to
								create a save immediately after loading a previous one.
							</Text>
							<Text>
								2. Anchored State. The object resets to its sequence parent state. This now
								logically fixes the broken flow I described above, allowing objects to take the last
								state they were seen in without conflicting flows between different categories of
								objects.
							</Text>
							<Text>
								3. Persistent State. The object actually keeps its dirty state without
								resetting anything.
							</Text>
							<Text>
								4. Custom State. Like from the previous system, but the object can decide to do whatever
								to its state when resetting.
							</Text>
							<Text>And for the Serialization:</Text>
							<Text>
								1. Normal Serialization. The dirty state is serialized to disk. This is how normal
								video games work, in tandem with the Normal Reset State.
							</Text>
							<Text>
								2. Transient Serialization. The branch parent state is serialized to disk, regardless of
								the current dirty state. This gives the illusion when the game is reloaded that the
								object forgot what happened to it, always reverting back to the branch parent state.
							</Text>
							<Text>
								3. Inheritence Serialization. The sequence parent state is serialized to disk,
								regardless of the current dirty state. This gives a similar illusion, but instead of
								forgetting what happened, the object reverts back to the last state it was seen in
								across all branches. Somewhat difficult to reason about as a player, but not entirely
								unintuitive if taught the right way from a designer.
							</Text>
							<Text>
								4. Custom Serialization. The object can decide to do whatever it wants for
								serialization.
							</Text>
							<Text>
								I normally refer to these axes like "normal/transient" or "anchored/inherited" (based on
								reset behavior/serialization behavior), but almost each combination (excluding custom)
								does exhibit unique behavior which I've given names for:
							</Text>
							<Text>1. Normal/Normal: "Normal." Standard video game save and load.</Text>
							<Text>2. Anchored/Normal: "Anchored." Reset to sequence, save dirty.</Text>
							<Text>3. Persistent/Normal: "Persistent." Keep dirty, save dirty.</Text>
							<Text>
								4. Normal/Transient: "Normal." Logically the same as Normal/Normal (Reset to branch,
								save branch)
							</Text>
							<Text>
								5. Anchored/Transient: "Fakeout." Reset to sequence, save branch. Hard to reason about
								as a player, however.
							</Text>
							<Text>6. Persistent/Transient: "Transient." Keep dirty, save branch.</Text>
							<Text>
								7. Normal/Inherited: "Hidden." Reset to branch, save sequence. Hard to reason about as a
								player.
							</Text>
							<Text>
								8. Anchored/Inherited: "Anchored." Logically the same as Anchored/Normal. (Reset to
								sequence, save sequence)
							</Text>
							<Text>9. Persistent/Inherited: "Inherited." Keep dirty, save sequence.</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.ganymede.title" variant="h4"/>
							<Text>See Details link.</Text>
							<ProjectCard project="ganymede"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>
								Yggdrasil was built from the ground-up to support modding. It's intended to be a fully
								customizable chess game, humorously based on the "Wake up Babe, Chess 2 just dropped"
								meme. To this end, I took an approach that utilized Godot's built-in dynamic PAK file
								loading system. Each PAK file is a collection of code and assets, which can be loaded
								dynamically at runtime. The game then uses C# reflection over the assemblies within
								each PAK file to load the corresponding code. This took quite a bit of work to get
								working, and the game itself is still a work-in-progress (despite no commits for the
								past year), but the modding system itself is functional. When I pick this project up
								again, I plan on reworking it to instead use WASM, so that mods can be written in near
								any programming language, loaded by the WASM virtual machine, and then provide hooks to
								interact with the game. This sandboxes the mods in a way that they can't mess with the
								user's system.
							</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>
								Graduated Cylinders is an ongoing project that started many years ago. I grew frustated
								by a lack of moving fluids around in modded Minecraft (think mods that make the game
								play like Factorio). Sure, there were plenty of mods that had pipes and could be used
								for dedicated systems, but there were none that could be used for manually moving fluids
								around. If I needed a specific amount of fluid from somewhere to complete a single
								task, I was essentially out of luck. This led to the creation of Graduated Cylinders,
								and has been consistently iterated on from my own playtesting and community feedback.
								At first, it was small and scrappy, and did the bare minimum (find the first fluid in a
								container I wanted to take from, and display a single text field for the amount). Over
								time, it gained more and more features (keyboard-only functionality), on-screen
								instructions, color-matched text to the fluid being transferred, ability to select
								different fluids in the same container, math expression evaluation, an entire 3D
								rendering engine to display a subset of the world in the GUI, and much more. Each
								feature was added in response to usage testing, and it continues to receive updates
								to this day.
							</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.tcresearchsolver.title" variant="h4"/>
							<Text>
								TC Research Solver is a C++ project that I wrote to help me solve a particular minigame.
								I didn't write the game itself, but I did write the solver. The minigame involves a hex
								grid of tiles. There are number of magic "aspects" in the minigame, and a handful of
								hexes have pre-placed aspects. The player can then fill in the empty hexes with
								additional aspects. The goal of the puzzle is to form a network that connects every
								pre-placed aspect to every other pre-placed aspect. However, even if two aspects are
								adjacent, they may not necessarily connect, due to "incompatible" aspects. Solving this
								problem involved a lot of research into graph theory -- specifically into Steiner Trees.
								The Steiner Tree problem is an NP-hard problem that attempts to find the smallest sum of
								edge costs for edges that connect a subset of nodes (called terminals) into a single
								tree. I had to read multiple research papers on this topic, dive into Set Theory, and
								implement a custom Dreyfus-Wagner algorithm which needed heavy optimizations to run
								fast enough (on the order of seconds instead of my initial working implementation of
								centuries).
							</Text>
							<ProjectCard project="tcresearchsolver"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>
								Card Bot is a Discord bot that I wrote to help my friends play card games. It doesn't
								play the games itself, but instead provides a way for people to play with each other
								over Discord. I wanted a play to play games with my friends even when were not in the
								same room, and Card Bot was my solution to that. It initially just supported Uno, (in
								fact, much of its internal code still refers to itself as "Uno Bot"), but I've since
								added support for a few other card games, including Exploding Kittens and its
								expansions, Mille Bornes, Phase 10, and the "Wikipedia Game" (created by Tom Scott on
								YouTube). The initial implementations of each game were minimal, but I've since added a
								robust rules and variants system to support more complex games. For example, there are
								seven different variant rules for Uno, such as the scoring system, skip-stacking,
								jumping in, etc. Phase 10 has an extended 30 phases, and can even be customized to
								whatever subset and ordering of phases you want. I also had to implement my own 2D
								rendering engine, since reading pure text for a card game isn't very fun. I originally
								had issues with race conditions (different layers would render over each other), but
								my solution was to make a queue of all layers and render them in order. This also
								allowed me to add a "z-index" system to control the rendering order of layers, as well
								as runtime-loading of assets (to avoid permanently caching everything in memory).
							</Text>
							<ProjectCard project="cardbot"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>
								"pushr 4k" was my attempt at making a rhythm game in an engine that was built for people
								who have never programmed before. I built the entire game in 48 hours (though it wasn't
								for a game jam), and it ended up being one of the most fun projects I've worked on. The
								engine limited me to "500 lines of JavaScript," but as someone with years of experience
								with that language, I knew I could simply put all code on the same line and it would
								work the same. Moreover, because this is a rhythm game, I wanted to optimize input
								latency and audio synchronization, so I had to research and make use of the Web Audio
								API with its nanoseconds-accurate internal clock. That API is normally used for live
								audio processing (such as for Digital Audio Workstation software), but I was able to
								use it for input timing as well. Additionally, I built a timing offset adjustment system
								to allow for fine-tuning of audio synchronization. The actual data for the game is
								stored in JSON format, which abuses the fact that Construct doesn't have a character
								limit for its JSON game objects. It made for a less-than-pleasant editing experience
								when I went to add/edit songs (it tries to render all of the text even if I can't see
								all of it), but it was a great solution for data-oriented design. I was even able to
								implement an easter egg by extending my song format to include a "secret" song with
								special visual effects that could be timed with the audio as well.
							</Text>
							<ProjectCard project="pushr4k"/>
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
							<Text>See project tags.</Text>
							<ProjectCard project="memento"/>
						</LI>
						<LI>
							<Text t="project.johnlemon.title" variant="h4"/>
							<Text>See project tags.</Text>
							<ProjectCard project="johnlemon"/>
						</LI>
						<LI>
							<Text t="project.yggdrasil.title" variant="h4"/>
							<Text>See project tags.</Text>
							<ProjectCard project="yggdrasil"/>
						</LI>
						<LI>
							<Text t="project.portfolio.title" variant="h4"/>
							<Text>See project tags.</Text>
							<ProjectCard project="portfolio"/>
						</LI>
						<LI>
							<Text t="project.graduatedcylinders.title" variant="h4"/>
							<Text>See project tags.</Text>
							<ProjectCard project="graduatedcylinders"/>
						</LI>
						<LI>
							<Text t="project.cardbot.title" variant="h4"/>
							<Text>See project tags.</Text>
							<ProjectCard project="cardbot"/>
						</LI>
						<LI>
							<Text t="project.pushr4k.title" variant="h4"/>
							<Text>See project tags.</Text>
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
