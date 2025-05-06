import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
	type DropdownMenuCheckboxItemProps,
	type DropdownMenuContentProps,
	type DropdownMenuGroupProps,
	type DropdownMenuItemProps as DropdownMenuItemPrimitiveProps,
	type DropdownMenuLabelProps as DropdownMenuLabelPrimitiveProps,
	type DropdownMenuPortalProps,
	type DropdownMenuProps,
	type DropdownMenuRadioGroupProps,
	type DropdownMenuRadioItemProps,
	type DropdownMenuSeparatorProps,
	type DropdownMenuSubProps,
	type DropdownMenuSubContentProps,
	type DropdownMenuSubTriggerProps as DropdownMenuSubTriggerPrimitiveProps,
	type DropdownMenuTriggerProps,
	CheckboxItem,
	Content,
	Group,
	Item,
	ItemIndicator,
	Label,
	Portal,
	RadioGroup,
	RadioItem,
	Root,
	Separator,
	Sub,
	SubContent,
	SubTrigger,
	Trigger
} from "@radix-ui/react-dropdown-menu";

export function DropdownMenu({ ...props }: DropdownMenuProps) {
	return <Root data-slot="dropdown-menu" {...props}/>;
}

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
	return <Portal data-slot="dropdown-menu-portal" {...props}/>;
}

export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
	return <Trigger data-slot="dropdown-menu-trigger" {...props}/>;
}

export function DropdownMenuContent({
	sideOffset = 4,
	className = "",
	...props
}: DropdownMenuContentProps) {
	return <Portal>
		<Content
			data-slot="dropdown-menu-content"
			sideOffset={sideOffset}
			className={
				"bg-mid text-mid data-[state=open]:animate-in "
				+ "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 "
				+ "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 "
				+ "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 "
				+ "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 "
				+ "data-[side=top]:slide-in-from-bottom-2 z-50 "
				+ "max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] "
				+ "origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden "
				+ "overflow-y-auto rounded-md border p-1 shadow-md " + className
			}
			{...props}
		/>
	</Portal>;
}

export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
	return <Group data-slot="dropdown-menu-group" {...props}/>;
}

interface DropdownMenuItemProps extends DropdownMenuItemPrimitiveProps {
	isInset?: boolean;
	variant?: "default" | "destructive";
}

export function DropdownMenuItem({
	isInset,
	variant = "default",
	className = "",
	...props
}: DropdownMenuItemProps) {
	return <Item
		data-slot="dropdown-menu-item"
		data-inset={isInset}
		data-variant={variant}
		className={
			"focus:bg-dark data-[variant=destructive]:text-destructive "
			+ "data-[variant=destructive]:focus:bg-destructive/10 "
			+ "dark:data-[variant=destructive]:focus:bg-destructive/20 "
			+ "data-[variant=destructive]:focus:text-destructive "
			+ "data-[variant=destructive]:*:[svg]:!text-destructive "
			+ "[&_svg:not([class*='text-'])]:text-dark relative flex cursor-default "
			+ "items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none "
			+ "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 "
			+ "data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 "
			+ "[&_svg:not([class*='size-'])]:size-4 " + className
		}
		{...props}
	/>;
}

export function DropdownMenuCheckboxItem({
	checked,
	className = "",
	children,
	...props
}: DropdownMenuCheckboxItemProps) {
	return <CheckboxItem
		data-slot="dropdown-menu-checkbox-item"
		className={
			"focus:bg-dark relative flex cursor-default items-center gap-2 rounded-sm "
			+ "py-1.5 pr-2 pl-8 text-sm outline-hidden select-none "
			+ "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 "
			+ "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 "
			+ className
		}
		checked={checked}
		{...props}
	>
		<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
			<ItemIndicator><CheckIcon className="size-4"/></ItemIndicator>
		</span>
		{children}
	</CheckboxItem>;
}

export function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps) {
	return <RadioGroup data-slot="dropdown-menu-radio-group" {...props}/>;
}

export function DropdownMenuRadioItem({
	className = "",
	children,
	...props
}: DropdownMenuRadioItemProps) {
	return <RadioItem
		data-slot="dropdown-menu-radio-item"
		className={
			"focus:bg-dark relative flex cursor-default items-center gap-2 rounded-sm "
			+ "py-1.5 pr-2 pl-8 text-sm outline-hidden select-none "
			+ "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 "
			+ "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 "
			+ className
		}
		{...props}
	>
		<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
			<ItemIndicator><CircleIcon className="size-2 fill-current"/></ItemIndicator>
		</span>
		{children}
	</RadioItem>;
}

interface DropdownMenuLabelProps extends DropdownMenuLabelPrimitiveProps {
	inset?: boolean;
}

export function DropdownMenuLabel({ inset, className = "", ...props }: DropdownMenuLabelProps) {
	return <Label
		data-slot="dropdown-menu-label"
		data-inset={inset}
		className={"px-2 py-1.5 text-sm font-medium data-[inset]:pl-8 " + className}
		{...props}
	/>;
}

export function DropdownMenuSeparator({ className = "", ...props }: DropdownMenuSeparatorProps) {
	return <Separator
		data-slot="dropdown-menu-separator"
		className={"bg-[var(--border-mid)] -mx-1 my-1 h-px " + className}
		{...props}
	/>;
}

export function DropdownMenuShortcut({
	className = "",
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return <span
		data-slot="dropdown-menu-shortcut"
		className={"text-dark ml-auto text-xs tracking-widest " + className}
		{...props}
	/>;
}

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
	return <Sub data-slot="dropdown-menu-sub" {...props}/>;
}

interface DropdownMenuSubTriggerProps extends DropdownMenuSubTriggerPrimitiveProps {
	inset?: boolean;
}

export function DropdownMenuSubTrigger({
	inset,
	className = "",
	children,
	...props
}: DropdownMenuSubTriggerProps) {
	return <SubTrigger
		data-slot="dropdown-menu-sub-trigger"
		data-inset={inset}
		className={
			"focus:bg-dark data-[state=open]:bg-dark flex cursor-default items-center "
			+ "rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 "
			+ className
		}
		{...props}
	>
		{children}
		<ChevronRightIcon className="ml-auto size-4"/>
	</SubTrigger>;
}

export function DropdownMenuSubContent({ className = "", ...props }: DropdownMenuSubContentProps) {
	return <SubContent
		data-slot="dropdown-menu-sub-content"
		className={
			"bg-mid text-mid data-[state=open]:animate-in data-[state=closed]:animate-out "
			+ "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 "
			+ "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 "
			+ "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 "
			+ "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 "
			+ "min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) "
			+ "overflow-hidden rounded-md border p-1 shadow-lg " + className
		}
		{...props}
	/>;
}
