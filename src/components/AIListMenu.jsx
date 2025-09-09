import { SecondTab, GetSubTab } from "./AIPageComponents";

export default function AIListMenu() {
	return (
		<div className="flex justify-center transform perspective-dramatic">
			<div className="flex relative w-5/6 h-80 border border-[#3e3e44] rounded-md bg-[#ffffff1a] rotate-x-2">
				<div className="flex w-full h-13 z-0 p-3 items-center shadow">
						<div className="absolute w-0.5 h-4 bg-indigo-400 animate-ping"></div>
						<span className="ml-3 text-lg text-[#8a8f98]">Assign to...</span>
				</div>

				<SecondTab/>
				
				<div className="flex flex-col inset-y-23.5 absolute w-full h-56 rounded-b-md bg-transparent">
					{GetSubTab(DevinIcon, "Devin")}
					{GetSubTab(ChatPRDIcon, "ChatPRD")}
					{GetSubTab(LeelaIcon, "Leela")}
					{GetSubTab(CodegenIcon, "Codegen")}
					{GetSubTab(ConorIcon, "Conor")}
					<div className="absolute -inset-1 bg-gradient-to-b from-transparent via-[#090a0b] via-85% to-[#090a0b]"></div>
				</div>

			</div>

		</div>
	);
}

function DevinIcon() { 
	return (
		<img 
			className="w-4 h-4"
			alt="Profile picture of Devin" 
			data-nosnippet="true" 
			data-loaded="true" 
			fetchPriority="high"
			decoding="async" 
			data-nimg="1"
			src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/30ea5408-c74f-4118-7c64-0adb3e982200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
		</img>
	);

}

function ChatPRDIcon() {
	return (
		<img 
			className="w-4 h-4"
			alt="Profile picture of ChatPRD" 
			data-nosnippet="true" 
			data-loaded="true" 
			fetchPriority="high"
			decoding="async" 
			data-nimg="1"
			src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/485e9419-c56f-4314-88e3-2137ac15dd00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
		</img>
	);
}

function LeelaIcon() {
	return (
		<img 
			className="w-4 h-4"
			alt="Profile picture of Leela" 
			data-nosnippet="true" 
			data-loaded="true" 
			fetchPriority="high"
			decoding="async" 
			data-nimg="1"
			src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b187d837-efb9-471a-2527-cf897b9fb900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
		</img>
	);
}

function CodegenIcon() {
	return (
		<img 
			className="w-4 h-4"
			alt="Profile picture of Codegen" 
			data-nosnippet="true" 
			data-loaded="true" 
			fetchPriority="high"
			decoding="async" 
			data-nimg="1"
			src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/671bb228-851f-4000-c4fd-04426e3c0600/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
		</img>
	);
}

function ConorIcon() {
	return (
		<img 
			className="w-4 h-4 rounded-full"
			alt="Profile picture of Conor" 
			data-nosnippet="true" 
			data-loaded="true" 
			fetchPriority="high"
			decoding="async" 
			data-nimg="1"
			src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f6242d9a-5171-4978-5519-b9eab8123b00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none">
		</img>
	);
}