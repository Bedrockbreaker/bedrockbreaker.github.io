import { Outlet } from "react-router";

export function Boards() {
	return <div className="flex flex-col p-6 max-w-7xl mx-auto grow overflow-x-hidden">
		<Outlet/>
	</div>;
}
