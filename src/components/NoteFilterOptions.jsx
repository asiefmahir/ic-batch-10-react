/* eslint-disable react/prop-types */

const NoteFilterOptions = (props) => {
	const { filteredTerm, setFilteredTerm } = props;
	return (
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
	);
};

// // export let a = 10;
// const add = () => {
// 	let a = 10;

// 	return a + 20;
// };
export default NoteFilterOptions;
