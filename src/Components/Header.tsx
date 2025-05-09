import { /* LanguagesIcon, */ SunMoonIcon } from "lucide-react";

import { Button } from "./Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger
} from "./DropdownMenu";
import { Elevation } from "./Elevation";
import { useResetPageOnRouteChange } from "~/Hooks/useResetScrollOnRouteChange";
import { useScrollTrigger } from "~/Hooks/useScrollTrigger";
import { Theme, useTheme } from "~/Hooks/useTheme";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from "./NavigationMenu";
import { Text } from "./Text";

export function Header() {
	useResetPageOnRouteChange();
	const { setTheme } = useTheme();
	const isElevated = useScrollTrigger(0);

	return <Elevation
		className={
			"sticky top-0 flex flex-row items-center h-14 w-full mb-8 z-10 border-b "
			+ (isElevated ? "bg-darker border-b-accent" : "bg-mid border-b-mid")
		}
	>
		<div className="flex flex-row p-6 max-w-7xl mx-auto grow overflow-x-hidden">
			<NavigationMenu className="m-2">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink href="/" hasUnderline={false}>
							About
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href="/portfolio" hasUnderline={false}>
							Portfolio
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href="/resume" hasUnderline={false}>
							Résumé
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<Text variant="muted" className="ml-6">Note: Site under construction.</Text>
			</NavigationMenu>
			<div className="grow"/>
			<div className="flex flex-row space-x-0.5 m-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							kind={isElevated ? "ghost" : "outline"}
							aria-label="Open theme selection menu"
							className={isElevated ? "border" : ""}
						>
							<SunMoonIcon/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuRadioGroup onValueChange={value => setTheme(value as Theme)}>
							<DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				{/* TODO: i18n */}
				{/* <DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button kind="outline" aria-label="Open language selection menu">
							<LanguagesIcon/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuRadioGroup>
							<DropdownMenuRadioItem value="en_US">English</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="ja_JP">日本語</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu> */}
			</div>
		</div>
	</Elevation>;
}
