import { Slot } from "@radix-ui/react-slot";

import { CreateVariantsConfig, type VariantProps } from "~/Util/ClassVariants";

const GetClasses = CreateVariantsConfig(
	"inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium "
		+ "w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none "
		+ "focus-visible:border-mid focus-visible:ring-mid/50 focus-visible:ring-[3px] "
		+ "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 "
		+ "aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
	{
		variants: {
			kind: {
				default: "border-transparent bg-mid text-mid [a&]:hover:bg-mid/90",
				secondary: "border-transparent bg-dark text-mid [a&]:hover:bg-dark/90",
				destructive: "border-transparent bg-destructive text-white "
					+ "[a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 "
					+ "dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline: "text-mid [a&]:hover:bg-dark [a&]:hover:text-mid",

				color1: "border-transparent bg-tag-1-bg text-tag-1-fg [a&]:hover:bg-tag-1-bg/90",
				color2: "border-transparent bg-tag-2-bg text-tag-2-fg [a&]:hover:bg-tag-2-bg/90",
				color3: "border-transparent bg-tag-3-bg text-tag-3-fg [a&]:hover:bg-tag-3-bg/90",
				color4: "border-transparent bg-tag-4-bg text-tag-4-fg [a&]:hover:bg-tag-4-bg/90",
				color5: "border-transparent bg-tag-5-bg text-tag-5-fg [a&]:hover:bg-tag-5-bg/90",
				color6: "border-transparent bg-tag-6-bg text-tag-6-fg [a&]:hover:bg-tag-6-bg/90",
				color7: "border-transparent bg-tag-7-bg text-tag-7-fg [a&]:hover:bg-tag-7-bg/90",
				color8: "border-transparent bg-tag-8-bg text-tag-8-fg [a&]:hover:bg-tag-8-bg/90",
				color9: "border-transparent bg-tag-9-bg text-tag-9-fg [a&]:hover:bg-tag-9-bg/90",
			}
		},
		defaults: {
			kind: "default"
		}
	}
);

interface BadgeProps extends
	React.HTMLAttributes<HTMLSpanElement>,
	VariantProps<typeof GetClasses>
{
	asChild?: boolean	
}

export function Badge({
	kind,
	className = "",
	asChild = false,
	...props
}: BadgeProps) {
	const ComponentType = asChild ? Slot : "span";

	return <ComponentType
		data-slot="badge"
		className={GetClasses({ kind, className })}
		{...props}
	/>;
}
