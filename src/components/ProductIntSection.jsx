import { GetErinImg, GetNanImg, GetYannImg } from "./Imgs";
import { GetHexagonIcon, GetMobileIcon, GetMobileSignalIcon, GetSunIcon, GetTickIcon } from "./Svgs";

function GetSuggestionComponent() {
	return (
		<div className="flex w-105 h-7 items-center gap-3.5">
			<span className="w-[76px] inline-block text-[0.8rem] text-[#8a8f98]">Suggestions</span>

			<div className="flex items-center">
				<button className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
					<GetNanImg/>
					<span className="text-sm text-[#f7f8f8]">nan</span>
				</button>
			</div>

			<div className="flex items-center">
				<button className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
					<GetMobileIcon/>
					<span className="text-sm text-[#f7f8f8]">Mobile App Refactor</span>
				</button>
			</div>

			<div className="flex items-center">
				<button className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
					<div className="w-2 h-2 rounded-full bg-[#ec6a5e]"></div>
					<span className="text-sm text-[#f7f8f8]">Slack</span>
				</button>
			</div>

		</div>
	)
}

function GetPlainComponent({topic, text}) {
	return (
		<div className="flex w-105 h-7 items-center gap-3.5">
			<span className="w-[76px] inline-block text-[0.8rem] text-[#8a8f98] tracking-tight">{topic}</span>

			<div className="flex items-center">
				<svg 
					className="w-4 h-4"
					viewBox="0 0 16 16" 
					fill="#9c9da1" 
					xmlns="http://www.w3.org/2000/svg" 
					role="img" 
					focusable="false" 
					aria-hidden="true" 
				>
					<path fillRule="evenodd" clipRule="evenodd" d="M14.9408 8.91622L12.9576 8.65753C12.9855 8.44385 13 8.22509 13 8.00195C13 7.77881 12.9855 7.56006 12.9576 7.34638L14.9408 7.08769C14.9799 7.38692 15 7.69208 15 8.00195C15 8.31182 14.9799 8.61699 14.9408 8.91622ZM14.4688 5.32244C14.2328 4.75336 13.9239 4.22215 13.5538 3.74046L11.968 4.95912C12.2328 5.30381 12.4533 5.68315 12.6214 6.08855L14.4688 5.32244ZM12.2615 2.44816L11.0428 4.034C10.6981 3.76912 10.3188 3.54868 9.91341 3.38057L10.6795 1.53312C11.2486 1.76911 11.7798 2.078 12.2615 2.44816ZM8.91426 1.06112L8.65557 3.04432C8.4419 3.01645 8.22314 3.00195 8 3.00195C7.77686 3.00195 7.5581 3.01645 7.34443 3.04432L7.08574 1.06112C7.38496 1.02209 7.69013 1.00195 8 1.00195C8.30987 1.00195 8.61504 1.02209 8.91426 1.06112ZM5.32049 1.53312L6.08659 3.38057C5.68119 3.54868 5.30185 3.76912 4.95716 4.034L3.73851 2.44816C4.22019 2.078 4.7514 1.76911 5.32049 1.53312ZM2.4462 3.74046L4.03204 4.95912C3.76716 5.30381 3.54673 5.68315 3.37862 6.08855L1.53116 5.32244C1.76715 4.75336 2.07605 4.22215 2.4462 3.74046ZM1.05917 7.08769C1.02013 7.38692 1 7.69208 1 8.00195C1 8.31182 1.02013 8.61699 1.05917 8.91622L3.04237 8.65753C3.01449 8.44385 3 8.22509 3 8.00195C3 7.77881 3.01449 7.56006 3.04237 7.34638L1.05917 7.08769ZM1.53116 10.6815L3.37862 9.91536C3.54673 10.3208 3.76716 10.7001 4.03204 11.0448L2.4462 12.2634C2.07605 11.7818 1.76715 11.2506 1.53116 10.6815ZM3.73851 13.5557L4.95716 11.9699C5.30185 12.2348 5.68119 12.4552 6.08659 12.6233L5.32049 14.4708C4.7514 14.2348 4.22019 13.9259 3.73851 13.5557ZM7.08574 14.9428L7.34443 12.9596C7.5581 12.9875 7.77686 13.002 8 13.002C8.22314 13.002 8.4419 12.9875 8.65557 12.9596L8.91427 14.9428C8.61504 14.9818 8.30987 15.002 8 15.002C7.69013 15.002 7.38496 14.9818 7.08574 14.9428ZM10.6795 14.4708L9.91341 12.6233C10.3188 12.4552 10.6981 12.2348 11.0428 11.9699L12.2615 13.5557C11.7798 13.9259 11.2486 14.2348 10.6795 14.4708ZM13.5538 12.2634L11.968 11.0448C12.2328 10.7001 12.4533 10.3208 12.6214 9.91536L14.4688 10.6815C14.2328 11.2506 13.924 11.7818 13.5538 12.2634Z" fill="#949698"></path>
				</svg>
				<span className="text-sm text-[#8a8f98]">
					{text}
				</span>
			</div>

			<div className="flex items-center">
			</div>

		</div>

	);
}

