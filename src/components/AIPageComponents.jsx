function GetAgentTag() {
	return (
		<div className="flex w-12 h-6 bg-[#1c1c1f] rounded-md items-center px-1 transform rotate-x-20">
			<span className="text-sm text-[#8a8f98]">Agent</span>
		</div>
	);
}

export function SecondTab() {
	return (
		<div className={`flex absolute inset-y-12 z-10 w-212 -right-4 h-11 bg-[#ffffff1a] rounded-md border border-[hsla(0,0%,100%,.2)]
			backdrop-blur-3xl shadow-2xl items-center p-3 gap-3
		`}>
				<div className="relative">
					<img 
						className="absolute w-5 h-5 top-1.5 opacity-20 blur-[1.5px]"
						alt="Profile picture of Cursor" 
						data-nosnippet="true" 
						data-loaded="true" 
						fetchPriority="high" 
						decoding="async" 
						data-nimg="1"
						src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5560210c-dce4-4c9d-8ab3-980ecae0d700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
					</img>
					<img 
						className="relative w-5 h-5"
						alt="Profile picture of Cursor" 
						data-nosnippet="true" 
						data-loaded="true" 
						fetchPriority="high" 
						decoding="async" 
						data-nimg="1"
						src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5560210c-dce4-4c9d-8ab3-980ecae0d700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
					</img>
				</div>

				<div>
					<div className="relative inline-block">
						<h2 className="absolute top-2 text-lg text-[#f7f8f8] opacity-20 blur-[1.5px]">Cursor</h2>
						<h2 className="relative text-lg text-[#f7f8f8] font-medium">Cursor</h2>
					</div>
				</div>

				<GetAgentTag/>

				<div className="grow flex flex-row-reverse">
					<svg
						className="absolute w-4 h-4 right-5 top-5 opacity-15 blur-[1px]"
						viewBox="0 0 16 16" 
						fill="#9c9da1" 
						role="img" 
						focusable="false" 
						aria-hidden="true" 
						xmlns="http://www.w3.org/2000/svg">
							<path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
					</svg>
					<svg
						className="relative w-4 h-4 right-2"
						viewBox="0 0 16 16" 
						fill="#9c9da1" 
						role="img" 
						focusable="false" 
						aria-hidden="true" 
						xmlns="http://www.w3.org/2000/svg">
							<path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
					</svg>
				</div>
		</div>
	)
}

export const GetSubTab = (ImageSrc, name) => {
	return (
		<div className="flex w-full h-10 p-4 items-center gap-3">
			<ImageSrc/>
			<span className="text-sm font-medium text-[#d0e6e0]">{name}</span>
			<GetAgentTag/>
		</div>
	);
}