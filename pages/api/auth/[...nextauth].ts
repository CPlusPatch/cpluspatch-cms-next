import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import firestore from "../../../utils/firestore";

export const authOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		})
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
			session.user.canCreatePosts = user.canCreatePosts
			session.user.createdAt = user.createdAt
			session.user.updatedAt = user.updatedAt
			return session
		}
	},
	events: {
		async signIn({ user, account, profile, isNewUser }) {
			if (isNewUser) {
				await firestore.usersRef.doc(user.id).set({
					id: user.id,
					email: user.email,
					admin: false,
					canCreatePosts: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				}, { merge: true });
				console.log("New user created!");
			}
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
}
  
export default NextAuth(authOptions)