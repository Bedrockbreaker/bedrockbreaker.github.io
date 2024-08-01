import { useEffect, useState } from "react";

export function useScrollTrigger(threshold = 100) {
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		function onScroll() {
			setTrigger(window.scrollY > threshold);
		}

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return trigger;
}