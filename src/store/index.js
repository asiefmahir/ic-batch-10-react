import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
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

const rootReducer = {
	cart: cartSlice.reducer,
};
export const {
	addToCart,
	removeItemFromCart,
	clearCart,
	modifyQuantityOfAnItem,
} = cartSlice.actions;

export const store = configureStore({
	reducer: rootReducer,
});
