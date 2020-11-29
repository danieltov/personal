import React, { useRef, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sendContactMail } from '../components/mail-api';

export default function Home() {
	const [email, setEmail] = useState(``);
	const [menuActive, setMenuActive] = useState(false);
	const [message, setMessage] = useState(``);
	const [name, setName] = useState(``);
	const [phone, setPhone] = useState(``);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const helloRef = useRef(null);
	const resumeRef = useRef(null);
	const workRef = useRef(null);

	const handleMenuItemClick = e => {
		e.preventDefault();
		setMenuActive(false);
	};

	const handleContactSubmit = async event => {
		event.preventDefault();
		setButtonDisabled(true);

		const res = await sendContactMail(name, email, phone, message);

		if (res.status < 300) {
			setButtonDisabled(false);
			setName(``);
			setEmail(``);
			setPhone(``);
			setMessage(``);
			alert(
				`Message sent! Thank you for getting in touch, I'll be sure to respond as soon as I can.`
			);
		} else {
			setButtonDisabled(false);
			alert(
				`Message failed to send. Please try again or contact me on LinkedIn or Twitter.`
			);
		}
	};

	const scrollTo = ref =>
		ref.current.scrollIntoView({
			behavior: `smooth`,
		});

	return (
		<>
			<Head>
				<title>Daniel Tovar&apos;s Developer Portfolio</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta
					property='og:title'
					content="Daniel Tovar's Developer Portfolio"
					key='title'
				/>
				<meta name='robots' content='index,follow' />
				<meta charset='utf-8' />
				<meta
					name='keywords'
					content='Web Developer, Software Developer, React Developer, JavaScript Developer, Front-End Developer, Full-Stack Developer, Front-End Web Developer'
				/>
				<meta
					name='description'
					content='Daniel Tovar is an Austin-based web and mobile app developer specializing in React, React Native, and modern JavaScript frameworks and backends.'
				/>
				<meta name='author' content='Daniel Tovar' />
				<meta name='copyright' content='&copy; 2020' />
			</Head>
			<div className={`mx-auto sm:mx-4 p-4`}>
				{/* Menu */}
				<nav
					className={`flex w-full flex-col overlay fixed`}
					style={{
						width: menuActive ? `100%` : `0%`,
						zIndex: menuActive ? 2 : 1,
					}}
				>
					{/* Menu Icon */}
					<div className='fixed top-0 right-0 p-3 sm:p-4 sm:inset-0'>
						<div
							className='w-8 2xl:w-14 filter rounded box-content'
							onClick={e => {
								e.preventDefault();
								setMenuActive(!menuActive);
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className={menuActive ? `hidden` : `block`}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>

							{/* Close Icon */}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className={!menuActive ? `hidden` : `block`}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</div>
					</div>

					<div
						className={`overlay-content`}
						style={{ opacity: menuActive ? 1 : 0 }}
					>
						<ul className='text-center text-3xl list-none uppercase text-regular text-gray-100'>
							<li className='my-3'>
								<Link href='/'>
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
							<li className='my-3'>
								<Link href='/'>
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
							<li className='my-3'>
								<Link href='/'>
									<a
										onClick={e => {
											handleMenuItemClick(e);
											scrollTo(resumeRef);
										}}
									>
										Resum&eacute;
									</a>
								</Link>
							</li>
							<li className='my-3'>
								<Link href='/'>
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
							<li className='my-3'>
								<Link href='/'>
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
							<li className='my-3'>
								<Link href='https://github.com/danieltov'>
									<a target='_blank'>GitHub</a>
								</Link>
							</li>
							<li className='my-3'>
								<Link href='https://www.linkedin.com/in/danieltovario/'>
									<a target='_blank'>LinkedIn</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				{/* HERO */}
				<section
					ref={helloRef}
					className='content my-16 sm:my-0 sm:h-screen sm:relative flex flex-col sm:flex-row-reverse sm:justify-around'
				>
					<figure className='mx-auto w-5/12 mb-4 sm:my-auto sm:w-3/12'>
						<Image
							className='rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'
							src='/img/memoji-hi.png'
							alt='Memoji of a Developer'
							width={300}
							height={300}
						/>
					</figure>

					<div className='my-auto sm:w-7/12 sm:flex-col sm:align-center'>
						<h2 className='text-lg text-gray-400 mb-2'>
							&lt;HELLO WORLD /&gt;
						</h2>
						<h1 className='font-regular text-gray-100 text-2xl normal-case'>
							I&apos;m Daniel Tovar, a {` `}
							<span className='font-medium'>
								Web and Mobile Developer
							</span>
							{` `}
							with 2+ years of experience coding for start-ups and
							universities.
						</h1>
						<div className=' my-5 max-w-md mx-auto sm:flex sm:justify-center md:my-8'>
							<div className='rounded-sm border-2 border-gray-100'>
								<Link href='/'>
									<a
										className='w-full flex items-center justify-center text-gray-100 uppercase p-3 text-center'
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
								<Link href='/'>
									<a
										className='flex items-center justify-center text-gray-300 uppercase p-4 text-center'
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
					className='content flex flex-col sm:flex-row sm:justify-around'
				>
					<figure className='mx-auto w-5/12 mb-4 sm:my-auto sm:w-3/12'>
						<Image
							className='rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-500'
							src='/img/memoji-fist.png'
							alt='Memoji of a Developer'
							width={300}
							height={300}
						/>
					</figure>
					<header className='sm:w-7/12 my-auto'>
						<h1>About Me</h1>
						<p className='my-4'>
							I&apos;m a Los Angeles native and soon-to-be Austin
							transplant, by way of Salt Lake City, Hartford, and
							Honolulu. Along the way I have built thoughtful
							things for the web and mobile for start-ups and
							large institutions.
						</p>
						<p>
							I&apos;ve puttered around the browser building the
							web since I was a kid, turning my curiosity into a
							love for web technologies. Today, I happily stare
							down complex systems, handle projects of diverse
							types and sizes, and collaborate on all stages of
							the development lifecycle, from ideation to shipment
							to ongoing support.
						</p>
					</header>
				</section>
				{/* RESUME */}
				<section
					ref={resumeRef}
					className='content my-16 flex flex-col justify-center'
				>
					<div className='flex flex-col sm:relative sm:flex-row sm:flex-wrap sm:justify-around'>
						<header className='sm:w-11/12'>
							<h1>Resume</h1>
						</header>
						<aside className='sm:w-5/12'>
							<header>
								<h2 className='text-2xl my-4'>
									Work Experience
								</h2>
							</header>
							<div className='my-4'>
								<h3 className='text-xl'>
									Principal Full-Stack Software Developer
								</h3>
								<Link href='https://zoowho.com/'>
									<a
										target='_blank'
										rel='noreferrer'
										className='text-lg'
									>
										ZooWho &#8599;
									</a>
								</Link>
								<p className='text-base text-gray-200'>
									September 2019 &ndash; Current
								</p>
							</div>
							<div className='my-4'>
								<h3 className='text-xl'>
									Front-End Web Developer
								</h3>
								<Link href='https://uvu.edu/'>
									<a
										target='_blank'
										rel='noreferrer'
										className='text-lg block'
									>
										Utah Valley University &#8599;
									</a>
								</Link>
								<p className='text-base text-gray-200'>
									January 2019 &ndash; September 2019
								</p>
							</div>
							<div className='my-4'>
								<h3 className='text-xl'>WordPress Developer</h3>
								<p className='text-lg'>PMA</p>
								<p className='text-base text-gray-200'>
									January 2018 &ndash; December 2018
								</p>
							</div>
						</aside>

						<aside className='sm:w-5/12'>
							<header>
								<h2 className='text-2xl my-4'>Education</h2>
							</header>
							<div className='my-4'>
								<h3 className='text-xl'>University of Utah</h3>
								<p className='text-lg'>
									Full-Stack Web Development
								</p>
								<p className='text-base text-gray-200'>
									Completed 2019
								</p>
							</div>
						</aside>

						<aside className='sm:w-11/12'>
							<header>
								<h2 className='text-2xl my-4'>Skills</h2>
							</header>
							<div className='flex flex-col flex-wrap sm:flex-row sm:justify-around'>
								<aside className='sm:w-4/12'>
									<header>
										<h3 className='text-xl my-4'>
											Front-End
										</h3>
										<div className='my-4 sm:w-10/12'>
											<p className='my-4'>
												Mobile App Development (React
												Native)
											</p>
											<p className='my-4'>
												JavaScript Frameworks (React,
												Next, Gatsby, Vue)
											</p>
											<p className='my-4'>
												PHP Frameworks (Laravel)
											</p>
											{/* <p className='my-4'>
											Responsive Design &amp; Development
										</p>
										<p className='my-4'>Connecting APIs</p>
										<p className='my-4'>
											Semantic HTML &amp; CSS
										</p> */}
											<p className='my-4'>
												Coupled CMSes (WordPress,
												OUCampus, Shopify)
											</p>
											<p className='my-4'>
												Headless CMSes (Ghost,
												Contentful)
											</p>
										</div>
									</header>
								</aside>
								<aside className='sm:w-4/12'>
									<header>
										<h3 className='text-xl my-4'>
											Back-End
										</h3>
										<div className='my-4 sm:w-10/12'>
											<p className='my-4'>
												API Design (REST)
											</p>
											<p className='my-4'>
												Database Design (MySQL, NoSQL)
											</p>
											<p className='my-4'>Node.js</p>
											<p className='my-4'>Express.js</p>
											<p className='my-4'>PHP/Laravel</p>
										</div>
									</header>
								</aside>
								<aside className='sm:w-4/12'>
									<header>
										<h3 className='text-xl my-4'>Team</h3>
										<div className='my-4 sm:w-10/12'>
											<p className='my-4'>
												Product Development
											</p>
											<p className='my-4'>
												Project Management
											</p>
											<p className='my-4'>Agile/Scrum</p>
											<p className='my-4'>
												High Remote Productivity
											</p>
										</div>
									</header>
								</aside>
							</div>
						</aside>
					</div>
				</section>
				{/* YAY */}
				<aside>
					<figure className='mx-auto w-5/12 my-auto sm:w-3/12'>
						<Image
							className='rounded-full bg-gradient-to-br from-red-600 via-indigo-700 to-blue-700'
							src='/img/memoji-yay.png'
							alt='Memoji of a Celebration'
							width={300}
							height={300}
						/>
					</figure>
				</aside>
				{/* WORK */}
				<section ref={workRef} className='content my-16 flex flex-col'>
					<header>
						<h1>Work</h1>
					</header>
					<aside>
						<h2 className='text-2xl'>Circles by ZooWho, Inc.</h2>
						<ul className='list-inside list-disc'>
							<li className='my-2'>
								Principal full-stack software developer building
								and making product-level decisions on JavaScript
								web and mobile applications (React/Next/React
								Native) and a RESTful API written in PHP
								(Laravel).
							</li>
							<li className='my-2'>
								Design, administer, support and monitor a MySQL
								database and maintain servers provisioned on
								Amazon Web Services (AWS).
							</li>
						</ul>
						<div className='flex flex-col sm:flex-row sm:justify-center my-4'>
							<Link href='https://zoowho.com/features'>
								<a
									className='flex items-center justify-center text-gray-300 uppercase text-center mx-4'
									target='_blank'
									rel='noreferrer'
								>
									Website &#8599;
								</a>
							</Link>
							<Link href='https://zoowho.com/download/'>
								<a
									className='flex items-center justify-center text-gray-300 uppercase text-center mx-4'
									target='_blank'
									rel='noreferrer'
								>
									Download App &#8599;
								</a>
							</Link>
						</div>
						<figure className='hidden sm:block'>
							<Image
								className='rounded-sm'
								src='/img/work-circles.png'
								alt='iOS App Mockup'
								width={842}
								height={595}
								layout='intrinsic'
							/>
						</figure>
						<figure className='sm:hidden'>
							<iframe
								width='100%'
								height='60%'
								src='https://www.youtube-nocookie.com/embed/n_4Be8XXxbg?controls=1'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</figure>
					</aside>
				</section>

				{/* CONTACT */}
				<section ref={contactRef} className='content my-16'>
					<header>
						<h1>Contact</h1>
					</header>
					<div className='flex flex-col-reverse'>
						<div className='py-16 px-4 sm:px-8 lg:px-16'>
							<div className='max-w-lg mx-auto lg:max-w-none'>
								<form
									name='contact'
									onSubmit={
										!buttonDisabled && handleContactSubmit
									}
									method='POST'
									className='grid grid-cols-1 gap-y-6'
								>
									<div>
										<label
											htmlFor='full_name'
											className='sr-only'
										>
											Full name
										</label>
										<input
											type='text'
											name='full_name'
											id='full_name'
											autoComplete='name'
											className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
											placeholder='Full name'
											value={name}
											onChange={e =>
												setName(e.target.value)
											}
											required
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='sr-only'
										>
											Email
										</label>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
											placeholder='Email'
											value={email}
											onChange={e =>
												setEmail(e.target.value)
											}
											required
										/>
									</div>
									<div>
										<label
											htmlFor='phone'
											className='sr-only'
										>
											Phone
										</label>
										<input
											type='text'
											name='phone'
											id='phone'
											autoComplete='tel'
											className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
											placeholder='Phone'
											value={phone}
											onChange={e =>
												setPhone(e.target.value)
											}
										/>
									</div>
									<div>
										<label
											htmlFor='message'
											className='sr-only'
										>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											rows='4'
											className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
											placeholder='Message'
											value={message}
											onChange={e =>
												setMessage(e.target.value)
											}
											required
										></textarea>
									</div>
									<div>
										<button
											type='submit'
											className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
						<div>
							<p className='my-4 text-lg'>
								Thanks for visiting! I really appreciate it. I
								love what I do and I&apos;m very open to
								collaboration. Get in touch!
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
