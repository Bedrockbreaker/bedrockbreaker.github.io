import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Menubar } from "./Menubar";

export function App() {
	return <>
		<Menubar/>
		<Outlet/>
		<Footer/>
	</>;
}