import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/api-services/post";

const Posts = () => {
	const { isLoading, errorMessage, posts } = useSelector(
		(storeState) => storeState.post,
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts);
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <h3>Loading......</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			{posts.map((post) => (
				<li key={post.id}>
					<h3>{post.title}</h3>
				</li>
			))}
		</div>
	);
};

export default Posts;
