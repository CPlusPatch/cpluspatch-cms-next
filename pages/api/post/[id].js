import firestore from "../../../utils/firestore";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (req.method === "GET") {
		const id = req.query.id;
		const post = (await firestore.getPostById(id));
		if(post && ((session.user.admin ?? false) || post.public)) { // If there is a post and the user is an admin or the post is public, return 200
			res.status(200).json({
				success: true,
				post: post
			})
		}
		else {
			res.status(404).json({
				success: false,
				error: "Post not found"
			})
		}
	} else if (req.method === "PUT" && session.user.admin) { // User must be an admin to edit posts
		const postData = req.body;
		const post = (await firestore.updatePost(postData.id, postData.data));
		if(post) {
			res.status(200).json({
				success: true,
			})
		}
		else {
			res.status(404).json({
				success: false,
				error: "Post not found"
			})
		}
	}
}