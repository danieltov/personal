import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

export default function Home() {
	const [menuActive, setMenuActive] = useState(false);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const helloRef = useRef(null);
	const resumeRef = useRef(null);
	const workRef = useRef(null);

	const handleMenuItemClick = e => {
		e.preventDefault();
		setMenuActive(false);
	};

	const scrollTo = ref =>
		ref.current.scrollIntoView({
			behavior: 'smooth'
		});

	return (
		<>
			<Head>
				<title>Daniel Tovar&apos;s Developer Portfolio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					property="og:title"
					content="Daniel Tovar's Developer Portfolio"
					key="title"
				/>
				<meta name="robots" content="index,follow" />
				<meta charSet="utf-8" />
				<meta
					name="keywords"
					content="Web Developer, Software Developer, React Developer, JavaScript Developer, Front-End Developer, Full-Stack Developer, Front-End Web Developer"
				/>
				<meta
					name="description"
					content="Daniel Tovar is a San Antonio-based web and mobile app developer specializing in React, React Native, and modern JavaScript frameworks and backends."
				/>
				<meta name="author" content="Daniel Tovar" />
				<meta name="copyright" content="&copy; 2020" />
			</Head>
			<div className={'mx-auto sm:mx-4 p-4'}>
				{/* Menu */}
				<nav
					className={'flex w-full flex-col overlay fixed'}
					style={{
						width: menuActive ? '100%' : '0%',
						zIndex: menuActive ? 2 : 1
					}}
				>
					{/* Menu Icon */}
					<div className="fixed top-0 right-0 p-3 sm:p-4 sm:inset-0">
						<div
							className="w-8 2xl:w-14 filter rounded box-content"
							onClick={e => {
								e.preventDefault();
								setMenuActive(!menuActive);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className={menuActive ? 'hidden' : 'block'}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>

							{/* Close Icon */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className={!menuActive ? 'hidden' : 'block'}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</div>

					<div className={'overlay-content'} style={{ opacity: menuActive ? 1 : 0 }}>
						<ul className="text-center text-3xl list-none uppercase text-regular text-gray-100">
							<li className="my-3">
								<Link href="/">
									<a
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(helloRef);
										}}
									>
										Hello
									</a>
								</Link>
							</li>
							<li className="my-3">
								<Link href="/">
									<a
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(aboutRef);
										}}
									>
										About Me
									</a>
								</Link>
							</li>
							<li className="my-3">
								<Link href="/">
									<a
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(resumeRef);
										}}
									>
										Resume
									</a>
								</Link>
							</li>
							<li className="my-3">
								<Link href="/">
									<a
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(workRef);
										}}
									>
										Work
									</a>
								</Link>
							</li>
							<li className="my-3">
								<Link href="/">
									<a
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(contactRef);
										}}
									>
										Contact
									</a>
								</Link>
							</li>
							<li className="my-3">
								<Link href="https://github.com/danieltov">
									<a target="_blank">GitHub</a>
								</Link>
							</li>
							<li className="my-3">
								<Link href="https://www.linkedin.com/in/danieltovario/">
									<a target="_blank">LinkedIn</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				{/* HERO */}
				<section
					ref={helloRef}
					className="content my-16 sm:my-0 sm:h-screen sm:relative flex flex-col sm:flex-row-reverse sm:justify-around"
				>
					<figure className="mx-auto w-5/12 mb-4 sm:my-auto sm:w-3/12">
						<Image
							className="rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"
							src="/img/memoji-hi.png"
							alt="Memoji of a Developer"
							width={300}
							height={300}
						/>
					</figure>

					<div className="my-auto sm:w-7/12 sm:flex-col sm:align-center">
						<h2 className="text-lg text-gray-400 mb-2">&lt;HELLO WORLD /&gt;</h2>
						<h1 className="font-regular text-gray-100 text-2xl normal-case">
							I&apos;m Daniel Tovar, a{' '}
							<span className="font-medium">Web and Mobile Developer</span> with 2+
							years of experience coding for start-ups and universities.
						</h1>
						<div className=" my-5 max-w-md mx-auto sm:flex sm:justify-center md:my-8">
							<div className="rounded-sm border-2 border-gray-100">
								<Link href="/">
									<a
										className="w-full flex items-center justify-center text-gray-100 uppercase p-3 text-center"
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(contactRef);
										}}
									>
										Connect With Me
									</a>
								</Link>
							</div>
							<div>
								<Link href="/">
									<a
										className="flex items-center justify-center text-gray-300 uppercase p-4 text-center"
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(workRef);
										}}
									>
										See My Work &rarr;
									</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				{/* ABOUT ME */}
				<section
					ref={aboutRef}
					className="content flex flex-col sm:flex-row sm:justify-around"
				>
					<figure className="mx-auto w-5/12 mb-4 sm:my-auto sm:w-3/12">
						<Image
							className="rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-500"
							src="/img/memoji-fist.png"
							alt="Memoji of a Developer"
							width={300}
							height={300}
						/>
					</figure>
					<header className="sm:w-7/12 my-auto">
						<h1>About Me</h1>
						<p className="my-4">
							I&apos;m a Los Angeles native and San Antonio transplant, by way of Salt
							Lake City, New Haven, and Honolulu. Along the way I have built
							thoughtful things for the web and mobile for start-ups and large
							institutions.
						</p>
						<p>
							I&apos;ve puttered around the browser building the web since I was a
							kid, turning my curiosity into a love for web technologies. Today, I
							happily stare down complex systems, handle projects of diverse types and
							sizes, and collaborate on all stages of the development lifecycle, from
							ideation to shipment to ongoing support.
						</p>
					</header>
				</section>
				{/* RESUME */}
				<section ref={resumeRef} className="content my-16 flex flex-col justify-center">
					<div className="flex flex-col sm:relative sm:flex-row sm:flex-wrap sm:justify-around">
						<header className="sm:w-11/12">
							<h1>
								Resume (
								<Link href="/static/DanielTovarWebDeveloperResume.PDF">
									<a target="_blank" rel="noreferrer" className="mx-1" download>
										PDF
									</a>
								</Link>
								)
							</h1>
						</header>
						<aside className="sm:w-5/12">
							<header>
								<h2 className="text-2xl my-4">Work Experience</h2>
							</header>
							<div className="my-4">
								<h3 className="text-xl">Front End Engineer</h3>
								<Link href="https://zoowho.com/">
									<a target="_blank" rel="noreferrer" className="text-lg">
										MadWire &#8599;
									</a>
								</Link>
								<p className="text-base text-gray-200">
									February 2021 &ndash; Current
								</p>
							</div>
							<div className="my-4">
								<h3 className="text-xl">Principal Full-Stack Software Developer</h3>
								<Link href="https://zoowho.com/">
									<a target="_blank" rel="noreferrer" className="text-lg">
										ZooWho &#8599;
									</a>
								</Link>
								<p className="text-base text-gray-200">
									September 2019 &ndash; January 2021
								</p>
							</div>
							<div className="my-4">
								<h3 className="text-xl">Front-End Web Developer</h3>
								<Link href="https://uvu.edu/">
									<a target="_blank" rel="noreferrer" className="text-lg block">
										Utah Valley University &#8599;
									</a>
								</Link>
								<p className="text-base text-gray-200">
									January 2019 &ndash; September 2019
								</p>
							</div>
							<div className="my-4">
								<h3 className="text-xl">WordPress Developer</h3>
								<p className="text-lg">PMA</p>
								<p className="text-base text-gray-200">
									January 2017 &ndash; December 2018
								</p>
							</div>
						</aside>

						<aside className="sm:w-5/12">
							<header>
								<h2 className="text-2xl my-4">Education</h2>
							</header>
							<div className="my-4">
								<h3 className="text-xl">University of Utah</h3>
								<p className="text-lg">Full-Stack Web Development</p>
								<p className="text-base text-gray-200">2019</p>
							</div>
							<div className="my-4">
								<h3 className="text-xl">Utah Valley University</h3>
								<p className="text-lg">Digital Media, Web and App Development</p>
								<p className="text-base text-gray-200">2018</p>
							</div>
						</aside>

						<aside className="sm:w-11/12">
							<header>
								<h2 className="text-2xl my-4">Skills</h2>
							</header>
							<div className="flex flex-col flex-wrap sm:flex-row sm:justify-around">
								<aside className="sm:w-4/12">
									<header>
										<h3 className="text-xl my-4">Front-End</h3>
										<div className="my-4 sm:w-10/12">
											<p className="my-4">
												JavaScript Frameworks (React, Next, Gatsby, Vue)
											</p>
											<p className="my-4">
												Mobile App Development (React Native)
											</p>
											<p className="my-4">PHP Frameworks (Laravel)</p>
										</div>
									</header>
								</aside>
								<aside className="sm:w-4/12">
									<header>
										<h3 className="text-xl my-4">Back-End</h3>
										<div className="my-4 sm:w-10/12">
											<p className="my-4">API Design (REST)</p>
											<p className="my-4">Database Design (MySQL, NoSQL)</p>
											<p className="my-4">Node.js</p>
											<p className="my-4">Express.js</p>
											<p className="my-4">PHP/Laravel</p>
										</div>
									</header>
								</aside>
								<aside className="sm:w-4/12">
									<header>
										<h3 className="text-xl my-4">Team</h3>
										<div className="my-4 sm:w-10/12">
											<p className="my-4">Product Development</p>
											<p className="my-4">Project Management</p>
											<p className="my-4">Agile/Scrum</p>
											<p className="my-4">High Remote Productivity</p>
										</div>
									</header>
								</aside>
							</div>
						</aside>
					</div>
				</section>
				{/* YAY */}

				<aside className="content">
					<figure className="mx-auto w-5/12 my-auto sm:w-3/12">
						<Image
							className="rounded-full bg-gradient-to-br from-red-600 via-indigo-700 to-blue-700"
							src="/img/memoji-yay.png"
							alt="Memoji of a Celebration"
							width={300}
							height={300}
						/>
					</figure>
				</aside>

				{/* WORK */}
				<section id="slider" ref={workRef} className="content my-16 flex flex-col">
					<header>
						<h1>Work</h1>
					</header>
					<Slider
						dots={false}
						infinite
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
						swipe
						afterChange={() => scrollTo(workRef)}
					>
						<aside className="outline-none">
							<h2 className="text-2xl">Circles App by ZooWho, Inc.</h2>
							<ul className="mx-1">
								<li className="my-2">
									<p>
										This production iOS and Andriod app was built by me, in a
										full-stack role, and another front-end developer. Circles is
										a &quot;Personal CRM, Contacts Manager, and Digital
										Rolodex&quot; which allows users to store notes, details,
										factoids, reminders and goals to business or personal
										contacts.
									</p>
								</li>
								<li className="my-2">
									<p>
										As the sole back-end developer, it was my duty to design and
										build a RESTful API in PHP (Laravel) and design and
										administer a MySQL database.
									</p>
								</li>
								<li className="my-2">
									<p>
										The app was built in React Native to efficiently develop for
										both iOS and Android. My duties included designing the
										app&apos;s data flow, connecting and consuming our API,
										handling reminders and push notifications, and building UI
										elements.
									</p>
								</li>
							</ul>
							<div className="flex flex-col sm:flex-row sm:justify-center my-4">
								<Link href="https://zoowho.com/features/">
									<a
										className="flex items-center justify-center text-gray-300 uppercase text-center mx-4"
										target="_blank"
										rel="noreferrer"
									>
										Website &#8599;
									</a>
								</Link>
								<Link href="https://zoowho.com/download/">
									<a
										className="flex items-center justify-center text-gray-300 uppercase text-center mx-4"
										target="_blank"
										rel="noreferrer"
									>
										Download App &#8599;
									</a>
								</Link>
							</div>
							<figure className="hidden sm:block">
								<Image
									className="rounded-sm"
									src="/img/work-circles.png"
									alt="iOS App Mockup"
									width={842}
									height={595}
									layout="intrinsic"
								/>
							</figure>
							<figure className="sm:hidden">
								<iframe
									title="ZooWho Video"
									width="100%"
									height="60%"
									src="https://www.youtube-nocookie.com/embed/n_4Be8XXxbg?controls=1"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</figure>
						</aside>
						<aside className="outline-none">
							<h2 className="text-2xl">Enough</h2>
							<ul className="mx-1">
								<li className="my-2">
									<p>
										This a personal project I built with mental health in mind.
										The concept is simple: the app asks users one question
										&mdash; how are you feeling today? &mdash; and depending on
										the answers, one of two things will happen.
									</p>
									<p className="my-4 ml-6">
										1. If the user is feeling 🙂, the app will prompt them to
										enter at least one positive affirmation: this could be an
										achievement they’re proud of, a personal strength they’ve
										identified, something in their life they’re grateful for, or
										one of their favorite quotes.
									</p>
									<p className="m-4 ml-6">
										2. If the user is feeling 😐 or 🙁, the app will remind them
										of a positive affirmation they’ve entered before. They will
										then have the option to cycle through other affirmations or
										add new one.
									</p>
								</li>
								<li className="my-2">
									<p>I designed the UI and UX, then built the UI in React.</p>
								</li>
								<li className="my-2">
									<p>
										I developed the back-end. Data is read and stored using a
										MongoDB-powered API, served on a Node/Express server.
									</p>
								</li>
								<li className="my-2">
									<p>Up next: a mobile app!</p>
								</li>
							</ul>
							<div className="flex flex-col sm:flex-row sm:justify-center my-4">
								<Link href="http://enough-app.com">
									<a
										className="flex items-center justify-center text-gray-300 uppercase text-center mx-4"
										target="_blank"
										rel="noreferrer"
									>
										WEBSITE &#8599;
									</a>
								</Link>
								<Link href="https://github.com/danieltov/enough">
									<a
										className="flex items-center justify-center text-gray-300 uppercase text-center mx-4"
										target="_blank"
										rel="noreferrer"
									>
										GitHub Repo &#8599;
									</a>
								</Link>
							</div>
							<figure>
								<Image
									className="rounded-sm"
									src="/img/enough.png"
									alt="Screenshot of Website"
									width={1020}
									height={560}
									layout="intrinsic"
								/>
							</figure>
						</aside>
					</Slider>
				</section>

				{/* CONTACT */}
				<section ref={contactRef} className="content my-16">
					<header>
						<h1>Contact</h1>
					</header>
					<div>
						<p className="my-4 text-lg">
							Thanks for visiting! I really appreciate it. I love what I do and
							I&apos;m very open to collaboration. Get in touch ✌🏼.
						</p>
					</div>
					<div className="w-6/12 mx-auto">
						<div className="rounded-sm border-2 border-gray-100 mb-3">
							<Link href="mailto:daniel@danieltovar.io">
								<a
									target="_blank"
									className="w-full flex items-center justify-center text-gray-100 uppercase p-3 text-center"
								>
									Email
								</a>
							</Link>
						</div>
						<div className="rounded-sm border-2 border-gray-100 mb-3">
							<Link href="https://www.linkedin.com/in/danieltovario/">
								<a
									target="_blank"
									className="w-full flex items-center justify-center text-gray-100 uppercase p-3 text-center"
								>
									LinkedIn
								</a>
							</Link>
						</div>
						<div className="rounded-sm border-2 border-gray-100 mb-3">
							<Link href="https://github.com/danieltov">
								<a
									target="_blank"
									className="w-full flex items-center justify-center text-gray-100 uppercase p-3 text-center"
								>
									GitHub
								</a>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
