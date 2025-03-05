export const counterReducer = (state = 15, action) => {
	console.log(action, "action");

	switch (action.type) {
		case "counter/increment": {
			return state + action.payload;
			// 0 + 5 = 5
		}

		case "counter/decrement": {
			return state - action.payload;
		}
		default: {
			return state;
		}
	}
};
