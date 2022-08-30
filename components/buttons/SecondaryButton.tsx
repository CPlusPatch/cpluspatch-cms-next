function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function SecondaryButton({ onClick, size, className, children }) {
	switch (size) {
		case "1":
			var classes = classNames(className, "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "2":
			var classes = classNames(className, "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "3":
			var classes = classNames(className, "inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "4":
			var classes = classNames(className, "inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
			break;
		case "5":
			var classes = classNames(className, "inline-flex items-center px-6 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
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