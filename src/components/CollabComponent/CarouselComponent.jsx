import { useRef, useState } from "react";
import { getCards } from "./CollabCards";
import { GetArrowIcon } from "../Svgs";

export function Carousel() {
	const scrollRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const scroll = (direction) => {
		const container = scrollRef.current;
		const scrollAmount = 348; // card width + gap

		if (direction === "left")
			container.scrollLeft -= scrollAmount;
		else
			container.scrollLeft += scrollAmount;

		setTimeout(() => {
			setCanScrollLeft(container.scrollLeft > 0);
			setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
		}, 100);
	}

	const cards = getCards();

	return (
		<div className="relative">
				<div 
					ref={scrollRef}
					className={`flex gap-3 pl-50 2xl:pl-195 pr-15 2xl:pr-25 overflow-x-auto scrollbar-hide scroll-smooth`}
					style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
				>
					{cards.map((card, index) => (
						<div key={index}>
							{card}
						</div>
					))}
				</div>

				<div className="flex justify-center mt-15 gap-3">
					<button 
						onClick={() => scroll('left')}
						disabled={!canScrollLeft}
						className={`w-10 h-10 flex items-center justify-center border rounded-full rotate-180 ${
							canScrollLeft
							? 'bg-[hsl(240,5%,16%)] border-[hsl(240,5%,25%)] cursor-pointer hover:bg-[hsl(240,5%,30%)]'
							: 'bg-[hsl(240,5%,10%)] border-[hsl(240,5%,15%)] cursor-not-allowed'
						}
						`}
					>
						{GetArrowIcon('w-5', 'h-5')}
					</button>
					<button 
						onClick={() => scroll('right')}
						disabled={!canScrollRight}
						className={`w-10 h-10 flex items-center justify-center border rounded-full ${
							canScrollRight
							? 'bg-[hsl(240,5%,16%)] border-[hsl(240,5%,25%)] cursor-pointer hover:bg-[hsl(240,5%,30%)]'
							: 'bg-[hsl(240,5%,10%)] border-[hsl(240,5%,15%)] cursor-not-allowed'
						}
						`}
					>
						{GetArrowIcon('w-5', 'h-5')}
					</button>

				</div>

		</div>
	);
}