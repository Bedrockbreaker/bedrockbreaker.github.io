import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Menubar } from "./Menubar";

export function App() {
	return <div className="flex flex-col h-full">
		<Menubar/>
		<div className="flex-grow">
			<Outlet/>
		</div>
		<Footer/>
	</div>;
}