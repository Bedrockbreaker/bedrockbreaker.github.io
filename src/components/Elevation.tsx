import { ReactElement } from "react";

import { useScrollTrigger } from "../hooks/useScrollTrigger";

export function Elevation({threshold = 0, children, className}: {threshold?: number, children: ReactElement | ReactElement[], className?: string}) {
	const trigger = useScrollTrigger(threshold);

	return <div className={`transition-shadow duration-300 ${trigger ? "shadow-lg" : ""} ${className || ""}`}>
		{children}
	</div>;
}