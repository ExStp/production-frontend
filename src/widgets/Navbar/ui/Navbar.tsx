import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={cls.mainLink}
				>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.RED} to={RoutePath.about}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
