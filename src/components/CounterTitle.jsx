/* eslint-disable react/prop-types */
import { memo } from "react";

const CounterTitle = (props) => {
	console.log("CounterTitle is Rendering");

	const { counter } = props;
	// counter = 10
	return <p>The value of the counter is {counter}</p>;
};

export default memo(CounterTitle);
