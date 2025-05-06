import { useScrollTrigger } from "~/Hooks/useScrollTrigger";

export interface ElevationProps extends React.HTMLAttributes<HTMLDivElement> {
	scrollThreshold?: number
}

export function Elevation({
	scrollThreshold = 0,
	className = "",
	children,
	...props
}: ElevationProps) {
	const isTriggered = useScrollTrigger(scrollThreshold);

	return <div
		className={`transition-all duration-300 ${isTriggered ? "shadow-lg" : ""} ${className}`}
		{...props}
	>
		{children}
	</div>;
}
