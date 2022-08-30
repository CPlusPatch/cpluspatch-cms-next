import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

// Initialize Firebase
if (!admin.apps.length) {
	var app = admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
			privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n"),
			clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
		}),
	})
} else {
	var app = admin.app();
}

const db = getFirestore(app);
var postsRef = db.collection("posts");
var usersRef = db.collection("users");

const methods = {
	app: app,
	db: db,
	postsRef: postsRef,
	usersRef: usersRef,
	getPosts: async (fields: any[] | boolean = false) => {
		let posts = [];
		let data = fields ? 
			await postsRef.where(fields[0], fields[1], fields[2]).orderBy("dateLastEdited", "desc").get() :
			await postsRef.orderBy("dateLastEdited", "desc").get();
		
		data.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts ?? false;
	},
	getPostByFields: async (...fields: any[]) => {
		let posts = [];
		let data = await postsRef.where(fields[0], fields[1], fields[2]).get();
		data.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts ?? false;
	},
	getPostById: async (id) => {
		try {
			let data = await postsRef.doc(id).get();
			let post = {
				id: data.id,
				data: data.data()
			};

			return post;
		} catch (error) {
			console.log(error)
			return false;
		}
	},
	setPostField: async (id, field, value) => {
		try {
			let data = await postsRef.doc(id).update({
				[field]: value
			});
			return data;
		} catch {
			return false;
		}
	},
	updatePost: async (id, data) => {
		try {
			let res = await postsRef.doc(id).set(data, { merge: true });
			return res;
		} catch (e) {
			console.error(e);
			return false;
		}
	},
	addPost: async (data) => {
		try {
			return (await postsRef.add(data));
		} catch (error) {
			console.log(error);
			return false;
		}
	},
	getUserById: async (id) => {
		try {
			let data = await usersRef.doc(id).get();
			let user = {
				id: data.id,
				data: data.data()
			};
			return JSON.parse(JSON.stringify(user)); // Still don't know why it needs this JSOthing but it does
		} catch (error) {
			console.log(error)
			return false;
		}
	},
	getCurrentUser: async (req, res) => {
		return JSON.parse(JSON.stringify(await unstable_getServerSession(req, res, authOptions))); // IT REFUSES TO WORK WITHOUT THAT JSON THING AGHHHAGHGAGAHAH
	},
}
export default methods;