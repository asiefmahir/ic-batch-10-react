/**
 *
 * props = {
 *  name: 'SR Setu",
 *  email: 'srsetu@gmail.com',
 * phone: '1234567890',
 * skills: ['React', 'Redux', 'Next', 'NodeJs', 'WP', 'PHP'],
 * interests: ['Reading', 'Writing', 'Playing', 'CHESS'],
 *
 * }
 */

const BioData = (props) => {
	console.log(props, "props");
	const { name, email, phone, skills, interests } = props;

	return (
		<div className="bio-data">
			<h2>BioData of {name}</h2>
			<div className="personal-info">
				<p>
					<strong>Email:</strong>
					{email}
				</p>
				{phone && (
					<p>
						<strong>Phone: </strong>
						{phone}
					</p>
				)}
			</div>
			<div className="skills">
				<h2>My skills:</h2>
				<ul>
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			{interests && (
				<div className="interests">
					<h2>My interests:</h2>
					<ul>
						{interests.map((interest) => (
							<li key={interest}>{interest}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

// const add = (a, b) => {
// 	return a + b;
// };
// add(10, 20); // 30
// add(100, 200); // 300

export default BioData;
