import { ChevronDownIcon } from "lucide-react";
import {
	type NavigationMenuContentProps,
	type NavigationMenuIndicatorProps,
	type NavigationMenuItemProps,
	type NavigationMenuListProps,
	type NavigationMenuProps as NavigationMenuPrimitiveProps,
	type NavigationMenuTriggerProps,
	type NavigationMenuViewportProps,
	Content,
	Indicator,
	Item,
	Link as PrimitiveLink,
	List,
	Root,
	Trigger,
	Viewport
} from "@radix-ui/react-navigation-menu";

import { Link, LinkProps } from "./Link";

interface NavigationMenuProps extends NavigationMenuPrimitiveProps {
	hasViewport?: boolean;
}

export function NavigationMenu({
	hasViewport = true,
	className = "",
	children,
	...props
}: NavigationMenuProps) {
	return <Root
		data-slot="navigation-menu"
		data-viewport={hasViewport}
		className={
			"group/navigation-menu relative flex max-w-max flex-1 items-center justify-center "
			+ className
		}
		{...props}
	>
		{children}
		{hasViewport ? <NavigationMenuViewport/> : undefined}
	</Root>;
}

export function NavigationMenuList({ className = "", ...props }: NavigationMenuListProps) {
	return <List
		data-slot="navigation-menu-list"
		className={"group flex flex-1 list-none items-center justify-center gap-1 " + className}
		{...props}
	/>;
}

export function NavigationMenuItem({ className = "", ...props }: NavigationMenuItemProps) {
	return <Item data-slot="navigation-menu-item" className={"relative " + className} {...props}/>;
}

export function NavigationMenuTrigger({
	className = "",
	children,
	...props
}: NavigationMenuTriggerProps) {
	return <Trigger
		data-slot="navigation-menu-trigger"
		className={
			"group inline-flex h-9 w-max items-center justify-center rounded-md "
			+ "bg-mid px-4 py-2 text-sm font-medium hover:bg-dark focus:bg-dark "
			+ "disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-dark "
			+ "data-[state=open]:focus:bg-dark data-[state=open]:bg-dark/50 "
			+ "focus-visible:ring-mid/50 outline-none transition-[color,box-shadow] "
			+ "focus-visible:ring-[3px] focus-visible:outline-1 " + className
		}
		{...props}
	>
		{children}{" "}
		<ChevronDownIcon
			className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</Trigger>;
}

export function NavigationMenuContent({ className = "", ...props }: NavigationMenuContentProps) {
	return <Content
		data-slot="navigation-menu-content"
		className={
			"data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out "
			+ "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out "
			+ "data-[motion=from-end]:slide-in-from-right-52 "
			+ "data-[motion=from-start]:slide-in-from-left-52 "
			+ "data-[motion=to-end]:slide-out-to-right-52 "
			+ "data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 "
			+ "md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:bg-mid "
			+ "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in "
			+ "group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out "
			+ "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 "
			+ "group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 "
			+ "group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 "
			+ "group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 "
			+ "group-data-[viewport=false]/navigation-menu:top-full "
			+ "group-data-[viewport=false]/navigation-menu:mt-1.5 "
			+ "group-data-[viewport=false]/navigation-menu:overflow-hidden "
			+ "group-data-[viewport=false]/navigation-menu:rounded-md "
			+ "group-data-[viewport=false]/navigation-menu:border "
			+ "group-data-[viewport=false]/navigation-menu:shadow "
			+ "group-data-[viewport=false]/navigation-menu:duration-200 "
			+ "**:data-[slot=navigation-menu-link]:focus:ring-0 "
			+ "**:data-[slot=navigation-menu-link]:focus:outline-none " + className
		}
		{...props}
	/>;
}

export function NavigationMenuViewport({ className = "", ...props }: NavigationMenuViewportProps) {
	return <div className="absolute top-full left-0 isolate z-50 flex justify-center">
		<Viewport
			data-slot="navigation-menu-viewport"
			className={
				"origin-top-center bg-mid data-[state=open]:animate-in "
				+ "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 "
				+ "data-[state=open]:zoom-in-90 relative mt-1.5 "
				+ "h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden "
				+ "rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)] "
				+ className
			}
			{...props}
		/>
	</div>;
}

export function NavigationMenuLink({ className = "", ...props }: LinkProps) {
	return <PrimitiveLink
		data-slot="navigation-menu-link"
		asChild
		active={false}
		className={
			"bg-darker data-[active=true]:focus:bg-dark/90 data-[active=true]:hover:bg-dark/90 "
			+ "data-[active=true]:bg-dark/50 hover:bg-dark/90 focus:bg-dark/90 focus-visible:ring-mid/50 "
			+ "[&_svg:not([class*='text-'])]:text-dark flex flex-col gap-1 rounded-sm p-2 text-sm "
			+ "transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 "
			+ "[&_svg:not([class*='size-'])]:size-4 " + className
		}
	>
		<Link {...props}/>
	</PrimitiveLink>;
}

export function NavigationMenuIndicator({
	className = "",
	...props
}: NavigationMenuIndicatorProps) {
	return <Indicator
		data-slot="navigation-menu-indicator"
		className={
			"data-[state=visible]:animate-in data-[state=hidden]:animate-out "
			+ "data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 "
			+ "items-end justify-center overflow-hidden " + className
		}
		{...props}
	>
		<div className="bg-[var(--border-mid)] relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md"/>
	</Indicator>;
}
