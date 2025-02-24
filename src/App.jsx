import { useState, useCallback } from "react";
import AppTitle from "./components/AppTitle";
import Button from "./components/Button";
import CounterTitle from "./components/CounterTitle";

// const add = () => {
// 	console.log("add");
// };

// add()

function App() {
	console.log("App is Rendering");
	// Data Layer Changes -> props, state

	const [count, setCount] = useState(10);
	// count = 11
	const [count2, setCount2] = useState(5);

	const increaseHandler = useCallback(() => {
		setCount((prevValue) => prevValue + 1);
		// setCount(count + 1);
		// count + 1 = 10 + 1 = 11
	}, []);

	// heap memory -> #7788SS

	// stack memory -> #5456AS // heap memory -> #5456AS
	// memory Location ->

	const increaseHandler2 = useCallback(() => {
		setCount2((prev) => prev + 3);
	}, []);
	// heap memory -> #7788SS

	// stack memory -> #455ASAS // heap memory -> #455ASAS

	return (
		<>
			<AppTitle />
			<div className="counter-app">
				<CounterTitle counter={count} />
				<Button clickHandler={increaseHandler} />
			</div>
			<div className="counter-app">
				<CounterTitle counter={count2} />
				<Button clickHandler={increaseHandler2} />
			</div>
		</>
	);
}

export default App;
