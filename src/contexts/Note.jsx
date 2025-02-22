/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { noteAppReducer } from "../reducers/note";

export const NoteContext = createContext();

const initState = {
	notes: [],
	editMode: false,
	editableNote: null,
	noteTitle: "",
	filteredTerm: "all",
};

// pure function

const NoteProvider = (props) => {
	const [noteStates, dispatch] = useReducer(noteAppReducer, initState);

	const submitHandler = (event) => {
		event.preventDefault();

		if (noteStates.noteTitle.trim() === "") {
			return alert(`Please Provide a valid title`);
		}

		noteStates.editMode === true
			? dispatch({ type: "UPDATE_NOTE" })
			: dispatch({ type: "CREATE_NOTE" });
	};

	const ctxValue = {
		submitHandler,
		noteStates,
		dispatch,
	};

	return (
		<NoteContext.Provider value={ctxValue}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteProvider;
