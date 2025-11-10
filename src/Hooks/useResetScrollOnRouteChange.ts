import { useEffect } from "react";
import { useLocation } from "react-router";

export function useResetPageOnRouteChange() {
	const location = useLocation();
	const {hash} = location;

	useEffect(() => {
		// Remove focus from the clicked link
		const focusTarget = document.createElement("div");
		focusTarget.tabIndex = -1;
		document.body.appendChild(focusTarget);
		focusTarget.focus();
		document.body.removeChild(focusTarget);

		// Scroll to top
		if (hash !== "") return;
		window.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		if (hash == "") return;
		const element = document.querySelector(hash);
		if (element != null) element.scrollIntoView({behavior: "smooth"});
	}, [hash]);

	return null;
}
