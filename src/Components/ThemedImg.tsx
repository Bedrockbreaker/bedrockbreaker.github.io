import { type Theme, useTheme } from "~/Hooks/useTheme";

export interface ThemedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
	sources: Record<Theme, string>
}

export function ThemedImage({sources, ...props}: ThemedImageProps) {
	const { theme } = useTheme();

	return <img
		src={sources[theme]}
		{...props}
	/>;
}
