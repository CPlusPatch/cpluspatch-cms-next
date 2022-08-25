import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { DocumentTextIcon, CogIcon, BellIcon } from "@heroicons/react/solid";
import { ServerIcon, TrashIcon } from "@heroicons/react/outline";
import { signIn, signOut } from "next-auth/react";
import DarkModeToggle from "../darkmode-toggle";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function EditorNavbar({
	user,
	onSave,
	isSaving,
	onTitleChange,
	title,
	setSidebarOpen,
}) {
	return (
		<nav className="bg-white darkfalse:bg-slate-900 shadow sticky backdrop-filter backdrop-blur-lg bg-opacity-30 top-0 z-50 font-['Inter']">
			<div className="px-2 mx-auto sm:px-4 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex px-2 lg:px-0">
						<div className="flex items-center flex-shrink-0">
							<button
								onClick={() => {
									if (!isSaving) onSave();
								}}
								type="button"
								className="w-28 h-9 inline-flex justify-center items-center px-3 py-1.5 text-sm font-medium leading-4 text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 darkfalse:bg-indigo-600 darkfalse:hover:bg-indigo-700 darkfalse:text-gray-200 focus:outline-none">
								{isSaving ? (
									<span className="flex flex-row">
										<svg
											role="status"
											className="w-4 h-4 mr-2 text-gray-200 animate-spin darkfalse:text-gray-600 fill-blue-600 darkfalse:fill-gray-200"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>{" "}
										<span className="mb-0.5">
											Saving...
										</span>
									</span>
								) : (
									<>
										<ServerIcon className="w-4 h-4 mr-2" />{" "}
										<span className="mb-0.5">Save</span>
									</>
								)}
							</button>
						</div>
					</div>
					<div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-start">
						<div className="w-full max-w-lg lg:max-w-xs lg:mr-6">
							<label htmlFor="search" className="sr-only">
								Edit title
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<DocumentTextIcon
										className="w-5 h-5 text-gray-400"
										aria-hidden="true"
									/>
								</div>
								<input
									id="titleInput"
									className="block w-full py-2 pl-10 pr-3 leading-5 bg-white border border-gray-300 rounded-md dark:text-slate-300 darkfalse:bg-gray-700 focus:outline-none darkfalse:text-gray-100 darkfalse:border-none sm:text-sm"
									placeholder="Title"
									value={title}
									onChange={(e) =>
										onTitleChange(e.target.value)
									}
								/>
							</div>
						</div>
					</div>
					<div className="hidden gap-3 lg:ml-4 lg:flex lg:items-center">
						<button
							type="button"
							onClick={() => {
								setSidebarOpen(true);
							}}
							className="flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none">
							<span className="sr-only">
								Open project settings
							</span>
							<CogIcon
								className="w-6 h-6"
								aria-hidden="true"
							/>
						</button>
						<button
							type="button"
							disabled={true}
							className="flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none disabled:text-gray-200 disabled:darkfalse:text-gray-700">
							<span className="sr-only">
								Delete project
							</span>
							<TrashIcon
								className="w-6 h-6"
								aria-hidden="true"
							/>
						</button>

						<DarkModeToggle/>

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
										src={user ? user.image : "https://gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
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
								{user ?
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
												onClick={() => signOut()}
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
								</Menu.Items> :
								<Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={() => signIn()}
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
								</Menu.Items>}
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default EditorNavbar;
