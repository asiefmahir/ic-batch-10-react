import { memo } from "react";

const AppTitle = () => {
	// state, props
	console.log("AppTitle is Rendering");

	return (
		<>
			<h2>Our App Title</h2>
		</>
	);
};

export default memo(AppTitle);
