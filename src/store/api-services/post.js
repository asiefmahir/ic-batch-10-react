export const fetchPosts = (dispatch) => {
	dispatch({ type: "post/fetStart" });
	fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({ type: "post/fetchSucceeded", payload: data });
		})
		.catch((err) => {
			dispatch({
				type: "post/fetchFailed",
				payload: err.message,
			});
		});
};
