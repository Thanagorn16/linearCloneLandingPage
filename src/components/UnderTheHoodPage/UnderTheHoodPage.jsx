import { svgBackground } from "./SvgBackground";

export default function UnderTheHoodPage() {
    return (
		<section className="w-full bg-gradient-to-b from-[hsl(210,10%,8%)] via-[#090a0b] to-[#090a0b]">
			<div className="max-w-5xl mx-auto px-4 relative">
                {svgBackground()}
            </div>
        </section>
    );
}