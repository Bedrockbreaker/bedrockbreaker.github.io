import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { ThemedImage } from "./ThemedImg";
import { Divider } from "./ui/Divider";

import githubIcon from "../assets/github-mark.svg";
import githubIconDark from "../assets/github-mark-white.svg";
import linkedinIcon from "../assets/linkedin-logo.svg";
import linkedinIconDark from "../assets/linkedin-logo-white.svg";

export function Footer() {
	return <footer
		className="mt-24 text-sm bg-neutral-200 dark:bg-neutral-950 shadow-lg"
	>
		<Divider className="bg-accentblue dark:bg-accentred"/>
		<div className="flex flex-row justify-center">
			<div className="flex flex-col p-6 gap-6 max-w-5xl flex-grow">
				<div className="flex flex-row justify-between">
					<Link to="/">About</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/boards">School</Link>
					<Link to="/resume">Resume</Link>
				</div>
				<Divider className="bg-neutral-300"/>
				<div className="flex flex-row flex-wrap gap-x-3 gap-y-1">
					<span className="w-full">Follow me:</span>
					<Link
						to="https://github.com/Bedrockbreaker"
						target="_blank"
						aria-label="GitHub"
					>
						<ThemedImage
							src={githubIcon}
							srcDark={githubIconDark}
							alt="GitHub Logo"
							className="inline-block w-6 h-6"
						/>
					</Link>{" "}
					<Link
						to="https://www.linkedin.com/in/jenson-searle/"
						target="_blank"
						aria-label="LinkedIn"
					>
						<ThemedImage
							src={linkedinIcon}
							srcDark={linkedinIconDark}
							alt="LinkedIn&reg; Logo"
							className="inline-block w-6 h-6"
						/>
					</Link>
				</div>
				<div className="flex flex-row justify-between">
					<p>
						&copy; {new Date().getFullYear()} Bedrockbreaker.
						Licensed under{" "}
						<Link
							to="https://github.com/Bedrockbreaker/bedrockbreaker.github.io/blob/main/LICENSE"
							target="_blank"
						>
							MIT.
						</Link>
					</p>
					<Link
						to="https://github.com/Bedrockbreaker/bedrockbreaker.github.io"
						target="_blank"
						className="inline-flex items-center space-x-1"
					>
						<span>View Source</span>
						<ExternalLinkIcon className="inline-block" size={16}/>
					</Link>
				</div>
			</div>
		</div>
	</footer>;
}