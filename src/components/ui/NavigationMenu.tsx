// https://ui.shadcn.com/docs/components/navigation-menu

import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { Content, Item, List, Root, Trigger, Link as PrimitiveLink, Viewport, Indicator } from "@radix-ui/react-navigation-menu";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

const NavigationMenu = forwardRef<
	ElementRef<typeof Root>,
	ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref) => (
	<Root
		ref={ref}
		className={cn(
			"relative z-10 flex max-w-max flex-1 items-center justify-center",
			className
		)}
		{...props}
	>
		{children}
		{/* <NavigationMenuViewport /> */}
	</Root>
))
NavigationMenu.displayName = Root.displayName

const NavigationMenuList = forwardRef<
	ElementRef<typeof List>,
	ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
	<List
		ref={ref}
		className={cn(
			"group flex flex-1 list-none items-center justify-center space-x-1",
			className
		)}
		{...props}
	/>
))
NavigationMenuList.displayName = List.displayName

const NavigationMenuItem = forwardRef<
	ElementRef<typeof Item>,
	ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
	<Item
		ref={ref}
		className={cn("relative", className)}
		{...props}
	/>
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const navigationMenuTriggerStyle = cva(
	"group inline-flex h-10 min-w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50"
)

const NavigationMenuTrigger = forwardRef<
	ElementRef<typeof Trigger>,
	ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
	<Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), "group", className)}
		{...props}
	>
		{children}{""}
		<ChevronDown
			className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</Trigger>
))
NavigationMenuTrigger.displayName = Trigger.displayName

const NavigationMenuContent = forwardRef<
	ElementRef<typeof Content>,
	ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
	<Content
		ref={ref}
		className={cn(
			"left-[-1px] top-[-1px] absolute",
			"w-fit",
			"data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
			className
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = Content.displayName

const NavigationMenuLink_Internal = PrimitiveLink;

interface NavigationLinkProps {
	to: string;
	className?: string;
	[key: string]: any;
}

const NavigationMenuLink = ({to, ...props}: NavigationLinkProps) => {
	return <NavigationMenuLink_Internal
		asChild
		active={false}
		className={navigationMenuTriggerStyle()}
	>
		<Link to={to} {...props}/>
	</NavigationMenuLink_Internal>
}

const NavigationMenuViewport = forwardRef<
	ElementRef<typeof Viewport>,
	ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn("absolute left-0 top-full flex justify-center")}>
		<Viewport
			className={cn(
				"origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 w-[var(--radix-navigation-menu-viewport-width)] dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	</div>
))
NavigationMenuViewport.displayName =
	Viewport.displayName

const NavigationMenuIndicator = forwardRef<
	ElementRef<typeof Indicator>,
	ComponentPropsWithoutRef<typeof Indicator>
>(({ className, ...props }, ref) => (
	<Indicator
		ref={ref}
		className={cn(
			"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
			className
		)}
		{...props}
	>
		<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800" />
	</Indicator>
))
NavigationMenuIndicator.displayName =
	Indicator.displayName

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport
}
