import Nav from "../components/Nav";
import { Outlet } from "react-router";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<Nav />
			</div>
			<div id="detail">
				<Outlet />
				{/* <PostList /> */}
				{/* <About /> */}
			</div>
		</>
	);
}

function add(a, b) {
	return a + b;
}

add(10, 20);

add(200, 300);
