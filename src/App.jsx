// const add = () => {
// 	console.log("add");
// };

// add()
import { useState } from "react";
import {
	useGetNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
} from "./services/note";

function App() {
	const [noteTitle, setNoteTitle] = useState("");
	const {
		data: notes,
		isFetching,
		isLoading,
		isError,
		error,
	} = useGetNotesQuery();

	const [addNote] = useCreateNoteMutation();
	const [deleteNote] = useRemoveNoteMutation();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			title: noteTitle,
			isCompleted: false,
		};
		addNote(newNote);
	};

	// delete // update // filtering

	if (isLoading) {
		return <h2>Loading.......</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}

	const removeHandler = (id) => {
		deleteNote(id);
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
