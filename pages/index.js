import Image from 'next/future/image'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Head from 'next/head';
import Link from 'next/link';

import mainHero from "../public/static/banner.png";
import Navbar from '../components/nav/navbar';
import firebaseLogo from '../public/static/firebase.svg';
import nextJsLogo from '../public/static/nextjs.svg';
import vercelLogo from '../public/static/vercel.svg';
import githubLogo from '../public/static/github.svg';
import tailwindLogo from '../public/static/tailwindcss.svg';

// Languages & Frameworks images

import javascript from '../public/static/languages/javascript.png';
import react from '../public/static/languages/react.png';
import css from '../public/static/languages/css.png';
import html from '../public/static/languages/html.png';
import firebase from '../public/static/languages/firebase.png';
import nextJs from '../public/static/languages/nextjs.png';
import vercel from '../public/static/languages/vercel.png';
import tailwindcss from '../public/static/languages/tailwindcss.jpg';
import github from '../public/static/languages/github.jpg';
import python from '../public/static/languages/python.png';
import discord from '../public/static/languages/discord.png';
import php from '../public/static/languages/php.png';
import laravel from '../public/static/languages/laravel.png';
import git from '../public/static/languages/git.png';
import jquery from '../public/static/languages/jquery.png';
import npm from '../public/static/languages/npm.webp';
import Footer from '../components/footer/footer';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const languages = [
	{
		name: 'JavaScript',
		type: 'Language',
		description: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is often abbreviated as JS, and is often called ECMAScript. It has been standardized in the ECMAScript specification.',
		experience: "Five years",
		image: javascript,
	},
	{
		name: 'React',
		type: 'Framework',
		description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
		experience: "One year",
		image: react,
	},
	{
		name: 'CSS',
		type: 'Language',
		description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web.',
		experience: "Five years",
		image: css,
	},
	{
		name: 'HTML',
		type: 'Language',
		description: 'HTML is the standard markup language for creating Web pages. HTML elements are the building blocks of HTML pages. HTML pages can be created by combining HTML elements to create visually rich, formatted pages.',
		experience: "Five years",
		image: html,
	},
	{
		name: 'Firebase',
		type: 'Framework',
		description: 'Firebase is a cloud-based mobile and web app platform designed to help developers build apps faster. It is based on Google\'s JavaScript engine, AngularJS, and Google\'s open source cloud database, Firebase Realtime Database.',
		experience: "One year",
		image: firebase,
	},
	{
		name: 'Node.js',
		type: 'Runtime',
		description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code server-side. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.',
		experience: "Three years",
		image: npm,
	},
	{
		name: "Next.js",
		type: "Framework",
		description: "Next.js is a React framework for server-rendered applications. It is based on React and uses React Router to handle client-side routing. It is widely used for its performance and SEO benefits.",
		experience: "A few months",
		image: nextJs,
	},
	{
		name: "Vercel",
		type: "Framework",
		description: "Vercel is a cloud platform for building and deploying websites. It is widely used for development because of its fast and secure CI/CD pipeline.",
		experience: "A few months",
		image: vercel,
	},
	{
		name: "TailwindCSS",
		type: "Framework",
		description: "Tailwind CSS is a utility-first CSS framework for rapid UI development. It is designed for use with React and React Native.",
		experience: "One year",
		image: tailwindcss,
	},
	{
		name: "Github",
		type: "Tool",
		description: "Github is a web-based Git repository hosting service, used for version control and code collaboration. It is developed by GitHub, Inc. (owned by Microsoft)",
		experience: "Four years",
		image: github,
	},
	{
		name: "Python",
		type: "Language",
		description: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
		experience: "Six years",
		image: python,
	},
	{
		name: "Discord.js",
		type: "Framework",
		description: "Discord.js is a JavaScript library for building rich and interactive chat applications. It is based on the Discord API and uses websockets to communicate with the Discord servers.",
		experience: "One year",
		image: discord,
	},
	{
		name: "PHP",
		type: "Language",
		description: "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. PHP is a popular general-purpose programming language originally created by Rasmus Lerdorf in 1994.",
		experience: "Four years",
		image: php,
	},
	{
		name: "Laravel",
		type: "Framework",
		description: "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.",
		experience: "Three years",
		image: laravel,
	},
	{
		name: "Git",
		type: "Tool",
		description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
		experience: "Four years",
		image: git,
	},
	{
		name: "JQuery",
		type: "Framework",
		description: "JQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy to use API that works across a multitude of browsers.",
		experience: "Four years",
		image: jquery,
	},
];

const faqs = [
	{
		question: "How did you learn to code?",
		answer: <>
			I&apos;m a self taught developer, which means I learnt everything I know by being curious and reading docs. I started with Python, HTML and CSS and then moved on to JavaScript.
			<br/><br/>
			After that, I went on to use PHP + MySQL, which led me to Laravel: I then learnt how to use React + Firebase, which led me to Next.js. In the process, I learnt how to use Git, and how to use JQuery. I also got sick of Bootstrap along the way and found out about TailwindCSS, which I use on everything nowadays
		</>,
	},
	{
		question: "What's your favorite language + framework combination?",
		answer: "Definitely Next.js + TailwindCSS + Firebase, plus Node for backends.",
	},
	{
		question: "What's your favorite IDE?",
		answer: "Visual Studio Code is by far the best IDE I have used. It supports every language and framework thanks to extensions, and it has a great UI.",
	},
	{
		question: "What do you do for a living?",
		answer: "I'm currently a student coding as a side hobby, and learning new things along the way!"
	},
	{
		question: "What advice would you give to new developers?",
		answer: "Definitely give Firebase a shot, and try to learn as much as you can. Being able to use GitHub's CI/CD pipeline efficiently is a skill that I think every developer should have: and remember, when you have an issue, the community is always here to help."
	},
	{
		question: "What's your favorite way to learn?",
		answer: "I like to learn by doing, so basically thinking of a project and reading docs or guides until I figure it out.",
	},
];

