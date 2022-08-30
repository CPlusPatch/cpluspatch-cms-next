import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { DocumentTextIcon, CogIcon, BellIcon } from "@heroicons/react/solid";
import { ServerIcon, TrashIcon } from "@heroicons/react/outline";
import { signIn, signOut } from "next-auth/react";
import DarkModeToggle from "../darkmode-toggle";
import SecondaryButton from "../buttons/SecondaryButton";
import WhiteButton from "../buttons/WhiteButton";
import Spinner from "../spinners/Spinner";

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
							<SecondaryButton onClick={() => {
								if (!isSaving) onSave();
							}} size="3" className="items-center w-28">
								{isSaving ? (
									<span className="flex flex-row">
										<Spinner className="w-5 h-5 mr-3 -ml-1 fill-blue-600"/>
										Saving
									</span>
								) : (
									<>
										<ServerIcon className="w-5 h-5 mr-3 -ml-1" />
										Save
									</>
								)}
							</SecondaryButton>
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
									className="block w-full py-2 pl-10 pr-3 leading-5 duration-200 bg-gray-100 border border-gray-300 rounded-md outline-none focus:bg-white hover:bg-white dark:text-slate-300 sm:text-sm"
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
						
						<Menu
							as="div"
							className="relative flex-shrink-0 ml-4">
							<div>
								<Menu.Button className="flex text-sm bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<span className="sr-only">
										Open user menu
									</span>
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

/* function EditorNavbar({
	user,
	onSave,
	isSaving,
	onTitleChange,
	title,
	setSidebarOpen,
}) {
	return (
		<header className="flex items-center justify-between p-3 shadow-sm">
			<span>
				<DocumentTextIcon className="w-auto h-16"/>
			</span>
			<div className="flex-grow">
				<h2>Sus</h2>
				<div className="flex items-center h-8 space-x-1 text-sm text-gray-600">
					<button>Project preferences</button>
				</div>
			</div>
		</header>
	);
} */

export default EditorNavbar;

