import { type ReactNode, useRef } from "react";

import { useFlexOrientation } from "../hooks/useFlexOrientation";

export function Divider(
	{vertical, variant, className, children}: {
		vertical?: boolean,
		variant?: "full" | "middle",
		className?: string,
		children?: ReactNode | ReactNode[]
	}
) {
	const ref = useRef<HTMLDivElement>(null);
	const orientation =  useFlexOrientation(ref);

	vertical ??= orientation === "row" || orientation === "row-reverse";
	variant ??= "full";
	className ??= "";

	const orientationClass = vertical
		? `flex-col mx-1 ${variant === "full" ? "" : "before:mt-1 after:mb-1"} h-auto w-4 before:h-full before:w-0.5 after:h-full after:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-50% before:via-gray-500 dark:before:via-gray-400 before:to-gray-500 dark:before:to-gray-400 after:bg-gradient-to-b after:from-gray-500 dark:after:from-gray-400 after:via-50% after:via-gray-500 dark:after:via-gray-400`
		: `flex-row my-1 ${variant === "full" ? "" : "before:ml-1 after:mr-1"} h-4 before:h-0.5 before:w-full after:h-0.5 after:w-full before:bg-gradient-to-r before:from-transparent before:via-50% before:via-gray-500 dark:before:via-gray-400 before:to-gray-500 dark:before:to-gray-400 after:bg-gradient-to-r after:from-gray-500 dark:after:from-gray-400 after:via-50% after:via-gray-500 dark:after:via-gray-400`;

	return <div ref={ref}
		className={`flex ${orientationClass} items-center self-stretch whitespace-nowrap before:flex-grow before:content-[''] after:flex-grow after:content-[''] [&:not(:empty)]:gap-1 ${className}`}
	>
		{children}
	</div>;
}