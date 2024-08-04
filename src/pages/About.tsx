import { Text } from "../components/Text";

import placeholder from "/placeholder.png";

export function AboutPage() {
	return <>
		<Text variant="h1">
			Jenson Searle
		</Text>
		<img
			src={placeholder}
			alt="A placeholder image containing a green dragon, a white chess pawn, and the word Yggdrasil"
			width={1280}
			height={320}
		/>
		<Text>
			This is the about page. Site under construction.
		</Text>
	</>;
}