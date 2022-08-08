import { getProviders, signIn } from "next-auth/react";
import Image from "next/future/image";
import Head from "next/head";
import Navbar from "../../components/nav/navbar";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

import githubLogo from "../../public/static/github-black.svg";
import loginHero from "../../public/static/login-hero.jpg";

const providerLogos = {
	GitHub: githubLogo,
};

export default function SignIn({ providers, user }) {
	return (
	<div className="bg-gray-50 font-['Exo_2']">
			<Head>
				<title>Welcome! &middot; CPlusPatch 2022</title>
			</Head>
			<Navbar user={user}/>

			<section className="flex flex-col items-center h-screen md:flex-row">
			<div className="hidden w-full h-screen lg:block md:w-1/2 xl:w-2/3">
				<Image src={loginHero} alt="" className="object-cover w-full h-full" placeholder="blur"/>
			</div>

			<div className="flex items-center justify-center w-full h-screen px-6 duration-100 bg-white shadow md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 hover:shadow-2xl">

				<div className="w-full h-100">


					<h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">Log in to your account</h1>


					<hr className="w-full my-6 border-gray-300"></hr>

					{Object.values(providers).map((provider) => (
						<button key={provider.name} onClick={() => signIn(provider.id)} type="button" className="block w-full px-4 py-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg">
							<div className="flex items-center justify-center">
								<Image src={providerLogos[provider.name]} className="w-6 h-6" alt=""/>
								<span className="ml-4">Log in with {provider.name}</span>
							</div>
						</button>
					))}
				</div>
			</div>

		</section>
	</div>
	)
}

export async function getServerSideProps(context) {
	const providers = await getProviders()
	const session = await unstable_getServerSession(context.req, context.res, authOptions);

	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
	
	return {
		props: {
			user: false, // Always false for sign in page, since we redirect to home if logged in
			providers
		}
	};
}