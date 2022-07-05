import React from 'react';

const ServerExperience = () => {
	return (
		<div className="relative p-4 px-4 mt-10 sm:px-6 lg:px-8 font-['Exo_2']">
			<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-36 lg:items-center">
				<div className="relative mt-10 -mx-4 overflow-hidden md:-mx-12 lg:mt-0 lg:col-start-2 max-h-[40rem]">
					<img src="/static/servers.webp" alt="Illustration of a server room" className="relative w-auto mx-auto rounded shadow-lg"/>
				</div>
				<div className="mt-8 lg:col-start-1 md:px-28 lg:mt-0">
					<h4 className="text-3xl font-extrabold leading-8 tracking-tight text-white sm:leading-9">
						My experience with general IT and Linux servers
					</h4>
					<ul className="mt-10">
						<li className="transition-all duration-500 hover:translate-x-2">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-6 h-6 bi bi-wrench" viewBox="0 0 16 16">
											<path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h5 className="text-lg font-bold leading-6 text-white">
										Installation
									</h5>
									<p className="mt-2 text-base leading-6 text-gray-300">
										Setting up and installing Linux on your machine has become fairly simple nowadays, but using a command line can sometimes confuse people. I know how a computer works and how to install just about any OS to one.
									</p>
								</div>
							</div>
						</li>
						<li className="mt-10 transition-all duration-500 hover:translate-x-2">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-6 h-6 bi bi-terminal" viewBox="0 0 16 16">
											<path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
											<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h5 className="text-lg font-bold leading-6 text-white">
										<b>CLI</b>
									</h5>
									<p className="mt-2 text-base leading-6 text-gray-300">
										<b className="text-transparent bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">The CLI is a tool</b>,
										and just like any other it takes time and practice to learn the usage of it. I know my way around it and I can use it to my advantage.
									</p>
								</div>
							</div>
						</li>
						<li className="mt-10 transition-all duration-500 hover:translate-x-2">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
										<svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
											<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
											</path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h5 className="text-lg font-bold leading-6 text-white">
										PC experience
									</h5>
									<p className="mt-2 text-base leading-6 text-gray-300">
										Experience with Windows, Linux, MacOS, Android and iOS (at least 1 year of use of each)
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ServerExperience;