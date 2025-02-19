/* eslint-disable react/prop-types */

import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteForm = () => {
	const { noteTitle, handleTitleChange, editMode, submitHandler } =
		useContext(NoteContext);

	return (
		<form onSubmit={submitHandler} className="note-form">
			<input value={noteTitle} type="text" onChange={handleTitleChange} />
			<button type="submit">
				{editMode === true ? "Updated Note" : "Create Note"}
			</button>
		</form>
	);
};

export default NoteForm;
