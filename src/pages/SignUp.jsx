import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import classes from "./form.module.css";

// import "../form.module.css";

const SignupForm = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	// console.log(auth?.currentUser.uid);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		if (!user.email.trim() || !user.password.trim()) {
			return alert(`Please provide valid user email and password`);
		}
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(
				auth,
				user.email,
				user.password,
			);
			await setDoc(doc(db, "users", auth.currentUser.uid), {
				email: user.email,
				role: "user",
			});
			setLoading(false);
			setErrorMessage("");
			setUser("");
			navigate("/login");
		} catch (error) {
			setErrorMessage(error.message);
			setLoading(false);
			console.error(error);
		}
		// mHRkzpRJKtQJH3gCVzS6qyxv4S73
	};
	return (
		<main>
			<section className={classes.auth}>
				<h1>Please Register</h1>
				<form onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							name="email"
							required
							value={user.email}
							onChange={handleChange}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Your Password</label>
						<input
							type="password"
							name="password"
							required
							value={user.password}
							onChange={handleChange}
						/>
					</div>
					<div className={classes.actions}>
						{!isLoading && <button>Register</button>}
						{isLoading && <p>Creating New User</p>}
						{errorMessage && (
							<p style={{ color: "red" }}>{errorMessage}</p>
						)}
					</div>
				</form>
			</section>
		</main>
	);
};

export default SignupForm;
