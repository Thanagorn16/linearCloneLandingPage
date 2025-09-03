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

export default function PlanningFooter() {
	return (
		<div className="flex w-full h-25 gap-15">
			{getFooter(initIcon, "Initiative", <>Coordinate strategic product<br/>efforts.</>)}
			{getFooter(boxIcon, "Cross-team projects", <>Collaborate across teams and<br/>departments.</>)}
			{getFooter(daimondIcon, "Milestones", <>Break projects down into<br/>concrete phases.</>)}
			{getFooter(progressIcon, "Progress insights", <>Track scope, velocity, and<br/>progress overtime.</>)}
		</div>
	);
}

function initIcon() {
	return (
		<svg 
			className="w-4 h-4" 
			viewBox="0 0 16 16" 
			fill="#d0d6e0" 
			role="img" 
			focusable="false" 
			aria-hidden="true" 
			xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M7.4145 8.3381C7.68162 7.8873 8.31838 7.8873 8.5855 8.3381L11.896 13.925C12.2589 14.5374 11.6035 15.2506 10.9879 14.9132L8.10753 13.3343C8.04032 13.2975 7.95967 13.2975 7.89247 13.3343L5.0121 14.9132C4.39652 15.2506 3.74112 14.5374 4.10401 13.925L7.4145 8.3381Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 8.96927 2.75037 9.87822 3.18945 10.668L3.38867 10.999L3.42773 11.0654C3.60231 11.4033 3.4953 11.825 3.16992 12.0371C2.84468 12.249 2.41642 12.1766 2.17773 11.8809L2.13281 11.8184L2.00195 11.6104C1.36597 10.5558 1 9.31963 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.40749 14.5834 10.7198 13.8672 11.8184L13.8223 11.8809C13.5836 12.1766 13.1553 12.249 12.8301 12.0371C12.4831 11.8109 12.3851 11.346 12.6113 10.999L12.8105 10.668C13.2496 9.87822 13.5 8.96927 13.5 8Z"></path>
		</svg>
	)
}

function boxIcon() {
	return (
		<svg 
			className="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="#d0d6e0" 
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true">
				<path d="m11.927 13.232-1.354.78c-.937.54-1.406.811-1.904.917a3.22 3.22 0 0 1-1.338 0c-.498-.106-.967-.376-1.904-.917l-1.354-.78c-.937-.541-1.406-.811-1.747-1.19a3.212 3.212 0 0 1-.669-1.157C1.5 10.401 1.5 9.861 1.5 8.78V7.22c0-1.082 0-1.622.157-2.106.14-.429.368-.823.67-1.157.34-.379.809-.649 1.746-1.19l1.354-.78c.937-.54 1.406-.811 1.904-.917a3.22 3.22 0 0 1 1.338 0c.498.106.967.376 1.904.917l1.354.78c.937.541 1.406.811 1.747 1.19.301.334.53.728.669 1.157.157.484.157 1.024.157 2.106v1.56c0 1.082 0 1.622-.157 2.106-.14.429-.368.823-.67 1.157-.34.379-.809.649-1.746 1.19Zm-5.751-.52c.542.313.862.492 1.075.598V9.853a2.25 2.25 0 0 0-1.224-2.002l-3.02-1.51c-.005.217-.007.5-.007.878v1.56c0 1.183.017 1.438.084 1.642.074.229.196.439.356.617.144.16.358.303 1.383.894l1.353.78Zm2.575.597c.212-.105.532-.284 1.073-.596l1.353-.78c1.026-.592 1.239-.735 1.383-.895.16-.178.282-.389.356-.617.066-.204.084-.459.084-1.642V7.22c0-.378-.002-.661-.006-.878l-3 1.5-.007.003a2.25 2.25 0 0 0-1.236 2.009v3.456Zm3.757-8.402c-.15-.144-.42-.316-1.33-.841l-1.354-.78c-1.025-.592-1.256-.705-1.467-.75a1.72 1.72 0 0 0-.714 0c-.211.045-.442.158-1.467.75l-1.353.78c-.91.525-1.18.697-1.33.84L6.677 6.5l.026.013.29.145a2.25 2.25 0 0 0 2.013 0l.308-.154.009-.004 3.184-1.592Z"></path>
		</svg>
	)
}

function daimondIcon() {
	return (
		<svg 
			className="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="#d0d6e0" 
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true">
				<path d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z" strokeWidth="2" strokeLinejoin="round"></path>
		</svg>
	);
}

function progressIcon() {
	return (
		<svg 
			className="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="#d0d6e0" 
			viewBox="0 0 16 16"
			role="img" 
			focusable="false" 
			aria-hidden="true">
				<path fillRule="evenodd" clipRule="evenodd" d="M3 9C3.55228 9 4 9.44772 4 10V13C4 13.5523 3.55228 14 3 14H2C1.44772 14 1 13.5523 1 13V10C1 9.44772 1.44772 9 2 9H3ZM14 6C14.5523 6 15 6.44772 15 7V13C15 13.5523 14.5523 14 14 14H13C12.4477 14 12 13.5523 12 13V7C12 6.44772 12.4477 6 13 6H14ZM8.5 2C9.05229 2 9.5 2.44772 9.5 3V13C9.5 13.5523 9.05229 14 8.5 14H7.5C6.94772 14 6.5 13.5523 6.5 13V3C6.5 2.44772 6.94772 2 7.5 2H8.5Z"></path>
		</svg>
	);
}