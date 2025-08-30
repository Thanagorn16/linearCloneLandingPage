import { useState } from "react";

export default function EditorPart() { 
    const [active, setActive] = useState("one");

    const getButton = (state, text) => {
        return (
            <button 
                onClick={() => setActive(state)}
                className="flex items-center gap-3 pb-1 cursor-pointer group"
            >
                <div className={`w-1 h-6  transition-colors ease-out ${
                    active === state ? 'bg-[#68cc58]' : 'bg-[hsl(240,4%,14%)] group-hover:bg-[hsl(240,4%,20%)]'
                }`}></div>
                <span className={`text-lg  transition-colors ease-out  ${
                    active === state ? 'text-[#f7f8f8]' : 'text-[hsl(218,5%,41%)] group-hover:text-[hsl(218,5%,50%)]'
                }`}>{text}</span>
            </button>
        );
    }

    return (
        <div className="flex flex-row mt-10 py-15">
            <div className="basis-1/3">
                <h3 className="text-2xl text-[#f7f8f8]">Ideate and specify<br/>what to build next</h3>
                <div className="flex flex-col py-5">
                    {getButton("one", "Collaborative documents")}
                    {getButton("two", "Inline Comments")}
                    {getButton("three", "Text-to-issue commands")}
                </div>
            </div>
            <div className="basis-2/3">

            </div>
        </div>
    );
}