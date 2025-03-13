export const fetchShopProducts = async (dispatch) => {
	dispatch({ type: "shop/fetStart" });
	try {
		const res = await fetch(`http://localhost:3000/products`);
		const data = await res.json();
		dispatch({ type: "shop/fetchSucceeded", payload: data });
	} catch (error) {
		dispatch({
			type: "shop/fetchFailed",
			payload: error.message,
		});
	}
};
