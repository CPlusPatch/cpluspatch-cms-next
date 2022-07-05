import Image from 'next/future/image'
import mainHero from "../public/static/banner.png";
import Navbar from '../components/nav/navbar';
import firebaseLogo from '../public/static/firebase.svg';
import nextJsLogo from '../public/static/nextjs.svg';
import vercelLogo from '../public/static/vercel.svg';
import githubLogo from '../public/static/github.svg';
import tailwindLogo from '../public/static/tailwindcss.svg';
import Head from 'next/head';

export default function Example() {
	return (
		<div className="bg-gray-50 font-['Exo_2']">
			<Head>
				<title>Welcome! &middot; CPlusPatch 2022</title>
			</Head>
			<div className="relative">
				<div
					className="absolute inset-y-0 h-full w-full"
					aria-hidden="true">
					<div className="relative h-full">
						<svg
							className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
							width={404}
							height={584}
							fill="none"
							viewBox="0 0 404 184">
							<defs>
								<pattern
									id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse">
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={284}
								fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
							/>
						</svg>
						<svg
							className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
							width={404}
							height={784}
							fill="none"
							viewBox="0 0 404 784">
							<defs>
								<pattern
									id="d2a68204-c383-44b1-b99f-42ccff4e5365"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse">
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={784}
								fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
							/>
						</svg>
					</div>
				</div>

				<Navbar />
				<div className="relative pb-16 sm:pb-24">
					<div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 font-['Exo_2']">
						<div className="text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block">Hey,</span>
								<span className="block text-transparent bg-gradient-to-tl from-rose-700 to-pink-600 dark:from-fuchsia-500 dark:via-red-600 dark:to-orange-400 bg-clip-text">
									I&apos;m CPlusPatch
								</span>
							</h1>
							<p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
								Hey there, I&apos;m a teenager with a passion for building things.<br/>
								I&apos;m currently proficient in building web applications and deploying servers.
							</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div
						className="absolute inset-0 flex flex-col"
						aria-hidden="true">
						<div className="flex-1" />
						<div className="flex-1 w-full bg-gray-800" />
					</div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<Image
							className="relative rounded-lg shadow-lg"
							src={mainHero}
							alt="VSCode screenshot"
							priority="true"
							placeholder='blur'
						/>
					</div>
				</div>
			</div>
			<div className="bg-gray-800">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
						Technologies I&apos;m familiar with
					</h2>
					<div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
						<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center">
							<Image
								className="h-12"
								src={firebaseLogo}
								alt="Google Firebase"
							/>
						</div>
						<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center">
							<Image
								className="h-16"
								src={nextJsLogo}
								alt="Next.js"
							/>
						</div>
						<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center">
							<Image
								className="h-10"
								src={vercelLogo}
								alt="Vercel"
							/>
						</div>
						<div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 items-center">
							<Image
								className="h-6"
								src={githubLogo}
								alt="GitHub"
								width={88}
								height={24}
							/>
						</div>
						<div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 items-center">
							<Image
								className="h-7"
								src={tailwindLogo}
								alt="TailwindCSS"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
  }

/*
<main className="relative h-screen overflow-scroll bg-gray-900">
			<Header/>
			<Splash/>
			<LanguagePresentation/>
			<ServerExperience/>
			<Projects/>
			<Footer/>
		</main>
		*/
/*export default function Home() {
	return (
		<div className="relative bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img alt="Workflow" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>

              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
            </div>
          </nav>
        </div>

        <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </a>
          </div>
        </div>
      </div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>
            <span className="block text-indigo-600 xl:inline">online business</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
  </div>
</div>
	)
}*/
