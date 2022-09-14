import React from 'react';
import { Github, Discord, Envelope, Mastodon, StackOverflow} from "react-bootstrap-icons";
import branding from "../../config/branding.json";
  
const socials = [
	{
		name: "GitHub",
		href: "https://github.com/CPlusPatch",
		icon: Github,
	},
	{
		name: "Discord",
		href: "https://discord.gg/TU5cCS6EpP",
		icon: Discord,
	},
	{
		name: "E-mail",
		href: "mailto:contact@cpluspatch.com",
		icon: Envelope,
	},
	{
		name: "Mastodon",
		href: "https://social.linux.pizza/web/@CPlusPatch",
		icon: Mastodon,
	},
	{
		name: "StackOverflow",
		href: "https://stackoverflow.com/users/12187615/cpluspatch",
		icon: StackOverflow,
	},
];
  
const Footer = () => {
	return (
		<footer className="">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div id="socials" className="flex justify-center space-x-6 md:order-2 focus:ring-1 ring-blue-500">
					{socials.map((item) => {
						return (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">{item.name}</span>
								<item.icon className="w-6 h-6" aria-hidden="true" />
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