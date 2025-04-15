import { useState } from "react";
import classes from "./form.module.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const submitHandler = async (event) => {
		event.preventDefault();
		const enteredEmail = user.email;
		const enteredPassword = user.password;
		setIsLoading(true);
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				enteredEmail,
				enteredPassword,
			);
			if (res.user) {
				console.log("User logged in successfully", res.user);
			}
			setIsLoading(false);
			setErrorMessage("");
			navigate("/");
		} catch (error) {
			setErrorMessage(error.message);
			setIsLoading(false);
			console.log(error.message);
		}
	};
	return (
		<section className={classes.auth}>
			<h1>Login</h1>
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
					{!isLoading && <button>Login</button>}
					{isLoading && <p>Sending request...</p>}
					{errorMessage && (
						<h3 style={{ color: "red" }}>{errorMessage}</h3>
					)}
				</div>
			</form>
		</section>
	);
};

export default Login;
