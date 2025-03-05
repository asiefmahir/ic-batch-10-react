export const counterIncrement = (payload) => {
	return {
		type: "counter/increment",
		payload: payload,
	};
};

export const counterDecrement = (payload) => {
	return {
		type: "counter/decrement",
		payload: payload,
	};
};

// action creator

// counterIncrement(10); // {type: "counter/increment", payload: 10}
// counterIncrement(1); // {type: "counter/increment", payload: 1}
