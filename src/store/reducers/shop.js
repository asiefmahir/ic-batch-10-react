const initState = {
	isLoading: true,
	errorMessage: "",
	products: [],
};

export const shopReducer = (state = initState, action) => {
	switch (action.type) {
		case "shop/fetStart": {
			return {
				...state,
				isLoading: true,
			};
		}

		case "shop/fetchSucceeded": {
			return {
				...state,
				isLoading: false,
				products: action.payload,
				errorMessage: "",
			};
		}

		case "shop/fetchFailed": {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				products: [],
			};
		}

		default: {
			return state;
		}
	}
};
