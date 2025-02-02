import "./App.css";
import BioData from "./components/BioData";

const bioDataInfos = [
	{
		name: "Mahir Asief",
		email: "asiefmahir1@gmail.com",
		skills: ["React", "Redux", "Next", "NodeJs"],
		interests: ["Reading", "Writing"],
	},
	{
		name: "Sr Setu",
		email: "srsetu@gmail.com",
		phone: "+1234567890",
		skills: ["React", "Redux", "Next", "NodeJs", "WP", "PHP"],
	},
];
function App() {
	console.log("App is invoked");

	return (
		<>
			{bioDataInfos.map((bioData) => (
				<>
					<BioData
						key={bioData.email}
						name={bioData.name}
						email={bioData.email}
						phone={bioData.phone}
						skills={bioData.skills}
						interests={bioData.interests}
					/>
					<hr />
				</>
			))}
			{/* <BioData
				name="Mahir Asief"
				email="asiefmahir@gmail.com"
				skills={["React", "Redux", "Next", "NodeJs"]}
				interests={["Reading", "Writing"]}
			/>
			<hr />
			<BioData
				name="Sr Setu"
				email="srsetu@gmail.com"
				phone="+1234567890"
				skills={["React", "Redux", "Next", "NodeJs", "WP", "PHP"]}
				// interests={["Reading", "Writing", "Playing", "CHESS"]}
			/> */}
		</>
	);
}

// BioData()
// App()
/**
 * 3 rules to be a component
 * 1. It should be a function
 * 2. That function should return "something"
 * 3. That "something" should be JSX/ html-ish code
 */

export default App;
