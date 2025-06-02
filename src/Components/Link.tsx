import { ExternalLinkIcon } from "lucide-react";
import { useMemo } from "react";
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router";

export interface LinkProps extends Omit<RouterLinkProps, "to" | "download"> {
	href: string;
	search?: string;
	hasUnderline?: boolean;
	isExternal?: boolean;
	hasExternalIcon?: boolean;
	downloadFileName?: string;
}

export function Link({
	href,
	search = "",
	hasUnderline = true,
	isExternal,
	hasExternalIcon,
	downloadFileName = "",
	className = "",
	children,
	...props
}: LinkProps) {
	isExternal ??= !href.startsWith("/");
	hasExternalIcon ??= isExternal;

	const innerHtml = useMemo(() => {
		return !isExternal || !hasExternalIcon
			? children
			: <>
				<span>{children}</span>
				<ExternalLinkIcon className="inline-block" size={16}/>
			</>;
	}, [isExternal, hasExternalIcon, children]);

	const linkClassName = `font-medium ${hasUnderline ? "underline underline-offset-4" : ""} `
		+ `${isExternal && hasExternalIcon ? "inline-flex items-center space-x-1" : ""} ${className}`;

	return <RouterLink
		to={search === "" ? href : {pathname: href, search}}
		target={isExternal ? "_blank" : "_self"}
		className={linkClassName}
		{...(downloadFileName !== "" ? {download: downloadFileName} : undefined)}
		{...props}
	>
		{innerHtml}
	</RouterLink>;
}
