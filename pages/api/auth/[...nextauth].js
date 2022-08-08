import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export const authOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	adapter: FirestoreAdapter({
		apiKey: process.env.FIREBASE_API_KEY,
		appId: process.env.FIREBASE_APP_ID,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.FIREBASE_DATABASE_URL,
		projectId: process.env.FIREBASE_PROJECT_ID,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	}),
	callbacks: {
		async session({ session, token, user }) {
			session.user.id = user.id
			session.user.admin = user.admin
			return session
		}
	},
	pages: {
		signIn: "/auth/signin",
	},
}
  
export default NextAuth(authOptions)