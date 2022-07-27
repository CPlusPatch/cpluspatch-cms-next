/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from "next/future/image";
import Head from "next/head";
import Navbar from '../../components/nav/navbar';
import Blocks from "editorjs-blocks-react-renderer";
import firestore from "../../utils/firestore";

function DemoArticle({ title, blocks, datePublished }) {
	return (
		<div className="bg-gray-50 font-['Exo_2'] w-full min-h-screen">
			<Head>
				<title>{title} &middot; CPlusPatch 2022</title>
				<meta property="og:title" content={title} />
			</Head>
			<Navbar />
			<div className="relative w-full h-full mx-auto max-w-6xl font-['Inter']">
				<div className="grid w-full h-full grid-cols-1 mt-8 lg:grid-cols-12 lg:gap-8 md:mt-16 lg:mt-24">
					<article className="w-full h-full col-span-9 md:px-0 max-w-none">
						<div className="container mb-12">
							<h1 className="text-3xl font-extrabold text-center md:text-5xl font-['Manrope'] mb-4 text-black">
								{title}
							</h1>
						</div>
						<div className="overflow-hidden md:rounded-lg aspect-w-16 aspect-h-9">
							<img src="https://res.cloudinary.com/braydoncoyer/image/upload/v1636418215/learn_tailwindplay_banner.jpg" />
						</div>
						<div className="w-full min-w-full px-4 mt-10 prose">
							<Blocks data={blocks}/>
						</div>
					</article>
					
					<Aside/>
					
				</div>
			</div>
		</div>
	);
}

function Aside() {
	return (
		<aside className="hidden w-full col-span-3 space-y-8 lg:inline-block md:self-start">
			<div className="pb-1">
				<div>
					<div className="px-4 mt-6 sm:mt-8 sm:flex sm:items-end sm:px-6">
						<div className="sm:flex-1">
							<div>
								<div className="flex items-center -ml-2">
									<div>
										<Image
											className="inline-block rounded-lg h-14 w-14"
											src="/static/logo.png"
											alt=""
											width={70}
											height={70}
											quality={100}
										/>
									</div>
									<div className="ml-3">
										<h4 className="text-lg font-black text-gray-900">CPlusPatch</h4>
										<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">@cpluspatch</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
				<dl className="px-4 space-y-8 sm:px-6 sm:space-y-6">
					<div>
						<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
							About me
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
							<p>
								Teenager that likes coding and playing games. I'm a big fan of open-source software and I'm always looking for new ways to improve my work.
								<br/>
								Fun fact: this website has been rewritten 5 times with different technologies.
							</p>
						</dd>
					</div>
					<div>
						<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
							Location
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
							Paris, France
						</dd>
					</div>
					<div>
						<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
							Favorite game
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
							Portal 2
						</dd>
					</div>
					<div>
						<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
							Learning
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
							Next.js
						</dd>
					</div>
				</dl>
			</div>
		</aside>
	);
}

export const getServerSideProps = async ({ params }) => {
	const { slug } = params;
	const post = (await firestore.getPostByFields("slug", "==", slug))[0];
	return {
		props: {
			title: post.data.title,
			blocks: post.data.blocks,
			datePublished: post.data.datePublished,
		}
	}
}

export default DemoArticle;