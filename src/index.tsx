import { render } from "react-dom";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";

render(
	<ThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById("root")
);
