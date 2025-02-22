/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteFilterOptions = () => {
	const { noteStates, dispatch } = useContext(NoteContext);
	return (
		<select
			name=""
			id=""
			value={noteStates.filteredTerm}
			onChange={(e) =>
				dispatch({
					type: "CHANGE_FILTER_TERM",
					payload: e.target.value,
				})
			}
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
