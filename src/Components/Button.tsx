import { Slot } from "@radix-ui/react-slot";

import { CreateVariantsConfig, VariantProps } from "~/Util/ClassVariants";

const GetClasses = CreateVariantsConfig(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm "
		+ "font-medium transition-all disabled:pointer-events-none disabled:opacity-50 "
		+ "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 "
		+ "[&_svg]:shrink-0 outline-none focus-visible:border-[var(--ring-mid)] "
		+ "focus-visible:ring-mid/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 "
		+ "dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			kind: {
				default: "bg-darker text-mid shadow-xs hover:bg-dark/90",
				destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 "
					+ "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 "
					+ "dark:bg-destructive/60",
				outline: "border bg-mid shadow-xs hover:bg-dark",
				secondary: "bg-dark text-mid shadow-xs hover:bg-dark/80",
				ghost: "hover:bg-dark hover:text-mid dark:hover:bg-dark/50",
				link: "text-mid underline-offset-4 hover:underline"
			},
			size: {
				default: "h-9 rounded-md px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9 rounded-md",
				custom: ""
			}
		},
		defaults: {
			kind: "default",
			size: "default"
		}
	}
);

export interface ButtonProps extends
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof GetClasses>
{
	asChild?: boolean;
}

export function Button({
	className,
	kind,
	size,
	asChild = false,
	...props
}: ButtonProps) {
	const ComponentType = asChild ? Slot : "button";

	return <ComponentType
		data-slot="button"
		className={GetClasses({ kind, size, className })}
		{...props}
	/>;
}
