import {
	TextCenter,
	TextLeft,
	TextRight,
	TypeBold,
	TypeItalic,
	TypeUnderline,
} from "react-bootstrap-icons";

export function Toolbar({ editor }) {
	return (
		<div
			role="toolbar"
			aria-orientation="horizontal"
			dir="ltr"
			className="flex space-x-4 rounded-lg px-2.5 py-2 "
			tabIndex={0}
			data-orientation="horizontal">
			<div
				role="group"
				dir="ltr"
				data-orientation="horizontal"
				aria-label="Font settings">
				<FontStyleButton editor={editor}>
					<TypeBold className="w-5 h-5 text-gray-700 dark:text-gray-100" />
				</FontStyleButton>
				<FontStyleButton editor={editor}>
					<TypeItalic className="w-5 h-5 text-gray-700 dark:text-gray-100" />
				</FontStyleButton>
				<FontStyleButton editor={editor}>
					<TypeUnderline className="w-5 h-5 text-gray-700 dark:text-gray-100" />
				</FontStyleButton>
			</div>
			<div
				role="group"
				dir="ltr"
				data-orientation="horizontal"
				aria-label="Text settings">
				<TextAlignmentButton>
					<TextLeft className="w-5 h-5 text-gray-700 dark:text-gray-100" />
				</TextAlignmentButton>
				<TextAlignmentButton>
					<TextCenter className="w-5 h-5 text-gray-700 dark:text-gray-100" />
				</TextAlignmentButton>
				<TextAlignmentButton>
					<TextRight className="w-5 h-5 text-gray-700 dark:text-gray-100" />
				</TextAlignmentButton>
			</div>
			<div
				data-orientation="vertical"
				aria-orientation="vertical"
				role="separator"
				className="mx-4 my-0.5 hidden h-auto w-px dark:bg-gray-600 xl:flex"></div>
			<span className="items-center hidden pr-2 xl:flex">
				<span
					className="text-sm text-gray-500 dark:text-gray-400 focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
					tabIndex={-1}
					data-orientation="horizontal">
					Edited 2 hours ago
				</span>
			</span>
		</div>
	);
}

function FontStyleButton({ children, editor }) {
	const onButtonClick = async (button) => {
		console.log(await editor.configuration.tools.bold);
	}
	return (
		<button
			type="button"
			aria-pressed="false"
			data-state="off"
			className="bg-white border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x border-gray-200 focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
			tabIndex={-1}
			data-orientation="horizontal"
			onClick={onButtonClick}>
			{children}
		</button>
	);
}

function TextAlignmentButton({ children }) {
	const onButtonClick = (button) => {};
	return (
		<button
			type="button"
			data-state="on"
			role="radio"
			aria-checked="true"
			className="bg-white border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x border-gray-200  focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
			tabIndex={0}
			data-orientation="horizontal"
			onClick={onButtonClick}>
			{children}
		</button>
	);
}