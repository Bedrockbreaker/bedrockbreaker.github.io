import { Link } from "react-router-dom";

type TextVariant = "h1" | "h2" | "h3" | "h4" | "p" | "a"
	| "blockquote" | "code" | "lead" | "large" | "small" | "muted";

const variantClasses: Record<TextVariant, string> = {
	h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
	h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
	h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
	h4: "scroll-m-20 text-xl font-semibold tracking-tight",
	p: "leading-7 [&:not(:first-child)]:mt-6",
	a: "font-medium underline underline-offset-4",
	blockquote: "mt-6 border-l-2 pl-6 italic",
	code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
	lead: "text-xl text-muted-foreground",
	large: "text-lg font-semibold",
	small: "text-sm font-medium leading-none",
	muted: "text-sm text-muted-foreground"
}

export function Text({variant, className, children}: {
	variant: "a",
	className?: string,
	to: string,
	isExternal?: boolean,
	children: React.ReactNode
}): React.ReactElement
export function Text({variant, className, children}: {
	variant?: TextVariant,
	className?: string,
	children: React.ReactNode
}): React.ReactElement
export function Text({variant = "p", className = "", to = "", isExternal = false, children}: {
	variant?: TextVariant,
	className?: string,
	to?: string,
	isExternal?: boolean,
	children: React.ReactNode
}) {
	switch(variant) {
		case "h1":
			return <h1 className={`${variantClasses.h1} ${className}`}>{children}</h1>
		case "h2":
			return <h2 className={`${variantClasses.h2} ${className}`}>{children}</h2>
		case "h3":
			return <h3 className={`${variantClasses.h3} ${className}`}>{children}</h3>
		case "h4":
			return <h4 className={`${variantClasses.h4} ${className}`}>{children}</h4>
		case "p":
			return <p className={`${variantClasses.p} ${className}`}>{children}</p>
		case "a":
			return <Link to={to} target={isExternal ? "_blank" : "_self"} className={`${variantClasses.a} ${className}`}>{children}</Link>
		case "blockquote":
			return <blockquote className={`${variantClasses.blockquote} ${className}`}>{children}</blockquote>
		case "code":
			return <code className={`${variantClasses.code} ${className}`}>{children}</code>
		case "lead":
			return <p className={`${variantClasses.lead} ${className}`}>{children}</p>
		case "large":
			return <div className={`${variantClasses.large} ${className}`}>{children}</div>
		case "small":
			return <small className={`${variantClasses.small} ${className}`}>{children}</small>
		case "muted":
			return <p className={`${variantClasses.muted} ${className}`}>{children}</p>
	}
}