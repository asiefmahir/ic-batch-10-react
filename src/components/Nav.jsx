import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts/Auth";

function Nav() {
	const { userLoggedIn, role } = useAuth();
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						{!userLoggedIn && (
							<>
								<li>
									<Link to="/signup">Sign Up</Link>
								</li>
								<li>
									<Link to="/login">Login</Link>
								</li>
							</>
						)}
						{userLoggedIn && (
							<li>
								<Link to="/cart">Cart</Link>
							</li>
						)}
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/notes">NoteApp</Link>
						</li>
						{userLoggedIn && role === "admin" && (
							<li>
								<Link to="/add-product">Add Product</Link>
							</li>
						)}
						<li>
							<Link to="/class-compo">Class Component</Link>
						</li>
						{userLoggedIn && (
							<li>
								<button onClick={() => signOut(auth)}>
									Logout
								</button>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
