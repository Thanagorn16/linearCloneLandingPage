import { GetLinearBall } from "../Svgs";

const MakeOptionText = (text) => {
	return (
		<a className="text-sm text-[#8a8f98] font-medium transition-colors duration-100 hover:text-[#f7f7f8] cursor-pointer">
			{text}
		</a>
	);
}

const MakeOption = (title, items) => {
	return (
		<div className="flex flex-col">
			<span className="text-sm text-[#f7f8f8] font-medium">{title}</span>
			<div className="h-7"></div>
			<ul className="flex flex-col gap-3"> 
				{items.map((item, index) => (
					<li key={index}>
						{MakeOptionText(item)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Footer() {
	return(
		<section className="w-screen mx-auto pl-40 2xl:pl-200 relative"> 

		<div className="h-15"></div>

			<div className="flex gap-x-15">
				{GetLinearBall()}
				<div className="grid grid-cols-5 gap-25 2xl:gap-22">
					{MakeOption('Features', featureList)}
					{MakeOption('Product', productList)}
					{MakeOption('Company', companyList)}
					{MakeOption('Resources', resourceList)}
					{MakeOption('Connect', connectList)}
				</div>
			</div>

			<div className="h-20"></div>
		</section>
	);
}

const featureList = [
	'Plan', 'Build', 'Insight',
	'Customer Requests', 'Linear Asks',
	'Security', 'Mobile'
];

const productList = [
	'Pricing', 'Method', 'Integration',
	'Changelog', 'Documentation',
	'Download', 'Switch'
];

const companyList = [
	'About', 'Customers', 'Careers',
	'Now', 'README', 'Quality', 'Band'
];

const resourceList = [
	'Developers', 'Status', 'Startups',
	'Report vulnerability', 'DPA', 
	'Privacy', 'Terms'
];

const connectList = [
	'Contact us', 'Community', 'X (Twitter',
	'GitHub', 'Youtube'
];