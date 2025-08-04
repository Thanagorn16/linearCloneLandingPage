import "tailwindcss"
import { clsx } from 'clsx'
import { useInView } from 'react-intersection-observer'
import React, {useEffect, useState, useRef } from "react";

export default function Hero () {
	const softWhite = 'text-[rgb(247,248,248))]';
	const greyWhite = 'text-[hsla(0, 0%, 100%, 0.7)]';

	const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1})
	const [showFirst, setShowFirst] = useState(false);
	const [showSecond, setShowSecond] = useState(false);

	const head = 'Linear is a purpose-built tool for planning and building products';
	const headWords = head.split(' ');

	const headAnimationTime = headWords.length * 80;
	const videoRef = useRef(null);

	useEffect(() => {
		if (inView) {
			const firstTimer = setTimeout(() => {
				setShowFirst(true);
			}, 100); //100ms between each item

			const secondTimer = setTimeout(() => {
				setShowSecond(true)
			}, headAnimationTime + 300) // wait for all words + some buffer

			return () => {
				clearInterval(firstTimer)
				clearTimeout(secondTimer)
			}
		}
	}, [inView, headAnimationTime])

	useEffect(() => {
		if (showSecond && videoRef.current) {
			setTimeout(() => {
				if (videoRef.current)
					videoRef.current.play();
			}, 2000)
		}
	}, [showSecond])

	return (
		<section className="mt-20">
			<div 
				ref={ref}
				className="max-w-5xl mx-auto px-4">
				<span 
					className="block w-full">
					<span className='inline-block max-w-[800px] text-[3.5rem] leading-tight font-medium'>
						{headWords.map((word, i) => ( // to show and unblur word by word
							<React.Fragment key={i}>
								<span
									className={clsx(`inline-block transition-all duration-1000 ease-out transform ${
									showFirst	
											? 'opacity-100 blur-0 translate-y-0'
											: 'opacity-0 blur-md translate-y-2'
									}`, softWhite)}
									style={{transitionDelay: `${i * 80}ms`}}
								>
									{word}
								</span>{' '}
							</React.Fragment> // to use whitespace with inline-block
						))}
					</span>
				</span>
				<h2 className={clsx(`mt-5 font-medium text-xl transition-all duration-1000 ease-out transform ${
					showSecond	
							? 'opacity-100 blur-0 translate-y-0'
							: 'opacity-0 blur-md translate-y-2'
					}`, greyWhite)}
				>
						Meet the system for modern software development.<br/>
						Streamline issues, projects, and product roadmaps
				</h2>
				<div className="flex flex-row mt-10 gap-4">
					<button
						className={`px-4 py-2 text-[hsl(210,11%,4%)] rounded-lg font-medium hover:bg-[hsl(0,0%,100%)] transition-all cursor-pointer
							duration-1000 ease-out transform ${
							showSecond	
									? 'opacity-100 blur-0 translate-y-0 bg-[hsl(0,0%,90%)]'
									: 'opacity-0 blur-md translate-y-2'
						}`}>
						Start building
					</button>
					<button className={`group flex items-center gap-2 px-4 py-2 font-medium rounded-lg hover:bg-[hsl(0,0%,15%)] transition-all cursor-pointer 
						ease-out transform ${
						showSecond	
								? 'opacity-100 blur-0 translate-y-0 delay-300 duration-1000'
								: 'opacity-0 blur-md translate-y-2'
						}`}>
						<span className="text-transparent bg-gradient-to-r from-[hsl(0,0%,90%)] to-[hsl(219,6%,57%)] bg-clip-text">
							Introducing Linear for Agents
						</span>
						<svg className="w-4 h-4 text-gray-400 fill-current group-hover:text-[hsl(0,0%,90%)] transition-colors duration-300"
							style= {{strokeWidth: '1.5'}}
							viewBox="0 0 16 16"
							role="img" 
							focusable="false" 
							aria-hidden="true" 
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
						</svg>
					</button>
				</div>
				<div className="mt-10 relative w-full rounded-xl overflow-hidden">
					<video 
						ref={videoRef}
						className={`w-full transition-all duration-1000 delay-700 ease-out transform
						${
							showSecond
								? 'opacity-100 blur-0 translate-y-0'
								: 'opacity-0 blur-2xl translate-y-2'
						}`}
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
					>
						<source src="../../start.mp4" type="video/mp4" />
					</video>
					<div className="absolute inset-0 bg-black/50 mix-blend-multiply p"></div>
				</div>
			</div>

		</section>
	)
}