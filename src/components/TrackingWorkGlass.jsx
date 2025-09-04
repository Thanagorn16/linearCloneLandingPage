export default function TrackingWorkGlass() {
    return (
        <div className="relative box-content w-90 h-70 p-2 border rounded-2xl border-[hsla(0,0%,100%,.07)]">
			<div className="inset-0 w-90 h-70 py-4 px-5 rounded-xl bg-[hsla(0,0%,100%,.08)] border border-[hsla(0,0%,100%,.17)]">
                <span className="text-base text-[#f7f8f8]">Triage</span>

                <div className="h-5"></div>

                <div className="flex flex-col gap-1">

                    {/* first slot */}
                    <div className="w-80 h-17 py-2 px-3 rounded-md border border-[hsla(0,0%,100%,.1)] bg-[hsl(0,0%,100%,5%)]">
                        <span className="text-sm text-[#8a8f98]">
                            Uses report unexpected rate limiting
                        </span>
                        <div className="h-2"></div>
                        <div className="flex items-center gap-2">
                            <img 
                                className="w-4 h-4 rounded-full"
                                src="https://webassets.linear.app/images/ornj730p/production/74717706c51f3c14ebe2851e0076def007ebafdd-1000x1000.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
                            <span className="text-sm text-[#8a8f98]">tom</span>
                        </div>
                    </div>

                    <div className="w-80 h-17 py-2 px-3">
                        <span className="text-sm text-[#8a8f98]">
                            RangeError:whatever is written, here.
                        </span>
                        <div className="h-2"></div>
                        <div className="flex items-center gap-2">
                            <img 
                                className="w-4 h-4 rounded-full"
                                src="https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
                            <span className="text-sm text-[#8a8f98]">romain</span>
                        </div>
                    </div>

                    <div className="w-80 h-17 py-2 px-3">
                        <span className="text-sm text-[#8a8f98]">
                            Pressing "Enter" quickly when logging in via 
                        </span>
                        <div className="h-2"></div>
                        <div className="flex items-center gap-2">
                            <img 
                                className="w-4 h-4 rounded-full"
                                src="https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2" alt="Avartar of Karri" />
                            <span className="text-sm text-[#8a8f98]">romain</span>
                        </div>
                    </div>

                </div>
            </div>

			{/* overlay */}
			<div className="absolute w-110  inset-0  bg-gradient-to-l from-[#090a0b] to-transparent"></div>
			<div className="-translate-y-50 -translate-x-3 w-100 h-55 inset-0  bg-gradient-to-b from-transparent to-[#090a0b]"></div>

            <div className="absolute p-1 h-25  top-1/3 left-1/3 translate-y-2 -translate-x-2 rounded-md border-1 border-[#ffffff1a] bg-[#ffffff1a] backdrop-blur-sm">
                <div className="flex flex-col">
                    <div className="flex w-40 h-7.5 p-2 items-center gap-2 rounded-md hover:bg-[rgba(255,255,255,0.1)]">
                        <svg 
                            className="w-4 h-4" 
                            viewBox="0 0 16 16" 
                            fill="#8a8f98" 
                            role="img" 
                            focusable="false" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.75A4.25 4.25 0 0 0 5.25 15h1a.75.75 0 0 0 0-1.5h-1a2.75 2.75 0 0 1-2.75-2.75v-5.5A2.75 2.75 0 0 1 5.25 2.5h5.5a2.75 2.75 0 0 1 2.75 2.75v.997a.75.75 0 0 0 1.5 0V5.25A4.25 4.25 0 0 0 10.75 1h-5.5A4.25 4.25 0 0 0 1 5.25z"></path><path d="M10.75 14.25a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2z"></path>
                        </svg>
                        <span className="text-sm text-[#8a8f98]">Accept</span>
                    </div>

                    <div className="flex w-40 h-7.5 p-2 items-center gap-2 rounded-md hover:bg-[rgba(255,255,255,0.1)]">
                        <svg 
                            className="w-4 h-4" 
                            viewBox="0 0 16 16" 
                            fill="#8a8f98" 
                            role="img" 
                            focusable="false" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2517 1C13.7705 1 15.0017 2.23122 15.0017 3.75V8.25C15.0017 9.76878 13.7705 11 12.2517 11H11.001L11.0017 12.25C11.0017 13.7688 9.77049 15 8.25171 15H3.75C2.23122 15 1 13.7688 1 12.25V7.75C1 6.23122 2.23122 5 3.75 5H5V3.75C5 2.23122 6.23122 1 7.75 1H12.2517ZM5 6.5H3.75C3.05964 6.5 2.5 7.05964 2.5 7.75V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H8.25171C8.94206 13.5 9.50171 12.9404 9.50171 12.25V12L9.501 9.5L9.50171 7.75C9.50171 7.05964 8.94206 6.5 8.25171 6.5H6.66217H5ZM12.2517 2.5H7.75C7.05964 2.5 6.5 3.05964 6.5 3.75V5H8.25171C9.77049 5 11.0017 6.23122 11.0017 7.75L11.001 9.5H12.2517C12.9421 9.5 13.5017 8.94036 13.5017 8.25V3.75C13.5017 3.05964 12.9421 2.5 12.2517 2.5Z"></path>
                        </svg>
                        <span className="text-sm text-[#8a8f98]">Mark as duplicate</span>
                    </div>

                    <div className="flex w-40 h-7.5 p-2 items-center gap-2 rounded-md hover:bg-[rgba(255,255,255,0.1)]">
                        <svg 
                            className="w-4 h-4" 
                            viewBox="0 0 16 16" 
                            fill="#8a8f98" 
                            role="img" 
                            focusable="false" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11.25C1 13.3211 2.67893 15 4.75 15L5 15C5.41421 15 5.75 14.6642 5.75 14.25C5.75 13.8358 5.41421 13.5 5 13.5L4.75 13.5C3.50736 13.5 2.5 12.4926 2.5 11.25L2.5 4.75C2.5 3.50736 3.50736 2.5 4.75 2.5L11.25 2.5C12.4926 2.5 13.5 3.50736 13.5 4.75V5C13.5 5.41421 13.8358 5.75 14.25 5.75C14.6642 5.75 15 5.41421 15 5V4.75C15 2.67893 13.3211 1 11.25 1L4.75 1C2.67893 1 1 2.67893 1 4.75L1 11.25Z"></path>
                                <path d="M9.53033 8.46967L11.5 10.4393L13.4697 8.46967C13.7626 8.17678 14.2374 8.17678 14.5303 8.46967C14.8232 8.76256 14.8232 9.23744 14.5303 9.53033L12.5607 11.5L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2374 14.8232 13.7626 14.8232 13.4697 14.5303L11.5 12.5607L9.53033 14.5303C9.23744 14.8232 8.76256 14.8232 8.46967 14.5303C8.17678 14.2374 8.17678 13.7626 8.46967 13.4697L10.4393 11.5L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967Z"></path>
                        </svg>
                        <span className="text-sm text-[#8a8f98]">Decline</span>
                    </div>

                </div>
            </div>

        </div>
    );
}