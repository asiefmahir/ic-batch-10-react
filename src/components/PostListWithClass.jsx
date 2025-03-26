/* eslint-disable react/prop-types */
import { Component } from "react";
import { withFetch } from "../hoc/withFetch";

// Higher Order Component
// Render Props
// useFetch

class PostListWithClass extends Component {
	// useEffect(() => {}, [])
	render() {
		console.log("I am inside Render");
		const { isLoading, errorMessage, data: posts } = this.props;

		return (
			<div>
				{isLoading && <h2>Loading....</h2>}
				{errorMessage && (
					<h2 style={{ color: "red" }}>{errorMessage}</h2>
				)}
				<h2>All Posts</h2>
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withFetch(
	`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	[],
	PostListWithClass,
);
