// export const addToCart = (product) => {
// 	return {
// 		type: "cart/addToCart",
// 		payload: product,
// 	};
// };

// export const removeItemFromCart = (id) => {
// 	return {
// 		type: "cart/removeItemFromCart",
// 		payload: id,
// 	};
// };

// export const modifyQuantityOfAnItem = (obj) => {
// 	return {
// 		type: "cart/modifyQuantityOfAnItem",
// 		payload: obj,
// 	};
// };

// export const clearCart = () => {
// 	return {
// 		type: "cart/clearCart",
// 	};
// // };

// import { createAction } from "@reduxjs/toolkit";

// export const addToCart = createAction("cart/addToCart");
// // const result = addToCart({ id: "1", title: "product 1" });

// export const removeItemFromCart = createAction("cart/removeItemFromCart");

// export const modifyQuantityOfAnItem = createAction(
// 	"cart/modifyQuantityOfAnItem",
// );

// export const clearCart = createAction("cart/clearCart");

import {
	addToCart,
	removeItemFromCart,
	modifyQuantityOfAnItem,
	clearCart,
} from "../reducers/cart";

export { addToCart, removeItemFromCart, modifyQuantityOfAnItem, clearCart };
