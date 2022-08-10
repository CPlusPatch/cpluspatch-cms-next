import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Cookies from "js-cookie";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
	// Enabled == dark mode is ON
  	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const enabled = Cookies.get("theme") === "dark";
		setEnabled(enabled);
	}, []);

  	const toggle = () => {
		setEnabled(!enabled);
		Cookies.set("theme", (!enabled) ? "dark" : "light");
		document.getElementsByTagName("html")[0].classList.toggle("dark");
	}

  return (
		<Switch
			checked={enabled}
			onChange={toggle}
			className={classNames(
				enabled ? "bg-indigo-600" : "bg-yellow-400",
				"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
			)}>
			<span className="sr-only">Use setting</span>
			<span
				className={classNames(
					enabled ? "translate-x-5" : "translate-x-0",
					"pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
				)}>
				<span
					className={classNames(
						enabled
							? "opacity-0 ease-out duration-100"
							: "opacity-100 ease-in duration-200",
						"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
					)}
					aria-hidden="true">
					<SunIcon className="w-3 h-3 text-yellow-400" />
				</span>
				<span
					className={classNames(
						enabled
							? "opacity-100 ease-in duration-200"
							: "opacity-0 ease-out duration-100",
						"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
					)}
					aria-hidden="true">
					<MoonIcon className="w-3 h-3 text-indigo-600" />
				</span>
			</span>
		</Switch>
  );
}