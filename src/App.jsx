// const add = () => {
// 	console.log("add");
// };

// add()
import { useState } from "react";
import { useNotes } from "./hooks/server-states/useNotes";

function App() {
	const [noteTitle, setNoteTitle] = useState("");
	const {
		notes,
		isError,
		isLoading,
		error,
		createMutation,
		removeNoteMutation,
	} = useNotes();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			title: noteTitle,
			isCompleted: false,
		};
		createMutation.mutate(newNote);
		setNoteTitle("");
	};

	// delete // update // filtering

	if (isLoading) {
		return <h2>Loading.......</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}

	const removeHandler = (id) => {
		// deleteNote(id);
		removeNoteMutation.mutate(id);
	};

	return (
		<>
			<div className="post-list">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						value={noteTitle}
						onChange={(e) => setNoteTitle(e.target.value)}
					/>
					<button type="submit">Create Note</button>
				</form>
				<h2>All Notes</h2>
				<ul>
					{notes?.map((note) => (
						<li key={note.id}>
							<input
								type="checkbox"
								checked={note.isCompleted}
								name=""
								id=""
							/>
							<span>{note.title}</span>
							<button>Edit</button>
							<button onClick={() => removeHandler(note.id)}>
								Remove
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
