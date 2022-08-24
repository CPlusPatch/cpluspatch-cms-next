import React from 'react';
import branding from "../../config/branding.json";
import * as icons from "react-bootstrap-icons";
  
const Footer = () => {
	return (
		<footer className="">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div id="socials" className="flex justify-center space-x-6 md:order-2 focus:ring-1 ring-blue-500">
					{branding.socials.map((item) => {
						const Logo = icons[item.icon]
						return (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">{item.name}</span>
								<Logo className="w-6 h-6" aria-hidden="true" />
							</a>
						)})}
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-base text-center text-gray-400">
						&copy; {new Date().getFullYear()} {branding.authorName}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;