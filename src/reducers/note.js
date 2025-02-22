export const noteAppReducer = (state, action) => {
	// console.log();

	// {type: "TRACK_NOTE_TITLE", payload: e.target.value}
	switch (action.type) {
		case "TRACK_NOTE_TITLE": {
			return {
				...state,
				noteTitle: action.payload,
			};
		}

		case "CREATE_NOTE": {
			const newNote = {
				id: Date.now() + "",
				title: state.noteTitle,
				isCompleted: false,
			};

			return {
				...state,
				notes: [newNote, ...state.notes],
				noteTitle: "",
			};
		}

		case "EDIT_NOTE": {
			return {
				...state,
				editMode: true,
				editableNote: action.payload,
				noteTitle: action.payload.title,
			};
		}

		case "UPDATE_NOTE": {
			const newNotes = state.notes.filter(
				(note) => note.id !== state.editableNote.id,
			);

			return {
				...state,
				notes: [
					{ ...state.editableNote, title: state.noteTitle },
					...newNotes,
				],
				editMode: false,
				editableNote: null,
				noteTitle: "",
			};
		}

		case "REMOVE_NOTE": {
			return {
				...state,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};
		}

		case "TOGGLE_IS_COMPLETED_FLAG": {
			const newArr = state.notes.map((note) => {
				if (note.id === action.payload) {
					return { ...note, isCompleted: !note.isCompleted };
					// note.isCompleted = !note.isCompleted
				}
				return { ...note }; // new Ref
			});

			return {
				...state,
				notes: newArr,
			};
		}

		case "CHANGE_FILTER_TERM": {
			return {
				...state,
				filteredTerm: action.payload,
			};
		}

		default: {
			return state;
		}
	}
};
