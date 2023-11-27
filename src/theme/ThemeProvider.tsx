import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

interface ThemeProviderProps {
	children: ReactNode;
}

const LOCAL_STORAGE_THEME_KEY = "app_theme";

const initTheme = JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(initTheme ?? Theme.LIGHT);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme));
	}, [theme]);

	return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};
