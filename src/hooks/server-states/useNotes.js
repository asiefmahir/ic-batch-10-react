import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useNotes = () => {
	const client = useQueryClient();
	const {
		data: notes,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["notes"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3000/notes");
			const data = await response.json();
			return data;
		},
	});

	const createMutation = useMutation({
		mutationKey: ["create-note"],
		mutationFn: async (note) => {
			return await fetch("http://localhost:3000/notes", {
				method: "POST",
				body: JSON.stringify(note),
				headers: {
					"Content-type": "application/json",
				},
			});
		},
		onSuccess: () => {
			console.log("Note created successfully");
			client.invalidateQueries("notes");
		},
	});

	const removeNoteMutation = useMutation({
		mutationKey: ["remove-note"],
		mutationFn: (noteId) =>
			fetch(`http://localhost:3000/notes/${noteId}`, {
				method: "DELETE",
			}),
		onSuccess: () => {
			client.invalidateQueries("notes");
			// ['notes, products'].map(key => {
			// 	client.invalidateQueries(key)
			// })
		},
	});

	return {
		notes,
		isLoading,
		isError,
		error,
		createMutation,
		removeNoteMutation,
	};
};
