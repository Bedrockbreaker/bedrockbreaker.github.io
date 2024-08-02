import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { AboutPage } from "./pages/About.tsx";
import { App } from "./components/App.tsx";
import { BoardsPage } from "./pages/Boards.tsx";
import { BoardsGDPage } from "./pages/BoardsGD.tsx";
import { BoardsGPEPage } from "./pages/BoardsGPE.tsx";
import { ErrorPage } from "./pages/Error.tsx";
import { ProjectsPage } from "./pages/Projects.tsx";
import { ResumePage } from "./pages/Resume.tsx";

import "./index.css";

const router = createHashRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				index: true,
				element: <AboutPage/>
			},
			{
				path: "/projects",
				element: <ProjectsPage/>
			},
			{
				path: "/boards",
				element: <BoardsPage/>,
				children: [
					{
						path:"/boards/game-programming",
						element: <BoardsGPEPage/>
					},
					{
						path:"/boards/game-design",
						element: <BoardsGDPage/>
					}
				]
			},
			{
				path: "/resume",
				element: <ResumePage/>
			}
		]
	}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);