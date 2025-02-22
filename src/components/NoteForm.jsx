/* eslint-disable react/prop-types */

import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteForm = () => {
	const {
		noteStates: { noteTitle, editMode },
		dispatch,
		submitHandler,
	} = useContext(NoteContext);

	return (
		<form onSubmit={submitHandler} className="note-form">
			<input
				value={noteTitle}
				type="text"
				onChange={(event) =>
					dispatch({
						type: "TRACK_NOTE_TITLE",
						payload: event.target.value,
					})
				}
			/>
			<button type="submit">
				{editMode === true ? "Updated Note" : "Create Note"}
			</button>
		</form>
	);
};

export default NoteForm;
