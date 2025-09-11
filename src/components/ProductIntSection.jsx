function GetSuggestionComponent() {
	return (
		<div className="flex w-105 h-7 items-center gap-3">
			<span className="text-sm text-[#8a8f98]">Suggestion</span>

			<div className="flex items-center">
				<button className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
					<img 
						className="w-4 h-4 rounded-full"
						src="https://webassets.linear.app/images/ornj730p/production/e522be49c136f6b81a1c5cb3aa7b2075f78404c0-1305x1444.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" 
						alt="Avatar of Nan">
					</img>
					<span className="text-sm text-[#f7f8f8]">nan</span>
				</button>
			</div>

			<div className="flex items-center">
				<button className="flex px-[6px] py-[1px] items-center gap-1.5 border border-dashed border-[#3e3e44]">
				<svg className="w-4 h-4" 
					viewBox="0 0 16 16" 
					fill="#5e6ad2" 
					role="img" focusable="false" 
					aria-hidden="true" 
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5H10.5C11.0523 2.5 11.5 2.94772 11.5 3.5V12.5C11.5 13.0523 11.0523 13.5 10.5 13.5H5.5C4.94772 13.5 4.5 13.0523 4.5 12.5V3.5C4.5 2.94772 4.94772 2.5 5.5 2.5H6V3C6 3.55228 6.44772 4 7 4H9C9.55228 4 10 3.55228 10 3V2.5ZM3 3.5C3 2.11929 4.11929 1 5.5 1H10.5C11.8807 1 13 2.11929 13 3.5V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V3.5Z"></path>
				</svg>
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
		<div className="flex w-105 h-7 items-center gap-3">
			<span className="text-sm text-[#8a8f98]">{topic}</span>

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

export default function ProductIntSection() {
	return (
		<div className="relative w-110 h-40 p-5 bg-[#141516] rounded-md border border-[rgba(255,255,255,0.05)]">
			<div className="flex items-center gap-2">
				<SunIcon/>
				<span className="text-base text-[#f7f8f8]">Product Intelligence</span>
			</div>

			<div className="h-2"></div>

			{/* collum */}
			<div className="flex flex-col w-105 h-26 gap-2"> 
				<GetSuggestionComponent/>
				<GetPlainComponent topic="Duplicated of" text={"ENG - 1419 Loading spinner keeps running"}/>
				<GetPlainComponent topic="Related to" text={"ENG - 1820 Mobile app takes long time to..."}/>
			</div>

		</div>
	);
}

function SunIcon() {
	return (
		<svg 
		className="w-4 h-4"
		viewBox="0 0 16 16" 
		fill="#9c9da1" 
		role="img" 
		focusable="false" 
		aria-hidden="true" 
		xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M8.00098 11C8.41519 11 8.75098 11.3358 8.75098 11.75V14.25C8.75098 14.6642 8.41519 15 8.00098 15C7.58676 15 7.25098 14.6642 7.25098 14.25V11.75C7.25098 11.3358 7.58676 11 8.00098 11Z"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M2.2207 2.21973C2.5136 1.92683 2.98836 1.92683 3.28125 2.21973L8.53125 7.46973C8.82403 7.76263 8.82411 8.23742 8.53125 8.53027L3.28125 13.7803C2.98839 14.0731 2.51359 14.073 2.2207 13.7803C1.92783 13.4874 1.92787 13.0126 2.2207 12.7197L5.33691 9.60352C5.65187 9.28855 5.4288 8.75006 4.9834 8.75H1.75098C1.3368 8.75 1.00104 8.41416 1.00098 8C1.00098 7.58579 1.33676 7.25 1.75098 7.25H4.9834C5.42877 7.24994 5.65178 6.71146 5.33691 6.39648L2.2207 3.28027C1.92783 2.9874 1.92787 2.51262 2.2207 2.21973Z"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M9.9707 9.96973C10.2636 9.67683 10.7384 9.67683 11.0312 9.96973L13.7812 12.7197C14.0741 13.0126 14.0741 13.4874 13.7812 13.7803C13.4884 14.0731 13.0136 14.0731 12.7207 13.7803L9.9707 11.0303C9.67783 10.7374 9.67787 10.2626 9.9707 9.96973Z"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M14.251 7.25C14.6652 7.25 15.001 7.58579 15.001 8C15.001 8.41421 14.6652 8.75 14.251 8.75H11.751C11.3368 8.75 11.001 8.41421 11.001 8C11.001 7.58579 11.3368 7.25 11.751 7.25H14.251Z"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M12.7207 2.21973C13.0136 1.92683 13.4884 1.92683 13.7812 2.21973C14.0741 2.51262 14.0741 2.98738 13.7812 3.28027L11.0312 6.03027C10.7384 6.32311 10.2636 6.32315 9.9707 6.03027C9.67783 5.7374 9.67787 5.26262 9.9707 4.96973L12.7207 2.21973Z"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M8.00098 1C8.41519 1 8.75098 1.33579 8.75098 1.75V4.25C8.75098 4.66421 8.41519 5 8.00098 5C7.58676 5 7.25098 4.66421 7.25098 4.25V1.75C7.25098 1.33579 7.58676 1 8.00098 1Z"></path>
		</svg>
	);
}