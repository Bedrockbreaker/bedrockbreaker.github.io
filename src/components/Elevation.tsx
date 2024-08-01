import { ReactElement } from "react";

import { useScrollTrigger } from "../hooks/useScrollTrigger";

export function Elevation({children, className}: {children: ReactElement | ReactElement[], className?: string}) {
	const trigger = useScrollTrigger(0);

	return <div className={`transition-shadow duration-300 ${trigger ? "shadow-lg" : ""} ${className || ""}`}>
		{children}
	</div>;
}