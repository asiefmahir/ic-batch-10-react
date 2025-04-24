"use client";

import CounterCompo from "../components/CounterCompo";
import DummyCompo from "../components/DummyCompo";

const Counter = () => {
	console.log("I am counter");

	return (
		<div>
			<h2>This is a counter App</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
				aperiam!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
				aperiam!
			</p>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
				aperiam!
			</p>
			<CounterCompo />
			<hr />
			<DummyCompo />
		</div>
	);
};

export default Counter;
