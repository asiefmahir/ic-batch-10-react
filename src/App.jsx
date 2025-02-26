import { useState, useEffect } from "react";

// const add = () => {
// 	console.log("add");
// };

// add()

function App() {
	const [posts, setPosts] = useState([]);
	const [noteTitle, setNoteTitle] = useState("");
	const [counter, setCounter] = useState(10);
	const [counter2, setCounter2] = useState(25);

	const [notes, setNotes] = useState([]);

	const getAllNotes = async () => {
		fetch(`http://localhost:3000/notes`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "data");
				setNotes(data);
			});
	};

	useEffect(() => {
		console.log("I am inside useEffect");
		fetch(`http://localhost:3000/posts`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "data");
				setPosts(data);
			});
	}, []);

	useEffect(() => {
		console.log("I am inside notes effect");
		getAllNotes();
	}, []);

	console.log("I am outside fetch");
	// posts = data
	// fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data, "data");
	// 		setPosts(data);
	// 	});

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
			<div className="counter">
				<p>The value of the counter is {counter}</p>
				<button onClick={() => setCounter(counter + 1)}>
					Increase By 1
				</button>
			</div>
			<div className="counter">
				<p>The value of the counter is {counter2}</p>
				<button onClick={() => setCounter2(counter2 + 5)}>
					Increase By 5
				</button>
			</div>
			<div className="post-list">
				<h2>All Posts</h2>
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
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
