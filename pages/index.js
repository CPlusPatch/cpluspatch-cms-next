import Image from 'next/future/image'
import mainHero from "../public/static/banner.png";
import Navbar from '../components/nav/navbar';
import firebaseLogo from '../public/static/firebase.svg';
import nextJsLogo from '../public/static/nextjs.svg';
import vercelLogo from '../public/static/vercel.svg';
import githubLogo from '../public/static/github.svg';
import tailwindLogo from '../public/static/tailwindcss.svg';
import Head from 'next/head';

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
			<Stats/>
			<ContactHeader/>
		</div>
	);
}

function Stats() {
	return (
		<div className="pt-12 bg-gray-50 sm:pt-16">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						My stats
					</h2>
					<p className="mt-3 text-xl text-gray-500 sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Repellendus repellat laudantium.
					</p>
				</div>
			</div>
			<div className="pb-12 mt-10 bg-white sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 bg-gray-50" />
					<div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto">
							<dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
								<div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
									<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
										Pepperoni
									</dt>
									<dd className="order-1 text-5xl font-extrabold text-indigo-600">
										100%
									</dd>
								</div>
								<div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l sm:border-r">
									<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
										Delivery
									</dt>
									<dd className="order-1 text-5xl font-extrabold text-indigo-600">
										24/7
									</dd>
								</div>
								<div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
									<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
										Calories
									</dt>
									<dd className="order-1 text-5xl font-extrabold text-indigo-600">
										100k
									</dd>
								</div>
							</dl>
						</div>
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