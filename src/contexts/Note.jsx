/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = (props) => {
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);
	const [noteTitle, setNoteTitle] = useState("");
	const [filteredTerm, setFilteredTerm] = useState("all");

	const submitHandler = (event) => {
		event.preventDefault();

		if (noteTitle.trim() === "") {
			return alert(`Please Provide a valid title`);
		}

		editMode === true ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
			isCompleted: false,
		};
		setNotes([newNote, ...notes]);
		setNoteTitle("");
	};

	const handleTitleChange = (event) => {
		setNoteTitle(event.target.value);
	};

	const updateHandler = () => {
		const newNotes = notes.filter((note) => note.id !== editableNote.id);

		setNotes([{ ...editableNote, title: noteTitle }, ...newNotes]);

		setEditMode(false);
		setNoteTitle("");
	};

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

	const ctxValue = {
		notes,
		setNotes,
		editMode,
		setEditMode,
		editableNote,
		setEditableNote,
		noteTitle,
		setNoteTitle,
		filteredTerm,
		setFilteredTerm,
		submitHandler,
		handleTitleChange,
		removeHandler,
		editHandler,
		toggleIsCompletedFlag,
	};
	// // <App />

	// const ctxValue = {
	// 	a: 10,
	// 	name: "mahir",
	// 	greet: () => console.log("hello Mahir"),
	// };
	return (
		<NoteContext.Provider value={ctxValue}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteProvider;
