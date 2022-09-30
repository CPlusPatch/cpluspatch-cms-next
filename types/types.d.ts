import { ReactElement } from "react";

type UserSession = {
	user: {
		admin?: boolean;
		name: string;
		email: string;
		image: string;
		id: string;
		canCreatePosts: boolean;
		createdAt: string;
		updatedAt: string;
	};
	expires: string;
};

type NavbarOptions = {
	buttons?: ReactElement;
	showSearchBar?: boolean;
};

type Post = {
	id: string;
	data: {
		author: string;
		banner: string;
		blocks: import("editorjs-blocks-react-renderer").DataProp;
		dateCreated: number;
		dateLastEdited: number;
		datePublished: number | false;
		description: string;
		public: boolean;
		slug: string;
		title: string;
	};
	user?: {
		admin?: boolean;
		name: string;
		email: string;
		image: string;
		id: string;
		canCreatePosts: boolean;
		createdAt: string;
		updatedAt: string;
	};
};

type User = UserSession.User;

type Posts = Post[] | Record<string, never>;
