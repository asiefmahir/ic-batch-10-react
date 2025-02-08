import "./App.css";
import { useState } from "react";

function App() {
	const [noteTitle, setNoteTitle] = useState("");
	// noteTitle = "mahir"
	const [notes, setNotes] = useState([]);

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
		// console.log(noteTitle.trim(), "trimmed");

		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
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

	return (
		<div className="container">
			<form onSubmit={submitHandler} className="note-form">
				<input
					value={noteTitle}
					type="text"
					onChange={handleTitleChange}
				/>
				<button type="submit">Create Note</button>
			</form>
			<div className="notes">
				<h2>All Notes</h2>
				<ul>
					{notes.map((note) => (
						<li key={note.id}>
							<span>{note.title}</span>
							<button>Edit</button>
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
