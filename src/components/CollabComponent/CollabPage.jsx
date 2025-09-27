import { useRef, useState, useEffect } from "react";
import { GetArrowIcon } from "../Svgs";
import { FirstImg, SecondImg, ThirdImg } from "./CardImgs";
import { CarouselNew } from "./CarouselComponent";

const itemBorder = 'border-[hsla(0,0%,100%,.05)]';

function CollabCard({CardImg, text1, text2}) {
	return (
			<div className="w-[336px] h-[469px] relative rounded-xl border border-[hsla(0,0%,100%,.08)] group overflow-hidden">
				<CardImg/>

				{/* overlay */}
				<div className={`absolute inset-0 w-full h-120 bg-[#090a0b]/20
					group-hover:opacity-10 transition-opacity duration-300`}
				/>
				<div className="absolute inset-0 w-full h-120 bg-gradient-to-tl from-transparent  to-[#090a0b]/35"></div>
				<div className="absolute inset-0 w-full h-120 bg-gradient-to-r from-transparent  to-[#090a0b]/95"></div>

				{/* overlay the image that may be bigger then the other */}
				<div className="absolute inset-y-80 w-full h-120 bg-gradient-to-b from-transparent via-[#090a0b] via-15%  to-[#090a0b]/95"></div>

				{/* content */}
				<div className="absolute flex inset-y-4/5 w-full h-20 pl-6">
					<div className="flex flex-col">
						<h3 className="text-sm text-[hsl(219,6%,47%)] group-hover:text-[hsl(219,6%,57%)] transition-colors duration-300">
							{text1}
						</h3>
						<div className="flex items-center gap-23">
							<span className="text-base text-[hsl(180,7%,87%)] group-hover:text-[hsl(180,7%,97%)] transition-colors duration-300">
								{text2}
							</span>
							<div className={`flex items-center justify-center w-10 h-10 rounded-full border bg-transparent border-[hsl(0,0%,20%)]
								group-hover:bg-[hsl(0,0%,20%)] transition-colors duration-300
							`}>
								<GetArrowIcon/>
							</div>
						</div>
					</div>
				</div>

			</div>
	);

}


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

				<div className="h-15"></div>

				<Carousel/>

			</div>
			{/* <Carousel/> */}
		</section>
	);
}

function Carousel() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const cards = getCards();
  const lastIndex = cards.length - 1;
  const cardRef = useRef(null);

  // Measure card width (including gap)
  useEffect(() => {
    if (cardRef.current) {
      const style = window.getComputedStyle(cardRef.current);
      const gap = parseInt(style.marginRight) || 0;
      setCardWidth(cardRef.current.offsetWidth + gap);
    }
  }, []);

  const next = () => {
    if (index < lastIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="relative">
      {/* Animated container */}
      <div
        className={`transition-all duration-500 ease-in-out w-screen px-8`}
      >
        <div className="relative h-[469px] overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null} // measure only first card
                className="shrink-0"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 -bottom-14 flex justify-center gap-3">
        <button
          onClick={prev}
		  className="bg-white"
        >
          Prev
        </button>
        <button
          onClick={next}
		  className="bg-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function getCards () {
    const cards = [
		// <div className="w-[210px]"></div>,
        <CollabCard CardImg={FirstImg} text1={"Customer Requests"} text2={<>Build what customers<br/>actually want</>}/>,
        <CollabCard CardImg={SecondImg} text1={"Powerful git workflows"} text2={<>Automate pull requests<br/>and commit workflows</>}/>,
        <CollabCard CardImg={ThirdImg} text1={"Linear Mobile"} text2={<>Move product work<br/>forward from anywhere</>}/>,
        <CollabCard CardImg={ThirdImg} text1={"Linear Mobile"} text2={<>Move product work<br/>forward from anywhere</>}/>,
        <CollabCard CardImg={ThirdImg} text1={"Linear Mobile"} text2={<>Move product work<br/>forward from anywhere</>}/>,
        <CollabCard CardImg={ThirdImg} text1={"Linear Mobile"} text2={<>Move product work<br/>forward from anywhere</>}/>,
        <CollabCard CardImg={ThirdImg} text1={"Linear Mobile"} text2={<>Move product work<br/>forward from anywhere</>}/>,
    ]

    return cards;
}
