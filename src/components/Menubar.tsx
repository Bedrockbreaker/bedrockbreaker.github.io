import { Link } from "react-router-dom";

import { Divider } from "./Divider";
import { Elevation } from "./Elevation";

export function Menubar() {
	return <Elevation
		className="sticky top-0 h-12 w-full flex items-center bg-bglight dark:bg-bgdark text-neutral-950 dark:text-neutral-300"
	>
		<div className="flex flex-row items-center m-2 h-8 w-full">
			<Link
				to="/"
				className="transition-colors px-4 py-1 rounded hover:bg-gray-600 dark:hover:text-white"
			>
				About
			</Link>
			<Divider variant="middle"/>
			<Link
				to="/projects"
				className="transition-colors px-4 py-1 rounded hover:bg-gray-600 dark:hover:text-white"
			>
				Projects
			</Link>
			<Divider variant="middle"/>
			<Link
				to="/boards"
				className="transition-colors px-4 py-1 rounded hover:bg-gray-600 dark:hover:text-white"
			>
				School
			</Link>
			<Divider variant="middle"/>
			<Link
				to="/resume"
				className="transition-colors px-4 py-1 rounded hover:bg-gray-600 dark:hover:text-white"
			>
				Resume
			</Link>
			<div className="flex-grow"/>
			<div className="px-4 py-1 rounded hover:bg-gray-600 dark:hover:text-white">
				Theme {/* TODO: add theme menu */}
			</div>
			<Divider/>
			<div className="px-4 py-1 rounded hover:bg-gray-600 dark:hover:text-white">
				Lang {/* TODO: add language menu */}
			</div>
		</div>
	</Elevation>;
}