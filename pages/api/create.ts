import firestore from "../../utils/firestore";

export default async function handler(req, res) {
	const currentTime = Date.now();
	const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-brand-new-post";
	const data = {
		author: "",
		banner: "",
		blocks: {
			time: currentTime,
			blocks: [],
			version: "2.25.2",
		},
		dateCreated: currentTime,
		dateLastEdited: currentTime,
		datePublished: false,
		description: "Default description for new posts",
		public: false,
		slug: slug,
		title: "Brand new post"
	}

	const post = await firestore.addPost(data)
	if(post) {
		res.status(201).json({
			success: true,
			id: post.id
		})
	} else {
		res.status(500).json({
			success: false,
			error: "Error creating post"
		})
	}

}