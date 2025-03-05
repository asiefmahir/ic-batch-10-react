import { useSelector, useDispatch } from "react-redux";
import { counterIncrement, counterDecrement } from "../store/actions/counter";
import {
	changeBgColor,
	changeTextColor,
	resetTheme,
} from "../store/actions/theme";

const ReduxExample = () => {
	const counter = useSelector((storeState) => storeState.counter);
	const theme = useSelector((storeState) => storeState.theme);
	console.log(counter);

	const dispatch = useDispatch();

	return (
		<div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
			<div>
				<p>The value of the counter is {counter}</p>
				<button onClick={() => dispatch(counterIncrement(1))}>
					Increase By 1
				</button>
				<button onClick={() => dispatch(counterIncrement(10))}>
					Increase By 10
				</button>
				<button onClick={() => dispatch(counterDecrement(1))}>
					Decrease By 1
				</button>
				<button onClick={() => dispatch(counterDecrement(5))}>
					Decrease By 5
				</button>
			</div>
			<hr />
			<div className="theme">
				<div className="bg-group">
					<button onClick={() => dispatch(changeBgColor("tomato"))}>
						Change Bg Color to Tomato
					</button>
					<button onClick={() => dispatch(changeBgColor("yellow"))}>
						Change Bg Color to Yellow
					</button>
					<button onClick={() => dispatch(changeBgColor("aqua"))}>
						Change Bg Color to Aqua
					</button>
				</div>
				<hr />
				<div className="font-group">
					<button onClick={() => dispatch(changeTextColor("red"))}>
						Change Font Color to Red
					</button>
					<button onClick={() => dispatch(changeTextColor("green"))}>
						Change Font Color to Green
					</button>
					<button onClick={() => dispatch(changeTextColor("blue"))}>
						Change Font Color to Blue
					</button>
				</div>
				<hr />
				<button onClick={() => dispatch(resetTheme())}>
					Reset Theme
				</button>
			</div>
		</div>
	);
};

export default ReduxExample;
