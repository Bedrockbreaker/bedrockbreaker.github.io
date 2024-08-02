import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useResetFocusOnRouteChange() {
	const location = useLocation();

	useEffect(() => {
		const focusTarget = document.createElement("div");
		focusTarget.tabIndex = -1;
		document.body.appendChild(focusTarget);
		focusTarget.focus();
		document.body.removeChild(focusTarget);
	}, [location]);
}