import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import PostList from "../pages/PostList";
import Root from "../pages/Root";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Home />, children: [] },
			{ path: "/about", element: <About /> },
			{ path: "/posts", element: <PostList /> },
		],
	},
]);
