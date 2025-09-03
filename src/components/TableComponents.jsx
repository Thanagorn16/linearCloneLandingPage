export const OneHeader = () => (
	<svg 
		className="w-full h-6"
		viewBox="0 0 16 16" 
		fill="#68cc58" 
		role="img" 
		focusable="false" 
		aria-hidden="true" 
		xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M12.5627 9.57636L12.75 9.69796L13.7032 10.3553C14.461 10.8779 14.9339 11.7171 14.9936 12.6286L15 12.825V13.1248C15 14.1111 14.2385 14.9196 13.2714 14.9944L13.1248 15H7.87519C6.88887 15 6.0804 14.2385 6.00564 13.2714L6 13.1248V12.825C6 11.9044 6.42236 11.0386 7.13885 10.472L7.29684 10.3553L8.25 9.69796C9.54299 8.80627 11.2335 8.76574 12.5627 9.57636ZM7.56266 7.57636L7.75 7.69796L8.67249 8.33269C8.35326 8.45808 8.04396 8.61758 7.75 8.81119L6.34989 9.73331C5.50723 10.2883 5 11.2297 5 12.2387V12.8112C5 12.8747 5.00271 12.9377 5.00802 12.9998L2.87519 13C1.88887 13 1.0804 12.2385 1.00564 11.2714L1 11.1248V10.825C1 9.90435 1.42236 9.03865 2.13885 8.47203L2.29684 8.35528L3.25 7.69796C4.54299 6.80627 6.23353 6.76574 7.56266 7.57636ZM10.5 3C11.8807 3 13 4.11929 13 5.5C13 6.88071 11.8807 8 10.5 8C9.11929 8 8 6.88071 8 5.5C8 4.11929 9.11929 3 10.5 3ZM5.5 1C6.88071 1 8 2.11929 8 3.5C8 4.88071 6.88071 6 5.5 6C4.11929 6 3 4.88071 3 3.5C3 2.11929 4.11929 1 5.5 1Z"></path>
	</svg>
)

export const OneBody = () => (
	<div>
		<span className="px-1 text-lg text-[#f7f8f8] border rounded-l-sm border-[#2c901c] bg-[#68cc5833]">
			Collaborate on
		</span>
		<span className="inline-block relative -top-6">
			<div className="absolute w-[2px] h-10 bg-[#2c901c]"></div>
			<span className="block font-thin text-[10px] w-6 h-3.5 rounded-xs text-center text-[#fff] bg-[#2c901c]">
				zoe
			</span>
			<span className="px-1 absolute text-lg text-[#f7f8f8]">ideas</span>
		</span>

		{/* space */}
		<div className="h-4"></div>

		<div>
			<span className="text-base font-light text-[#8a8f98]">
				Write down product ideas and work together on feature specs in realtime, multiplayer project
			</span>
			<span className="inline-block relative -top-4">
				<div className="absolute w-[2px] h-8 bg-[#5d6ad2]"></div>
				<span className="block font-thin text-[10px] w-8 h-3.5 rounded-xs text-center text-[#fff] bg-[#5d6ad2]">
					quinn
				</span>
			</span>
			<span className="text-base font-light text-[#8a8f98]">
				documents. Add **style** and ##structure with rich-text formatting options.
			</span>
		</div>
	</div>
);

