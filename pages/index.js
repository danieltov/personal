import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

export default function Home() {
	const [menuActive, setMenuActive] = useState(false);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const helloRef = useRef(null);
	const resumeRef = useRef(null);

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
				<title>Front End Engineer &mdash; Daniel Tovar</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					property="og:title"
					content="Front End Engineer Portfolio - Daniel Tovar"
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
				<meta name="copyright" content="&copy; 2022" />
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
							role="button"
							tabIndex={0}
							onKeyDown={e => e.key === 'Enter' && setMenuActive(prev => !prev)}
							onClick={e => {
								e.preventDefault();
								setMenuActive(prev => !prev);
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
										role="link"
										tabIndex={0}
										onKeyDown={e => {
											if (e.key === 'Enter') {
												handleMenuItemClick(e);
												scrollTo(helloRef);
											}
										}}
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
										role="link"
										tabIndex={0}
										onKeyDown={e => {
											if (e.key === 'Enter') {
												handleMenuItemClick(e);
												scrollTo(aboutRef);
											}
										}}
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
										role="link"
										tabIndex={0}
										onKeyDown={e => {
											if (e.key === 'Enter') {
												handleMenuItemClick(e);
												scrollTo(resumeRef);
											}
										}}
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
										role="link"
										tabIndex={0}
										onKeyDown={e => {
											if (e.key === 'Enter') {
												handleMenuItemClick(e);
												scrollTo(contactRef);
											}
										}}
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
							I&apos;m Daniel Tovar. I&apos;m a <strong>Front End Engineer</strong>{' '}
							specializing in React and TypeScript.
						</h1>
						<div className=" my-5 max-w-md mx-auto sm:flex sm:justify-center md:my-8">
							<div className="rounded-sm border-2 border-gray-100">
								<Link href="/">
									<a
										className="w-full flex items-center justify-center text-gray-100 uppercase p-3 text-center"
										role="button"
										tabIndex={0}
										onKeyDown={e => {
											if (e.key === 'Enter') {
												handleMenuItemClick(e);
												scrollTo(contactRef);
											}
										}}
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(contactRef);
										}}
									>
										Connect With Me
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
							Lake City, New England, and Honolulu. Along the way I have built
							thoughtful things for the web and mobile for early-stage start-ups, Inc.
							5000 companies, and public institutions.
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
								Resume
								{/* Resume (
								<Link href="/static/DanielTovarWebDeveloperResume.PDF">
									<a target="_blank" rel="noreferrer" className="mx-1" download>
										PDF
									</a>
								</Link>
								) */}
							</h1>
						</header>
						<aside className="sm:w-5/12">
							<header>
								<h2 className="text-2xl my-4">Work Experience</h2>
							</header>
							<div className="my-4">
								<h3 className="text-xl">Senior Front End Engineer</h3>
								<Link href="https://madwire.com/">
									<a target="_blank" rel="noreferrer" className="text-lg">
										MadWire &#8599;
									</a>
								</Link>
								<p className="text-base text-gray-200">
									January 2022 &ndash; Current
								</p>
							</div>
							<div className="my-4">
								<h3 className="text-xl">Front End Engineer</h3>
								<Link href="https://madwire.com/">
									<a target="_blank" rel="noreferrer" className="text-lg">
										MadWire &#8599;
									</a>
								</Link>
								<p className="text-base text-gray-200">
									February 2021 &ndash; January 2022
								</p>
							</div>
							<div className="my-4">
								<h3 className="text-xl">Software Engineer</h3>
								<Link href="https://www.nouri.ai/">
									<a target="_blank" rel="noreferrer" className="text-lg">
										Nouri (ZooWho) &#8599;
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
								<p className="text-lg">Web Development</p>
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
											<p className="my-4">TypeScript</p>
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
											<p className="my-4">
												Database Design (PosgreSQL, MongoDB)
											</p>
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
