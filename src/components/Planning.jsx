import EditorPart from "./EditorPart";
import NotifCard from "./NotifCard";
import PlanningFooter from "./PlanningFooter";
import ProjectOverview from "./ProjectOverViewPlanning";

export default function Planning() {
	return (
		<section className="w-screen bg-gradient-to-b from-[hsl(210,10%,8%)] to-[#090a0b]">
			<div className="relative max-w-5xl mx-auto px-4 z-10"> 
				{/* first part */}
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
						className="scale-150 object-cover" 
						alt="linear-planning"
						src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
					</img>
					<div className="absolute z-0 inset-0 scale-150 bg-gradient-to-b from-transparent to-[#090a0b]"></div>
				</div>


				{/* second part */}
				<div className="flex mt-65 h-150 border-y-3 border-[hsla(0,0%,100%,.05)]">
					<div className="basis-1/2">
						<h1 className="pt-15 text-2xl font-medium text-[#f7f8f8]">
							Manage projects end-to-end
						</h1>
						<p className="text-lg text-[#8a8f98]">
							Consolidate specs, milestones, tasks, and other<br/>
							documentation in one centralized location.
						</p>
						<ProjectOverview/>
					</div>

					<div className="border-l-3 border-[hsla(0,0%,100%,.05)]">
						<div className="pt-15 px-15">
							<h1 className="text-2xl font-medium text-[#f7f8f8]">
								Project updates
							</h1>
							<p className="text-lg text-[#8a8f98]">
								Communicate progress and project<br/>
								health with built-in project updates.
							</p>
							<NotifCard/>
						</div>
					</div>
				</div>

				{/* third part */}
				<EditorPart/>

				<div className="h-15"></div>

				{/* last part */}
				<PlanningFooter/>

			</div>
		</section>
	);
}