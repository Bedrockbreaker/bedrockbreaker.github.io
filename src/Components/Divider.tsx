import { Root, type SeparatorProps as RootProps } from "@radix-ui/react-separator";

export function Divider({
	className = "",
	orientation = "horizontal",
	decorative = true,
	...props
}: RootProps) {
	return <Root
		data-slot="separator-root"
		decorative={decorative}
		orientation={orientation}
		className={"bg-[var(--border-mid)] shrink-0 "
			+ "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full "
			+ "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px "
			+ className
		}
		{...props}
	/>;
};
