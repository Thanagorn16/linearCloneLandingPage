import { FifthImg, FirstImg, FourthImg, LastImg, SecondImg, SixthImg, ThirdImg } from "./CardImgs";
import { GetArrowIcon } from "../Svgs";

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
						<div className="flex items-center gap-15">
							<span className="w-45 text-base text-[hsl(180,7%,87%)] group-hover:text-[hsl(180,7%,97%)] transition-colors duration-300">
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

export function getCards () {
    const cards = [
        <CollabCard CardImg={FirstImg} text1={"Customer Requests"} text2={<>Build what customers<br/>actually want</>}/>,
        <CollabCard CardImg={SecondImg} text1={"Powerful git workflows"} text2={<>Automate pull requests<br/>and commit workflows</>}/>,
        <CollabCard CardImg={ThirdImg} text1={"Linear Mobile"} text2={<>Move product work<br/>forward from anywhere</>}/>,
        <CollabCard CardImg={FourthImg} text1={"Linear Asks"} text2={<>Turn workplace requests<br/>into actionable issues</>}/>,
        <CollabCard CardImg={FifthImg} text1={"Linear integration"} text2={<>100+ ways to enhance<br/>your Linear experince</>}/>,
        <CollabCard CardImg={SixthImg} text1={"Figma integration"} text2={<>Bridge the gap between<br/>engineering and design</>}/>,
        <CollabCard CardImg={LastImg} text1={"Built for developers"} text2={<>Build your own add-<br/>ons with Linear API</>}/>,
    ]

    return cards;
}