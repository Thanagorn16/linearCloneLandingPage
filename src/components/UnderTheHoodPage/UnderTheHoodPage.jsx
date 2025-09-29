import { svgBackground } from "./SvgBackground";

export default function UnderTheHoodPage() {
	return (
		<section className="w-full bg-gradient-to-b from-[hsl(210,10%,8%)] via-[#090a0b] to-[#090a0b]">
			<div className="max-w-5xl mx-auto px-4 relative">
				<div className="flex items-center gap-x-2 py-40 pb-5">
					<div className="w-4 h-2 rounded-full bg-transparent border border-[#62666d]"/>
					<p className="text-sm text-[#d0d6e0]">Under the hood</p>
				</div>

				<div className="flex relative">
					<div className="flex flex-col">
						<div>
							<h3 className="text-[#f7f8f8] text-[56px] leading-15">Built on strong <br/>foundations</h3>
							<div className="h-6"></div>
							<p className="text-base font-light text-[#8a8f98]">
								Linear is so simple to use, it’s easy to overlook the<br/> 
								wealth of complex technologies packed under the<br/> 
								hood that keep Linear robust, safe, and blazing fast.
							</p>
						</div>

						<div className="h-10"></div>
						<div className="w-120 h-[2px] bg-[#ffffff0d]"></div>

						<div className="h-10"></div>
						<div className="grid grid-cols-2 gap-x-10 gap-y-8">
							<span className="text-base text-[#f7f8f8]">Linear Sync Engine</span>
							<span className="relative text-base font-light text-[#8a8f98]">
								Built with a high-<br/>performance<br/>architecture and<br/>an obsessive focus<br/>on speed.
							</span>

							<span className="text-base text-[#f7f8f8]">Linear Sync Engine</span>
							<span className="relative text-base font-light text-[#8a8f98]">
								Best-in-class security<br/>practices keep your<br/>work safe and secure<br/>at every layer.
							</span>

							<span className="text-base text-[#f7f8f8]">Linear Sync Engine</span>
							<span className="relative text-base font-light text-[#8a8f98]">
								Built for teams of all<br/>sizes. From early-stage<br/>startups to global<br/>enterprises.
							</span>
						</div>

					</div>

					{/* background */}
					<div className="absolute left-1/2 translate-x-20 -translate-y-5">
						{svgBackground()}
					</div>
				</div>

			</div>


		</section>
	);
}