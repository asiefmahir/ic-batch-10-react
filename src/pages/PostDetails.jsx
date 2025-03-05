import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
	const { id } = useParams();
	const {
		data: post,
		isLoading,
		errorMessage,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, null);

	if (isLoading) {
		return <h2>Loading....</h2>;
	}

	if (errorMessage) {
		<h2>{errorMessage}</h2>;
	}
	return (
		<div>
			<h2>PostDetails of postId - {post?.id}</h2>
			<p>Post Title - {post?.title}</p>
			<p>Post Details - {post?.body}</p>
		</div>
	);
};

export default PostDetails;
