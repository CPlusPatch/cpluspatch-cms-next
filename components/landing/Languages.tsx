import React, { useCallback, useState, useEffect } from "react";
import Image from 'next/future/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import useEmblaCarousel from 'embla-carousel-react';
import branding from "../../config/branding.json";

export function Languages() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	const scrollPrev = useCallback(() => {
		if (emblaApi)
			emblaApi.scrollPrev();
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		if (emblaApi)
			emblaApi.scrollNext();
	}, [emblaApi]);

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi)
			return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	const onScroll = useCallback(() => {
		if (!emblaApi)
			return;
		const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
		setScrollProgress(progress * 100);
	}, [emblaApi, setScrollProgress]);

	useEffect(() => {
		if (!emblaApi)
			return;
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
								className="flex space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
								{branding.languages.map((item) => (
									<li key={item.name} className="sm:py-8" style={{ flex: "0 0 100%" }}>
										<div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
											<div className="flex items-center justify-center">
												<Image
													className="object-cover w-3/5 rounded-lg shadow-lg md:w-full aspect-1"
													src={require("../../public/static/" + item.image).default}
													alt=""
													placeholder='blur'
													sizes='(max-width: 100px) 50px, (max-width: 200px) 150px, (max-width: 300px) 250px, 400px' />
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
								<ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
							</button>
							<button disabled={!nextBtnEnabled} className="inline-flex items-center m-2 px-2.5 py-2.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none" onClick={scrollNext}>
								<span className="sr-only">Next</span>
								<ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
