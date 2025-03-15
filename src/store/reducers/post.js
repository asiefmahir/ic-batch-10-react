// export const postReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "post/fetStart": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}

// 		case "post/fetchSucceeded": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				posts: action.payload,
// 				errorMessage: "",
// 			};
// 		}

// 		case "post/fetchFailed": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				errorMessage: action.payload,
// 				posts: [],
// 			};
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {
	isLoading: true,
	errorMessage: "",
	posts: [],
};

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.co/posts?_limit=5",
	);
	const posts = await response.json();
	return posts;
});

export const postSlice = createSlice({
	name: "post",
	initialState: initState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.errorMessage = action.error.message;
			});
	},
});
