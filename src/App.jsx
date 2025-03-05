import { useState, useEffect } from "react";

// const add = () => {
// 	console.log("add");
// };

// add()

function App() {
	const [noteTitle, setNoteTitle] = useState("");

	const [notes, setNotes] = useState([]);

	const getAllNotes = async () => {
		fetch(`http://localhost:4000/notes`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "data");
				setNotes(data);
			});
	};

	useEffect(() => {
		console.log("I am inside notes effect");
		getAllNotes();
	}, []);

	console.log("I am outside fetch");

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
			isCompleted: false,
		};

		fetch(`http://localhost:3000/notes`, {
			method: "POST",
			body: JSON.stringify(newNote),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			getAllNotes();
			setNoteTitle("");
		});
	};

	// delete // update // filtering

	return (
		<>
			<div className="post-list">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						value={noteTitle}
						onChange={(e) => setNoteTitle(e.target.value)}
					/>
					<button type="submit">Create Note</button>
				</form>
				<h2>All Notes</h2>
				<ul>
					{notes.map((note) => (
						<li key={note.id}>
							<input
								type="checkbox"
								checked={note.isCompleted}
								name=""
								id=""
							/>
							<span>{note.title}</span>
							<button>Edit</button>
							<button>Remove</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
