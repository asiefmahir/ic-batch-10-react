import Link from "next/link";

const Nav = () => {
	return (
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/shop">Shop</Link>
			</li>
			<li>
				<Link href="/add-product">Add Product</Link>
			</li>
			<li>
				<Link href="/post-lists">All Posts</Link>
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
