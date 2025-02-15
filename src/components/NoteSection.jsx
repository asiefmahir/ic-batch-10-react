import { useState } from "react";
import NoteFilterOptions from "./NoteFilterOptions";
import NoteList from "./NoteList";

const NoteSection = (props) => {
	const [filteredTerm, setFilteredTerm] = useState("all");

	const propsForNoteList = { ...props, filteredTerm };

	// let a = 10;
	return (
		<div className="notes">
			<h2>All Notes</h2>
			<NoteFilterOptions
				filteredTerm={filteredTerm}
				setFilteredTerm={setFilteredTerm}
			/>
			<NoteList
				{...propsForNoteList}
				// setNoteTitle={props.setNoteTitle}
				// setNotes={props.setNotes}
				// notes={props.notes}
				// setEditMode={props.setEditMode}
				// setEditableNote={props.setEditableNote}
			/>
		</div>
	);
};

// const func1 = () => {
// 	let a = 10;
// 	const { b } = func2(a);
// 	func3(a);
// };
// const func2 = (num1) => {
// 	let b = 20;

// 	return { b: 10 };
// };

// const func3 = (num1) => {};

export default NoteSection;
