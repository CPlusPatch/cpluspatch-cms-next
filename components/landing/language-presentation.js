import React from 'react';
import Image from 'next/future/image';

const skills = [
	{
		text: "PHP, Python, C++, SwiftUI, MySQL"
	},
	{
		text: "HTML, CSS, JavaScript, React, Node.js",
	},
	{
		text: "jQuery, Zepto.js, Bootstrap, Tailwind CSS, Laravel",
	},
	{
		text: "Extensive knowledge of Linux and its innerworkings (setup, usage, CLI, management)"
	},
];

const LanguagePresentation = () => {
	return (
		<div className="relative max-w-screen-xl p-4 px-4 mx-auto mt-6 sm:px-6 lg:px-8 py-26 lg:mt-20 font-['Exo_2']">
			<div className="relative">
				<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
					<div className="ml-auto lg:col-start-2 lg:max-w-2xl">
						<p className="text-xl font-semibold leading-6 text-indigo-500 uppercase">
							Skills
						</p>
						<h4 className="mt-2 text-3xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9 font-bebas-neue">
							Multiple languages and many core design elements
						</h4>
						<p className="mt-4 font-mono text-lg leading-6 text-gray-300">
							I can use many different frameworks and languages, as well as numerous design concepts such as oriented-object programming and proper UI/UX design
						</p>
						<ul className="gap-6 mt-8 font-mono md:grid md:grid-cols-2">
							{skills.map((skill, index) => {
								return (
									<li key={index} className="mt-6 transition-all duration-200 lg:mt-0 hover:scale-105">
										<div className="flex">
											<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-full drark:bg-transparent">
												<svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
													</path>
												</svg>
											</span>
											<span className="ml-4 text-base font-medium leading-6 text-gray-200">
												{skill.text}
											</span>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
					<div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
						<div className="relative space-y-4">
							<div className="flex items-end justify-center space-x-4 lg:justify-start">
								<Image className="w-32 transition-all duration-200 rounded-lg shadow-lg md:w-56 hover:scale-105" width={224} height={224} src="/static/laravel.webp" alt="1"/>
								<Image className="w-40 transition-all duration-200 rounded-lg shadow-lg md:w-64 hover:scale-105" width={260} height={110} src="/static/tailwindcss.jpg" alt="2"/>
							</div>
							<div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
								<Image className="w-24 transition-all duration-200 rounded-lg shadow-lg md:w-40 hover:scale-105" width={160} height={244} src="/static/linux.webp" alt="3"/>
								<Image className="w-32 transition-all duration-200 rounded-lg shadow-lg md:w-56 hover:scale-105" width={232} height={232} src="/static/javascript.webp" alt="4"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LanguagePresentation;