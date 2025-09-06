export default function LinearInsight() {
	return (
		<div className="relative overflow-hidden border-b-1 border-[hsla(0,0%,100%,.05)]">
			<img 
				className="absolute inset-0 z-0 w-screen h-[760px] object-cover object-center"
				alt="A screenshot of a Cycle time chart" 
				data-nosnippet="true" 
				data-loaded="true" 
				loading="lazy" 
				decoding="async" 
				data-nimg="1" 
				src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f9cf4c26-8956-4aa2-0ffb-26066dfbdf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></img>

			<div className="absolute inset-y-2/3 w-full h-[760px] bg-gradient-to-b from-transparent via-[#090a0b] via-17% to-[#090a0b] z-10"></div>
			<div className="absolute inset-x-2/3 w-full h-[760px] bg-gradient-to-r from-transparent via-[#090a0b] via-30% to-[#090a0b] z-10"></div>
			<div className="absolute -inset-x-2/3 w-full h-[760px] bg-gradient-to-l from-transparent via-[#090a0b] via-35% to-[#090a0b] z-10"></div>

			<div className="relative w-1/2 h-150 z-20">
				<h3 className="text-2xl text-[#f7f8f8]">Linear Insight</h3>

				<div className="h-1.5"></div>
				<p className="text-xl font-light text-[#8a8f98]">
					Take the guesswork out of product planning with<br/> 
					realtime analytics and reporting dashboards.
				</p>
				<div className="h-5"></div>

				<a type="button">
					<div className="flex w-33 h-9 p-2 gap-2 items-center rounded-md border border-[#3e3e44]  bg-[#28282c]">
						<span className="text-base  text-[#f7f8f8]">Learn more</span>
						<svg 
							className="w-5 h-5" 
							viewBox="0 0 16 16" 
							fill="#9c9da1" 
							role="img" 
							focusable="false" 
							aria-hidden="true" 
							xmlns="http://www.w3.org/2000/svg">
								<path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
						</svg>
					</div>
				</a>
			</div>
		</div>
	);
}