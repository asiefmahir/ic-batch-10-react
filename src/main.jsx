import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NoteProvider from "./contexts/Note.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
	<NoteProvider>
		<App />
	</NoteProvider>,
	// <div>
	// 	<p></p>
	// </div>
);

// App();

// react -> react dom -> dom
