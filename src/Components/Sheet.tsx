import { XIcon } from "lucide-react";
import {
	type DialogCloseProps,
	type DialogContentProps as DialogContentPrimitiveProps,
	type DialogDescriptionProps,
	type DialogOverlayProps,
	type DialogPortalProps,
	type DialogProps,
	type DialogTitleProps,
	type DialogTriggerProps,
	Close,
	Content,
	Description,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger
} from "@radix-ui/react-dialog";
import { CreateVariantsConfig, VariantProps } from "~/Util/ClassVariants";

export function Sheet(props: DialogProps) {
	return <Root data-slot="sheet" {...props}/>;
}

export function SheetTrigger(props: DialogTriggerProps) {
	return <Trigger data-slot="sheet-trigger" {...props}/>;
}

export function SheetClose(props: DialogCloseProps) {
	return <Close data-slot="sheet-close" {...props}/>;
}

// Don't export
function SheetPortal(props: DialogPortalProps) {
	return <Portal data-slot="sheet-portal" {...props}/>;
}

// Don't export
function SheetOverlay({ className = "", ...props }: DialogOverlayProps) {
	return <Overlay
		data-slot="sheet-overlay"
		className={
			"data-[state=open]:animate-in data-[state=closed]:animate-out bg-black/50 "
			+ "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 "
			+ className
		}
		{...props}
	/>;
} 

const GetSheetContentClasses = CreateVariantsConfig(
	"bg-mid data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col "
		+ "gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 "
		+ "data-[state=open]:duration-500 border-accent",
	{
		variants: {
			side: {
				top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top "
					+ "inset-x-0 top-0 h-auto border-b",
				right: "data-[state=closed]:slide-out-to-right "
					+ "data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 "
					+ "border-l sm:max-w-sm",
				bottom: "data-[state=closed]:slide-out-to-bottom "
					+ "data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
				left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left "
					+ "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm"
			}
		},
		defaults: {
			side: "right"
		}
	}
);

interface SheetContentProps extends
	DialogContentPrimitiveProps,
	VariantProps<typeof GetSheetContentClasses> {}

export function SheetContent({
	side = "right",
	className = "",
	children, ...props
}: SheetContentProps) {
	return <SheetPortal>
		<SheetOverlay/>
		<Content
			data-slot="sheet-content"
			className={GetSheetContentClasses({ side, className })}
			{...props}
		>
			{children}
			<Close
				className={
					"ring-offset-[var(--background-mid)] focus:ring-mid "
					+ "data-[state=open]:bg-dark absolute top-4 right-4 rounded-xs opacity-70 "
					+ "transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 "
					+ "focus:outline-hidden disabled:pointer-events-none"
				}
			>
				<XIcon className="size-4"/>
				<span className="sr-only">Close</span>
			</Close>
		</Content>
	</SheetPortal>;
}

export function SheetHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div
		data-slot="sheet-header"
		className={"flex flex-col gap-1.5 p-4 " + className}
		{...props}
	/>;
}

export function SheetFooter({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div
		data-slot="sheet-footer"
		className={"mt-auto flex flex-col gap-2 p-4 " + className}
		{...props}
	/>;
}

export function SheetTitle({ className = "", ...props }: DialogTitleProps) {
	return <Title
		data-slot="sheet-title"
		className={"text-mid font-semibold " + className}
		{...props}
	/>;
}

export function SheetDescription({ className = "", ...props }: DialogDescriptionProps) {
	return <Description
		data-slot="sheet-description"
		className={"text-dark text-sm " + className}
		{...props}
	/>;
}
