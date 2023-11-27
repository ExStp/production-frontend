import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeProvider";

export const useTheme = (): [theme: Theme, toggleTheme: () => void] => {
	const [theme, setTheme] = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme((prev: Theme) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
	};

	return [theme, toggleTheme];
};
