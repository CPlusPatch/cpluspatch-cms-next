import React from "react";

export function ContactHeader() {
	return (
		<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
			<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				<span className="block dark:text-gray-200">Wanna get in touch?</span>
				<span className="block text-indigo-600">
					Let&apos;s have a chat!
				</span>
			</h2>
			<div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
				<div className="inline-flex rounded-md shadow">
					<button
						className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white duration-200 bg-indigo-600 border border-transparent rounded-md hover:scale-105 hover:bg-indigo-700">
						Literally just scroll down
					</button>
				</div>
			</div>
		</div>
	);
}
