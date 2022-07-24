import Image from 'next/future/image'
import Head from 'next/head';

import Navbar from '../components/nav/navbar';


export default function Landing() {
	return (
		<div className="bg-gray-50 font-['Exo_2']">
			<Head>
				<title>Contact me &middot; CPlusPatch</title>
			</Head>
			<Navbar />
		</div>
	);
}