/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/nav/navbar";
import firestore from "../../utils/firestore";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Post, Posts, User } from "../../types/types";
import Image from "next/future/image";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Main({ posts, user, isAdmin }: {
	posts: Posts;
	user: User;
	isAdmin: User["admin"];
}) {
	return (
		<div className="w-full min-h-screen duration-200 bg-gray-50">
			<Head>
				<title>Posts · CPlusPatch</title>
				<meta property="og:title" content="Example title" />
			</Head>
			<Navbar
				user={user}
				options={{
					showSearchBar: !isAdmin,
					buttons: isAdmin && (
						<div>
							<NewPostButton/>
						</div>
					),
				}}
			/>
			<div className="relative w-full h-full max-w-6xl px-5 mx-auto">
				<main className="mt-14">
					<div className="relative mx-auto max-w-7xl">
						<div className="text-center">
							<h2 className="text-3xl font-black text-gray-900 uppercase font-exo sm:text-4xl">
								From the blog
							</h2>
							<p className="max-w-2xl mx-auto mt-2 text-gray-500 text-md sm:mt-2">
								Test blog for CCMS2
							</p>
						</div>
						<div className="max-w-lg gap-5 mx-auto mt-12 lg:max-w-none">
							<Posts posts={posts} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

function Posts({ posts }: {
	posts: Posts;
}) {
	return (
		<div className="grid grid-cols-2 gap-4 h-72">
			{(posts ?? {}).length > 0 && (
				<article className="relative flex w-full overflow-hidden duration-300 rounded-md shadow-md h-72 hover:scale-[100.5%]">
					<div
						className="absolute inset-0 z-10 flex"
						style={{
							backgroundImage:
								"linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0,0,0) 176px)",
						}}>
						<div className="flex flex-col justify-end h-full p-5 text-left gap-y-1">
							<h2 className="text-3xl font-bold text-gray-200 font-openSans">
								{posts[0].data.title}
							</h2>
							<h4 className="font-sans text-gray-400 text-md overflow-ellipsis">
								{posts[0].data.description}
							</h4>
						</div>
					</div>
					<div className="absolute inset-0 left-0 w-full h-full overflow-hidden">
						<Image
							src={posts[0].data.banner || undefined}
							className="min-w-full min-h-full"
							alt=""
							width={550}
							height={290}
						/>
					</div>
				</article>
			)}
			<div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-2 h-72">
				{(posts ?? {}).slice(1, 7).map((post) => (
					<article
						key={post.id}
						className="relative grid grid-cols-5 overflow-hidden duration-300 rounded-md shadow-md hover:scale-[100.5%] w-full">
						<div className="col-span-2 m-3 overflow-hidden rounded-[0.275rem] flex items-center justify-center">
							<Image
								className="object-cover min-w-full min-h-full"
								src={post.data.banner || undefined}
								alt=""
								width={84}
								height={75}/>
						</div>
						<div className="flex flex-col items-start col-span-3 py-3 pr-3 leading-tight font-metropolis">
							<h2 className="font-medium text-md">
								{post.data.title}
							</h2>
							<span className="flex flex-row items-center mt-auto overflow-hidden text-sm ">
								<img
									src={post.user.data.image || undefined}
									alt=""
									className="w-4 h-4 mr-2 rounded-sm"
								/>
								<h5 className="overflow-hidden text-ellipsis whitespace-nowrap">
									{post.user.data.name || undefined}
								</h5>
							</span>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}

function NewPostButton() {
	const router = useRouter();
	const [buttonContents, setButtonContents] = useState(
		<>
			<PlusIcon className="w-4 h-4 mr-2" />
			New post
		</>
	);

	const createNewPost = async () => {
		setButtonContents(
			<svg
				role="status"
				className="w-4 h-4 text-gray-200 animate-spin darkfalse:text-gray-600 fill-blue-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
			</svg>
		);

		const post = await (await window.fetch("/api/create")).json();
		router.push(`/editor/${post.id}`);
	};
	return (
		<button
			onClick={createNewPost}
			type="button"
			className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white duration-300 bg-indigo-600 border border-transparent rounded-[0.2rem] shadow-sm hover:shadow-md hover:bg-indigo-500">
			{buttonContents}
		</button>
	);
}

export const getServerSideProps = async ({ req, res }) => {
	const session = await firestore.getCurrentUser(req, res);

	let posts =
		session && (session.user.admin ?? false)
			? await firestore.getPosts()
			: await firestore.getPosts(["public", "==", true]);
	
	if (posts) {
		posts = await Promise.all(
			posts.map(async (post) => {
				post.user = await firestore.getUserById(post.data.author);
				return post;
			})
		);
	}
	return {
		props: {
			posts: posts,
			user: session ? session.user : false,
			isAdmin: session && (session.user.admin ?? false), // Using this for clearer code
		},
	};
};

export default Main;
