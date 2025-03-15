// export const cartReducer = (state = [], action) => {
// 	// action === {
// 	// 				// 		type: "cart/addToCart",
// 	// 				// 		payload: product,
// 	// 				// 	}
// 	switch (action.type) {
// 		case "cart/addToCart": {
// 			const existingItem = state.find(
// 				(item) => item.id === action.payload.id,
// 			);

// 			return existingItem
// 				? state.map((item) => {
// 						if (item.id === existingItem.id) {
// 							return { ...item, quantity: item.quantity + 1 };
// 						}
// 						return { ...item };
// 				  })
// 				: [...state, { ...action.payload, quantity: 1 }];
// 		}
// 		case "cart/removeItemFromCart": {
// 			// action.payload = 5;
// 			// [1, 2, 3, 4, 5, 6];

// 			const newState = state.filter((item) => item.id !== action.payload);
// 			return newState;
// 			// 1 !== 5;
// 			// 2 !== 5;
// 			// 3 !== 5;
// 			// 4 !== 5;
// 			// 5 !== 5;
// 			// 6 !== 5;
// 		}
// 		case "cart/modifyQuantityOfAnItem": {
// 			const newStateArray = state.map((item) => {
// 				if (item.id === action.payload.id) {
// 					return { ...item, quantity: action.payload.quantity };
// 				}
// 				return { ...item };
// 			});

// 			return newStateArray;
// 		}
// 		case "cart/clearCart": {
// 			return [];
// 		}
// 		default: {
// 			return state;
// 		}
// 	}
// };

// import { createReducer } from "@reduxjs/toolkit";

// import {
// 	addToCart,
// 	removeItemFromCart,
// 	modifyQuantityOfAnItem,
// 	clearCart,
// } from "../actions/cart";

// const initState = [];

// export const cartReducer = createReducer(initState, (builder) => {
// 	builder
// 		.addCase(addToCart, (state, action) => {
// 			const existingItem = state.find(
// 				(item) => item.id === action.payload.id,
// 			);

// 			existingItem
// 				? existingItem.quantity++
// 				: state.push({ ...action.payload, quantity: 1 });
// 		})
// 		.addCase(removeItemFromCart, (state, action) => {
// 			const newState = state.filter((item) => item.id !== action.payload);
// 			return newState;
// 		})
// 		.addCase(modifyQuantityOfAnItem, (state, action) => {
// 			const itemIndex = state.findIndex(
// 				(item) => item.id === action.payload.id,
// 			);

// 			console.log(itemIndex, "itemIndex");

// 			state[itemIndex].quantity = action.payload.quantity;
// 		})
// 		.addCase(clearCart, (state, action) => {
// 			return [];
// 		});
// });

// state = []

import { createSlice } from "@reduxjs/toolkit";

const initState = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState: initState,
	reducers: {
		addToCart(state, action) {
			const existingItem = state.find(
				(item) => item.id === action.payload.id,
			);

			existingItem
				? existingItem.quantity++
				: state.push({ ...action.payload, quantity: 1 });
		},

		removeItemFromCart(state, action) {
			const newState = state.filter((item) => item.id !== action.payload);
			return newState;
		},

		modifyQuantityOfAnItem(state, action) {
			const itemIndex = state.findIndex(
				(item) => item.id === action.payload.id,
			);

			console.log(itemIndex, "itemIndex");

			state[itemIndex].quantity = action.payload.quantity;
		},

		clearCart() {
			return [];
		},
	},
});

export const {
	addToCart,
	modifyQuantityOfAnItem,
	removeItemFromCart,
	clearCart,
} = cartSlice.actions;

cartSlice.reducer;
