import { useState } from "react";
import { GetSunIcon } from "../Svgs";
import { GetSuggestionComponent, GetPlainComponent } from "./ProductIntWindow";


export default function ProductIntSection() {
	return (
		<div className="relative w-110 h-40 px-4 py-4 bg-[#141516] rounded-md border border-[rgba(255,255,255,0.05)]">

			<div className="flex items-center gap-2">
				<GetSunIcon />
				<span className="text-base text-[#f7f8f8]">Product Intelligence</span>
			</div>

			<div className="h-2"></div>

			{/* collum */}
			<div className="flex flex-col w-105 h-26 gap-2">
				<GetSuggestionComponent />
				<GetPlainComponent topic="Duplicated of" text={"ENG - 1419 Loading spinner keeps running"} />
				<GetPlainComponent topic="Related to" text={"ENG - 1820 Mobile app takes long time to..."} />
			</div>

		</div>
	);
}
