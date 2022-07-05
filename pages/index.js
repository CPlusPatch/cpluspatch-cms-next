import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/footer'
import LanguagePresentation from '../components/landing/language-presentation'
import Projects from '../components/landing/projects'
import ServerExperience from '../components/landing/server-experience'
import Splash from '../components/landing/splash'
import Header from '../components/nav/navbar'

export default function Home() {
	return (
		<main className="relative h-screen overflow-scroll bg-gray-900">
			<Header/>
			<Splash/>
			<LanguagePresentation/>
			<ServerExperience/>
			<Projects/>
			<Footer/>
		</main>
	)
}
