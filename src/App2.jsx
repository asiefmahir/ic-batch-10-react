import { useReducer, useState } from "react";

// import { counterReducer } from "./reducers/counter";

// const reducer = (state, action) => {}

const counterReducer = (state, action) => {
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

// dispatch (argument) -> reducer (state, action === argument)

const App2 = () => {
	console.log("App2 is re-rendering");

	const [counter, dispatch] = useReducer(counterReducer, 10);

	// const [counter2, setCounter2] = useState(12);

	// const increaseHandler = (value) => {
	// 	setCounter2(counter2 + value);
	// };
	// counterReducer()
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 1 })
				}
			>
				Increase By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "decrease_counter", payload: 1 })
				}
			>
				Decrease By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 5 })
				}
			>
				Increase By 5
			</button>
			<button
				onClick={() =>
					dispatch({ type: "decrease_counter", payload: 3 })
				}
			>
				Decrease By 3
			</button>
		</div>
	);
};

export default App2;
