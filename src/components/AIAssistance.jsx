import AIListMenu from "./AIListMenu";

export default function AIAssistance() {
    return (
		<section className="w-full bg-gradient-to-b from-[hsl(210,10%,8%)] to-[#090a0b]">
			<div className="max-w-5xl mx-auto px-4 relative">
				<div className="flex items-center gap-x-2 py-40 pb-5">
					<div className="w-4 h-2 rounded-full bg-[#02b8cc]"/>
					<p className="text-sm text-[#d0d6e0]">Artificial intelligence</p>
				</div>

				<h1 className="text-6xl text-[#f7f8f8] font-medium">AI-assised product development</h1>
				<p className="text-lg text-[#f7f8f8] mt-10">
					Linear for Agents.
					<span className="text-[#8a8f98]"> 
						&nbsp;Choose from a variety of AI<br/>
						agents and start delegating work, from code<br/>
                        generation to other technical tasks.
					</span>
				</p>

				<div className="h-5"></div>

				<a type="button">
					<div className="flex w-33 h-9 p-2 gap-2 items-center rounded-md border border-[#3e3e44]  bg-[#28282c]">
						<span className="text-base  text-[#f7f8f8]">Learn more</span>
						<svg 
							className="w-5 h-5" 
							viewBox="0 0 16 16" 
							fill="#9c9da1" 
							role="img" 
							focusable="false" 
							aria-hidden="true" 
							xmlns="http://www.w3.org/2000/svg">
								<path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
						</svg>
					</div>
				</a>

				<div className="h-15"></div>

                <AIListMenu/>

            </div>
        </section>
    );
}