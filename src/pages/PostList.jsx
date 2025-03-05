import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

const PostList = () => {
	const { data: posts } = useFetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=5",
		[],
	);
	// 30 minutes
	// stack -> LIFO

	return (
		<div>
			<h2>All Posts</h2>
			{/* {errorMessage && <h2>{errorMessage}</h2>} */}
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
