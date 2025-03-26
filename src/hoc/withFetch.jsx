import { Component } from "react";

export const withFetch = (url, initState, WrappedComponent) => {
	// TodoListWithClassCompo
	class WrapperComponent extends Component {
		state = {
			isLoading: true,
			data: initState,
			errorMessage: "",
		};

		componentDidMount() {
			fetch(url)
				.then((res) => {
					this.setState({
						...this.state,
						isLoading: true,
					});
					return res.json();
				})
				.then((result) => {
					this.setState({
						...this.state,
						isLoading: false,
						data: result,
						errorMessage: "",
					});
				})
				.catch((err) => {
					this.setState({
						...this.state,
						isLoading: false,
						errorMessage: err.message,
						data: initState,
					});
				});
		}

		render() {
			const { isLoading, data, errorMessage } = this.state;
			return (
				<WrappedComponent
					isLoading={isLoading}
					data={data}
					errorMessage={errorMessage}
				/>
			);
			// <TodoListWithClassCompo
			// 	isLoading={isLoading}
			// 	data={data}
			// 	errorMessage={errorMessage}
			// />;
		}
	}

	return WrapperComponent;
};

// render-props
