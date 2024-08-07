import { useEffect, useState } from "react";

type PrefersReducedMotion = "reduce" | "no-preference";

const query = window.matchMedia("(prefers-reduced-motion: reduce)");

export function useAccessibility() {
	const [
		prefersReducedMotion,
		setPrefersReducedMotion
	] = useState<PrefersReducedMotion>(
		query.matches ? "reduce" : "no-preference"
	);

	useEffect(() => {
		const onPrefersReducedMotionChange = () => {
			setPrefersReducedMotion(query.matches
				? "reduce"
				: "no-preference"
			);
		};
		query.addEventListener("change", onPrefersReducedMotionChange);

		return () => query.removeEventListener(
			"change",
			onPrefersReducedMotionChange
		);
	}, []);

	return {
		prefersReducedMotion
	};
}