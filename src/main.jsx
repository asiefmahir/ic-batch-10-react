import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { ourRouter } from "./router/router";

import { Provider } from "react-redux";
import { ourStore } from "./store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ourClient = new QueryClient();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={ourStore}>
			<QueryClientProvider client={ourClient}>
				<ReactQueryDevtools initialIsOpen={true} />
				<RouterProvider router={ourRouter} />
			</QueryClientProvider>
		</Provider>
	</StrictMode>,
);
