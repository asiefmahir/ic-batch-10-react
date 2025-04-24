import Link from "next/link";

const Nav = () => {
	return (
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/about">About</Link>
			</li>
			<li>
				<Link href="/counter">Counter</Link>
			</li>
			<li>
				<Link href="/team">Team</Link>
			</li>
		</ul>
	);
};

export default Nav;
