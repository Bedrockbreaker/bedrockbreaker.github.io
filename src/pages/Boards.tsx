import { Outlet } from "react-router-dom";

export function BoardsPage() {
	return <>
		<h1>Boards</h1>
		<p>
			This is the boards page
		</p>
		<Outlet/>
	</>;
}