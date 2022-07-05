import React from 'react';
import Image from "next/future/image";

const Splash = () => {
	return (
		<div className="relative z-20 flex items-center overflow-hidden font-['Exo_2']">
			<div className="container relative flex px-6 py-16 mx-auto">
				<div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
					<span className="w-20 h-2 mb-12 bg-white">
					</span>
					<div id="main-title" className="inline text-5xl font-black leading-none text-white uppercase sm:text-8xl">
						<h1 className="text-transparent bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">CPlusPatch</h1>
						<spahn className="text-4xl sm:text-7xl">
							Web dev and gaming
						</spahn>
					</div>
					<p className="mt-8 font-mono text-sm text-white sm:text-base">
						Official page for my projects and stuff
					</p>
					<div className="flex flex-wrap gap-4 mt-8">
						<a href="#projects"
							className="px-4 py-2 text-white uppercase transition-all duration-200 bg-transparent border-2 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white text-md hover:scale-105">
							Check out my stuff
						</a>
						
						<a href="#footer"
							className="px-4 py-2 text-white uppercase transition-all duration-200 bg-transparent border-2 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white text-md hover:scale-105">
							My socials
						</a>
					</div>
				</div>
				<div className="relative hidden lg:block sm:w-1/3 lg:w-3/5">
					<Image alt="MacBook hero" src="/static/macbook-hero.webp" width={524} height={496} className="m-auto translate-x-56 h-[31rem]" />
				</div>
			</div>

		</div>
	);
}

export default Splash;