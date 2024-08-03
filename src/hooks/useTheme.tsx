import { createContext, useCallback, useContext, useEffect, useState } from "react";

declare function rerenderTheme(): void; // Leaked from <script> in index.html
type Theme = "light" | "dark";

const query = window.matchMedia("(prefers-color-scheme: dark)");
const defaultTheme = localStorage.theme ?? (query.matches ? "dark" : "light");

const ThemeContext = createContext<{
	theme: Theme, setTheme: (theme: Theme | "system") => void
}>(defaultTheme);

export function ThemeProvider({children}: {
	children: React.ReactNode | React.ReactNode[]
}) {
	const [theme, setThemeValue] = useState<Theme>(defaultTheme);

	useEffect(() => {
		const onThemeChange = () => setTheme(localStorage.theme ?? "system");
		query.addEventListener("change", onThemeChange);

		return () => query.removeEventListener("change", onThemeChange);
	}, []);

	const setTheme = useCallback((newTheme: Theme | "system") => {
		if (newTheme !== "system") {
			localStorage.theme = newTheme;
			setThemeValue(newTheme);
		} else {
			localStorage.removeItem("theme");
			setThemeValue(query.matches ? "dark" : "light");
		}
		rerenderTheme();
	}, [setThemeValue]);

	return <ThemeContext.Provider value={{theme, setTheme}}>
		{children}
	</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);