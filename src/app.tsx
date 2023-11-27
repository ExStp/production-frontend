import { Route, Routes, Link } from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {
	const [theme, toggleTheme] = useTheme();

	return (
		<div className={`app ${theme}`}>
			<ul>
				<button onClick={toggleTheme}>toggle theme</button>
				<li>
					<Link to={"/about"}>О сайте</Link>
				</li>
				<li>
					<Link to={"/"}>На главную</Link>
				</li>
			</ul>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPageAsync />} />
					<Route path={"/"} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
