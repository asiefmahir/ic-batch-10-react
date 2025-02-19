/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteList = () => {
	const {
		filteredTerm,
		notes,
		toggleIsCompletedFlag,
		editHandler,
		removeHandler,
	} = useContext(NoteContext);

	const filteredNotes = notes.filter((note) => {
		if (filteredTerm === "completed") {
			return note.isCompleted === true;
		} else if (filteredTerm === "uncompleted") {
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
						onChange={() => toggleIsCompletedFlag(note)}
					/>
					<span>{note.title}</span>
					<button onClick={() => editHandler(note)}>Edit</button>
					<button onClick={() => removeHandler(note.id)}>
						Remove
					</button>
				</li>
			))}
		</ul>
	);
};

export default NoteList;
