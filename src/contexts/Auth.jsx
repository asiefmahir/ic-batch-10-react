import { useContext, useState, useEffect, createContext } from "react";

import { auth, db } from "../firebase";

import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [role, setRole] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	const initializeUser = async (user) => {
		if (user) {
			setCurrentUser({ ...user });
			const docRef = doc(db, "users", user.uid);
			const docSnap = await getDoc(docRef);
			const roleFromDB = docSnap.data().role;
			setRole(roleFromDB);
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}
		setLoading(false);
	};

	const value = {
		currentUser,
		userLoggedIn,
		role,
		setCurrentUser,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
