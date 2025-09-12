import { GetMobileIcon, GetHexagonIcon, GetMobileSignalIcon, GetTickIcon } from "../Svgs";

export function GetMobileWindow() {
	return (
		<div className="absolute py-3 px-4 w-85 h-67 top-1/2 left-1/4 -translate-x-1 -translate-y-0.5 bg-[#141516] border rounded-md border-[rgba(255,255,255,0.05)]">
			{/* col for the whole window */}
			<div className="flex flex-col">
				{/* col for the first part */}
				<div className="flex flex-col pb-3 gap-1 border-b border-[rgba(255,255,255,0.05)]">
					<div className="flex items-center gap-2">
						<GetMobileIcon />
						<span className="text-sm text-[#f7f8f8]">Mobile App Refactor</span>
					</div>
					<span className="text-sm text-[#8a8f98]">Optimize mobile app performance</span>

					<div className="flex gap-4">
						<div className="flex items-center gap-1">
							<GetHexagonIcon />
							<span className="text-sm text-[#f7f8f8]">In Progress</span>
						</div>
						<div className="flex items-center gap-1">
							<GetMobileSignalIcon />
							<span className="text-sm text-[#f7f8f8]">Medium</span>
						</div>
					</div>
					<div className="h-1"></div>
				</div>

				<div className="h-1"></div>

				<div className="py-3 pb-3 border-b border-[rgba(255,255,255,0.05)]">
					<h3 className="text-[0.8rem] text-[#f7f8f8]">Why this project was suggested</h3>
					<div className="h-1"></div>
					<p className=" text-[0.8rem] text-[#8a8f98] tracking-[-0.1px]">
						This current issue seems to be a mobile app related<br />
						bug that would fit well within the scope of this project.
					</p>
				</div>

				<div className="py-2 pb-2">
					<div className="h-2.5"></div>

					<button className="absolute w-80.5 h-8 left-2 bg-[hsl(210,5%,13%)] rounded-md border border-[hsl(240,5%,20%)]">
						<div className="flex items-center justify-center gap-2">
							<GetTickIcon />
							<span className="text-[0.8rem] text-[#f7f8f8]">Accept suggestion</span>
						</div>
					</button>
				</div>

			</div>

		</div>
	);
}