"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

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
				<Link href="/admin/add-product">Add Product</Link>
			</li>
			<li>
				<Link href="/post-lists">All Posts</Link>
			</li>
			<li onClick={() => signOut()}>
				<button>SignOut</button>
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
