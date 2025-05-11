import { /* LanguagesIcon, */ MenuIcon, SunMoonIcon } from "lucide-react";

import { Button } from "./Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger
} from "./DropdownMenu";
import { Elevation } from "./Elevation";
import { Link } from "./Link";
import { useResetPageOnRouteChange } from "~/Hooks/useResetScrollOnRouteChange";
import { useScrollTrigger } from "~/Hooks/useScrollTrigger";
import { Theme, useTheme } from "~/Hooks/useTheme";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from "./NavigationMenu";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./Sheet";
import { Text } from "./Text";

export function Header() {
	useResetPageOnRouteChange();
	const { setTheme } = useTheme();
	const isElevated = useScrollTrigger(0);

	return <Elevation
		className={
			"fixed top-0 flex flex-row items-center h-14 w-full mb-8 z-10 border-b "
			+ (isElevated ? "bg-darker border-b-accent" : "bg-mid border-b-mid")
		}
	>
		<div className="flex flex-row p-6 max-w-7xl mx-auto grow overflow-x-hidden">
			<NavigationMenu className="hidden md:flex m-2">
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
				<Text variant="muted" className="ml-6 text-nowrap">Note: Site under construction.</Text>
			</NavigationMenu>
			<div className="grow"/>
			<div className="flex flex-row space-x-1 m-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							kind={isElevated ? "ghost" : "outline"}
							size="icon"
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
				<Sheet>
					<SheetTrigger asChild className="md:hidden">
						<Button
							kind={isElevated ? "ghost" : "outline"}
							size="icon"
							aria-label="Open navigation menu"
							className={isElevated ? "border" : ""}
						>
							<MenuIcon/>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<SheetTitle className="sr-only">Navigation</SheetTitle>
						<SheetDescription className="sr-only">Navigation</SheetDescription>
						<div className="flex flex-col gap-6 p-6 mt-6">
							<Button asChild><Link href="/">About</Link></Button>
							<Button asChild><Link href="/portfolio">Portfolio</Link></Button>
							<Button asChild><Link href="/resume">Résumé</Link></Button>
							<Text variant="muted" className="text-nowrap">
								Note: Site under construction.
							</Text>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</Elevation>;
}
