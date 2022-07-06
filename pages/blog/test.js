/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from "next/future/image";
import Head from "next/head";
import Navbar from '../../components/nav/navbar';

function DemoArticle() {
	return (
		<div className="bg-gray-50 font-['Exo_2'] w-full min-h-screen">
			<Head>
				<title>Test DemoArticle! &middot; CPlusPatch 2022</title>
				<meta property="og:title" content="Example title" />
			</Head>
			<Navbar />
			<div className="relative w-full h-full mx-auto max-w-7xl font-['Inter']">
				<div className="flex justify-center w-full h-full">
					<article className="w-full h-full mt-8 prose md:mt-12 lg:mt-16 md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
						<div className="container mb-12">
							<h1 className="text-3xl font-extrabold text-center md:text-5xl font-['Manrope'] mb-4">
								CompensationVR 1.4.0, out now!
							</h1>
						</div>
						<div className="overflow-hidden md:rounded-lg aspect-w-16 aspect-h-9">
							<img src="https://res.cloudinary.com/braydoncoyer/image/upload/v1636418215/learn_tailwindplay_banner.jpg" />
						</div>
						<div className="w-full h-full px-4 mt-10">
							<h1>CompensationVR 1.4.0</h1>
							<p>
								Our entire goal with this update was to create
								CVR/Airsoft. We ran into some serious
								challenges, and we hope we've managed to pull it
								off well. We missed some of the features we
								wanted because of time &amp; technical
								constraints, but it should hopefully still be
								worth playing! Furthermore, we've enjoyed
								playing &amp; testing it, and we hope you will
								too! With that being said, here's the update, in
								full.
							</p>
							<h2>Major updates</h2>
							<h3>Airsoft</h3>
							<p>
								We've released a new CVR Original Room, we hope
								you enjoy it. This is something we've been
								planning for almost a year now, since the
								beginning of modern CVR. CVR/Airsoft is a
								competitive PvP game, where you fight against
								other players in a variety of environments.{" "}
							</p>
							<p>
								Currently, the only available game mode is Free
								For All, where players are given an airsoft gun
								and must attack other players to score points.
								There are currently two maps available, Quarry
								and Wet Work (by default, you spawn in Quarry).
								From there, players can vote on the next map to
								play on, and it will change between games. We
								hope that this room sets a new standard for CVR,
								and we hope you enjoy it as much as we did!
							</p>
							<h3>Invites</h3>
							<p>
								Are you tired of getting stuck in a different
								instance of a room from your friends, no matter
								how much you rejoin? Do you want to be able to
								bring people to your Apartment, but joining it
								is always a new instance? We've solved both
								these issues! You can now use the Player Profile
								menu to invite players to your current instance!
								You can only invite players once, and then you
								cannot invite them again until they either
								accept or decline. Invites expire after 5
								minutes, but you still will not be able to
								invite them again until they decline. Sorry
								spammers, not today.
							</p>
							<h2>Minor updates</h2>
							<ul>
								<li>
									Due to bandwidth restrictions, you can now
									only print one photo at a time. Printing
									another photo after that will result in the
									previous one being removed. This is also due
									in part to moderation concerns over
									photographing text.
								</li>
								<li>
									We fixed the sign in the Lounge, having
									staff members listed improperly. Sorry
									oregano!
								</li>
								<li>
									The Legacy Lounge is now only accessible to
									staff members, due to extremely poor
									performance. Access can be granted
									temporarily to those who want to visit
									temporarily.
								</li>
								<li>
									Due to the new Invite button on the Player
									Profile menu, we've rearranged the
									moderation tools on player profiles to be
									located in a submenu. You can access this
									menu by pressing “Moderation” on a player's
									profile, next to the Invite button.
								</li>
								<li>
									We have made the Hand Offsets system on PCVR
									automatic, so that you no longer have to
									fight with it just to play!
								</li>
							</ul>
							<h2>Bug fixes</h2>
							<ul>
								<li>
									Fixed an issue from the previous update that
									prevented users from logging in properly.
								</li>
								<li>
									Added safeguards to prevent disconnections
									for users with unstable internet.
								</li>
							</ul>
							<h2>News</h2>
							<p>
								We don't normally have a news section in our
								patch notes, but this is extremely important.
							</p>
							<p>
								On 22 May 2022, we were attacked by an unknown
								individual, resulting in over 5000 erroneous
								images being uploaded to the API. This resulted
								in the image API being down for 24 hours, and we
								were forced to disable image uploads to maintain
								server integrity. You can read more about that
								event{" "}
								<a href="https://compensationvr-bb8ff.web.app/blog/posts/5337498975-recent-ddos-attack">
									here
								</a>
								, but that's not what this is about. The fact
								that we were attacked without provocation is a
								very big step forward from our status as a small
								indie game, and we were forced to consider what
								this could mean for us as a game. With that
								being said, we're taking a stronger focus on
								security and transparency moving forward, from
								hardening our servers and improving
								configuration to maintaining a safe environment
								for all users.
							</p>
							<p>
								In line with our new focus on security, we're
								still maintaining our Bug Bounty Program. If you
								find a security vulnerability or other critical
								exploit, please report it to us, so we can
								resolve it. You can find more information about
								our Bug Bounty Program{" "}
								<a href="https://github.com/bubby932/VigorXRAPI/security/policy">
									here
								</a>
								. If you're interested in looking over the
								source code of our servers, you can find it{" "}
								<a href="https://github.com/bubby932/VigorXRAPI/">
									here
								</a>
								. Our server infrastructure is entirely open
								sourced, meaning you can help us find problems
								that we missed. With all that in mind, thank
								you, and we hope you enjoy this update!
							</p>
						</div>
					</article>
					<aside></aside>
				</div>
			</div>
		</div>
	);
}

export default DemoArticle;