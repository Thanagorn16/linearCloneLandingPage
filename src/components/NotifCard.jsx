export default function NotifCard() {
    return (
        <div className="relative mt-10 w-95 h-70 bg-[#090a0b]">
            <div className="ml-5 mt-20 relative perspective-distant">
                <div className="flex flex-col p-4 items-start gap-2 w-120 h-30 translate-z-10 rotate-y-20 -rotate-x-10 -rotate-z-3 rounded-xl border border-[hsla(0,0%,100%,.17)] bg-[rgba(40,40,40,.5)]">
                    <div className="flex items-center gap-2">
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
                        <span className="text-base font-semibold text-[#c52828]">On track</span>
                    </div>
                    <span className="text-base  text-[#f7f8f8] font-semibold">
                        Unexpected roadblocks forced us to take a different...
                    </span>
                    <p className="text-base text-[#f7f8f8] font-semibold">October</p>
                </div>
                
            </div>
        </div>
    );
}