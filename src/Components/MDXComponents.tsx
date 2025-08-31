import type { MDXComponents as MDXComponentsType } from "mdx/types";

import { Link, type LinkProps } from "./Link";
import { LI, OL, UL } from "./List";
import { Text } from "./Text";

export const MDXComponents: Readonly<MDXComponentsType> = {
	h1: (props: any) => <Text variant="h1" {...props}/>,
	h2: (props: any) => <Text variant="h2" {...props}/>,
	h3: (props: any) => <Text variant="h3" {...props}/>,
	h4: (props: any) => <Text variant="h4" {...props}/>,
	p: (props: any) => <Text {...props}/>,
	blockquote: (props: any) => <Text variant="blockquote" {...props}/>,
	pre: ({className, ...props}: React.HTMLAttributes<HTMLPreElement>) =>
		<pre
			className={
				className + " relative rounded-sm px-[1.3rem] py-[1.2rem] font-mono text-sm [&>*]:px-0 [&>*]:py-0"
			}
			{...props}
		/>,
	code: (props: any) => <Text variant="code" {...props}/>,
	lead: (props: any) => <Text variant="lead" {...props}/>,
	large: (props: any) => <Text variant="large" {...props}/>,
	small: (props: any) => <Text variant="small" {...props}/>,
	muted: (props: any) => <Text variant="muted" {...props}/>,
	a: (props: LinkProps) => <Link {...props}/>,
	ul: (props: React.HTMLAttributes<HTMLUListElement>) => <UL {...props}/>,
	ol: (props: React.HTMLAttributes<HTMLOListElement>) => <OL {...props}/>,
	li: (props: React.HTMLAttributes<HTMLLIElement>) => <LI {...props}/>
};
