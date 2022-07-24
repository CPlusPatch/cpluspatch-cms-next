import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from "next/future/image";
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
		<Disclosure
			as="nav"
			className="bg-white shadow sticky backdrop-filter backdrop-blur-lg bg-opacity-30 top-0 z-50 font-['Exo_2']">
			{({ open }) => (
				<>
					<div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex px-2 lg:px-0">
								<div className="flex items-center flex-shrink-0">
									<h2 className="block w-auto text-lg font-black lg:hidden">
										CPP
									</h2>
									<h2 className="hidden w-auto text-lg font-black tracking-normal lg:block text-brand-primary">
										<span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]">
											CPLUSPATCH
										</span>
									</h2>
								</div>
								<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									<Link href={"/blog"}>
										<a
											href="#"
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
											Blog
										</a>
									</Link>
									<a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
										Projects
									</a>
									<a
										href="#"
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
										About
									</a>
									<Link href={"/contact"}>
										<a
											href="#"
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
											Contact
										</a>
									</Link>
								</div>
							</div>
							<div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
								<div className="w-full max-w-lg lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Search
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<SearchIcon
												className="w-5 h-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											placeholder="Search"
											type="search"
										/>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XIcon
											className="block w-6 h-6"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block w-6 h-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:ml-4 lg:flex lg:items-center">
								<button
									type="button"
									className="flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<span className="sr-only">
										View notifications
									</span>
									<BellIcon
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</button>

								{/* Profile dropdown */}
								<Menu
									as="div"
									className="relative flex-shrink-0 ml-4">
									<div>
										<Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
											<span className="sr-only">
												Open user menu
											</span>
											<Image
												className="w-8 h-8 rounded-full"
												src="/static/logo.jpg"
												alt=""
												width={32}
												height={32}
												quality={100}
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95">
										<Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="pt-2 pb-3 space-y-1">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50">
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
								Calendar
							</Disclosure.Button>
						</div>
						<div className="pt-4 pb-3 border-t border-gray-200">
							<div className="flex items-center px-4">
								<div className="flex-shrink-0">
									<img
										className="w-10 h-10 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-gray-800">
										Tom Cook
									</div>
									<div className="text-sm font-medium text-gray-500">
										tom@example.com
									</div>
								</div>
								<button
									type="button"
									className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<span className="sr-only">
										View notifications
									</span>
									<BellIcon
										className="w-6 h-6"
										aria-hidden="true"
									/>
								</button>
							</div>
							<div className="mt-3 space-y-1">
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
									Your Profile
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
									Sign out
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
  );
}