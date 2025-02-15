/* eslint-disable react/prop-types */

const NoteForm = (props) => {
	//props destructuring

	const {
		noteTitle,
		setNoteTitle,
		editMode,
		setNotes,
		notes,
		editableNote,
		setEditMode,
	} = props;

	const submitHandler = (event) => {
		event.preventDefault();

		if (noteTitle.trim() === "") {
			return alert(`Please Provide a valid title`);
		}

		editMode === true ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		// console.log(noteTitle.trim(), "trimmed");

		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
			isCompleted: false,
		};
		// notes.push(newNote)
		setNotes([newNote, ...notes]);
		setNoteTitle("");
	};

	const handleTitleChange = (event) => {
		// noteTitle = event.tar
		// mahi
		setNoteTitle(event.target.value); // event.target.value = "mahir"
		// noteTitle = "mahir"
	};

	const updateHandler = () => {
		// []
		// const newArr = notes.map((note) => {
		// 	if (note.id === editableNote.id) {
		// 		return { ...note, title: noteTitle };
		// 	}

		// 	return { ...note };
		// });

		const newNotes = notes.filter((note) => note.id !== editableNote.id);

		setNotes([{ ...editableNote, title: noteTitle }, ...newNotes]);
		//

		// setNotes(updatedNotes);
		// setNotes(newArr);
		// after update logic executed
		setEditMode(false);
		setNoteTitle("");
	};

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
