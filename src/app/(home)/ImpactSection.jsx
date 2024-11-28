import React from "react";
import CountUp from "react-countup";

const stats = [
	{ label: "Female Borrowers", value: 80000 },
	{ label: "Rural-based Clients", value: 80 },
	{ label: "Employees", value: 650 },
	{ label: "Female Employees", value: 70 },
	{ label: "Branches", value: 100 },
];

export default function ImpactSection() {
	return (
		<section>
			<div className="text-white bg-umojablue bg-patternBg bg-[length:2000px_600px] bg-center bg-repeat mix-blend-multiply">
				<div className="bg-umojablue/95 py-20">
					<div className="max-w-6xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-8 uppercase">Our Impact</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
							{stats.map((stat, index) => (
								<div
									key={index}
									className="bg-umojablue border border-white hover:border-umojayellow p-6 rounded-bl-[10px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[10px] shadow-md hover:transform hover:scale-110 transition-transform duration-300"
								>
									<div className="text-3xl font-bold text-umojayellow">
										<CountUp
											end={stat.value}
											duration={2}
											suffix={stat.label.includes("Clients") ? "%" : "+"}
										/>
									</div>
									<div className="mt-2 text-sm">{stat.label}</div>
									<hr className="h-px mt-4 mx-8 bg-umojayellow" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
