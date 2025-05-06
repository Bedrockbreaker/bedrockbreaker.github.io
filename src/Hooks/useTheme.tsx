import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const query = window.matchMedia("(prefers-color-scheme: dark)");
const defaultTheme = localStorage.theme ?? (query.matches ? "dark" : "light");

const ThemeContext = createContext<{
	theme: Theme,
	setTheme: (theme: Theme | "system") => void
}>(defaultTheme);

export function ThemeProvider({children}: { children: React.ReactNode }) {
	const [theme, setThemeValue] = useState<Theme>(defaultTheme);

	const setTheme = useCallback((newTheme: Theme | "system") => {
		let enableDarkMode = false;

		if (newTheme !== "system") {
			localStorage.theme = newTheme;
			setThemeValue(newTheme);
			enableDarkMode = newTheme === "dark";
		} else {
			localStorage.removeItem("theme");
			setThemeValue(query.matches ? "dark" : "light");
			enableDarkMode = query.matches;
		}

		document.documentElement.classList.toggle("dark", enableDarkMode);
	}, [setThemeValue]);

	useEffect(() => {
		const onThemeChange = () => setTheme(localStorage.theme ?? "system");
		query.addEventListener("change", onThemeChange);

		return () => query.removeEventListener("change", onThemeChange);
	}, []);

	return <ThemeContext.Provider value={{theme, setTheme}}>
		{children}
	</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
