import { Route, Routes, Link } from "react-router-dom";
import "./index.scss";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

export const App = () => {
	return (
		<div className="app">
			<ul>
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
