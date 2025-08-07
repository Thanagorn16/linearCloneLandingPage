import { clsx } from 'clsx'
import { useInView } from 'react-intersection-observer'
import React, {useEffect, useState, useRef, useCallback } from "react";

const ANIMATION_CONFIG = {
	WORD_DELEY: 80,
	INITIAL_DELAY: 100,
	SUBTITLE_BUFFER: 300,
	VIDEO_DELAY: 1000,
	DURATION: 1000
};

const COLORS = {
  softWhite: 'text-zinc-50',
  greyWhite: 'text-white/70',
  darkBg: 'text-zinc-900',
  buttonWhite: 'bg-white/70',
  buttonBg: 'bg-zinc-200',
  buttonHover: 'hover:bg-white',
  secondaryHover: 'hover:bg-white/10'
};

const getAnimationClasses = (isVisible, delay = 0) => clsx(
	'transition-all duration-1000 ease-out transform',
	isVisible
		? 'opacity-100 blur-0 translate-y-0'
		: 'opacity-0 blur-md translate-y-2',    
	delay > 0 && `delay-${delay}`
)

export default function Hero () {
	const {ref, inView} = useInView({
		triggerOnce: true, 
		threshold: 0.1
	});

	const [animations, setAnimations] = useState({
		showHeading: false,
		showSubtitle: false
	});
	
	const videoRef = useRef(null);

	const headingText = 'Linear is a purpose-built tool for planning and building products';
	const headingWords = headingText.split(' ');
	const headingAnimationTime = headingWords.length * ANIMATION_CONFIG.WORD_DELEY;

	// memorized video play function
	const playVideo = useCallback(() => {
		if (videoRef.current) 
			videoRef.current.play().catch(console.warn);
	}, []);

	// Handle animations when component comes into view
	useEffect(() => {
		if (!inView)  return

		const timers = [];

		// start heading anime
		const headingTimer = setTimeout(() => {
				setAnimations(prev => ({ ...prev, showHeading: true}));
		}, ANIMATION_CONFIG.INITIAL_DELAY);
		timers.push(headingTimer);

		// start subtitle and buttons anime
		const subtitleTimer = setTimeout(() => {
			setAnimations(prev => ({ ...prev, showSubtitle: true}));
		}, headingAnimationTime + ANIMATION_CONFIG.SUBTITLE_BUFFER);
		timers.push(subtitleTimer);

		return () => timers.forEach(clearTimeout);

	}, [inView, headingAnimationTime])

	// Handle video playback
	useEffect(() => {
		if (!animations.showSubtitle) return;

		const videoTimer = setTimeout(playVideo, ANIMATION_CONFIG.VIDEO_DELAY);
		return () => clearTimeout(videoTimer);
	}, [animations.showSubtitle, playVideo]);

	return (
		<section className="mt-16" aria-label="Hero_Section">
			<div ref={ref} className="max-w-5xl mx-auto px-4">
				<h1 className="block w-full">
					<span className='inline-block max-w-[800px] text-[3.5rem] leading-tight font-medium'>
						{headingWords.map((word, index) => ( // to show and unblur word by word
							<React.Fragment key={`${word}-${index}`}>
								<span
									className={clsx(
										'inline-block',
										getAnimationClasses(animations.showHeading),
										COLORS.softWhite
									)}
									style={{
										transitionDelay: `${index * ANIMATION_CONFIG.WORD_DELEY}ms`
									}}
									aria-hidden={!animations.showHeading}
								>
									{word}
								</span>
								{index < headingWords.length - 1 && ' '}
							</React.Fragment> // to use whitespace with inline-block
						))}
					</span>
				</h1>

				<h2 
					className={clsx('mt-5 font-medium text-xl',
						getAnimationClasses(animations.showSubtitle),
						COLORS.greyWhite
					)}
				>
						Meet the system for modern software development.<br/>
						Streamline issues, projects, and product roadmaps
				</h2>

				<div className="flex flex-row mt-10 gap-4">
					<button
						className={clsx(
							'px-4 py-2 rounded-lg font-medium cursor-pointer',
							getAnimationClasses(animations.showSubtitle),
							COLORS.buttonWhite,
							COLORS.buttonHover,
							'hover:transition-colors hover:duration-75',

						)}
						aria-label="Start building with Linear"
					>
						Start building
					</button>

					<button 
						className={clsx(
							'group flex items-center gap-2 px-4 py-2 font-medium rounded-lg cursor-pointer',
							getAnimationClasses(animations.showSubtitle, 300),
							COLORS.secondaryHover,
							'hover:transition-colors hover:duration-75 hover:delay-0'
						)}
						aria-label="Learn about Linear for Agents"
					>
						<span className="text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text">
							Introducing Linear for Agents
						</span>
						<ChevronRightIcon/>
					</button>
				</div>

				<div className="mt-10 relative rounded-xl overflow-hidden">
					<video 
						ref={videoRef}
						className={clsx(`w-full transition-all duration-2000 ease-out transform delay-400 ${
							animations.showSubtitle
								? 'opacity-100 blur-0 scale-x-100'
								: 'opacity-0 blur-2xl scale-x-0'
						}`)}
						muted
						loop
						playsInline
						preload="metadata"
						aria-label="Linear product demonstration"
					>
						<source src="../../start.mp4" type="video/mp4" />
						<p>Your browser doesn't support video playback.</p>
					</video>
				</div>
			</div>

		</section>
	)
}

function ChevronRightIcon() {
	return (						
		<svg className="w-4 h-4 text-gray-400 fill-current group-hover:text-zinc-200"
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true" 
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
		</svg>
	);
}