function GetNanWindow() { 
	return (
		<div className="absolute py-3 px-4 w-85 h-67 top-1/2 left-1/4 -translate-x-1 -translate-y-0.5 bg-[#141516] border rounded-md border-[rgba(255,255,255,0.05)]">
			<div className="flex flex-col">
				<div className="flex pb-4 items-center gap-2 border-b border-[rgba(255,255,255,0.05)]">
					<GetNanImg/>
					<span className="text-sm text-[#f7f8f8]">nan</span>
				</div>

				<div className="py-2 pb-3 border-b border-[rgba(255,255,255,0.05)]">
					<h3 className="text-[0.8rem] text-[#f7f8f8]">Why this assignee was suggested</h3>
					<span className="text-[0.8rem] text-[#8a8f98]">
						This person was the assignee on previous issues<br/>
						related to performance problems in the mobile app<br/>
						launch flow
					</span>
				</div>

				<div className="py-2 pb-2">
					<h3 className="text-[0.8rem] text-[#f7f8f8]">Alternatives</h3>

					<div className="h-1.5"></div>

					<div className="flex items-center gap-2">
						<div className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
							<GetYannImg/>
							<span className="text-sm text-[#f7f8f8]">Yann</span>
						</div>
						<div className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
							<GetErinImg/>
							<span className="text-sm text-[#f7f8f8]">Erin</span>
						</div>
					</div>

					<div className="h-2.5"></div>

					<button className="absolute w-80.5 h-8 left-2 bg-[hsl(210,5%,13%)] rounded-md border border-[hsl(240,5%,20%)]">
						<div className="flex items-center justify-center gap-2">
							<GetTickIcon/>
							<span className="text-[0.8rem] text-[#f7f8f8]">Accept suggestion</span>
						</div>
					</button>

				</div>

			</div>
		</div>
	);
}

export default function ProductIntSection() {
	return (
		<div className="relative w-110 h-40 px-4 py-4 bg-[#141516] rounded-md border border-[rgba(255,255,255,0.05)]">
			<div className="flex items-center gap-2">
				<GetSunIcon/>
				<span className="text-base text-[#f7f8f8]">Product Intelligence</span>
			</div>

			<div className="h-2"></div>

			{/* collum */}
			<div className="flex flex-col w-105 h-26 gap-2"> 
				<GetSuggestionComponent/>
				<GetPlainComponent topic="Duplicated of" text={"ENG - 1419 Loading spinner keeps running"}/>
				<GetPlainComponent topic="Related to" text={"ENG - 1820 Mobile app takes long time to..."}/>
			</div>

			{/* second window */}

			<div className="absolute py-3 px-4 w-85 h-67 top-1/2 left-1/4 -translate-x-1 -translate-y-0.5 bg-[#141516] border rounded-md border-[rgba(255,255,255,0.05)]">
				{/* col for the whole window */}
				<div className="flex flex-col">
					{/* col for the first part */}
					<div className="flex flex-col pb-3 gap-1 border-b border-[rgba(255,255,255,0.05)]">
						<div className="flex items-center gap-2">
							<GetMobileIcon/>
							<span className="text-sm text-[#f7f8f8]">Mobile App Refactor</span>
						</div>
						<span className="text-sm text-[#8a8f98]">Optimize mobile app performance</span>

						<div className="flex gap-4">
							<div className="flex items-center gap-1">
								<GetHexagonIcon/>
								<span className="text-sm text-[#f7f8f8]">In Progress</span>
							</div>
							<div className="flex items-center gap-1">
								<GetMobileSignalIcon/>
								<span className="text-sm text-[#f7f8f8]">Medium</span>
							</div>
						</div>
					</div>

					<div className="py-3 pb-3 border-b border-[rgba(255,255,255,0.05)]">
						<h3 className="text-[0.8rem] text-[#f7f8f8]">Why this project was suggested</h3>
						<div className="h-1"></div>
						<p className=" text-[0.8rem] text-[#8a8f98] tracking-[-0.1px]">
							This current issue seems to be a mobile app related<br/>
							bug that would fit well within the scope of this project.
						</p>
					</div>

					<div className="py-2 pb-2">


						<div className="h-2.5"></div>

						<button className="absolute w-80.5 h-8 left-2 bg-[hsl(210,5%,13%)] rounded-md border border-[hsl(240,5%,20%)]">
							<div className="flex items-center justify-center gap-2">
								<GetTickIcon/>
								<span className="text-[0.8rem] text-[#f7f8f8]">Accept suggestion</span>
							</div>
						</button>

					</div>

				</div>
		</div>

		</div>
	);
}
