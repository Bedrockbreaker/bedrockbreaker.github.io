import { useTheme } from "../hooks/useTheme";

export function ThemedImage({src, srcDark, alt = "", className = ""}: {
	src: string, srcDark: string, alt?: string, className?: string
}) {
	const { theme } = useTheme();

	return <img
		src={theme === "dark" ? srcDark : src}
		alt={alt}
		className={className}
	/>;
}