import NoteFilterOptions from "./NoteFilterOptions";
import NoteList from "./NoteList";

const NoteSection = () => {
	return (
		<div className="notes">
			<h2>All Notes</h2>
			<NoteFilterOptions />
			<NoteList />
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
