import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NoteProvider from "./contexts/Note.jsx";
import App2 from "./App2.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
	// <NoteProvider>
	// 	<App />
	// </NoteProvider>,
	<App2 />,
	// <div>
	// 	<p></p>
	// </div>
);

// App();

// react -> react dom -> dom
