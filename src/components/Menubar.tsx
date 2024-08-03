import { GlobeIcon, SunMoonIcon } from "lucide-react";

import { Elevation } from "./Elevation";
import { useTheme } from "../hooks/useTheme";
import { useResetFocusOnRouteChange } from "../hooks/useResetFocusOnRouteChange";
import { Button } from "./ui/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./ui/DropdownMenu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "./ui/NavigationMenu";

export function Menubar() {
	useResetFocusOnRouteChange();
	const { setTheme } = useTheme();

	return <Elevation
		className="sticky top-0 flex flex-row items-center h-14 w-full bg-bglight dark:bg-bgdark"
	>
		<NavigationMenu className="m-2">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink to="/">
						About
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink to="/projects">
						Projects
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>School</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-1 grid-cols-[1fr] p-2">
							<li>
								<NavigationMenuLink to="/boards/game-programming">
									Game Programming
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink to="/boards/game-design" className="w-full">
									Game Design
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
					<NavigationMenuViewport/>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink to="/resume">
						Résumé
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
		<div className="flex-grow"/>
		<div className="flex flex-row space-x-0.5 m-2">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						aria-label="Open theme selection menu"
						className="focus:bg-neutral-100 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 focus-visible:outline-none focus-visible:ring-transparent dark:focus-visible:ring-transparent focus-visible:ring-offset-transparent"
					>
						<SunMoonIcon/>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuRadioGroup onValueChange={value => {
						setTheme(value as "light" | "dark" | "system");
					}}>
						<DropdownMenuRadioItem value="light">
							Light
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="dark">
							Dark
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="system">
							System
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						aria-label="Open language selection menu" /* TODO: I18n */
						className="focus:bg-neutral-100 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 focus-visible:outline-none focus-visible:ring-transparent dark:focus-visible:ring-transparent focus-visible:ring-offset-transparent"
					>
						<GlobeIcon/>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuRadioGroup>
						<DropdownMenuRadioItem value="en_US">
							English
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="jp_JP">
							日本語
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	</Elevation>
}