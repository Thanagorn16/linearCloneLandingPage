import TrackingGlassGraph from "./TrackingGlassGraph";
import TrackingWorkGlass from "./TrackingWorkGlass";

export default function Tracking() {
	return (
		<section className="w-full bg-gradient-to-b from-[hsl(210,10%,8%)] to-[#090a0b]">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex items-center gap-x-2 py-40 pb-5">
					<div className="w-4 h-2 rounded-full bg-[#d4b144]"/>
					<p className="text-sm text-[#d0d6e0]">Task tracking and sprint planning</p>
				</div>

				<h1 className="text-6xl text-[#f7f8f8] font-medium">Issue tracking<br/>you'll enjoy using</h1>
				<p className="text-lg text-[#f7f8f8] mt-10">
					Optimized for speed and efficientcy.<br/>
					<span className="text-[#8a8f98]"> 
						Create tasks in seconds, discuss issues<br/>
						in context, and breeze through yout work<br/>
						in views tailored to you and your team.
					</span>
				</p>

				<div className="h-35"></div>

				{/* big image and overlay */}
				<div className="relative">
					<img 
						className="scale-170"
						alt="A screenshot of an issue board view in Linear showing three high-priority tasks" 
						data-nosnippet="true" 
						data-loaded="true" 
						loading="lazy" 
						width="3200" 
						height="1620" 
						decoding="async" 
						data-nimg="1" 
						src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
					</img>
					<div className="absolute inset-0 scale-170 bg-gradient-to-b from-transparent to-[#090a0b]"></div>
				</div>

				{/* second part */}
				<div className="flex mt-65 h-130 border-y-3 border-[hsla(0,0%,100%,.05)]">
					<div className="basis-1/2">
						<h1 className="pt-15 text-2xl font-medium text-[#f7f8f8]">
							Build momentum with Cycles
						</h1>
						<p className="text-lg text-[#8a8f98]">
							Create healthy routines and focus your<br/>
							team on what work should happen next.
						</p>

						<div className="h-10"></div>

						<TrackingGlassGraph/>
					</div>

					<div className="basis-1/2 border-l-3 border-[hsla(0,0%,100%,.05)]">
						<div className="pt-15 px-15">
							<h1 className="text-2xl font-medium text-[#f7f8f8]">
								Manage incoming work with Triage
							</h1>
							<p className="text-lg text-[#8a8f98]">
								Review and assign incoming bug reports,<br/>
								feature requests, adn other unplanned work.
							</p>

							<div className="h-10"></div>

							<TrackingWorkGlass/>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}