export const ourMiddleWare = (store) => (next) => async (action) => {
	// console.log(store, "store");
	// console.log(action, "action");
	// // action.payload.price = 800;
	// console.log(next, "next");
	// if (action === "fetchProduct") {
	// 	fetchShopProducts(store.dispatch);
	// 	return;
	// }
	// action === fetchShopProducts;
	if (typeof action === "function") {
		action(store.dispatch);
		return;
	}

	// if (action === "fakePostDispatch") {
	// 	fetchPosts(store.dispatch);
	// 	return;
	// }

	// if (action === 'fakeCommentDispatch')

	next(action);

	// dispatch()
	// next(action);
	// reducer
};
