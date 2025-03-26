import { Component } from "react";

export default class CounterAppWithClass extends Component {
	state = {
		counter: 0,
	};

	increaseHandler(value) {
		this.setState({ ...this.state, counter: this.state.counter + value });
	}
	decreaseHandler(value) {
		this.setState({ ...this.state, counter: this.state.counter - value });
	}
	render() {
		return (
			<div>
				<p>The value of the counter is {this.state.counter}</p>
				<button onClick={() => this.increaseHandler(1)}>
					Increase By 1
				</button>
				<button onClick={() => this.increaseHandler(5)}>
					Increase By 5
				</button>
				<button onClick={() => this.decreaseHandler(1)}>
					Decrease By 1
				</button>
			</div>
		);
	}
}
