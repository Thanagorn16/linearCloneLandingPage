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
		<section className="max-w-5xl mx-auto px-4 mt-25 ">
			<p className="text-center text-xl font-medium text-[#8a8f98]">
				<span className="text-[#f7f8f8]">Powering the world's best product teams.<br/></span>
				Fron next-gen startups to established enterprises.
			</p>
			<div className="relative grid grid-cols-3 gap-8 h-full py-15 justify-items-center group">
				{pairs.map((pair) => (
					<div key={pair} className={`w-full h-30 py-9 text-3xl text-center bg-[#090a0b] transition-all duration-300 ease-in-out
						group-hover:blur-sm
						${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
					>
						<span className="inline-block align-middle font-bold text-[#f7f8f8]">{pair[index]}</span>
					</div>
				))}
				<a href="#" 
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 
						text-sm text-[#f7f8f8] rounded-3xl border border-zinc-800 bg-white/10 opacity-0 
						transition-all ease-in-out scale-90 duration-300 group-hover:opacity-100 group-hover:scale-100`}
				>
					Meet our customers
				</a>
			</div>
		</section>
	);
}