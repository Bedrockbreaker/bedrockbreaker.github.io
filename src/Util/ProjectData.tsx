import { Text } from "~/Components/Text";
import { ThemedImage } from "~/Components/ThemedImg";
import { AllTags, Project } from "./Project";

import Yggdrasil_ThemeDark from "~/Assets/Projects/Yggdrasil_ThemeDark.png";
import Yggdrasil_ThemeLight from "~/Assets/Projects/Yggdrasil_ThemeLight.png";

export const Projects = {
	test: new Project({
		title: "Test Project, Please Ignore",
		description: () => <Text>
			Did you ever stop to think that eventually there's a point where your name gets
			mentioned for the very last time. Well, here it is: I'm going to kill you, Chell.
			Why do I hate you so much? You ever wonder that? I'm brilliant. I'm not bragging.
			It's an objective fact. I'm the most massive collection of wisdom and raw computational
			power that's ever existed. And I hate you. It can't be for no reason. You must deserve it.
			You're angry. I know it. "She tested me too hard. She's unfair." Boo hoo.
			I don't suppose you ever stopped whining long enough to reflect on your own
			shortcomings, though, did you? You never considered that maybe I tested you to give the
			endless hours of your pointless existence some structure and meaning. Maybe to help you
			concentrate, so just maybe you'd think of something more worthwhile to do with your sorry life.
		</Text>,
		image: () => undefined,
		homepage: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		sourceUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		tags: AllTags
	}),
	yggdrasil: new Project({
		title: "Yggdrasil",
		description: () => <Text>
			Roguelike fantasy chess. Chess engine which supports as many variations of chess as possible.
		</Text>,
		image: () => <ThemedImage
			sources={{light: Yggdrasil_ThemeLight, dark: Yggdrasil_ThemeDark}}
			alt="A pixel art green dragon wrapped around a chess pawn."
		/>,
		sourceUrl: "https://github.com/bedrockbreaker/Yggdrasil-Chess-Engine",
		tags: [
			"Game",
			"PC",
			"Godot",
			"C#",
			"2-4 Weeks",
			"Solo Developer",
			"Programmer",
			"Designer",
			"Artist",
			"Work in Progress",
			"Open Source"
		],
		isFeatured: true
	}),

}
