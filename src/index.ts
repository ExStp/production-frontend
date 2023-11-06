import { log } from "./test";

document.getElementById("rootBtn")!.addEventListener("click", (e) => {
	e.preventDefault();
	log("world");
});
