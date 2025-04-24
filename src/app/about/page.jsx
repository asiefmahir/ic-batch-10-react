import React from "react";

// Server Component
// Client Component -> Server Render ->
const About = async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);
	const posts = await res.json();
	console.log(posts, "posts");

	return (
		<div>
			<h2>I am about Page</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

// Static Generation

export default About;
