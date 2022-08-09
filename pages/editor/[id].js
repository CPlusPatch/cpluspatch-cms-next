import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/nav/editor-nav';
import { CheckCircleIcon, XIcon, EmojiSadIcon } from '@heroicons/react/solid';
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
			try {
				var data = await (await window.fetch(`/api/post/${id}`)).json();

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
			} catch (e) {
				console.error(e);
				errorToast("Oh no!", "Something went wrong, please try again.");
				return false;
			}
		}

		if (typeof window !== "undefined" && isEditorInitialized === false) {
			fetchData();
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Runs every time the editor is saved
	// @Param {Object} editor - Editor object received from the editor
	const saveData = async () => {
		try {
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
			saveToast();
		} catch (e) {
			console.error(e);
			errorToast("Couldn't save your post", "Please try again.");
		}
		setIsSaving(false);
	}

	return (
		<div className="bg-gray-50 font-['Inter'] w-full min-h-screen">
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
				<div className="w-full h-full mt-8 md:mt-8 lg:mt-16">
					<article className="w-full h-full max-w-3xl mx-auto md:px-0">
						<div className="w-full min-w-full px-4 mt-10 prose">
							<div id="editor" className="w-full h-full"></div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
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

function errorToast(title, message) {
	toast.custom((t) => (
		 <div className={`${
			t.visible ? 'animate-enter' : 'animate-leave'
		  } max-w-sm w-full bg-rose-400 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}>
		 <div className="p-4">
		   <div className="flex items-start">
			 <div className="flex-shrink-0">
			   <EmojiSadIcon className="w-6 h-6 text-gray-200" aria-hidden="true" />
			 </div>
			 <div className="ml-3 w-0 flex-1 pt-0.5">
			   <p className="text-sm font-normal text-gray-100">{title}</p>
			   <p className="mt-1 text-sm text-gray-100">{message}</p>
			 </div>
			 <div className="flex flex-shrink-0 ml-4">
			   <button
				 className="inline-flex text-gray-200 rounded-md bg-rose-400 hover:text-gray-100 focus:outline-none"
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
		duration: 6000,
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