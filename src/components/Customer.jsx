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
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(prev => (prev + 1) % 2);
                setVisible(true);
            }, 300)
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
                    <div className={`w-full h-30 py-9 text-3xl text-center bg-[#090a0b] transition-all duration-300 ease-in-out
                        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                    >
                        <span className="inline-block align-middle font-bold text-[#f7f8f8]">{pair[index]}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}