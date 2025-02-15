import "./App.css";
import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteSection from "./components/NoteSection";

function App() {
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);
	const [noteTitle, setNoteTitle] = useState("");

	// tuseday

	return (
		<div className="container">
			<NoteForm
				noteTitle={noteTitle}
				setNoteTitle={setNoteTitle}
				editMode={editMode}
				setNotes={setNotes}
				notes={notes}
				editableNote={editableNote}
				setEditMode={setEditMode}
			/>
			<NoteSection
				setNoteTitle={setNoteTitle}
				setNotes={setNotes}
				notes={notes}
				setEditMode={setEditMode}
				setEditableNote={setEditableNote}
			/>
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
