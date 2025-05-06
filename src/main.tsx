import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, Outlet, RouterProvider } from "react-router";

import { ThemeProvider } from "./Hooks/useTheme";
import { App } from "~/Pages/App.tsx";
import { ErrorBoundary } from "./Pages/ErrorBoundary";
import { TypographyDemo } from "./Pages/TypographyDemo";

import "~/index.css";

const router = createHashRouter([{
	path: "/",
	element: <App><Outlet/></App>,
	errorElement: <ErrorBoundary/>,
	children: [
		{index: true, element: <TypographyDemo/>}
	]
}]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router}/>
		</ThemeProvider>
	</StrictMode>
);
