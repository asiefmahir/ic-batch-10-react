/* eslint-disable react/prop-types */
import { useAuth } from "../contexts/Auth";
import { Navigate } from "react-router";

const PrivateAdminRoute = ({ children }) => {
	const { userLoggedIn, role } = useAuth();

	return userLoggedIn &&
		role &&
		(role === "admin" || role === "super-admin") ? (
		children
	) : (
		<Navigate to={"/"} />
	);
};

export default PrivateAdminRoute;
