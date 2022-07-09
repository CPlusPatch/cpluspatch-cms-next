import firestore from "../../../utils/firestore";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const id = req.query.id;
		const post = (await firestore.getPostById(id));
		if(post) {
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
	} else if (req.method === "PUT") {
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