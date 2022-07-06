import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase
if (!admin.apps.length) {
	var app = admin.initializeApp({
		credential: admin.credential.cert({
			project_id: process.env.FIREBASE_PROJECT_ID,
			private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
			client_email: process.env.FIREBASE_CLIENT_EMAIL,
		}),
	})
} else {
	var app = admin.app();
}

const db = getFirestore(app);
var postsRef = db.collection("posts");

const methods = {
	app: app,
	db: db,
	postsRef: postsRef,
	getPosts: async (extraQuery = false) => { // TODO: Update to the Firebase Admin SDK
		const q = extraQuery ? query(collection(db, 'posts'), extraQuery, orderBy("dateCreated", "desc")) : query(collection(db, 'posts'), orderBy("dateCreated", "desc"));
		let posts = [];

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts;
	},
	getPostByFields: async (...fields) => {
		let posts = [];
		let data = await postsRef.where(...fields).get();
		data.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts ?? false;
	},
	setPostField: async (id, field, value) => { // TODO: Update to the Firebase Admin SDK
		return await setDoc(doc(collection(db, 'posts'), id), {
			[field]: value
		}, { merge: true });
	},
	addPost: async (data) => { // TODO: Update to the Firebase Admin SDK
		await setDoc(doc(collection(db, 'posts')), data);
	},
}
export default methods;