import Image from 'next/future/image'
import mainHero from "../public/static/banner.png";
import Navbar from '../components/nav/navbar';
import firebaseLogo from '../public/static/firebase.svg';
import nextJsLogo from '../public/static/nextjs.svg';
import vercelLogo from '../public/static/vercel.svg';
import githubLogo from '../public/static/github.svg';
import tailwindLogo from '../public/static/tailwindcss.svg';
import Head from 'next/head';

// Languages & Frameworks images

import javascript from '../public/static/languages/javascript.png';

const languages = [
	{
		name: 'JavaScript',
		type: 'Language',
		description: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is often abbreviated as JS, and is often called ECMAScript. It has been standardized in the ECMAScript specification.',
		experience: "Five years",
		image: javascript,
	},
]

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
			<ContactHeader/>
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
										<Image className="object-cover rounded-lg shadow-lg" src={item.image} width={250} height={250} alt="" />
									</div>Ad
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
											{/* <ul role="list" className="flex space-x-5">
												<li>
													<a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
														<span className="sr-only">Twitter</span>
														<svg className="w-5 h-5" aria-hidden="true" fill="currentColor"
															viewBox="0 0 20 20">
															<path
																d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
														</svg>
													</a>
												</li>
												<li>
													<a href={person.linkedinUrl}
														className="text-gray-400 hover:text-gray-500">
														<span className="sr-only">LinkedIn</span>
														<svg className="w-5 h-5" aria-hidden="true" fill="currentColor"
															viewBox="0 0 20 20">
															<path fillRule="evenodd"
																d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
																clipRule="evenodd" />
														</svg>
													</a>
												</li>
											</ul> */}
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
					<a
						href="#"
						className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white duration-200 bg-indigo-600 border border-transparent rounded-md hover:scale-105 hover:bg-indigo-700">
						Contact me
					</a>
				</div>
			</div>
		</div>
	);
}