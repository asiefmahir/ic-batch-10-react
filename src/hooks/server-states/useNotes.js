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
		// onSuccess: () => {
		// 	client.invalidateQueries("notes");
		// 	// ['notes, products'].map(key => {
		// 	// 	client.invalidateQueries(key)
		// 	// })
		// },
		// before mutationFn
		onMutate: async (noteId) => {
			await client.cancelQueries(["notes"]);
			const previousNotes = client.getQueryData(["notes"]);
			console.log(previousNotes, "prevNotes");
			client.setQueryData(["notes"], (oldData) => {
				const newNotes = oldData.filter((note) => note.id !== noteId);
				return newNotes;
			});
			return { previousNotes };
		},
		onError: (_error, _noteId, context) => {
			console.log(context.previousNotes, "inError");

			client.setQueryData(["notes"], () => {
				return context.previousNotes;
			});
		},
		onSettled: () => {
			client.invalidateQueries({ queryKey: ["notes"] });
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
