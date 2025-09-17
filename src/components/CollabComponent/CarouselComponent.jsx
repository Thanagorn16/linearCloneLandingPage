import { useRef, useState } from "react";

export function CarouselNew() {
  const [expanded, setExpanded] = useState(true);
  const [index, setIndex] = useState(0);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ];

  const next = () => {
    if (!expanded) setExpanded(true); // expand first
    else setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    if (expanded) setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

        // ${expanded ? "fixed top-0 left-0 w-screen px-0" : "max-w-5xl mx-auto px-4"}
  return (
    <div
      className={`
        relative transition-all duration-500  w-screen px-0
      `}
    >
      {/* Carousel wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="min-w-full flex items-center justify-center h-64 bg-gray-200 text-xl font-bold">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute  bg-white rounded-full shadow p-2"
      >
		Prev.
      </button>
      <button
        onClick={next}
        className="absolute left-1/2 bg-white rounded-full shadow p-2"
      >
		Next
      </button>
    </div>
  );
}


export function Carousel({ cards }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i) => {
    if (!containerRef.current) return;

    // Clamp index to valid range
    const newIndex = Math.max(0, Math.min(i, cards.length - 1));

    const child = containerRef.current.children[newIndex];
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setIndex(newIndex);
    }
  };

  return (
    <div className="relative w-screen h-[490px] overflow-hidden">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3"
      >
        {cards.map((Card, i) => (
          <div className="snap-center shrink-0" key={i}>
            {Card}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-2 left-1 -translate-x-1/2 flex gap-2">
        <button
          disabled={index === 0}
          className="px-2 py-1 bg-amber-300 text-white rounded disabled:opacity-50"
          onClick={() => scrollTo(index - 1)}
        >
          Prev
        </button>
        <button
          disabled={index === cards.length - 1}
          className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
          onClick={() => scrollTo(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
function SnapScroll() {
	const containerRef = useRef(null);
	const [index, setIndex] = useState(0);

	const scrollTo = (i) => {
		if (!containerRef.current) return;
		
		const child = containerRef.current.children[i];
		if (child) {
			child.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
			setIndex(i);
		}

	}

	const cards = getCards();

    return (
        <div className="flex w-1200 h-[490px] gap-3">
			<div            
				ref={containerRef}
				className="flex w-full max-w-[1200px] h-[469px] overflow-x-auto snap-center gap-3 snap-x snap-mandatory scroll-smooth"
			>
				{cards.map((Card, i) => (
					<div
						className="snap-center shrink-0"
						key={i}
					>
						{Card}
					</div>
				))}
			</div>

			<div className="absolute -bottom-16 flex w-full justify-center gap-2">
				<button
					className="px-2 py-1 bg-amber-300 text-white rounded"
					onClick={() => scrollTo(Math.max(index - 1, 0))}
				>
					Prev
				</button>
				<button
					className="px-2 py-1 bg-gray-800 text-white rounded"
					onClick={() => scrollTo(Math.min(index + 1, cards.length - 1))}
				>
				Next 
				</button>
			</div>
		</div>
    );
}

// function SnapScrollOld () {
//     const containerRef = useRef(null);
//     const [index, setIndex] = useState(0);

//     const scrollTo = (i) => {
//         if (!containerRef.current) return;
//         const child = containerRef.current.children[i];
//         if (child) {
//             child.scrollIntoView({ behavior: "smooth", inline: "center"});
//             setIndex[i];
//         }
//     }

//     const colors = [
//         "bg-red-500",
//         "bg-green-500",
//         "bg-blue-500",
//         "bg-yellow-500"
//     ]

//     return (
//         <div className="relative w-full">
//             <div            
//                 ref={containerRef}
//                 className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth w-full"
//             >
//                 {colors.map((bg, i) => (
//                     <div
//                         key={i}
//                         className={`snap-center shrink-0 w-full h-60 ${bg}`}
//                     >
//                     </div>
//                 ))}
//             </div>

//             <div className="absolute top-2 right-2 flex gap-2">
//                 <button
//                     className="px-2 py-1 bg-gray-800 text-white rounded"
//                     onClick={() => scrollTo(Math.max(index - 1, 0))}
//                 >
//                     Prev
//                 </button>
//                 <button
//                     className="px-2 py-1 bg-gray-800 text-white rounded"
//                     onClick={() => scrollTo(Math.max(index + 1, 3))}
//                 >
//                    Next 
//                 </button>
//             </div>
//         </div>
//     );
// }