import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, useRouteError } from "react-router";

import { Link } from "~/Components/Link";
import { Text } from "~/Components/Text";

export function ErrorBoundary() {
	const { t } = useTranslation();
	const error = useRouteError();
	const isRouteError = isRouteErrorResponse(error);

	return <div className="h-full flex justify-center items-center">
		<div className="flex flex-col max-w-7xl grow">
			<Text variant="h1" className="text-center">
				{isRouteError ? error.status : t("error.unexpected-error")}
			</Text>
			<Text className="text-center">
				{isRouteError
					? error.data?.message || error.statusText || t("route-fallback")
					: t("error.internal")
				}
				<br/>
				<Link href="/">{t("error.return-homepage")}</Link>
			</Text>
		</div>
	</div>;
}
