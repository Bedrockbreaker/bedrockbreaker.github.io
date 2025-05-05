import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";

import { App } from "~/Pages/App.tsx";

import "~/index.css";

const router = createHashRouter([{
	path: "/",
	element: <App/>
}]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
