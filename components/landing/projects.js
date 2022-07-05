import React from 'react';

const Projects = () => {
	return (
		<div className="relative p-4 px-4 mt-10 sm:px-6 lg:px-8 font-['Exo_2']" id="projects">
			<div className="md:px-28">
				<h4 className="text-3xl font-extrabold leading-8 tracking-tight text-white sm:leading-9">
					Projects
				</h4>
			</div>
			<div className="mt-10 md:grid md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:gap-16 md:px-28">
				{/* <ProjectCard name="CPlusPatch CMS" desc="A quick CMS system to create webpages" icon="/assets/react.webp">
					<div className="w-full my-2 overflow-hidden rounded">
						<img src="https://camo.githubusercontent.com/3249de77606cfa3c6cdd4faf2b350d82c317acd1dbd79383e98e56e03ebd0dbd/68747470733a2f2f692e696d6775722e636f6d2f717a72786a364c2e706e67" alt="CMS Editor" />
					</div>
					<div className="block m-auto">
						<div>
							<span className="inline-block text-sm text-gray-100">
								Basic features : <span className="font-bold text-white">100</span>/100
							</span>
						</div>
						<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
							<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
						</div>
					</div>
					<div className="block m-auto">
						<div>
							<span className="inline-block text-sm text-gray-100">
								Advanced editor functionality : <span className="font-bold text-white">40</span>/100
							</span>
						</div>
						<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
							<div className="w-2/5 h-full text-xs text-center text-white rounded-full bg-gradient-to-l from-yellow-600 to-red-600"></div>
						</div>
					</div>
					<div className="flex items-center justify-start my-4 space-x-4">
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">JAVASCRIPT</span>
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-md">BLOGS</span>
						<a href="https://github.com/CPlusPatch/cpluspatch-cms" className="text-gray-400 transition-colors duration-200 hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
							</svg>
						</a>
					</div>
				</ProjectCard>
			
				<ProjectCard name="cpluspatch.com" desc="My personal website (this page)" icon="/assets/react.webp">
					<div className="w-full my-2 overflow-hidden rounded">
						<img src="/assets/cppweb-banner.webp" alt="Old image of the website" />
					</div>
					<div className="block m-auto">
						<div>
							<span className="inline-block text-sm text-gray-100">
								Website completion : <span className="font-bold text-white">100</span>/100
							</span>
						</div>
						<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
							<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
						</div>
					</div>
					<div className="flex items-center justify-start my-4 space-x-4">
						<span className="flex items-center px-2 py-1 text-xs font-semibold rounded-md text-sky-700 bg-sky-200">TAILWINDCSS</span>
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-pink-700 bg-pink-200 rounded-md">LARAVEL</span>
						<a href="https://github.com/CPlusPatch/cpluspatch-web" className="text-gray-400 transition-colors duration-200 hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
							</svg>
						</a>
					</div>
				</ProjectCard>

				<ProjectCard name="Mini CPlusPatch" desc="A Discord bot for my servers" icon="/assets/discord.webp">
					<div className="w-full my-2 overflow-hidden rounded">
						<img src="/assets/discord-bot-demo.webp" className="w-full" alt="Discord bot goofing around" />
					</div>
					<div className="block m-auto">
						<ul className="text-sm text-gray-100 list-disc list-inside text-bold">
							<li>Reaction roles</li>
							<li>Custom commands</li>
							<li>Goofy responses</li>
							<li>Moderation</li>
							<li><span className="line-through">Music</span> (deprecated)</li>
						</ul>
					</div>
					<div className="flex items-center justify-start my-4 space-x-4">
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">JAVASCRIPT</span>
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-300 rounded-md">DISCORD</span>
						<a href="https://github.com/CPlusPatch/cpluspatch-cms" className="text-gray-400 transition-colors duration-200 hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
							</svg>
						</a>
					</div>
				</ProjectCard>

				<ProjectCard name="Suicide Prevention Bot" desc="A Discord bot to dispend help to those in need" icon="https://spbot.ml/siround.png">
					<div className="w-full my-2 overflow-hidden rounded">
						<img src="/assets/spbot-banner.webp" className="w-full" alt="https://spbot.ml"/>
					</div>
					<div className="block m-auto">
						<div>
							<span className="inline-block text-sm text-gray-100">
								Localisation API : <span className="font-bold text-white">100</span>/100
							</span>
						</div>
						<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
							<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
						</div>

						<div>
							<span className="inline-block text-sm text-gray-100">
								Full functionality : <span className="font-bold text-white">100</span>/100
							</span>
						</div>
						<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
							<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
						</div>
						<div>
							<span className="inline-block text-sm text-gray-100">
								Discord.JS 13 features : <span className="font-bold text-white">100</span>/100
							</span>
						</div>
						<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
							<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
						</div>
					</div>
					<div className="flex items-center justify-start my-4 space-x-4">
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">NODE.JS</span>
						<span className="flex items-center px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-300 rounded-md">DISCORD</span>
						<a href="https://github.com/Bobrobot1/Suicide-Prevention-Bot" className="text-gray-400 transition-colors duration-200 hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
							</svg>
						</a>
						<a href="https://spbot.ml" className="text-gray-400 transition-colors duration-200 hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
								<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
							</svg>
						</a>
					</div>
				</ProjectCard> */}
			</div>
		</div>
	);
}

export default Projects;