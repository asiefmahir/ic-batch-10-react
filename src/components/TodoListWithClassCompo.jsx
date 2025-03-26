/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class TodoListWithClassCompo extends Component {
	render() {
		const { isLoading, errorMessage, data: todos } = this.props;
		return (
			<div>
				{isLoading && <h2>Loading....</h2>}
				{errorMessage && (
					<h2 style={{ color: "red" }}>{errorMessage}</h2>
				)}
				<h2>All Todos</h2>
				<ul>
					{todos.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withFetch(
	"https://jsonplaceholder.typicode.com/todos?_limit=5",
	[],
	TodoListWithClassCompo,
);
