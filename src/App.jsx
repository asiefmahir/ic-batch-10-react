import "./App.css";
import { useState } from "react";

function App() {
	const [noteTitle, setNoteTitle] = useState("");
	// noteTitle = "mahir"
	const [notes, setNotes] = useState([]);
	// notes = newArr
	const [editMode, setEditMode] = useState(false);

	const [editableNote, setEditableNote] = useState(null);

	const [filteredTerm, setFilteredTerm] = useState("all");

	const filteredNotes = notes.filter((note) => {
		if (filteredTerm === "completed") {
			return note.isCompleted === true;
		} else if (filteredTerm === "uncompleted") {
			return note.isCompleted === false;
		} else {
			return true;
		}
	});

	// const filteredNotes =

	// notes = [
	// 	 * 	{id: '1', title: "note 1"},
	// 	 * {id: '2', title: "note 2"},
	// 	 *
	// 	 * ]

	// notes =  [
	// { id: "1", title: "Note 1" }
	// ]

	// notes = [{ id: "4", title: "Note 41545453" }]

	const handleTitleChange = (event) => {
		// noteTitle = event.tar
		// mahi
		setNoteTitle(event.target.value); // event.target.value = "mahir"
		// noteTitle = "mahir"
	};

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

	const removeHandler = (id) => {
		// id === "3"

		/**
		 * newArr = [
		 * 	{id: '1', title: "note 1"},
		 * {id: '2', title: "note 2"},
		 *
		 * ]
		 */
		const newArr = notes.filter((note) => note.id !== id);

		setNotes(newArr);

		//							()   =>  3  !== 3
	};

	const editHandler = (note) => {
		setNoteTitle(note.title);
		setEditMode(true);
		setEditableNote(note);
	};

	// const nums = [1, 2, 3];
	// // newNums = [2, 10, 6]
	// const newNums = nums.map((num) => {
	// 	if (num % 2 === 0) {
	// 		return num * 5;
	// 	}

	// 	return num * 2; // 1 *2 = 2
	// });
	// console.log(newNums); // []

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

	const toggleIsCompletedFlag = (targetedNote) => {
		// note.isCompleted = !note.isCompleted;
		const newArr = notes.map((note) => {
			if (note.id === targetedNote.id) {
				return { ...note, isCompleted: !note.isCompleted };
			}
			return { ...note };
		});

		setNotes(newArr);
	};

	return (
		<div className="container">
			<form onSubmit={submitHandler} className="note-form">
				<input
					value={noteTitle}
					type="text"
					onChange={handleTitleChange}
				/>
				<button type="submit">
					{editMode === true ? "Updated Note" : "Create Note"}
				</button>
			</form>
			<input type="text" placeholder="Search Notes/Todos" />
			<div className="notes">
				<h2>All Notes</h2>
				<select
					name=""
					id=""
					value={filteredTerm}
					onChange={(e) => setFilteredTerm(e.target.value)}
				>
					<option value="all">All Notes/Todos</option>
					<option value="completed">Completed Notes/Todos</option>
					<option value="uncompleted">UnCompleted Notes/Todos</option>
				</select>
				<ul>
					{filteredNotes.map((note) => (
						<li key={note.id}>
							<input
								type="checkbox"
								checked={note.isCompleted}
								onChange={() => toggleIsCompletedFlag(note)}
							/>
							<span>{note.title}</span>
							<button onClick={() => editHandler(note)}>
								Edit
							</button>
							<button onClick={() => removeHandler(note.id)}>
								Remove
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
// let counter = 10;
// document.getElementById("increase").addEventListener("click", () => {
// 	counter++;
// });

// BioData()
// App()
/**
 * 3 rules to be a component
 * 1. It should be a function
 * 2. That function should return "something"
 * 3. That "something" should be JSX/ html-ish code
 */

export default App;
