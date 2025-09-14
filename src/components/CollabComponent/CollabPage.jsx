import { useRef, useState } from "react";
import { GetArrowIcon } from "../Svgs";

const itemBorder = 'border-[hsla(0,0%,100%,.05)]';

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

                <div className="flex w-1200 h-112">
                    <div className="relative rounded-xl border border-[hsla(0,0%,100%,.08)]">
                        <img 
                            className="w-[336px] h-[469px]"
                            data-nosnippet="true" 
                            data-loaded="true" 
                            loading="lazy" 
                            decoding="async" 
                            data-nimg="1"
                            src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b4ccc6c0-b86b-4e9c-04a9-2ea66fa48e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
                        </img>
                        <div className="absolute inset-0 w-full h-80 bg-gradient-to-r from-transparent  to-[#090a0b]"></div>
                        <div className="absolute flex inset-y-4/5 w-full h-20 pl-6">
                            <div className="flex flex-col">
                                <h3 className="text-sm text-[#8a8f98]">Customer Request</h3>
                                <div className="flex items-center gap-23">
                                    <span className="text-base text-[#f7f8f8]">Build what customers<br/>actually want</span>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[hsla(0,0%,100%,.08)] ">
                                        <GetArrowIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

                        {/* <div className="absolute inset-0 w-full h-80 bg-gradient-to-r from-transparent via-transparent via-40% to-[#090a0b]"></div>
                        <div className="absolute inset-0 w-full h-80 bg-gradient-to-t from-transparent via-transparent via-80% to-[#090a0b]"></div> */}

function SnapScroll() {
    const containerRef = useRef(null);
    const [index, setIndex] = useState(0);

    const scrollTo = (i) => {
        if (!containerRef.current) return;
        
        const child = containerRef.current.children[i];
        if (child) {
            child.scrollIntoView({behavior: "smooth", inline: "center"});
            setIndex[i];
        }
    }

    // return (
    //     <div className="">

    //     </div>
    // );
}

// function SnapScroll () {
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