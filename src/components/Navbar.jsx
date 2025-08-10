import { useState } from "react";
import { clsx } from 'clsx';

const textBtn = (hover = 'hover:bg-white/10') => clsx(
	`px-3 py-2 text-zinc-400 ${hover}
	text-sm font-light rounded-lg transition-colors 
	cursor-pointer`
)

function GetMenu({topic, desc, px = 'px-1'}) {
	return (
		<div className="relative flex flex-col">
			<a className={clsx(`mt-2 ${px} py-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer`)}>
				<h2 className="text-sm">{topic}</h2>
				<p className="text-xs tracking-tight text-[#62666a]">{desc}</p>
			</a>
		</div>
	);
}

function GetProductMenu() {
	return (
		<div className="absolute z-1 w-2xl h-20 py-39 mt-2 -translate-x-20 bg-[rgb(9,10,11)] border border-zinc-800 rounded-xl">
			{/* inner box */}
			<div className="flex absolute top-2 left-2 right-2 bottom-17 border border-zinc-800  rounded-lg bg-[#161616]">
				<div className="flex flex-col w-55 top-3 px-5 py-4 border-r-1 border-zinc-800">
					<span className="text-xs px-2 text-[#62666a]">Core Features</span>
					<GetMenu topic={"Plan"} desc={"Set the product direction with projects and initatives"}/>
					<GetMenu topic={"Build"} desc={"Make progress with issue tracking and cycle planning"}/>
				</div>
				<div className="flex flex-col grow top-3 px-5 py-4">
					<span className="text-xs px-2 text-[#62666a]">More</span>
					<div className="grid grid-flow-col grid-rows-3 gap-1">
						<GetMenu topic={"Customer requests"} desc={"Manage user feedback"} px={'px-2'}/>
						<GetMenu topic={"Insights"} desc={"Realtime analytics"} px={'px-2'}/>
						<GetMenu topic={"Linear Asks"} desc={"Workplace requests"} px={'px-2'}/>
						<GetMenu topic={"Intregations"} desc={"Collaborate across tools"} px={'px-2'}/>
						<GetMenu topic={"Mobile app"} desc={"Linear in your pocket"} px={'px-2'}/>
						<GetMenu topic={"Linear for Agents"} desc={"Collaborate with AI teammates"} px={'px-2'}/>
					</div>
				</div>
			</div>

			{/* bottom */}
			<div className="flex grow mt-25 px-6 py-1 justify-between">
				<a className={clsx(`${textBtn()} !text-[#f7f8f8]`)}> 
					New: Agent Interaction Guidelines and SDK
				</a>
				<button className={clsx(`${textBtn()} !text-[#828fff]`)}>Changelog</button>
			</div>
		</div>
	);
}

function GetResourceMenu() {
	return (
		<div className="absolute z-1 w-2xl h-20 py-32 mt-2 -translate-x-20 bg-[rgb(9,10,11)] border border-zinc-800 rounded-xl">
			{/* inner box */}
			<div className="flex absolute top-2 left-2 right-2 bottom-2 border border-zinc-800  rounded-lg bg-[#161616]">
				<div className="flex flex-col w-55 top-3 px-5 py-4 border-r-1 border-zinc-800">
					<span className="text-xs px-2 text-[#62666a]">Company</span>
					<GetMenu topic={"About"} desc={"Meet the team"}/>
					<GetMenu topic={"Careers"} desc={"We're hiring"}/>
				</div>
				<div className="flex flex-col grow top-3 px-5 py-4">
					<span className="text-xs px-2 text-[#62666a]">Explore</span>
					<div className="grid grid-flow-col grid-rows-3 gap-1">
						<GetMenu topic={"Developers"} desc={"Build on the Linear API"} px={'px-2'}/>
						<GetMenu topic={"Security"} desc={"Safe, secure, and private"} px={'px-2'}/>
						<GetMenu topic={"Docs"} desc={"How to use Linear"} px={'px-2'}/>
						<GetMenu topic={"Switch to Linear"} desc={"Migration guide"} px={'px-2'}/>
						<GetMenu topic={"Download"} desc={"Get the app"} px={'px-2'}/>
						<GetMenu topic={"Quality"} desc={"Conversation on quality"} px={'px-2'}/>
					</div>
				</div>
			</div>
		</div>
	);

}

function NavItem({label}) {
	const [open, setOpen] = useState(false);

	const DropMenu = () => {
		let menu;
		if (label === 'Product')
			menu = GetProductMenu();
		else
			menu = GetResourceMenu();
		return menu;
	}

	return (
		<div 
			className="relative group"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button className={textBtn('group-hover:bg-white/10')}>{label}</button>

			{/* transparent bridge to dropdown menu */}
			{open && (
				<div className="absolute top-full left-0 w-full h-4 bg-transparent"></div> 
			)}

			{open && (
				<DropMenu/>
			)}

		</div>
	)
} 

export default function Navbar() {
	
	return (
		<nav className="mx-auto w-full px-2 sm:px6 lg:px-8 border border-b-zinc-800">
			<div className="max-w-5xl px-4 mx-auto relative flex h-16 items-center justify-between ">
				<div className="flex gap-2 items-center">
					<img
						className="w-6 h-6 fill-zinc-100"
						src="https://img.icons8.com/?size=100&id=_5aWEke7Qa0t&format=png&color=FFFFFF"
						alt="Navbar_Icon"
					/>
					<a className="text-lg font-medium text-zinc-100">Linear</a>
				</div>

				<div className="flex top-[calc(100%+10px)] items-center gap-2 text-zinc-400 text-base font-sm">
					<NavItem label={"Product"}/>
					<NavItem label={"Resources"}/>
					<a className={textBtn()}>Pricing</a>
					<a className={textBtn()}>Customers</a>
					<a className={textBtn()}>Now</a>
					<a className={textBtn()}>Contact</a>
				</div>


				<div className="flex items-center gap-4">
					<button className={`${textBtn()}`}>Log in</button>
					<button className="px-3 py-2 bg-zinc-300 text-zinc-900 hover:bg-white text-sm rounded-lg transition-colors cursor-pointer">Sign up</button>
				</div>
			</div>
		</nav>
	)
}
