import {useEffect, useState} from 'react';

export default function Customer() {
    const customers = [
        "ramp", "OpenAI", "scale", "BOOM", "Cash App", "Vercel",
        "Cursor", "Brex", "Remote", "Automatic", "runaway", "descript"
    ] 

    const firstPart = customers.slice(0, 6);

    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prev => (prev + 6) % customers.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <section className="max-w-5xl mx-auto px-4 mt-25">
            <p className="text-center text-xl font-medium text-[#8a8f98]">
                <span className="text-[#f7f8f8]">Powering the world's best product teams.<br/></span>
                Fron next-gen startups to established enterprises.
            </p>
            <div className="grid grid-cols-3 gap-8 h-full py-15 justify-items-center">
                {firstPart.map((name, index) => (
                    <div key={index} className="w-full h-30 py-9 text-3xl text-center bg-amber-300">
                        <span className="inline-block align-middle font-bold">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}