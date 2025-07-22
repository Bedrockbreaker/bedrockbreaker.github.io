import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, Outlet, RouterProvider } from "react-router";

import { ThemeProvider } from "./Hooks/useTheme";
import "./Util/i18n";
import { About } from "./Pages/About";
import { App } from "./Pages/App.tsx";
import { Boards } from "./Pages/Boards.tsx";
import { BoardsGPE } from "./Pages/BoardsGPE.tsx";
import { BoardsGAM } from "./Pages/BoardsGAM.tsx";
import { ErrorBoundary } from "./Pages/ErrorBoundary";
import { Portfolio } from "./Pages/Portfolio.tsx";
import { Resume } from "./Pages/Resume";
import { SIP } from "./Pages/SIP";

import "~/index.css";

// TODO: Individual project pages

const router = createHashRouter([{
	path: "/",
	element: <App><Outlet/></App>,
	errorElement: <App><ErrorBoundary/></App>,
	children: [
		{index: true, element: <About/>},
		{path: "/portfolio", element: <Portfolio/>},
		{path: "/resume", element: <Resume/>},
		{path: "/sip", element: <SIP/>},
		{path: "/boards", element: <Boards/>, children: [
			{path: "game-programming", element: <BoardsGPE/>},
			{path: "game-design", element: <BoardsGAM/>}
		]}
	]
}]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router}/>
		</ThemeProvider>
	</StrictMode>
);
