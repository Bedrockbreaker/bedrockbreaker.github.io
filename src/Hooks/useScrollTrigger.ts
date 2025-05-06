import { useEffect, useState } from "react";

export function useScrollTrigger(threshold: number) {
	const [isTriggered, setIsTriggered] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsTriggered(window.scrollY > threshold);

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return isTriggered;
}
