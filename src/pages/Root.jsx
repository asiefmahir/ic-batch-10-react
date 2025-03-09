import Nav from "../components/Nav";
import { Outlet } from "react-router";

export default function Root() {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}

function add(a, b) {
	return a + b;
}

add(10, 20);

add(200, 300);
