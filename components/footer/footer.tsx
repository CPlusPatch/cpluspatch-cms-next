import React from 'react';
import { Github, Discord, Envelope, Mastodon, StackOverflow} from "react-bootstrap-icons";
import branding from "../../config/branding.json";
  
const socials = [
	{
		name: "GitHub",
		href: "https://github.com/CPlusPatch",
		icon: <Github className="w-6 h-6" aria-hidden="true" />,
	},
	{
		name: "Discord",
		href: "https://discord.gg/TU5cCS6EpP",
		icon: <Discord className="w-6 h-6" aria-hidden="true" />,
	},
	{
		name: "E-mail",
		href: "mailto:contact@cpluspatch.com",
		icon: <Envelope className="w-6 h-6" aria-hidden="true" />,
	},
	{
		name: "Mastodon",
		href: "https://social.linux.pizza/web/@CPlusPatch",
		icon: <Mastodon className="w-6 h-6" aria-hidden="true" />,
	},
	{
		name: "StackOverflow",
		href: "https://stackoverflow.com/users/12187615/cpluspatch",
		icon: <StackOverflow className="w-6 h-6" aria-hidden="true" />,
	},
	{
		name: "Matrix",
		href: "https://matrix.to/#/@cpluspatch:matrix.org",
		icon: (
			<svg
				version="1.1"
				viewBox="0 0 27.9 32"
				xmlns="http://www.w3.org/2000/svg"
				className="w-6 h-6"
				aria-hidden="true">
				<g transform="translate(-.095 .005)" fill="currentColor">
					<path d="m27.1 31.2v-30.5h-2.19v-0.732h3.04v32h-3.04v-0.732z" />
					<path d="m8.23 10.4v1.54h0.044c0.385-0.564 0.893-1.03 1.49-1.37 0.58-0.323 1.25-0.485 1.99-0.485 0.72 0 1.38 0.14 1.97 0.42 0.595 0.279 1.05 0.771 1.36 1.48 0.338-0.5 0.796-0.941 1.38-1.32 0.58-0.383 1.27-0.574 2.06-0.574 0.602 0 1.16 0.074 1.67 0.22 0.514 0.148 0.954 0.383 1.32 0.707 0.366 0.323 0.653 0.746 0.859 1.27 0.205 0.522 0.308 1.15 0.308 1.89v7.63h-3.13v-6.46c0-0.383-0.015-0.743-0.044-1.08-0.0209-0.307-0.103-0.607-0.242-0.882-0.133-0.251-0.336-0.458-0.584-0.596-0.257-0.146-0.606-0.22-1.05-0.22-0.44 0-0.796 0.085-1.07 0.253-0.272 0.17-0.485 0.39-0.639 0.662-0.159 0.287-0.264 0.602-0.308 0.927-0.052 0.347-0.078 0.697-0.078 1.05v6.35h-3.13v-6.4c0-0.338-7e-3 -0.673-0.021-1-0.0114-0.314-0.0749-0.623-0.188-0.916-0.108-0.277-0.3-0.512-0.55-0.673-0.258-0.168-0.636-0.253-1.14-0.253-0.198 0.0083-0.394 0.042-0.584 0.1-0.258 0.0745-0.498 0.202-0.705 0.374-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.36v6.62h-3.13v-11.4z" />
					<path d="m0.936 0.732v30.5h2.19v0.732h-3.04v-32h3.03v0.732z" />
				</g>
			</svg>
		),
	},
];
  
const Footer = () => {
	return (
		<footer className="">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div
					id="socials"
					className="flex justify-center space-x-6 md:order-2 focus:ring-1 ring-blue-500">
					{socials.map((item) => {
						return (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">{item.name}</span>
								{item.icon}
							</a>
						);
					})}
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-base text-center text-gray-400">
						&copy; {new Date().getFullYear()} {branding.authorName}.
						All rights reserved.
					</p>
				</div>
			</div>
			<a rel="me" className="sr-only" href="https://social.linux.pizza/@CPlusPatch">link for mastodon verification</a>
		</footer>
	);
}

export default Footer;