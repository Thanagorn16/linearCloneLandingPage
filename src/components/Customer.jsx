import {useEffect, useState} from 'react';

function GetPair(customers) {
    let pairs = [];
    let tmp = [];
    let counter = 0;
    
    for (let i = 0; i < customers.length; i++) {
        tmp.push(customers[i]);
        counter++;
        if (counter === 2) {
            pairs.push(tmp);
            tmp = [];
            counter = 0;
        }
    }
    
    return pairs;
}

export default function Customer() {
    const customers = [
        "ramp", "OpenAI", "scale", "BOOM", "Cash App", "Vercel",
        "Cursor", "Brex", "Remote", "Automatic", "runaway", "descript"
    ] 

    const pairs = GetPair(customers);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % 2);
        }, 3000);

        return () => clearInterval(interval);
    }, []); // [] means run once when the component mounts
    
    return (
        <section className="max-w-5xl mx-auto px-4 mt-25">
            <p className="text-center text-xl font-medium text-[#8a8f98]">
                <span className="text-[#f7f8f8]">Powering the world's best product teams.<br/></span>
                Fron next-gen startups to established enterprises.
            </p>
            <div className="grid grid-cols-3 gap-8 h-full py-15 justify-items-center">
                {pairs.map((pair) => (
                    <div className="w-full h-30 py-9 text-3xl text-center bg-amber-400">
                        <span className="inline-block align-middle font-bold">{pair[index]}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}