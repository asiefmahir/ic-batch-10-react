/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteList = () => {
	const { noteStates, dispatch } = useContext(NoteContext);

	const filteredNotes = noteStates.notes.filter((note) => {
		if (noteStates.filteredTerm === "completed") {
			return note.isCompleted === true;
		} else if (noteStates.filteredTerm === "uncompleted") {
			return note.isCompleted === false;
		} else {
			return true;
		}
	});

	return (
		<ul>
			{filteredNotes.map((note) => (
				<li key={note.id}>
					<input
						type="checkbox"
						checked={note.isCompleted}
						onChange={() =>
							dispatch({
								type: "TOGGLE_IS_COMPLETED_FLAG",
								payload: note.id,
							})
						}
					/>
					<span>{note.title}</span>
					<button
						onClick={() =>
							dispatch({ type: "EDIT_NOTE", payload: note })
						}
					>
						Edit
					</button>
					<button
						onClick={() =>
							dispatch({ type: "REMOVE_NOTE", payload: note.id })
						}
					>
						Remove
					</button>
				</li>
			))}
		</ul>
	);
};

export default NoteList;
