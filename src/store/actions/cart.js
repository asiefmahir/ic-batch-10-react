export const addToCart = (product) => {
	return {
		type: "cart/addToCart",
		payload: product,
	};
};

export const removeItemFromCart = (id) => {
	return {
		type: "cart/removeItemFromCart",
		payload: id,
	};
};

export const modifyQuantityOfAnItem = (obj) => {
	return {
		type: "cart/modifyQuantityOfAnItem",
		payload: obj,
	};
};

export const clearCart = () => {
	return {
		type: "cart/clearCart",
	};
};
