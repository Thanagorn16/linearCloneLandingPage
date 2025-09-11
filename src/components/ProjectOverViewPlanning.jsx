import { GetHexagonIcon } from "./Svgs";

export default function ProjectOverview() {
	return (
		<div className="relative">
			<div className=" mt-10 w-95 h-70 p-6 rounded-xl bg-[hsla(0,0%,100%,.08)] border border-[hsla(0,0%,100%,.17)]">
				<h1 className="text-xl text-[#f7f8f8]">Project Overview</h1>
				{/* main grid */}
				<div className="grid grid-cols-6 w-85 py-5 gap-y-4  items-center">
					{/* span 1 */}
					<div className="col-span-1 col-start-1">
						<span className="block text-sm text-[#8a8f98]">Properties</span>
					</div>
					<div className="col-start-3 col-end-7">
						<div className="flex items-center gap-1">
							<GetHexagonIcon/>
							<span className="text-sm text-[#8a8f98] pr-2">In Progress</span>
							<svg className="w-3 h-3"
								viewBox="0 0 16 16" 
								fill="#9c9da1" 
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12.5 13.5V15H3.5V13.5H12.5ZM13.5 12.5V3.5C13.5 2.94771 13.0523 2.5 12.5 2.5H3.5C2.94771 2.5 2.5 2.94772 2.5 3.5V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5V15L3.24414 14.9873C2.06772 14.8677 1.13227 13.9323 1.0127 12.7559L1 12.5V3.5C1 2.20566 1.98361 1.14082 3.24414 1.0127L3.5 1H12.5L12.7559 1.0127C14.0164 1.14082 15 2.20566 15 3.5V12.5L14.9873 12.7559C14.8677 13.9323 13.9323 14.8677 12.7559 14.9873L12.5 15V13.5C13.0523 13.5 13.5 13.0523 13.5 12.5Z"></path><path d="M10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6Z"></path><path d="M11.405 12H4.59566C4.18761 12 3.88127 11.6641 4.0449 11.307C4.40693 10.5169 5.38905 9.33333 8.02449 9.33333C10.673 9.33333 11.6222 10.5286 11.9603 11.3187C12.1123 11.6738 11.8066 12 11.405 12Z"></path>
							</svg>
							<span className="text-sm text-[#8a8f98] pr-2">ENG</span>
							<div className="flex flex-row">
								<img 
									className="w-4 h-4 rounded-full"
									src="https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
								<img 
									className="w-4 h-4 rounded-full -translate-x-2"
									src="https://webassets.linear.app/images/ornj730p/production/74717706c51f3c14ebe2851e0076def007ebafdd-1000x1000.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
								<img

									className="w-4 h-4 rounded-full -translate-x-3.5"
									src="https://webassets.linear.app/images/ornj730p/production/e71a8d13b2d26a3a53303810550d00b23cb87ce5-200x200.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
								<img 
									className="w-4 h-4 rounded-full -translate-x-5"
									src="https://webassets.linear.app/images/ornj730p/production/f45112e8aeed10023708772eb88872fa97b4291c-200x200.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
							</div>
						</div>
					</div>

					{/* span 2 */}
					<div className="col-span-1 col-start-1">
						<span className="block text-sm text-[#8a8f98]">Resources</span>
					</div>
					<div className="col-start-3 col-end-7">
						<div className="flex flex-row items-center gap-1">
							<div className="flex gap-1 p-1 items-center rounded-sm bg-[rgb(49,49,54)]">
								<svg className="w-4 h-4" 
									viewBox="0 0 16 16" 
									focusable="false" 
									aria-hidden="true" 
									xmlns="http://www.w3.org/2000/svg">
										<path d="M5.33334 15C5.95218 15 6.54567 14.7541 6.98326 14.3166C7.42085 13.879 7.66668 13.2855 7.66668 12.6666V10.3333H5.33334C4.7145 10.3333 4.12101 10.5791 3.68342 11.0167C3.24583 11.4543 3 12.0478 3 12.6666C3 13.2855 3.24583 13.879 3.68342 14.3166C4.12101 14.7541 4.7145 15 5.33334 15Z" fill="#0ACF83"></path><path d="M3 8.00004C3 7.3812 3.24583 6.78771 3.68342 6.35012C4.12101 5.91254 4.7145 5.6667 5.33334 5.6667H7.66668V10.3333H5.33334C4.7145 10.3333 4.12101 10.0875 3.68342 9.64996C3.24583 9.21238 3 8.61888 3 8.00004Z" fill="#A259FF"></path><path d="M3 3.33334C3 2.71481 3.24558 2.1216 3.68277 1.68406C4.11997 1.24653 4.71299 1.00048 5.33152 1H7.66486V5.66668L5.33334 5.6667C4.7145 5.6667 4.12101 5.42085 3.68342 4.98326C3.24583 4.54567 3 3.95218 3 3.33334Z" fill="#F24E1E"></path><path d="M7.66681 1H10.0001C10.619 1 11.2125 1.24583 11.6501 1.68342C12.0877 2.12101 12.3335 2.7145 12.3335 3.33334C12.3335 3.95218 12.0877 4.54567 11.6501 4.98326C11.2125 5.42085 10.619 5.66668 10.0001 5.66668L7.66668 5.6667L7.66681 1Z" fill="#FF7262"></path><path d="M12.3335 8.00004C12.3335 8.61888 12.0877 9.21238 11.6501 9.64996C11.2125 10.0875 10.619 10.3334 10.0001 10.3334C9.38131 10.3334 8.78781 10.0875 8.35023 9.64996C7.91264 9.21238 7.66681 8.61888 7.66681 8.00004C7.66681 7.3812 7.91264 6.78771 8.35023 6.35012C8.78781 5.91254 9.38131 5.66668 10.0001 5.66668C10.619 5.66668 11.2125 5.91254 11.6501 6.35012C12.0877 6.78771 12.3335 7.3812 12.3335 8.00004Z" fill="#1ABCFE"></path>
								</svg>
								<span className="text-sm text-[#8a8f98] pr-2">Exploration</span>
							</div>
							<div className="flex gap-1 p-1 items-center rounded-sm bg-[rgb(49,49,54)]">
								<svg 
									className="w-4 h-4" 
									viewBox="0 0 16 16" 
									fill="#68CC58" role="img" 
									focusable="false" 
									aria-hidden="true" 
									xmlns="http://www.w3.org/2000/svg">
										<svg><path d="M14.2994 14.0165C14.918 13.8192 15.1804 13.0923 14.8677 12.5151L8.9336 1.56073C8.52859 0.813089 7.47141 0.813091 7.0664 1.56073L1.1323 12.5151C0.819613 13.0923 1.08197 13.8192 1.70057 14.0165C1.8343 14.0592 1.9683 14.1004 2.10257 14.1403C5.96173 15.2866 10.0383 15.2866 13.8974 14.1403C14.0317 14.1004 14.1657 14.0592 14.2994 14.0165ZM10.467 7.80774C10.2381 8.15661 9.95257 8.54009 9.56836 8.81897C9.56836 8.81897 8.51122 7.81904 8.06836 7.81901C7.56836 7.81897 6.06836 8.81901 6.06836 8.81901C6.06836 8.81901 5.70485 8.36728 5.44099 7.97759L8 3.25367L10.467 7.80774Z"></path></svg>
								</svg>
								<span className="text-sm text-[#8a8f98] pr-2">Feedback</span>
							</div>
						</div>
					</div>

					{/* span 3 */}
					<div className="col-span-1 col-start-1 py-1 self-start">
						<span className="block text-sm text-[#8a8f98]">Milestones</span>
					</div>
					<div className="col-start-3 col-end-7">
						<div className="flex flex-col gap-y-2">
							<div className="flex w-43 gap-1 p-1 items-center rounded-sm">
								<DaimondIcon/>
								<span className="text-sm text-[#8a8f98] pr-2">Design Review 100%</span>
							</div>
							<div className="flex w-51 gap-1 p-1 items-center rounded-sm">
								<DaimondIcon/>
								<span className="text-sm text-[#8a8f98] pr-2">Internal Alpha 100% of 10</span>
							</div>
							<div className="flex w-51 gap-1 p-1 items-center rounded-sm">
								<svg 
									className="w-4 h-4" 
									viewBox="0 0 16 16" 
									stroke="#fcba03" 
									strokeWidth="2"
									aria-hidden="true">
										<path d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"></path>
								</svg>
								<span className="text-sm text-[#8a8f98] pr-2">GA 25% of 53</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* overlay */}
			<div className="absolute w-100  inset-0  bg-gradient-to-l from-[#090a0b] to-transparent"></div>
			<div className="absolute h-75 inset-0  bg-gradient-to-b from-transparent to-[#090a0b]"></div>
		</div>
	);
}

function DaimondIcon() {
	return (
		<svg 
			className="w-4 h-4" 
			viewBox="0 0 16 16" 
			fill="#7170ff" 
			aria-hidden="true">
				<path d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z" fill="var(--color-brand-bg)" strokeWidth="2" strokeLinejoin="round"></path>
		</svg>
	);
}