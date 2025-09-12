import { useState } from "react";
import { GetNanImg, GetYannImg, GetErinImg } from "../Imgs";
import { GetTickIcon } from "../Svgs";

export function DropNanWindow() {
	const [open, setOpen] = useState(false);

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className="flex items-center">
				<button className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
					<GetNanImg />
					<span className="text-sm text-[#f7f8f8]">nan</span>
				</button>
			</div>

			{open && (
				<GetNanWindow />
			)}
		</div>
	)
}

function GetNanWindow() {
	return (
		<div className="absolute py-3 px-4 w-85 h-67 top-1/2 left-1/4 -translate-x-1 -translate-y-0.5 bg-[#141516] border rounded-md border-[rgba(255,255,255,0.05)]">
			<div className="flex flex-col">
				<div className="flex pb-4 items-center gap-2 border-b border-[rgba(255,255,255,0.05)]">
					<GetNanImg />
					<span className="text-sm text-[#f7f8f8]">nan</span>
				</div>

				<div className="py-2 pb-3 border-b border-[rgba(255,255,255,0.05)]">
					<h3 className="text-[0.8rem] text-[#f7f8f8]">Why this assignee was suggested</h3>
					<span className="text-[0.8rem] text-[#8a8f98]">
						This person was the assignee on previous issues<br />
						related to performance problems in the mobile app<br />
						launch flow
					</span>
				</div>

				<div className="py-2 pb-2">
					<h3 className="text-[0.8rem] text-[#f7f8f8]">Alternatives</h3>

					<div className="h-1.5"></div>

					<div className="flex items-center gap-2">
						<div className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
							<GetYannImg />
							<span className="text-sm text-[#f7f8f8]">Yann</span>
						</div>
						<div className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
							<GetErinImg />
							<span className="text-sm text-[#f7f8f8]">Erin</span>
						</div>
					</div>

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