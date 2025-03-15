// const initState = {
// 	isLoading: true,
// 	errorMessage: "",
// 	products: [],
// };

// export const shopReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "shop/fetStart": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}

// 		case "shop/fetchSucceeded": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				products: action.payload,
// 				errorMessage: "",
// 			};
// 		}

// 		case "shop/fetchFailed": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				errorMessage: action.payload,
// 				products: [],
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
	products: [],
};

export const fetchShopProducts = createAsyncThunk(
	"shop/fetchProducts",
	async () => {
		const response = await fetch(`http://localhost:3000/products`);
		const products = await response.json();
		return products;
	},
);

// fetchShopProducts.

export const shopSlice = createSlice({
	name: "shop",
	initialState: initState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchShopProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchShopProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchShopProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.errorMessage = action.error.message;
			});
	},
});
