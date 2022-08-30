function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function WhiteButton({ onClick, size, className, children }) {
	switch (size) {
		case "1":
			var classes = classNames(className, "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "2":
			var classes = classNames(className, "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "3":
			var classes = classNames(className, "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "4":
			var classes = classNames(className, "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "5":
			var classes = classNames(className, "inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
	}
	
	return(
		<button
			type="button"
			className={classes}
			onClick={onClick}>
			{children}
		</button>
	)
  }