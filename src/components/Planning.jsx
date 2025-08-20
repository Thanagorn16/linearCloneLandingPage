export default function Planning() {
	return (
		<section className="w-full bg-gradient-to-b from-[hsl(210,10%,8%)] to-[#090a0b]">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex items-center gap-x-2 py-40 pb-5">
					<div className="w-4 h-2 rounded-full bg-[#68cc58]"/>
					<p className="text-sm text-[#d0d6e0]">Project and long-term planning</p>
				</div>
				<h1 className="text-6xl text-[#f7f8f8] font-medium">Set the product direction</h1>
				<p className="text-lg text-[#f7f8f8] mt-10">
					Align your team around a unified product<br/>
					timeline. 
					<span className="text-[#8a8f98]"> 
						&nbsp;Plan, manage, and track all product<br/> 
						initiatives with Linear's visual planning tools.
					</span>
				</p>
				<div className="relative">
					<img 
						className="scale-200 mt-20" 
						alt="linear-planning"
						src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
					</img>
					<div className="absolute inset-0 scale-200 bg-gradient-to-b from-transparent to-[#090a0b]"></div>
				</div>
			</div>
		</section>
	);
}