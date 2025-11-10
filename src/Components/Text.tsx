import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const variantClasses = {
	h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
	h2: "flex flex-row grow mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
	h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
	h4: "mt-6 scroll-m-20 text-xl font-semibold tracking-tight",
	p: "leading-7 not-first:mt-6",
	blockquote: "mt-6 border-l-2 pl-6 italic",
	code: "relative rounded-sm bg-dark px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
	lead: "text-xl text-dark not-first:mt-6",
	large: "text-lg font-semibold",
	small: "text-sm font-medium leading-none",
	muted: "text-sm text-dark leading-snug"
};

export type TextVariant = keyof typeof variantClasses;

type TranslationKey = Parameters<ReturnType<typeof useTranslation>["t"]>[0];

export function Text({variant, className, id, children}: {
	variant?: TextVariant,
	className?: string,
	id?: string,
	children: React.ReactNode
}): ReactElement
export function Text({variant, t, className, id}: {
	variant?: TextVariant,
	t: TranslationKey,
	className?: string,
	id?: string
}): ReactElement
export function Text({variant = "p", t: tKey, className = "", id = "", children}: {
	variant?: TextVariant,
	t?: TranslationKey,
	className?: string,
	id?: string,
	children?: React.ReactNode
}) {
	const { t } = useTranslation();
	if (tKey !== undefined) children = t(tKey);

	switch(variant) {
		case "h1":
			return <h1 id={id} className={`${variantClasses.h1} ${className}`}>{children}</h1>;
		case "h2":
			return <h2 id={id} className={`${variantClasses.h2} ${className}`}>{children}</h2>;
		case "h3":
			return <h3 id={id} className={`${variantClasses.h3} ${className}`}>{children}</h3>;
		case "h4":
			return <h4 id={id} className={`${variantClasses.h4} ${className}`}>{children}</h4>;
		case "p":
			return <p id={id} className={`${variantClasses.p} ${className}`}>{children}</p>;
		case "blockquote":
			return <blockquote id={id} className={`${variantClasses.blockquote} ${className}`}>{children}</blockquote>;
		case "code":
			return <code id={id} className={`${variantClasses.code} ${className}`}>{children}</code>;
		case "lead":
			return <p id={id} className={`${variantClasses.lead} ${className}`}>{children}</p>;
		case "large":
			return <div id={id} className={`${variantClasses.large} ${className}`}>{children}</div>;
		case "small":
			return <small id={id} className={`${variantClasses.small} ${className}`}>{children}</small>;
		case "muted":
			return <p id={id} className={`${variantClasses.muted} ${className}`}>{children}</p>;
	}
}
