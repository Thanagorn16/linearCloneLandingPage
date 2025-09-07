export default function AIListMenu() {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col relative w-5/6 h-85 border border-[#3e3e44] rounded-md bg-[#ffffff1a]">
				<div className="flex w-full h-13 z-0 p-3 items-center shadow">
						<div className="absolute w-0.5 h-4 bg-indigo-400 animate-ping"></div>
						<span className="ml-3 text-lg text-[#8a8f98]">Assign to...</span>
				</div>
				<div className={`flex absolute inset-y-12 z-10 w-212 -right-4 h-11 bg-[#ffffff1a] rounded-md border border-[#3d3e44]
						backdrop-blur-3xl shadow items-center p-3 gap-3
					`}>
						<div className="relative">
							<img 
								className="absolute w-5 h-5 top-1.5 opacity-20 blur-[1.5px]"
								alt="Profile picture of Cursor" 
								data-nosnippet="true" 
								data-loaded="true" 
								fetchpriority="high" 
								decoding="async" 
								data-nimg="1"
								src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5560210c-dce4-4c9d-8ab3-980ecae0d700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
							</img>
							<img 
								className="relative w-5 h-5"
								alt="Profile picture of Cursor" 
								data-nosnippet="true" 
								data-loaded="true" 
								fetchpriority="high" 
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
				</div>
			</div>
		</div>
	);
}

							// <div className="relative inline-block">
							// 	<h2 className="absolute top-2 text-lg text-[#f7f8f8] opacity-20 blur-[1.5px]">Cursor</h2>
							// 	<h2 className="relative text-lg text-[#f7f8f8] font-medium">Cursor</h2>
							// 	<h2 className="text-lg text-[#f7f8f8] blur-[1px]">Cursor</h2>
							// 	<h2 className="text-lg text-[#f7f8f8] font-medium opacity-30 top-full left-0"
							// 		style={{
							// 			transform: 'scaleY(-1)',
							// 			background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 70%)',
							// 			WebkitBackgroundClip: 'text',
							// 			backgroundClip: 'text',
							// 			WebkitTextFillColor: 'transparent',
							// 			color: 'transparent'
							// 		}}
							// 	>
							// 		Cursor
							// 	</h2>