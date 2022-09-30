/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/nav/navbar";
import firestore from "../../utils/firestore";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/24/solid";
import { UserSession } from "../../types/types";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Main({ posts, user, isAdmin }: {
	posts: any;
	user: UserSession["user"];
	isAdmin: UserSession["user"]["admin"];
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
							<button className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white duration-300 bg-indigo-600 border border-transparent rounded-[0.2rem] shadow-sm hover:shadow-md hover:bg-indigo-500">
								<PlusIcon className="w-4 h-4 mr-2"/>
								New post
							</button>
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
							<Post posts={posts} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

function Post({ posts }) {
	{/* <div className="flex flex-col overflow-hidden rounded-md shadow-lg">
		<div className="flex-shrink-0 overflow-hidden">
			<img
				className="object-cover w-full h-48"
				src={post.data.banner || undefined}
				alt=""
			/>
		</div>
		<div className="flex flex-col justify-between flex-1 p-6 bg-white">
			<div className="flex-1">
				<p className="text-sm font-medium tracking-tight text-indigo-600 uppercase font-openSans">
					<a href="#" className="hover:underline">
						Article
					</a>
				</p>
				<Link href={`/blog/${post.data.slug}`} prefetch={false}>
					<a className="block mt-2">
						<p className="text-xl font-semibold text-gray-900">
							{post.data.title}
						</p>
						<p className="mt-3 text-base text-gray-500">
							{post.data.description}
						</p>
					</a>
				</Link>
				<Link href={"/editor/" + post.id}>
					<a className="flex flex-row items-center mt-4 text-sm">
						Edit{" "}
						<ChevronRightIcon className="w-3 h-3 align-baseline" />
					</a>
				</Link>
			</div>
			<div className="flex items-center mt-6">
				<div className="flex-shrink-0">
					<a href="#">
						<span className="sr-only">
							{post.user.data.name}
						</span>
						<img
							className="w-10 h-10 rounded-full"
							src={post.user.data.image}
							alt=""
						/>
					</a>
				</div>
				<div className="ml-3">
					<p className="text-sm font-medium text-gray-900">
						<a href="#" className="hover:underline">
							{post.user.data.name}
						</a>
					</p>
					<div className="flex space-x-1 text-sm text-gray-500">
						<time dateTime={post.data.dateLastEdited}>
							{moment(post.data.dateLastEdited).fromNow()}
						</time>
					</div>
				</div>
			</div>
		</div>
	</div> */}
	return (
		<div>
			{(posts ?? {}).length > 0 && (
				<article className="relative flex w-1/2 overflow-hidden duration-300 rounded-md shadow-md h-72 hover:scale-[100.5%]">
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
						<img
							src={posts[0].data.banner || undefined}
							className="min-w-full min-h-full"
							alt=""
						/>
					</div>
				</article>
			)}
			{posts.slice(2, 5).map((post) => (
				<>sus</>
			))}
		</div>
	);
}

function Header({ isAdmin }) {
	const router = useRouter();
	const [buttonContents, setButtonContents] = useState(<>New post</>);

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
		<div className="items-center justify-between block pt-6 pb-8 space-y-2 md:flex md:space-y-5">
			<div>
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
					Recent publications
				</h1>
				<p className="mt-2 text-lg leading-7 text-gray-800">
					The latest crap written directly served to you by the
					wonderful invention called the Internet
				</p>
			</div>
			<div>
				{isAdmin && (
					<button
						onClick={createNewPost}
						type="button"
						className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm md:mt-0 md:ml-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						{buttonContents}
					</button>
				)}
			</div>
		</div>
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
