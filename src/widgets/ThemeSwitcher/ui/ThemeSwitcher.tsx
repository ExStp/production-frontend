import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme} className={classNames(styles.themeSwitcher, {}, [className])}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</button>
	);
};
