import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/editor-nav';
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Toaster, toast } from "react-hot-toast";


function Editor({ id, user }) {
	const [blocks, setBlocks] = useState([]);
	const [title, setTitle] = useState("");

	const [isEditorInitialized, setIsEditorInitialized] = useState(false);

	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const data = await (await window.fetch(`/api/post/${id}`)).json();
			setBlocks(data.post.data.blocks);
			setTitle(data.post.data.title);
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
					setBlocks(await editor.saver.save());
				}
			});

			setIsEditorInitialized(true);
		}

		if (typeof window !== "undefined" && isEditorInitialized === false) {
			fetchData();
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Runs every time the editor is saved
	// @Param {Object} editor - Editor object received from the editor
	const saveData = async () => {
		setIsSaving(true);
		console.log("Saving data");
		const res = await (await window.fetch(`/api/post/${id}`, {
			method: "PUT",
			body: JSON.stringify({
				id: id,
				data: {
					blocks: blocks,
					title: title
				}
			}),
    		headers: { 'Content-Type': 'application/json' }
		})).json();
		setIsSaving(false);
		saveToast();
	}

	return (
		<div className="bg-gray-50 font-['Exo_2'] w-full min-h-screen">
			<Head>
				<title>
					{title}
				</title>
			</Head>
			<Toaster/>
			<Navbar user={user} onSave={saveData} isSaving={isSaving} onTitleChange={(title) => {
				setTitle(title);
			}} title={title}/>
			<div className="relative w-full h-full mx-auto max-w-6xl font-['Inter']">
				<div className="grid w-full h-full grid-cols-1 mt-8 lg:grid-cols-12 lg:gap-8 md:mt-16 lg:mt-24">
					<article className="w-full h-full col-span-9 md:px-0 max-w-none">
						<div className="container mb-12">
							<h1 className="text-3xl font-extrabold text-center md:text-5xl font-['Manrope'] mb-4 text-black">
								{title ? title : "Loading..."}
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

function saveToast() {
	toast.custom((t) => (
		 <div className={`${
			t.visible ? 'animate-enter' : 'animate-leave'
		  } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}>
		 <div className="p-4">
		   <div className="flex items-start">
			 <div className="flex-shrink-0">
			   <CheckCircleIcon className="w-6 h-6 text-green-400" aria-hidden="true" />
			 </div>
			 <div className="ml-3 w-0 flex-1 pt-0.5">
			   <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
			 </div>
			 <div className="flex flex-shrink-0 ml-4">
			   <button
				 className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				 onClick={() => toast.dismiss(t.id)}
			   >
				 <span className="sr-only">Close</span>
				 <XIcon className="w-5 h-5" aria-hidden="true" />
			   </button>
			 </div>
		   </div>
		 </div>
	   </div>
	), {
		duration: 4000,
		position: "bottom-right",
	})
}

export const getServerSideProps = async ({ params, req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	return {
		props: {
			id: params.id,
			user: session ? session.user : false,
		}
	}
}


export default Editor;