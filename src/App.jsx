/* eslint-disable react/prop-types */
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteSection from "./components/NoteSection";

function App() {
	return (
		<div className="container">
			<NoteForm />
			<NoteSection />
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
