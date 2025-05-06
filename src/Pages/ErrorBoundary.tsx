import { isRouteErrorResponse, useRouteError } from "react-router";

import { App } from "./App";
import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";

export function ErrorBoundary() {
	const error = useRouteError();
	const isRouteError = isRouteErrorResponse(error);

	return <App>
		<div className="h-full flex justify-center items-center">
			<div className="flex flex-col max-w-7xl grow">
				<Text variant="h1" className="text-center">
					{isRouteError ? error.status : "Unexpected Error"}
				</Text>
				<Text className="text-center">
					{isRouteError
						? error.data?.message || error.statusText || "Something went wrong."
						: "An unexpected error occurred. Please try again later."
					}
					<br/>
					<Link href="/">Return to homepage</Link>
				</Text>
			</div>
		</div>
	</App>;
}
