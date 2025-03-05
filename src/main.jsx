import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { ourRouter } from "./router/router";

import { Provider } from "react-redux";
import { ourStore } from "./store";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={ourStore}>
			<RouterProvider router={ourRouter} />
		</Provider>
	</StrictMode>,
);
