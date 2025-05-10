import { CreateVariantsConfig, VariantProps } from "~/Util/ClassVariants";

const GetClasses = CreateVariantsConfig(
	"flex flex-col items-center grow bg-dark rounded-md border p-6 pt-0 shadow-md",
	{
		variants: {
			borderStyle: {
				"1": "border-tag-1-bg",
				"2": "border-tag-2-bg",
				"3": "border-tag-3-bg",
				"4": "border-tag-4-bg",
				"5": "border-tag-5-bg",
				"6": "border-tag-6-bg",
				"7": "border-tag-7-bg",
				"8": "border-tag-8-bg",
				"9": "border-tag-9-bg"
			}
		},
		defaults: {
			borderStyle: "1"
		}
	}
)

interface CardProps extends
	React.HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof GetClasses> {}

export function Card({ borderStyle, className = "", children, ...props }: CardProps) {
	return <div className={GetClasses({ borderStyle, className })} {...props}>{children}</div>;
}
