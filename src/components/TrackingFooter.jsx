const getFooter = (Svg, title, desc) => (
	<div className="flex flex-col gap-3">
		<div className="flex items-center gap-2">
			<Svg/>
			<span className="text-base font-thin text-[#d0d6e0]">{title}</span>
		</div> 
		<span className="font-thin text-[#8a8f98]">
			{desc}
		</span>
	</div>
)

export default function TrackingFooter() {
	return (
		<div className="flex w-full h-25 gap-9">
			{getFooter(circleIcon, "Initiative", <>Track progress across custom<br/>issue flows for your team.</>)}
			{getFooter(stackIcon, "Cross-team projects", <>Switch between list and board.<br/>Group issues with swimlanes.</>)}
			{getFooter(filterIcon, "Milestones", <>Refine issue lists down to what’s<br/>most relevant to you.</>)}
			{getFooter(fireIcon, "Progress insights", <>Automatically apply deadlines to<br/>time-sensitive tasks.</>)}
		</div>
	);
}

function circleIcon() {
	return (
		<svg 
			className="w-4 h-4" 
			viewBox="0 0 16 16" 
			fill="#d0d6e0" 
			role="img" 
			focusable="false" 
			aria-hidden="true" 
			xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"></path>
		</svg>
	)
}

function stackIcon() {
	return (
		<svg 
			className="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="#d0d6e0" 
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true">
				<path fillRule="evenodd" clipRule="evenodd" d="M6.93213 2.21398C7.66484 1.90793 8.49512 1.93032 9.21389 2.28028L14.28 4.74739C15.2242 5.20709 15.2441 6.55895 14.3138 7.04673L9.2874 9.6826C8.48012 10.1058 7.51988 10.1058 6.7126 9.6826L1.68618 7.04673C0.75589 6.55895 0.775786 5.20709 1.71995 4.74739L6.78611 2.28028L6.93213 2.21398ZM8.55132 3.67054C8.24643 3.52213 7.89768 3.50303 7.58179 3.61428L7.44868 3.67054L2.83947 5.91363L7.41491 8.31243C7.7819 8.50486 8.2181 8.50486 8.58509 8.31243L13.1595 5.91363L8.55132 3.67054Z"></path>
				<path fillRule="evenodd" clipRule="evenodd" d="M13.9045 10.0768C14.272 9.90435 14.7242 10.0333 14.9153 10.365C15.1063 10.6966 14.9634 11.1047 14.5959 11.2772L9.49912 13.6693C8.55934 14.1102 7.44077 14.1102 6.50099 13.6693L1.40417 11.2772L1.33776 11.2428C1.01976 11.0547 0.905685 10.676 1.08483 10.365C1.26402 10.054 1.67295 9.92085 2.02626 10.0477L2.0956 10.0768L7.19241 12.468L7.38675 12.5464C7.84801 12.7022 8.36492 12.6757 8.80769 12.468L13.9045 10.0768Z"></path>
		</svg>
	)
}

function filterIcon() {
	return (
		<svg 
			className="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="#d0d6e0" 
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true">
				<path fillRule="evenodd" clipRule="evenodd" d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"></path>
		</svg>
	);
}

function fireIcon() {
	return (
		<svg 
			className="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="#d0d6e0" 
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true">
				<path fillRule="evenodd" clipRule="evenodd" d="M8.80596 1.18963C10 0.467371 9.5 1.97074 9.5 2.97299C9.5 3.97525 10.5 5.45947 11 5.97974C11.5 6.5 12 6.98199 12 6.98199C12.8575 7.87856 13 8.98398 13 9.98874V10.0159C13 12.7685 10.7614 15 8 15C5.23858 15 3 12.7685 3 10.0159C3 9 3.31522 8.48521 3.25 7.5C3.21077 6.90743 3 6.5 3 6C3 5.15486 4.34867 5.95895 5 6.5L6 7.45656V5.53023C6 4.11834 6.66687 2.78883 7.8 1.94169L8.80596 1.18963ZM8 13.9978C9.25 13.9978 10.5 13.5604 10.5 11.811C10.5 10.4429 9.48069 9.09715 8.63778 8.40117C8.35964 8.17151 8 8.38851 8 8.74969V10.4989C8 10.8601 7.63032 11.1027 7.30003 10.9582L6.19997 10.4771C5.86968 10.3327 5.49618 10.5754 5.51681 10.936C5.58908 12.1989 5.9719 13.9978 8 13.9978Z"></path>
		</svg>
	);
}