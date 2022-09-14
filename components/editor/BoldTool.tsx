import { TypeBold } from "react-bootstrap-icons";
import ReactDOMServer from "react-dom/server";

export default class BoldTool {
	api: any;
	button: HTMLButtonElement;
	tag: any;
	_state: any;

	static get isInline() {
		return true;
	}

	get state() {
		return this._state;
	}

	set state(state) {
		this._state = state;

		this.button.classList.toggle(
			this.api.styles.inlineToolButtonActive,
			state
		);
	}

	constructor({ api }) {
		this.api = api;
		this.button = null;
		this._state = false;

		this.tag = "B";	}

	render() {
		this.button = document.createElement("button");
		this.button.type = "button";
		this.button.innerHTML = ReactDOMServer.renderToStaticMarkup(<TypeBold/>);
		this.button.classList.add(this.api.styles.inlineToolButton);

		return this.button;
	}

	surround(range) {
		if (this.state) {
			this.unwrap(range);
			return;
		}

		this.wrap(range);
	}

	wrap(range) {
		const selectedText = range.extractContents();
		const mark = document.createElement(this.tag);

		mark.appendChild(selectedText);
		range.insertNode(mark);

		this.api.selection.expandToTag(mark);
	}

	unwrap(range) {
		const mark = this.api.selection.findParentTag(this.tag);
		const text = range.extractContents();

		mark.remove();

		range.insertNode(text);
	}

	checkState() {
		const mark = this.api.selection.findParentTag(this.tag);

		this.state = !!mark;
	}
}