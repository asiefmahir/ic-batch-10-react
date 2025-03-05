import { Link } from "react-router";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/posts">All Posts</Link>
				</li>
				<li>
					<Link to="/redux-example">Redux Example</Link>
				</li>
				<li>
					<Link to="/notes">All Notes</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
