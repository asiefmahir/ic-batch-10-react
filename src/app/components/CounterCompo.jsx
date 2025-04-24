"use client";
import { useState } from "react";

const CounterCompo = () => {
	console.log("I am counter compo in Counter Page");

	const [counter, setCounter] = useState(10);
	return (
		<>
			<p>The value of the counter is {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Increase By 1
			</button>
		</>
	);
};

export default CounterCompo;
