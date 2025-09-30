export default function GetStart() {
    return (
        <section className="w-screen mx-auto pl-40 2xl:pl-200 relative border-b-2 border-[hsl(0,0%,15%)]"> 
            <div className="flex items-center gap-70 2xl:gap-40">
                <h3 className="text-[#f7f8f8] text-[40px]"> Plan the present. Build the future.</h3>

                <div className="flex gap-2">
                    <button className={`w-32 h-11 bg-[hsl(240,5%,16%)] border border-[#3e3e44] rounded-xl text-[#f7f8f8] font-medium px-3
                        transition-colors duration-150 ease-out hover:bg-[hsl(240,5%,20%)] cursor-pointer
                    `}> 
                        Contact sales
                    </button>
                    <button className={`w-31 h-11 bg-[hsl(0,0%,90%)] border border-[#3e3e44] rounded-xl text-[#08090a] font-medium px-3
                        transition-colors duration-150 ease-out hover:bg-[hsl(0,0%,100%)] cursor-pointer
                    `}> 
                        Get started
                    </button>
                </div>

            </div>

            <div className="h-23"></div>
        </section>
    );
}