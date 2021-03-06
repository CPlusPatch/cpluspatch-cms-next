import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/navbar';
import firestore from "../../utils/firestore";
import { useRouter } from 'next/router';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function Main({ posts }) {
	return (
		<div className="bg-gray-50 font-['Exo_2'] w-full min-h-screen">
			<Head>
				<title>Test DemoArticle! &middot; CPlusPatch 2022</title>
				<meta property="og:title" content="Example title" />
			</Head>
			<Navbar />
			<div className="relative w-full h-full max-w-6xl mx-auto">
				<main className="mt-14">
					<div className="divide-y divide-gray-700">
						<Header />
						<div className="grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
							{posts.map((post) => (
								<div key={post.id}>
									<div>
										<a
											href="/category/article"
											className="inline-block">
											<span
												className={classNames(
													"bg-indigo-100 text-indigo-800",
													"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
												)}>
												Article
											</span>
										</a>
									</div>
									<a href={`/blog/${post.data.slug}`} className="block mt-4">
										<p className="text-xl font-semibold text-gray-900">
											{post.data.title}
										</p>
										<p className="mt-3 text-base text-gray-500">
											{post.data.description}
										</p>
									</a>
									<div className="flex items-center mt-6">
										<div className="flex-shrink-0">
											<a href="#">
												<span className="sr-only">
													CPlusPatch
												</span>
												<img
													className="w-10 h-10 rounded-full"
													src="/static/logo.jpg"
													alt=""
												/>
											</a>
										</div>
										<div className="ml-3">
											<p className="text-sm font-medium text-gray-900">
												<a href="#">
													CPlusPatch
												</a>
											</p>
											<div className="flex space-x-1 text-sm text-gray-500">
												<time dateTime={post.data.dateCreated} >
													{post.data.dateCreated}
												</time>
												<span aria-hidden="true">
													&middot;
												</span>
												<span>
													6 min read
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

function Header() {
	const router = useRouter();
	const [buttonContents, setButtonContents] = useState(<>New post</>);

	const createNewPost = async () => {
		setButtonContents(
			<svg role="status" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
			</svg>
		);
		
		const post = await (await window.fetch('/api/create')).json();
		router.push(`/editor/${post.id}`);
	}
	return (
		<div className="flex items-center justify-between pt-6 pb-8 space-y-2 md:space-y-5">
			<div>
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Recent publications</h1>
				<p className="mt-2 text-lg leading-7 dark:text-gray-200">The latest crap written directly served to you by the wonderful invention called the Internet</p>
			</div>
			<div>
				<button onClick={createNewPost} type="button" className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm md:mt-0 md:ml-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					{buttonContents}
				</button>
			</div>
		</div>
	)
}

export const getServerSideProps = async () => {
	let posts = await firestore.getPosts();
	return {
		props: {
			posts: posts
		}
	};
}

export default Main;