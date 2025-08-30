import clsx from "clsx";

const card1 = {
    // translateX: 'translate-x-0',
    // translateY: 'translate-y-0',
    textColor: 'text-[#c52828]',
    stat: 'On track',
    text: 'Unexpected roadblocks forced us to take a different...',
    date: 'October',
}

const card2 = {
    // translateX: 'translate-x-10',
    // translateY: '-translate-y-20',
    textColor: 'text-[#f2994a]',
    stat: 'At risk',
    text: 'Progress slowed down last week because...',
    date: 'October',
}

const card3 = {
    // translateX: 'translate-x-20',
    // translateY: '-translate-y-40',
    textColor: 'text-[#68cc58]',
    stat: 'On track',
    text: 'We are ready to launch next Thursday',
    date: 'Sep 8',
}

function redIcon() {
    return (
        <svg 
            className="w-4 h-4 bg-[hsl(0,66%,15%)]  border border-[hsl(0,66%,46%)] rounded-full "
            viewBox="0 0 16 16" 
            fill="#c52828"
            fillRule="evenodd"
            clipRule="evenodd"
            role="img" 
            focusable="false" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6807 10.297C12.9925 10.0242 13.0241 9.5504 12.7513 9.23866L9.71942 5.77356C9.56569 5.59786 9.33892 5.50377 9.10596 5.51903C8.873 5.53429 8.66044 5.65716 8.53094 5.8514L6.76432 8.50133L4.37742 5.77354C4.10466 5.46182 3.63083 5.43024 3.31911 5.703C3.00739 5.97577 2.97581 6.44959 3.24857 6.76132L6.28056 10.2263C6.43429 10.402 6.66106 10.4961 6.89401 10.4808C7.12696 10.4656 7.33952 10.3427 7.46902 10.1485L9.23562 7.49855L11.6224 10.2264C11.8952 10.5381 12.369 10.5697 12.6807 10.297Z"></path>
        </svg>
    );
}

function orangeIcon() {
    return (
        <svg 
            className="w-4 h-4 bg-[hsl(28,87%,15%)]  border border-[#f2994a] rounded-full "
            viewBox="0 0 16 16" 
            fill="#f2994a"
            fillRule="evenodd"
            clipRule="evenodd"
            role="img" 
            focusable="false" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg">
                <path d="M9.62562 3.8314C9.85957 3.7977 10.0957 3.87627 10.2628 4.04341L12.5728 6.35341C12.8657 6.6463 12.8657 7.12117 12.5728 7.41407C12.28 7.70696 11.8051 7.70696 11.5122 7.41407L9.91096 5.81284L6.92594 11.2854C6.81276 11.4929 6.60838 11.6349 6.37442 11.6686C6.14047 11.7023 5.90433 11.6237 5.73719 11.4566L3.42719 9.14657C3.1343 8.85367 3.1343 8.3788 3.42719 8.08591C3.72008 7.79301 4.19496 7.79301 4.48785 8.08591L6.08908 9.68714L9.0741 4.2146C9.18728 4.00709 9.39166 3.86509 9.62562 3.8314Z"></path>
        </svg>
    )
}


function greenIcon() {
    return (
        <svg 
            className="w-4 h-4 bg-[hsl(112,53%,15%)]  border border-[#68cc58] rounded-full "
            viewBox="0 0 16 16" 
            fill="#68cc58"
            fillRule="evenodd"
            clipRule="evenodd"
            role="img" 
            focusable="false" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6807 5.7029C12.9925 5.97566 13.0241 6.44948 12.7513 6.76121L9.71942 10.2263C9.56569 10.402 9.33892 10.4961 9.10596 10.4808C8.873 10.4656 8.66044 10.3427 8.53094 10.1485L6.76432 7.49855L4.37742 10.2263C4.10466 10.5381 3.63083 10.5696 3.31911 10.2969C3.00739 10.0241 2.97581 9.55028 3.24857 9.23856L6.28056 5.77356C6.43429 5.59788 6.66106 5.50379 6.89401 5.51905C7.12696 5.53432 7.33952 5.65718 7.46902 5.85142L9.23562 8.50133L11.6224 5.77347C11.8952 5.46174 12.369 5.43015 12.6807 5.7029Z"></path>
        </svg>
    )
}

const getNotifCard = (card, CardIcon) => {
    return (
        <div className={clsx(card.translateX, card.translateY, `flex flex-col p-4 items-start gap-2 w-120 h-30 translate-z-10    rounded-xl border border-[hsla(0,0%,100%,.17)] bg-[hsla(0,0%,16%,.5)] backdrop-blur-xl
            transition-all  hover:bg-[#333333] hover:-translate-y-10 
        `)}>
            <div className="flex items-center gap-2">
                <CardIcon/>
                <span className={clsx(`text-base font-semibold ${card.textColor}`)}>{card.stat}</span>
            </div>
            <span className="text-base  text-[#f7f8f8] font-semibold">
                {card.text}
            </span>
            <p className="text-base text-[#f7f8f8] font-semibold">{card.date}</p>
        </div>
    );
}

export default function NotifCard() {
    return (
        <>
            <div className="flex items-center w-120 h-50 translate-z-10 rotate-y-20 -rotate-x-10 -rotate-z-3 mt-10 z-1">
                {getNotifCard(card1, redIcon)}
            </div>
            <div className="absolute flex items-center w-120 h-50 translate-z-10 rotate-y-20 -rotate-x-10 -rotate-z-3 translate-x-10 -translate-y-40 z-20">
                {getNotifCard(card2, redIcon)}
            </div>
            <div className="absolute flex items-center w-120 h-50 translate-z-10 rotate-y-20 -rotate-x-10 -rotate-z-3 translate-x-20 -translate-y-30 z-20">
                {getNotifCard(card3, redIcon)}
            </div>
        </>
    );
    // return (
    //     <div className="relative mt-10 w-95 h-70 bg-[#090a0b]">
    //         <div className="ml-5 mt-20 relative perspective-distant">
    //             {getNotifCard(card1, redIcon)}
    //             {/* <div className="absolute w-145 inset-0 -translate-y-10  bg-gradient-to-l from-[#090a0b] to-transparent"></div> */}
    //             {getNotifCard(card2, orangeIcon)}
    //             {/* <div className="absolute w-145 inset-0 -translate-y-10  bg-gradient-to-l from-[#090a0b] to-transparent"></div> */}
    //             {getNotifCard(card3, greenIcon)}
    //             {/* <div className="absolute w-145 inset-0 -translate-y-10  bg-gradient-to-l from-[#090a0b] to-transparent"></div> */}
    //         </div>
    //         {/* <div className="absolute w-145 inset-0 -translate-y-10  bg-gradient-to-l from-[#090a0b] to-transparent"></div> */}
    //     </div>
    // );
}
