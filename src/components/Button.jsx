/* eslint-disable react/prop-types */
import { memo } from "react";

const Button = (props) => {
	console.log("Button is Rendering");

	const { clickHandler } = props;
	//
	// clickHandler === #5456AS
	// clickHandler === #5456AS

	return (
		<>
			<button onClick={clickHandler}>Increase By 1</button>
		</>
	);
};

export default memo(Button);
