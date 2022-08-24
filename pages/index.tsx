import React, { useCallback, useState, useEffect } from "react";
import Image from 'next/future/image'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Head from 'next/head';
import firestore from "../utils/firestore";
import Navbar from '../components/nav/navbar';
import type { GetServerSideProps } from 'next';
import useEmblaCarousel from 'embla-carousel-react';
import nl2br from "react-nl2br";

import branding from "../config/branding.json";

import mainHero from "../public/static/banner.png";
import firebaseLogo from '../public/static/firebase.svg';
import nextJsLogo from '../public/static/nextjs.svg';
import vercelLogo from '../public/static/vercel.svg';
import githubLogo from '../public/static/github.svg';
import tailwindLogo from '../public/static/tailwindcss.svg';

import Footer from '../components/footer/footer';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Landing({ user }) {
	return (
		<div className="bg-gray-50 dark:bg-[#020918] font-['Exo_2'] duration-200">
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
					<div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 font-['Exo_2']">
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
			<ContactHeader/>
			<Footer/>
		</div>
	);
}

function Languages() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi]);
	const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext()  }, [emblaApi]);

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	const onScroll = useCallback(() => {
		if (!emblaApi) return;
		const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
		setScrollProgress(progress * 100);
	}, [emblaApi, setScrollProgress]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		onScroll();
		emblaApi.on("select", onSelect);
		emblaApi.on("scroll", onScroll);
	}, [emblaApi, onSelect, onScroll]);
	
	return (
		<div className="">
			<div className="px-4 pt-12 pb-5 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pt-24 lg:pb-10">
				<div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
					<div className="space-y-5 sm:space-y-4">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-200">Languages & Frameworks</h2>
						<p className="text-xl text-gray-500 dark:text-gray-300">
							My experience with several different programming languages, frameworks, and libraries.
							Skill in any may vary from project to project.
						</p>
					</div>
					<div className="overflow-hidden lg:col-span-2">
						<div ref={emblaRef}>
							<ul role="list"
								className="flex space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0" >
								{branding.languages.map((item) => (
								<li key={item.name} className="sm:py-8" style={{flex: "0 0 100%"}}>
									<div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
										<div className="flex items-center justify-center">
											<Image
												className="object-cover w-3/5 rounded-lg shadow-lg md:w-full aspect-1"
												src={require("../public/static/" + item.image).default}
												alt=""
												placeholder='blur'
												sizes='(max-width: 100px) 50px, (max-width: 200px) 150px, (max-width: 300px) 250px, 400px'
											/>
										</div>
										<div className="sm:col-span-2">
											<div className="space-y-4">
												<div className="space-y-1 text-lg font-medium leading-6">
													<h3 className="dark:text-gray-200">{item.name}</h3>
													<p>
														<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
															{item.type}
														</span>
													</p>
													<p className="text-indigo-600">{item.experience}</p>
													
												</div>
												<div className="text-lg">
													<p className="text-gray-500 dark:text-gray-300">{item.description}</p>
												</div>
											</div>
										</div>
									</div>
								</li>
								))}
							</ul>
						</div>
						<div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
							<div className="bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 h-2.5 rounded-sm" style={{ width: `${scrollProgress}%` }}></div>
						</div>
						<div className="flex justify-end mt-2">
							<button disabled={!prevBtnEnabled} className="inline-flex items-center m-2 px-2.5 py-2.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none" onClick={scrollPrev}>
								<span className="sr-only">Previous</span>
								<ChevronLeftIcon className="w-5 h-5" aria-hidden="true"/>
							</button>
							<button disabled={!nextBtnEnabled} className="inline-flex items-center m-2 px-2.5 py-2.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none" onClick={scrollNext}>
								<span className="sr-only">Next</span>
								<ChevronRightIcon className="w-5 h-5" aria-hidden="true"/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Faqs() {
	return (
		<div className="">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-200 sm:text-4xl">
						Frequently asked questions
					</h2>
					<dl className="mt-6 space-y-6 divide-y divide-gray-200">
						{branding.faq.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6">
								{({ open }) => (
									<>
										<dt className="text-lg">
											<Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
												<span className="font-medium text-gray-900 dark:text-gray-300">
													{nl2br(faq.question)}
												</span>
												<span className="flex items-center ml-6 h-7">
													<ChevronDownIcon
														className={classNames(
															open
																? "-rotate-180"
																: "rotate-0",
															"h-6 w-6 transform duration-300 ease-in-out"
														)}
														aria-hidden="true"
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel
												as="dd"
												className="pr-12 mt-2">
												<p className="text-base text-gray-500 dark:text-gray-400">
													{nl2br(faq.answer)}
												</p>
											</Disclosure.Panel>
										</Transition>
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
				<span className="block dark:text-gray-200">Wanna get in touch?</span>
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
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