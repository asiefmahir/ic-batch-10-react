import { createBrowserRouter } from "react-router";

import Root from "../pages/Root";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Posts from "../pages/Posts";
import App from "../App";
import AddProduct from "../pages/AddProduct";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/posts", element: <Posts /> },
			{ path: "/notes", element: <App /> },
			{ path: "/add-product", element: <AddProduct /> },
		],
	},
]);
