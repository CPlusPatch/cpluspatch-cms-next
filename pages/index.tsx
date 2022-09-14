import React from "react";
import Image from 'next/future/image'
import Head from 'next/head';
import firestore from "../utils/firestore";
import Navbar from '../components/nav/navbar';
import nl2br from "react-nl2br";
import Footer from '../components/footer/footer';

import branding from "../config/branding.json";

import mainHero from "../public/static/banner.png";
import firebaseLogo from '../public/static/firebase.svg';
import nextJsLogo from '../public/static/nextjs.svg';
import vercelLogo from '../public/static/vercel.svg';
import githubLogo from '../public/static/github.svg';
import tailwindLogo from '../public/static/tailwindcss.svg';
import { Languages } from "../components/landing/Languages";
import { Faqs } from "../components/landing/Faqs";
import { ContactHeader } from "../components/landing/ContactHeader";
import CyberButton from "../components/buttons/CyberButton";

export function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Landing({ user }) {
	return (
		<div className="bg-gray-50 dark:bg-[#020918] font-exo duration-200">
			<Head>
				<title>Welcome! &middot; {branding.authorUsername}</title>
			</Head>
			<Navbar user={user}/>
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
					<div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6 font-exo">
						<div className="text-left">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl">
								<span className="block">Hey,</span>
								<span className="block text-transparent bg-gradient-to-tl from-rose-700 to-pink-600 dark:from-fuchsia-500 dark:via-red-600 dark:to-orange-400 bg-clip-text">
									I&apos;m {branding.authorUsername}
								</span>
							</h1>
							<p className="max-w-md mt-3 text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
								{nl2br(branding.frontPage.description)}
							</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div
						className="absolute inset-0 flex flex-col"
						aria-hidden="true">
						<div className="flex-1" />
						<div className="flex-1 w-full bg-gray-800 dark:bg-gray-900" />
					</div>
					<div className="relative px-4 mx-auto max-w-7xl sm:px-6">
						<Image
							className="rounded-lg shadow-lg"
							src={mainHero}
							alt="VSCode screenshot"
							priority={true}
							placeholder='blur'
							sizes='(max-width: 400px) 350px, (max-width: 550px) 500px, (max-width: 600px) 550px, (max-width: 700px) 600px, (max-width: 1000px) 900px, (max-width: 1200px) 1100px, 1920px'
						/>
					</div>
				</div>
			</div>
			<div className="bg-gray-800 dark:bg-gray-900">
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
			<Footer/>
		</div>
	);
}

export const getServerSideProps = async ({ req, res }) => {
	const session = await firestore.getCurrentUser(req, res);
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=300, stale-while-revalidate=150'
	)
	
	return {
		props: {
			user: session ? session.user : false,
		}
	};
}