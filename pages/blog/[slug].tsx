/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from "next/head";
import Navbar from '../../components/nav/navbar';
import Blocks from "editorjs-blocks-react-renderer";
import firestore from "../../utils/firestore";
import { Aside } from '../../components/blog/Aside';

function Article({ post, user }: {
	post: any
	user: object
}) {
	return (
		<div className="bg-gray-50 font-['Exo_2'] w-full min-h-screen">
			<Head>
				<title>{post.data.title} &middot; CPlusPatch 2022</title>
				<meta property="og:title" content={post.data.title} />
			</Head>
			<Navbar user={user} />
			<div className="relative w-full h-full mx-auto max-w-6xl font-['Inter']">
				<div className="grid w-full h-full grid-cols-1 mt-8 lg:grid-cols-12 lg:gap-8 md:mt-16 lg:mt-24">
					<article className="w-full h-full col-span-9 md:px-0 max-w-none">
						<div className="container mb-12">
							<h1 className="text-3xl font-extrabold text-center md:text-5xl font-['Manrope'] mb-4 text-black">
								{post.data.title}
							</h1>
						</div>
							{post.data.banner && (
							<div className="overflow-hidden md:rounded-lg aspect-w-16 aspect-h-9">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={post.data.banner} alt=""/>
							</div>
							)}
						<div className="w-full min-w-full px-4 mt-10 prose">
							<Blocks data={post.data.blocks}/>
						</div>
					</article>
					
					<Aside/>
					
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async ({ params, req, res }) => {
	const { slug } = params;
	const post = (await firestore.getPostByFields("slug", "==", slug))[0];
	const session = await firestore.getCurrentUser(req, res);

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post: post,
			user: session ? session.user : false,
		}
	}
}

export default Article;