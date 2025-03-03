import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { ourRouter } from "./router/router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={ourRouter} />
	</StrictMode>,
);
