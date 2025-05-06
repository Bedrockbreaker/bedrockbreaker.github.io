import { Divider } from "./Divider";
import { Link } from "./Link";
import { Text } from "./Text";
import { ThemedImage } from "./ThemedImg";

import Github_ThemeDark from "~/Assets/Socials/Github_ThemeDark.svg";
import Github_ThemeLight from "~/Assets/Socials/Github_ThemeLight.svg";
import Linkedin_ThemeDark from "~/Assets/Socials/Linkedin_ThemeDark.svg";
import Linkedin_ThemeLight from "~/Assets/Socials/Linkedin_ThemeLight.svg";

export function Footer() {
	return <footer className="sticky mt-24 text-sm bg-darker">
		<Divider className="bg-accent"/>
		<div className="flex justify-center">
			<div className="flex flex-col p-6 gap-6 max-w-7xl grow">
				<div className="flex flex-col gap-6 md:flex-row md:justify-between">
					<Link href="/" hasUnderline={false}>About</Link>
					<Link href="/portfolio" hasUnderline={false}>Portfolio</Link>
					<Link href="/resume" hasUnderline={false}>Résumé</Link>
				</div>
				<Divider/>
				<div className="flex flex-row flex-wrap gap-x-3 gap-y-1">
					<span className="w-full">Follow me:</span>
					<Link
						href="https://github.com/Bedrockbreaker"
						aria-label="GitHub"
						hasExternalIcon={false}
					>
						<ThemedImage
							sources={{light: Github_ThemeLight, dark: Github_ThemeDark}}
							alt="GitHub Logo"
							className="inline-block w-6 h-6"
						/>
					</Link>{" "}
					<Link
						href="https://www.linkedin.com/in/jenson-searle"
						aria-label="LinkedIn"
						hasExternalIcon={false}
					>
						<ThemedImage
							sources={{light: Linkedin_ThemeLight, dark: Linkedin_ThemeDark}}
							alt="LinkedIn Logo"
							className="inline-block w-6 h-6"
						/>
					</Link>
				</div>
				<div className="flex flex-col gap-6 md:flex-row md:justify-between">
					<Text>
						&copy; 2024-{new Date().getFullYear()} Bedrockbreaker. Licensed under{" "}
						<Link
							href="https://github.com/Bedrockbreaker/bedrockbreaker.github.io/blob/main/LICENSE"
							hasExternalIcon={false}
						>
							MIT.
						</Link>
					</Text>
					<Link href="https://github.com/Bedrockbreaker/bedrockbreaker.github.io">
						View Source
					</Link>
				</div>
			</div>
		</div>
	</footer>
}
