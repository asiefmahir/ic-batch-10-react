import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import PostList from "../pages/PostList";
import Root from "../pages/Root";
import PostDetails from "../pages/PostDetails";
import App from "../App";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/posts", element: <PostList /> },
			{ path: "/posts/:id", element: <PostDetails /> },
			{ path: "/notes", element: <App /> },
		],
	},
]);
