export default function CollabPage() {
    return (
		<section className="w-full bg-gradient-to-b from-[hsl(210,10%,8%)] via-[#090a0b] to-[#090a0b]">
			<div className="max-w-5xl mx-auto px-4 relative">
				<div className="flex items-center gap-x-2 py-40 pb-5">
					<div className="w-4 h-2 rounded-full bg-[#b59aff]"/>
					<p className="text-sm text-[#d0d6e0]">Workflows and integrations</p>
				</div>

                <div className="flex items-center gap-20">
                    <h1 className="text-6xl text-[#f7f8f8] font-medium">Collaborate across<br/>tools and teams</h1>
                    <p className="text-lg text-[#8a8f98] mt-10">
                        Expand the capabilities of the Linear system<br/> 
                        with a wide variety of integrations that keep<br/> 
                        everyone in your organization aligned and focused.
                    </p>
                </div>

				<div className="h-5"></div>
            </div>
        </section>
    );
}