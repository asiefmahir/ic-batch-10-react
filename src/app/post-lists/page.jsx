import Link from "next/link";
import React from "react";

// Static Generation

// Incremental Static Re-generation (ISR)
// 1) Time Based Regeneration -> 30s
// 2) On Demand
// Server Component
// Client Component -> Server Render ->
const PostList = async () => {
	const res = await fetch(`http://localhost:4000/posts`, {
		next: { revalidate: 15 },
	});
	const posts = await res.json();
	console.log("I am rendering");

	// console.log(posts, "posts");

	return (
		<div>
			<h2>I am PostList Page</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/post-lists/${post.id}`}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

// Static Generation

export default PostList;
