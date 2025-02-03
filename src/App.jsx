import "./App.css";
import { useState } from "react";

function App() {
	// console.log("App is invoked");
	// let counter = 0;
	console.log("App Function is being Invoked");

	// State
	// Render
	// Re-Render

	const [dynamicCounter, setDynamicCounter] = useState(10);
	const [name, setName] = useState("Mahir");
	// dynamicCounter = 12

	// console.log(janiNah, "janinah");

	const increaseHandler = (value) => {
		console.log("Increase Handler Triggered");
		// dynamicCounter++
		// setDynamicCounter(20);
		setDynamicCounter(dynamicCounter + value);
		// dynamicCounter + 1 = 10 + 1 = 11

		// setDynamicCounter(11 + 1)
		// setDynamicCounter(12)
		// dynamicCounter = 12
		// App()
	};

	const decreaseHandler = (value) => {
		console.log(`Decrease Handler triggered`);
		// counter--;
		// dynamicCounter--
		setDynamicCounter(dynamicCounter - value);
		// console.log(counter);
	};

	// decreaseHandler()

	const changeNameHandler = () => {
		setName("Mahir Asief");
	};

	return (
		<>
			{/* <BioData /> */}
			<h2>Hello React</h2>
			<p>The value of the counter is {dynamicCounter}</p>
			<p>hello {name}</p>
			<button onClick={() => increaseHandler(1)}>Increase By 1</button>
			<button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
			<button onClick={() => increaseHandler(5)}>Increase By 5</button>
			<button onClick={() => decreaseHandler(3)}>Decrease By 3</button>
			<button onClick={changeNameHandler}>Change Name</button>
		</>
	);
}
// let counter = 10;
// document.getElementById("increase").addEventListener("click", () => {
// 	counter++;
// });

// BioData()
// App()
/**
 * 3 rules to be a component
 * 1. It should be a function
 * 2. That function should return "something"
 * 3. That "something" should be JSX/ html-ish code
 */

export default App;
