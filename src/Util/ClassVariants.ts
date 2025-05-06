// Because I don't want to use a library.

type Variant = Record<string, Record<string, string>>;

type VariantSettings<T extends Variant> = {
	[Variant in keyof T]: keyof T[Variant];
};

interface Config<T extends Variant> {
	variants: T;
	defaults: VariantSettings<T>;
};

type Props<T extends Variant> = Partial<VariantSettings<T>> & {
	className?: string
};

export function CreateVariantsConfig<T extends Variant>(
	constantClasses: string,
	variantConfig: Config<T>
) {
	return function (props: Props<T>) {
		const { variants, defaults } = variantConfig;
		const { className = "", ...variantTypes } = props;

		return `${constantClasses} ${Object.entries(defaults).map(([key, value]) => {
			return variants[key][variantTypes[key] ?? value];
		}).join(" ")} ${className}`;
	}
}

export type VariantProps<Component extends (...args: any) => any> =
	Omit<Parameters<Component>[0], "className">;
