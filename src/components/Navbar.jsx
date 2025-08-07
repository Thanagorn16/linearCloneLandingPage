import { useState } from "react";
import { clsx } from 'clsx';

const textBtn = `px-3 py-2 text-zinc-400 hover:bg-white/10 
					text-sm font-light rounded-lg transition-colors 
					cursor-pointer`


function NavItem({label, dropdownItems}) {
	const [open, setOpen] = useState(false);

	return (
		<div 
			className="relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button className={textBtn}>{label}</button>

			{open && (
				<div className="absolute w-2xl h-20 py-39 mt-2 -translate-x-15 bg-[rgb(9,10,11)] border border-zinc-800 rounded-xl">
						<div className="absolute top-2 left-3 right-3 bottom-17 flex box-border border-1 p-4 rounded-lg bg-white/10">

						</div>
				</div>
			)}
		</div>
	)
} 

export default function Navbar() {
	
	return (
		<nav className="mx-auto w-full px-2 sm:px6 lg:px-8 border border-b-zinc-800">
			<div className="max-w-5xl px-4 mx-auto relative flex h-16 items-center justify-between group">
				<div className="flex gap-2 items-center">
					<img
						className="w-6 h-6 fill-zinc-100"
						src="https://img.icons8.com/?size=100&id=_5aWEke7Qa0t&format=png&color=FFFFFF"
						alt="Navbar_Icon"
					/>
					<a className="text-lg font-medium text-zinc-100">Linear</a>
				</div>

				<div className="flex items-center gap-2 text-zinc-400 text-base font-sm">
					<NavItem label={"Product"} dropdownItems={["Plan", "Building"]}/>
					<a className={textBtn}>Resources</a>
					<a className={textBtn}>Pricing</a>
					<a className={textBtn}>Customers</a>
					<a className={textBtn}>Now</a>
					<a className={textBtn}>Contact</a>
				</div>


				<div className="flex items-center gap-4">
					<button className={`${textBtn}`}>Log in</button>
					<button className="px-3 py-2 bg-zinc-300 text-zinc-900 hover:bg-white text-sm rounded-lg transition-colors cursor-pointer">Sign up</button>
				</div>
			</div>
		</nav>
	)
}
