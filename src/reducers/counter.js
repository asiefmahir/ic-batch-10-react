export const counterReducer = (state, action) => {
	console.log(state, "state");
	console.log(action, "action");

	switch (action.type) {
		case "increase_counter": {
			return state + action.payload;
		}

		case "decrease_counter": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}

	// if (action === "increase_counter") {
	// 	return state + 1;
	// }

	// if (action === "decrease_counter") {
	// 	return state - 1;
	// }
};
