import { useEffect } from "react";
import { useLocation } from "react-router";

export function useResetPageOnRouteChange() {
	const location = useLocation();

	useEffect(() => {
		// Remove focus from the clicked link
		const focusTarget = document.createElement("div");
		focusTarget.tabIndex = -1;
		document.body.appendChild(focusTarget);
		focusTarget.focus();
		document.body.removeChild(focusTarget);

		// Scroll to top
		window.scrollTo(0, 0);
	}, [location]);
}
