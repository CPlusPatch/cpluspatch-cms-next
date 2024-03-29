import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import DarkModeToggle from "../darkmode-toggle";
import { NavbarOptions, User } from "../../types/types";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Navbar({
	user,
	options = {
		showSearchBar: true,
	},
}: {
	user: User;
	options?: NavbarOptions;
}) {
	return (
		<Disclosure
			as="nav"
			className="bg-white shadow-md border-t-2 border-t-gray-100 sticky backdrop-filter backdrop-blur-lg bg-opacity-30 top-6 m-6 rounded-md z-50 font-['Exo_2']">
			{({ open }) => (
				<>
					<div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex px-2 lg:px-0">
								<Link href={"/"} prefetch={false}>
									<a className="flex items-center flex-shrink-0 darkfalse:text-gray-200">
										<h2 className="block w-auto text-lg font-black lg:hidden">
											CPP
										</h2>
										<h2 className="hidden w-auto text-lg font-black tracking-normal lg:block text-brand-primary">
											<span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px] text-black">
												CPLUSPATCH
											</span>
										</h2>
									</a>
								</Link>
								<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									<Link href={"/#socials"} prefetch={false}>
										<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
											Contact
										</a>
									</Link>
									<Link href={"/blog"} prefetch={false}>
										<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">
											Blog
										</a>
									</Link>
								</div>
							</div>
							<div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
								<>
									{options.buttons && options.buttons}
									{options.showSearchBar == true && (
										<div className="w-full max-w-lg lg:max-w-xs">
											<label
												htmlFor="search"
												className="sr-only">
												Search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<MagnifyingGlassIcon
														className="w-5 h-5 text-gray-400"
														aria-hidden="true"
													/>
												</div>
												<input
													id="search"
													name="search"
													className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md darkfalse:bg-gray-800 darkfalse:border-gray-900 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													placeholder="Search"
													type="search"
													disabled
												/>
											</div>
										</div>
									)}
								</>
							</div>
							<div className="flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block w-6 h-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block w-6 h-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:ml-4 lg:flex lg:items-center">
								{/* <DarkModeToggle />
								 */}
								{/* Profile dropdown */}

								<Menu
									as="div"
									className="relative flex-shrink-0 ml-4">
									<div>
										<Menu.Button className="flex text-sm bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
											<span className="sr-only">
												Open user menu
											</span>
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												className="w-8 h-8 rounded-md"
												src={
													user
														? user.image
														: "https://gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
												}
												alt=""
												width={32}
												height={32}
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
										{user ? (
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
														<button
															onClick={() =>
																signOut()
															}
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"block px-4 py-2 text-sm text-gray-700 w-full text-left"
															)}>
															Sign out
														</button>
													)}
												</Menu.Item>
											</Menu.Items>
										) : (
											<Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<button
															onClick={() =>
																signIn()
															}
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"block px-4 py-2 text-sm text-gray-700 w-full text-left"
															)}>
															Sign in
														</button>
													)}
												</Menu.Item>
											</Menu.Items>
										)}
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
								href="/#socials"
								className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50">
								Contact
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="/blog"
								className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
								Blog
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export default Navbar;
