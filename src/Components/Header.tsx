import { LanguagesIcon, MenuIcon, SunMoonIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

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
	const { t, i18n } = useTranslation();
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
							{t("header.about")}
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href="/portfolio" hasUnderline={false}>
							{t("header.portfolio")}
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href="/resume" hasUnderline={false}>
							{t("header.resume")}
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<Text variant="muted" className="ml-6 text-nowrap">{t("header.notice")}</Text>
			</NavigationMenu>
			<div className="grow"/>
			<div className="flex flex-row space-x-1 m-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							kind={isElevated ? "ghost" : "outline"}
							size="icon"
							aria-label={t("header.theme.aria-label")}
							className={isElevated ? "border" : ""}
						>
							<SunMoonIcon/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuRadioGroup onValueChange={value => setTheme(value as Theme)}>
							<DropdownMenuRadioItem value="light">{t("header.theme.light")}</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="dark">{t("header.theme.dark")}</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="system">{t("header.theme.system")}</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							kind={isElevated ? "ghost" : "outline"}
							size="icon"
							aria-label={t("header.language.aria-label")}
							className={isElevated ? "border" : ""}
						>
							<LanguagesIcon/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuRadioGroup onValueChange={value => i18n.changeLanguage(value)}>
							{/* Hard-coded text because these obviously shouldn't change */}
							<DropdownMenuRadioItem value="en-US">English</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="ja-JP">日本語</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<Sheet>
					<SheetTrigger asChild className="md:hidden">
						<Button
							kind={isElevated ? "ghost" : "outline"}
							size="icon"
							aria-label={t("header.navigation.aria-label")}
							className={isElevated ? "border" : ""}
						>
							<MenuIcon/>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<SheetTitle className="sr-only">{t("header.navigation.description")}</SheetTitle>
						<SheetDescription className="sr-only">{t("header.navigation.description")}</SheetDescription>
						<div className="flex flex-col gap-6 p-6 mt-6">
							<Button asChild><Link href="/">{t("header.about")}</Link></Button>
							<Button asChild><Link href="/portfolio">{t("header.portfolio")}</Link></Button>
							<Button asChild><Link href="/resume">{t("header.resume")}</Link></Button>
							<Text variant="muted" className="text-nowrap">{t("header.notice")}</Text>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</Elevation>;
}