export const TwoHeader = () => (
	<svg 
		className="w-full h-6" 
		viewBox="0 0 16 16" 
		fill="#68cc58" 
		role="img" 
		focusable="false" 
		aria-hidden="true" 
		xmlns="http://www.w3.org/2000/svg" 
	>
			<path fillRule="evenodd" clipRule="evenodd" d="M11.8688 11.52C12.8154 10.7532 13.5 9.56356 13.5 7.75C13.5 5.93644 12.8154 4.7468 11.8688 3.97997C10.8792 3.17825 9.486 2.75 8 2.75C6.30594 2.75 4.9352 3.19073 4.01455 3.96341C3.13416 4.7023 2.5 5.88101 2.5 7.75C2.5 8.85412 2.75464 9.71042 3.14105 10.3721C3.68197 11.1814 3.36513 12.0223 3.25987 12.2784C3.18733 12.4548 3.09968 12.622 3.04096 12.7335C3.03042 12.7535 3.02044 12.7724 3.01094 12.7904C2.95814 12.8904 2.9202 12.9623 2.88441 13.0376C2.88106 13.0447 2.87786 13.0515 2.87483 13.0581C3.11737 13.2377 3.43758 13.2752 3.97549 13.1356C4.28137 13.0563 4.57095 12.9391 4.86788 12.8166C4.87666 12.813 4.88571 12.8092 4.895 12.8054C5.01892 12.7542 5.18562 12.6853 5.33284 12.636C5.41258 12.6093 5.54224 12.569 5.69294 12.5444C5.78288 12.5296 6.05757 12.4868 6.3882 12.5731C6.90633 12.6909 7.45028 12.75 8 12.75C9.486 12.75 10.8792 12.3218 11.8688 11.52ZM6.01674 14.0268C6.66145 14.1767 7.33067 14.25 8 14.25C11.5014 14.25 15 12.2448 15 7.75C15 3.25518 11.5014 1.25 8 1.25C4.13401 1.25 1 3.25518 1 7.75C1 9.12189 1.32592 10.2619 1.87837 11.1837C2.04571 11.4064 1.88052 11.719 1.68711 12.085C1.38868 12.6498 1.02304 13.3417 1.70812 14.0268C2.92323 15.2419 4.5721 14.5614 5.44698 14.2003C5.73556 14.0812 5.93992 13.9969 6.01674 14.0268Z"></path>
	</svg>
)
export const TwoBody = () => (
	<div>
		<span className="px-1 text-lg text-[#f7f8f8]">
			Collect feedbackh
		</span>

		<div className="h-4"></div>

		<div>
			<span className="text-base font-light text-[#8a8f98]">
				Discuss ideas directly in context and refine your project specifications
			</span>
			<span className="inline-block translate-x-1 px-[2px] font-thin text-[#FFFFFF] bg-[#897844]">
				with inline commments.
			</span>
		</div>

		<div className="absolute flex flex-col w-59 h-30 translate-x-23 translate-y-1 border border-[#34343a] rounded-lg bg-[#232326] z-10">
			<div className="basis 2/3 p-3 border-b-1 border-[#34343a]">
				<div className="flex items-center gap-2 pb-2">
						<img 
							className="w-5 h-5 rounded-full"
							src="https://webassets.linear.app/images/ornj730p/production/835fa19a98f9cd22cfb8da73cc921aa1027edeb6-2048x2048.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2" 
							alt="Avatar of Julian" 
						/>
						<span className="inline-block relative text-sm text-[#f7f8f8]">julian</span>
						<span className="inline-block relative text-sm text-[#8a8f98]">just now</span>
						<div className="flex w-18 gap-4 justify-end">
							<svg 
								className="w-4 h-4"
								viewBox="0 0 16 16" 
								fill="#9c9da1" 
								role="img" 
								focusable="false" 
								aria-hidden="true" 
								xmlns="http://www.w3.org/2000/svg" 
							>
									<path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
							</svg>
							<svg 
								className="w-4 h-4" 
								viewBox="0 0 16 16" 
								fill="#9c9da1" 
								role="img" 
								focusable="false" 
								aria-hidden="true" 
								xmlns="http://www.w3.org/2000/svg" 
							>
								<path d="M4.2996 7.23968C4.01775 6.93614 3.5432 6.91857 3.23966 7.20042C2.93613 7.48227 2.91856 7.95682 3.20041 8.26035L6.45041 11.7603C6.7612 12.095 7.29647 12.0766 7.58346 11.7212L12.8335 5.22127C13.0937 4.89904 13.0435 4.42683 12.7213 4.16657C12.399 3.9063 11.9268 3.95654 11.6665 4.27877L6.96051 10.1053L4.2996 7.23968Z"></path>
							</svg>
						</div>
				</div>
				<span className="text-base font-light text-[#f7f8f8]">sounds like a good idea!</span>
			</div>
			<div className="basis-1/3">
				<div className="flex p-3 gap-2 items-center">
					<img 
						className="w-4 h-4 rounded-full"
						src="https://webassets.linear.app/images/ornj730p/production/33f99f8b8fa79df7781b3db5cb14173849043518-2616x2616.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" 
						alt="Avatar of Gavin" 
					></img>
					<span className="text-sm text-[#62666d]">Reply...</span>
				</div>
			</div>
		</div>
	</div>
)

