import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'

export default function SlideOver({ open, setOpen, description, setDescription, isPublic, setIsPublic, banner, setBanner }) {

  return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-50 overflow-hidden"
				onClose={setOpen}>
				<div className="absolute inset-0 overflow-hidden">
					<Dialog.Overlay className="absolute inset-0 duration-300 bg-gray-800 backdrop-blur-sm bg-opacity-60" />

					<div className="fixed inset-y-0 right-0 flex max-w-full pl-16">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-200 sm:duration-200"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transform transition ease-in-out duration-200 sm:duration-200"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full">
							<div className="w-screen max-w-md">
								<form className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
									<div className="flex-1 h-0 overflow-y-auto">
										<div className="px-4 py-6 bg-gradient-to-tr from-sky-400 to-blue-700 sm:px-6">
											<div className="flex items-center justify-between">
												<Dialog.Title className="text-lg font-medium text-white font-['Exo_2']">
													Project Settings
												</Dialog.Title>
												<div className="flex items-center ml-3 h-7">
													<button
														type="button"
														className="rounded-md text-indigo-20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
														onClick={() =>
															setOpen(false)
														}>
														<span className="sr-only">
															Close panel
														</span>
														<XIcon
															className="w-6 h-6"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>
										</div>
										<div className="flex flex-col justify-between flex-1">
											<div className="px-4 divide-y divide-gray-200 sm:px-6">
												<div className="pt-6 pb-5 space-y-6">
													<div>
														<label
															htmlFor="description"
															className="block text-sm font-medium text-gray-900">
															Description
														</label>
														<div className="mt-1">
															<textarea
																name="description"
																rows={4}
																className="block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
																defaultValue={description ? description : ""}
																onChange={(e) => setDescription(e.target.value)}
															/>
														</div>
													</div>
													<div>
														<label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
															Banner URL
														</label>
														<div className="mt-1">
														<input
															type="text"
															name="project-name"
															className="block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
															defaultValue={banner ? banner : ""}
															onChange={(e) => setBanner(e.target.value)}
														/>
														</div>
													</div>
													<fieldset>
														<legend className="text-sm font-medium text-gray-900">
															Privacy
														</legend>
														<div className="mt-2 space-y-5">
															<div className="relative flex items-start">
																<div className="absolute flex items-center h-5">
																	<input
																		id="privacy-public"
																		name="privacy"
																		aria-describedby="privacy-public-description"
																		type="radio"
																		className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
																		defaultChecked={isPublic === true}
																		onChange={(e) => {
																			setIsPublic(e.target.value === "on" ? true : false)
																		}}
																	/>
																</div>
																<div className="text-sm pl-7">
																	<label htmlFor="privacy-public" className="font-medium text-gray-900">
																		Public
																	</label>
																	<p id="privacy-public-description" className="text-gray-500">
																		This page will be visible to everyone.
																	</p>
																</div>
															</div>
															<div>
																<div className="relative flex items-start">
																	<div className="absolute flex items-center h-5">
																		<input
																			id="privacy-private-to-project"
																			name="privacy"
																			aria-describedby="privacy-private-to-project-description"
																			type="radio"
																			disabled={true}
																			className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
																		/>
																	</div>
																	<div className="text-sm pl-7">
																		<label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
																			Unlisted
																		</label>
																		<p id="privacy-private-to-project-description" className="text-gray-500">
																			Only people with the link can access (currently disabled)
																		</p>
																	</div>
																</div>
															</div>
															<div>
																<div className="relative flex items-start">
																	<div className="absolute flex items-center h-5">
																		<input
																			id="privacy-private"
																			name="privacy"
																			aria-describedby="privacy-private-to-project-description"
																			type="radio"
																			defaultChecked={isPublic === false}
																			className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
																			onChange={(e) => {
																				setIsPublic(e.target.value === "on" ? false : true)
																			}}
																		/>
																	</div>
																	<div className="text-sm pl-7">
																		<label htmlFor="privacy-private" className="font-medium text-gray-900">
																			Private
																		</label>
																		<p id="privacy-private-description" className="text-gray-500">
																			Only you and admins can see this page
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</fieldset>
												</div>
											</div>
										</div>
									</div>
									<div className="flex justify-end flex-shrink-0 px-4 py-4">
										<button
											type="button"
											className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={() => setOpen(false)}>
											Close
										</button>
									</div>
								</form>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
  );
}