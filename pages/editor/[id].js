import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/navbar';
import { ViewGridAddIcon } from '@heroicons/react/outline';


function Editor({ id }) {
	const [post, setPost] = useState({
		id: id,
		data: {
			author: false,
			banner: false,
			blocks: false,
			dateCreated: false,
			dateLastEdited: false,
			datePublished: false,
			description: false,
			public: false,
			slug: false,
			title: false
		}
	});

	useEffect(() => {
		async function fetchData() {
			const data = await (await window.fetch(`/api/post/${id}`)).json();
			setPost(data.post);
			console.log("Fetched post data");

			const EditorJS = (await import('@editorjs/editorjs')).default;
			const Header = (await import('@editorjs/header')).default;
			const Delimiter = (await import('@editorjs/delimiter')).default;
			const CodeTool = (await import('@editorjs/code')).default;
			const List = (await import('@editorjs/list')).default;

			new EditorJS({
				holder: 'editor',
				tools: {
					list: {
						class: List,
						inlineToolbar: true
					},
					header: Header,
					delimiter: Delimiter,
					code: CodeTool
				},
				data: data.post.data.blocks,
				onChange: async (editor) => {
					var postsCopy = post;
					postsCopy.data.blocks = await editor.saver.save();
					setPost(postsCopy);
				}
			});
		}

		if (typeof window !== "undefined") {
			fetchData();
		}
	});

	// Runs every time the editor is saved
	// @Param {Object} editor - Editor object received from the editor
	const saveData = async () => {
		console.log("Saving data");
		const res = await (await window.fetch(`/api/post/${id}`, {
			method: "PUT",
			body: JSON.stringify(post),
    		headers: { 'Content-Type': 'application/json' }
		})).json();
		console.log(res);
	}

	return (
		<div className="bg-gray-50 font-['Exo_2'] w-full min-h-screen">
			<Head>
				<title>
					{post.data.title ? post.data.title : "Loading editor..."}
				</title>
			</Head>
			<Navbar />
			<div className="relative w-full h-full mx-auto max-w-6xl font-['Inter']">
				<div className="grid w-full h-full grid-cols-1 mt-8 lg:grid-cols-12 lg:gap-8 md:mt-16 lg:mt-24">
					<article className="w-full h-full col-span-9 md:px-0 max-w-none">
						<div className="container mb-12">
							<button onClick={saveData}>save</button>
							<h1 className="text-3xl font-extrabold text-center md:text-5xl font-['Manrope'] mb-4 text-black">
								{post.data.title
									? post.data.title
									: "Loading..."}
							</h1>
						</div>
						<div className="w-full min-w-full px-4 mt-10 prose">
							<div id="editor" className="w-full h-full"></div>
						</div>
					</article>
					<Aside />
				</div>
			</div>
		</div>
	);
}

function Aside() {
	return (
		<aside className="hidden w-full col-span-3 space-y-8 lg:inline-block md:self-start">
			
		</aside>
	)
}

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			id: params.id
		}
	}
}


export default Editor;