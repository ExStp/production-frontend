import { Link } from "react-router-dom";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Link to={RoutePaths.main}>Главная</Link>
			<Link to={RoutePaths.about}>О сайте</Link>
		</div>
	);
};
