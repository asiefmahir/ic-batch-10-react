import { Component } from "react";
import Person from "../components/Person";
import CounterAppWithClass from "../components/CounterAppWithClass";
import PostListWithClass from "../components/PostListWithClass";
import TodoListWithClassCompo from "../components/TodoListWithClassCompo";

class ClassComponent extends Component {
	render() {
		return (
			<div>
				<h2>Hello Class Component</h2>
				<Person name="Mahir" age={28} />
				<CounterAppWithClass />
				<PostListWithClass />
				<hr />
				<TodoListWithClassCompo />
			</div>
		);
	}
}

export default ClassComponent;
