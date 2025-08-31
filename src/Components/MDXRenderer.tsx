import { MDXProvider } from "@mdx-js/react";

import { MDXComponents } from "./MDXComponents";

export type MDXRendererProps = Parameters<typeof MDXProvider>[0];

export function MDXRenderer({children, ...props}: MDXRendererProps) {
	return <MDXProvider components={MDXComponents} {...props}>
		<article>{children}</article>
	</MDXProvider>;
}
