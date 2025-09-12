import { GetArrowIcon, GetFlowerIcon, GetPurpleTickIcon, GetTickIcon } from "../Svgs";

export function GetStackWindow() {
    return (
		<div className="absolute py-3 px-4 w-85 h-67 top-1/2 left-1/4 -translate-x-1 -translate-y-0.5 bg-[#141516] border rounded-md border-[rgba(255,255,255,0.05)]">
			<div className="flex flex-col">
				<div className="flex pb-3 items-center gap-2 border-b border-[rgba(255,255,255,0.05)]">
                    <GetFlowerIcon/>
					<span className="text-sm text-[#8a8f98]">Issue Type</span>
                    <GetArrowIcon/>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#ec6d60]"></div>
                        <span className="text-sm text-[#8a8f98]">Bug</span>
                    </div>
				</div>
                <div className="h-1"></div>
				<div className="py-2 pb-3">
					<h3 className="text-[0.8rem] text-[#f7f8f8]">Why this label was suggested</h3>
                    <ul className="list-disc px-4 py-1 space-y-1.5">
                        <li className="text-sm text-[#8a8f98]">This appear to be a bug in the mobile app</li>
                        <li className="text-sm text-[#8a8f98]">
                            <div className="flex gap-1">
                                <span>A similar issue</span>
                                <div className="flex items-center px-1 gap-1 rounded-sm bg-[#27292b]">
                                    <GetPurpleTickIcon/>
                                    <span>ENG-2029</span>
                                    <span className="text-[#f7f8f8]">iOS app</span>
                                </div>
                            </div>
                        </li>
                        <div className="flex gap-1">
                            <div className="flex px-1 w-26 h-5 rounded-sm bg-[#27292b]">
                                <span className="text-sm text-[#f7f8f8] inline-block align-top">keeps freezing</span>
                            </div>
                            <span className="text-sm text-[#8a8f98] inline-block align-top">is also labeled as Bug</span>
                        </div>
                    </ul>
				</div>

				<div className="py-2 pb-2">
					<div className="h-13"></div>
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