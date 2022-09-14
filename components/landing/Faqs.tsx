import React from "react";
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import nl2br from "react-nl2br";
import branding from "../../config/branding.json";
import { classNames } from "../../pages/index";

export function Faqs() {
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
														aria-hidden="true" />
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
