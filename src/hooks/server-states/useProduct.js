import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetProducts = () => {
	const {
		data: products,
		isPending,
		isLoading,
		isFetching,
		isError,
		error,
	} = useQuery({
		queryKey: ["products"],
		queryFn: () =>
			fetch(`http://localhost:3000/products`).then((res) => res.json()),
		// refetchOnWindowFocus: false,
		// refetchOnMount: false,
	});

	return {
		products,
		isPending,
		isLoading,
		isFetching,
		error,
		isError,
	};
};

export const useCreateProduct = () => {
	const client = useQueryClient();

	const createProductMutation = useMutation({
		mutationKey: ["create-product"],
		mutationFn: async (product) => {
			return fetch(`http://localhost:3000/products`, {
				method: "POST",
				body: JSON.stringify(product),
				headers: {
					"Content-type": "application/json",
				},
			}).then((res) => res.json());
		},
		onSuccess: () => {
			client.invalidateQueries("products");
		},
	});

	return {
		createProductMutation,
	};
};

export const useRemoveProduct = () => {
	const client = useQueryClient();
	const removeProductMutation = useMutation({
		mutationKey: ["remove-product"],
		mutationFn: async (id) => {
			return fetch(`http://localhost:3000/products/${id}`, {
				method: "DELETE",
			});
		},
	});

	return {
		removeProductMutation,
	};
};
