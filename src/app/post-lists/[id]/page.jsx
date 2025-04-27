import React from "react";

const PostDetails = async ({ params }) => {
	const { id } = await params;
	console.log(id, "id");
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();

	return (
		<div>
			<h2>I am PostDetails Page of {post?.id}</h2>
			<p>Title - {post.title}</p>
		</div>
	);
};

export async function generateStaticParams() {
	const posts = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	).then((res) => res.json());

	return posts.slice(0, 4).map((post) => ({
		id: String(post.id),
	}));
}

export default PostDetails;