export default function Landing() {
	return (
		<div className="bg-gray-50 font-['Exo_2']">
			<Head>
				<title>Welcome! &middot; CPlusPatch 2022</title>
			</Head>
			<Navbar />
			<div className="relative overflow-hidden">
				<div
					className="absolute inset-y-0 w-full h-full"
					aria-hidden="true">
					<div className="relative h-full">
						<svg
							className="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
							width={404}
							height={584}
							fill="none"
							viewBox="0 0 404 184">
							<defs>
								<pattern
									id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse">
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={284}
								fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
							/>
						</svg>
						<svg
							className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
							width={404}
							height={784}
							fill="none"
							viewBox="0 0 404 784">
							<defs>
								<pattern
									id="d2a68204-c383-44b1-b99f-42ccff4e5365"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse">
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={784}
								fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
							/>
						</svg>
					</div>
				</div>

				<div className="relative pb-16 sm:pb-24">
					<div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 font-['Exo_2']">
						<div className="text-left">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block">Hey,</span>
								<span className="block text-transparent bg-gradient-to-tl from-rose-700 to-pink-600 dark:from-fuchsia-500 dark:via-red-600 dark:to-orange-400 bg-clip-text">
									I&apos;m CPlusPatch
								</span>
							</h1>
							<p className="max-w-md mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
								Hey there, I&apos;m a teenager with a passion for building things.<br/>
								I&apos;m currently proficient in building web applications and deploying servers.
							</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div
						className="absolute inset-0 flex flex-col"
						aria-hidden="true">
						<div className="flex-1" />
						<div className="flex-1 w-full bg-gray-800" />
					</div>
					<div className="px-4 mx-auto max-w-7xl sm:px-6">
						<Image
							className="relative rounded-lg shadow-lg"
							src={mainHero}
							alt="VSCode screenshot"
							priority="true"
							placeholder='blur'
						/>
					</div>
				</div>
			</div>
			<div className="bg-gray-800">
				<div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
					<h2 className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
						Tech I use most
					</h2>
					<div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-6 lg:grid-cols-5">
						<div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
							<Image
								className="h-12"
								src={firebaseLogo}
								alt="Google Firebase"
							/>
						</div>
						<div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
							<Image
								className="h-16"
								src={nextJsLogo}
								alt="Next.js"
							/>
						</div>
						<div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
							<Image
								className="h-10"
								src={vercelLogo}
								alt="Vercel"
							/>
						</div>
						<div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
							<Image
								className="h-6"
								src={githubLogo}
								alt="GitHub"
								width={88}
								height={24}
							/>
						</div>
						<div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
							<Image
								className="h-7"
								src={tailwindLogo}
								alt="TailwindCSS"
							/>
						</div>
					</div>
				</div>
			</div>
			<Languages/>
			<Faqs/>
			<ContactHeader/>
			<Footer/>
		</div>
	);
}

function Languages() {
	return (
		<div className="bg-white">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
					<div className="space-y-5 sm:space-y-4">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Languages & Frameworks</h2>
						<p className="text-xl text-gray-500">
							My experience with several different programming languages, frameworks, and libraries.
							Skill in any may vary from project to project.
						</p>
					</div>
					<div className="lg:col-span-2">
						<ul role="list"
							className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
							{languages.map((item) => (
							<li key={item.name} className="sm:py-8">
								<div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
									<div className="aspect-1">
										<Image className="object-cover rounded-lg shadow-lg" src={item.image} alt="" />
									</div>
									<div className="sm:col-span-2">
										<div className="space-y-4">
											<div className="space-y-1 text-lg font-medium leading-6">
												<h3>{item.name}</h3>
												<p>
													<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        												{item.type}
      												</span>
												</p>
												<p className="text-indigo-600">{item.experience}</p>
												
											</div>
											<div className="text-lg">
												<p className="text-gray-500">{item.description}</p>
											</div>
										</div>
									</div>
								</div>
							</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

function Faqs() {
	return (
		<div className="bg-gray-50">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
						Frequently asked questions
					</h2>
					<dl className="mt-6 space-y-6 divide-y divide-gray-200">
						{faqs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6">
								{({ open }) => (
									<>
										<dt className="text-lg">
											<Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
												<span className="font-medium text-gray-900">
													{faq.question}
												</span>
												<span className="flex items-center ml-6 h-7">
													<ChevronDownIcon
														className={classNames(
															open
																? "-rotate-180"
																: "rotate-0",
															"h-6 w-6 transform"
														)}
														aria-hidden="true"
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="pr-12 mt-2">
											<p className="text-base text-gray-500">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}

function ContactHeader() {
	return (
		<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
			<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				<span className="block">Wanna get in touch?</span>
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