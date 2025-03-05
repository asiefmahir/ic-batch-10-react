import { useState, useEffect } from "react";

// useState ->
// useEffect

// useFetch ->

// url === `https://jsonplaceholder.typicode.com/posts/${id};
// initDataShape === null
export const useFetch = (url, initDataShape) => {
	const [data, setData] = useState(initDataShape);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				setIsLoading(false);
				setData(result);
				setErrorMessage("");
			})
			.catch(() => {
				setIsLoading(false);
				setErrorMessage(`Something Went Wrong`);
				setData([]);
			});
	}, []);

	return {
		data,
		isLoading,
		errorMessage,
	};
};
