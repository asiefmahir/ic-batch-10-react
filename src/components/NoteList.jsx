/* eslint-disable react/prop-types */

const NoteList = (props) => {
	const {
		filteredTerm,
		setNoteTitle,
		notes,
		setNotes,
		setEditMode,
		setEditableNote,
	} = props;

	const filteredNotes = notes.filter((note) => {
		if (filteredTerm === "completed") {
			return note.isCompleted === true;
		} else if (filteredTerm === "uncompleted") {
			return note.isCompleted === false;
		} else {
			return true;
		}
	});

	const removeHandler = (id) => {
		const newArr = notes.filter((note) => note.id !== id);
		setNotes(newArr);
	};

	const editHandler = (note) => {
		setNoteTitle(note.title);
		setEditMode(true);
		setEditableNote(note);
	};

	const toggleIsCompletedFlag = (targetedNote) => {
		const newArr = notes.map((note) => {
			if (note.id === targetedNote.id) {
				return { ...note, isCompleted: !note.isCompleted };
			}
			return { ...note };
		});

		setNotes(newArr);
	};
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
