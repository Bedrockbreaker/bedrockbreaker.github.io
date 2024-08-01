import { RefObject, useEffect, useState } from "react";

type FlexOrientation = "row" | "row-reverse" | "column" | "column-reverse";

export function useFlexOrientation(ref: RefObject<HTMLElement>) {
	const [flexDirection, setFlexDirection] = useState<FlexOrientation>();
	
	useEffect(() => {
		if (!ref.current) return;

		setFlexDirection(
			window.getComputedStyle(ref.current.parentElement as Element)
				.flexDirection as FlexOrientation
		);
	});

	return flexDirection;
}