function Card({image, alt, title}) {
	return (
		<div className="basis-64 group">
			<a className="absolute w-90 h-90 group bg-[hsl(210,5%,8%)] rounded-xl transition-colors duration-200 group-hover:bg-[hsl(210,5%,10%)]">
				{image && <img src={image} alt={alt}
					className="w-full h-70 px-15 pt-10 pb-0 object-cover"
				/>}
				<div className="absolute flex bottom-6 left-6 justify-between items-center">
					<span className="flex-grow text-xl text-[#f7f8f8] leading-tight pr-20">
						{title}
					</span>
					<PlusSign/>
				</div>
			</a>
		</div>
	);
}

export default function Purpose() {
	return (
		<section className="max-w-5xl mx-auto h-190 px-4 mt-25 ">
			<div className="flex flex-row gap-x-25">
				<div className="basis-1/2">
					<h1 className="text-6xl font-medium text-[#f7f8f8]">
						Made for modern product teams
					</h1>
				</div>

				<div className="basis-1/2 self-end">
					<p className="text-base text-[#8a8f98]">
						Linear is shaped by the practices and principles<br/>
						that distinguish world-class product teams from<br/>
						the rest: relentless focus, fast execution, and a<br/>
						commitment to the quality of craft.
						<a className="text-[#f7f8f8] cursor-pointer"> Make the switch</a>
					</p>
				</div>
			</div>

			{/* cards */}
			<div className="flex flex-row mt-15 gap-x-30">
				<Card image="../../development.png" alt="development" title={<>Purpose-built for<br/>product development</>}/>
				<Card image="../../speed.png" alt="speed" title='Designed to move fast'/>
				<Card image="../../craft.png" alt="craft" title='Crafted to perfection'/>
			</div>

		</section>
	);

}

function PlusSign() {
	return (
		<div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-[hsl(240,5%,16%)] 
			transition-border duration-300  group-hover:bg-[hsl(240,4%,16%)]`}>
			<svg 
				className="w-6 h-6 text-[hsl(219,6%,57%)] transition-colors duration-300 group-hover:text-[#f7f8f8]" 
				aria-hidden="true" 
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 30 30"
			>
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13h14m-7 7V7"/>
			</svg>
		</div>
	);
}