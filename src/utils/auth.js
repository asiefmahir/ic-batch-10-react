import CredentialsProvider from "next-auth/providers/credentials";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				const res = await signInWithEmailAndPassword(
					auth,
					credentials.email,
					credentials.password,
				);
				let userFromDB;
				if (res.user) {
					const docRef = doc(db, "users", res.user.uid);
					const docSnap = await getDoc(docRef);
					userFromDB = { ...docSnap.data(), id: res.user.uid };

					console.log("User logged in successfully", userFromDB);
				}
				// await connectDb();
				// const { email, password } = credentials;
				// // console.log(email, "cred");

				// const user = await User.findOne({ email: email });

				if (!res.user) {
					throw new Error("Invalid email or Password");
				}

				// const isMatch = await bcrypt.compare(password, user.password);
				// if (!isMatch) {
				// 	throw new Error("Invalid email or Password");
				// }

				return userFromDB;
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			if (user) {
				return true;
			}
		},
		jwt: async ({ token, user }) => {
			console.log(token, "token");
			console.log(user, "user");

			const docRef = doc(db, "users", user.id);
			const docSnap = await getDoc(docRef);
			const userByEmail = { ...docSnap.data(), id: user.id };
			token.user = userByEmail;
			// token.abc = 10;
			return token;
		},
		session: async ({ session, token }) => {
			session.user = token.user;
			// console.log(session);

			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/login",
	},
};