export const ThreeHeader = () => (
	<svg 
		className="w-full h-6" 
		viewBox="0 0 16 16" 
		fill="#68cc58" 
		role="img" 
		focusable="false" 
		aria-hidden="true" 
		xmlns="http://www.w3.org/2000/svg" 
	>
		<path d="M1 10.75A4.25 4.25 0 0 0 5.25 15h1a.75.75 0 0 0 0-1.5h-1a2.75 2.75 0 0 1-2.75-2.75v-5.5A2.75 2.75 0 0 1 5.25 2.5h5.5a2.75 2.75 0 0 1 2.75 2.75v.997a.75.75 0 0 0 1.5 0V5.25A4.25 4.25 0 0 0 10.75 1h-5.5A4.25 4.25 0 0 0 1 5.25z"></path><path d="M10.75 14.25a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2z"></path>
	</svg>
)

export const ThreeBody = () => (
	<div>
		<span className="px-1 text-lg text-[#f7f8f8]">
			Convert text to issues
		</span>

		<div className="h-4"></div>

		<span className="w-full block text-base font-light text-[#8a8f98]">
			Seamlessly move between idea and execution.
		</span>

		<div className="h-3"></div>

		<ul className="flex flex-col gap-1">
			<li className="flex gap-2 px-2 w-84 h-6 items-center bg-[#23232c] rounded-md">
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
				<span className="text-[#8a8f98]">
					ENG-231 Implement contextual memory
				</span>
			</li>

			<li className="flex gap-2 px-2 w-84 h-6 items-center bg-[#23232c] rounded-md">
			<svg 
				className="w-4 h-4"
				xmlns="http://www.w3.org/2000/svg" 
				fill="#9c9da1" 
				viewBox="0 0 16 16"
				role="img" 
				focusable="false" 
				aria-hidden="true" 
				>
				<g fill="#F2C94C" opacity=".9">
					<path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-2A5 5 0 1 1 8 3a5 5 0 0 1 0 10Z"></path>
					<path d="M11.571 8A3.571 3.571 0 0 1 8 11.571V4.43A3.572 3.572 0 0 1 11.57 8Z"></path>
				</g>
			</svg>
				<span className="text-[#8a8f98]">
					ENG-232 Better bias filtering algorithms
				</span>
			</li>

			<li className="flex gap-2 px-2 w-84 h-6 items-center bg-[#23232c] rounded-md">
			<svg 
				className="w-4 h-4"
				xmlns="http://www.w3.org/2000/svg" 
				fill="#9c9da1" 
				viewBox="0 0 16 16"
				role="img" 
				focusable="false" 
				aria-hidden="true" 
				>
				<g fill="#F2C94C" opacity=".9">
					<path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-2A5 5 0 1 1 8 3a5 5 0 0 1 0 10Z"></path>
					<path d="M11.571 8A3.571 3.571 0 0 1 8 11.571V4.43A3.572 3.572 0 0 1 11.57 8Z"></path>
				</g>
			</svg>
				<span className="text-[#8a8f98]">
					ENG-233 Upgrade model selection logic
				</span>
			</li>
		</ul>

	</div>
)