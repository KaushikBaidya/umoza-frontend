const values = [
	{
		image: "/assets/icons/Core-Values-Consistency.svg",
		title: "Consistency",
		subTitle: "Be Consistent",
		description: "Do the simple tasks right every day, every time.",
	},
	{
		image: "/assets/icons/Core-Values-Integrity.svg",
		title: "Integrity",
		subTitle: "Have Integrity",
		description: "Do the right thing all the time even when no one is looking.",
	},
	{
		image: "/assets/icons/Core-Values-Ambition.svg",
		title: "Ambition",
		subTitle: "Be Ambitious",
		description: "Strive to Innovate, grow, and improve in all you do.",
	},
	{
		image: "/assets/icons/Core-Values-Positivity.svg",
		title: "Positivity",
		subTitle: "Be Positive",
		description: "Stay upbeat and keep a fun attitude.",
	},
	{
		image: "/assets/icons/Core-Values-Unity.svg",
		title: "Unity",
		subTitle: "Be United",
		description: "United as one team in all that we do.",
	},
];

export default function AboutCoreValues() {
	return (
		<section>
			<div className="text-white bg-umojablue bg-patternBg bg-[length:2000px_600px] bg-center bg-repeat mix-blend-multiply">
				<div className="bg-umojablue/95 py-20">
					<div className="grid grid-cols-1 gap-14 px-10 md:px-64">
						<div className="text-center mb-10">
							<h2 className="text-3xl font-bold mb-4 text-umojayellow">
								CORE VALUES
							</h2>
							<p className="text-lg text-center">
								At Umoja, our core values are the driving force behind how we do
								business and how we treat each other and our clients. By
								following these guiding principles, we believe we will always do
								our best to do the right thing in the right way and build
								fulfilling careers for our team members.
							</p>
						</div>

						<div className="grid md:grid-cols-5 gap-4 px-4">
							{values.map((value, index) => (
								<div
									key={index}
									className="group rounded-bl-[10px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[10px] relative p-6 shadow-lg flex flex-col items-center bg-transparent border border-white transition-all duration-700 overflow-hidden cursor-pointer h-[200px]"
								>
									{/* Image and Title (initial view) */}
									<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 group-hover:-translate-y-full transition-all duration-700">
										<img
											src={value.image}
											alt={value.title}
											className="mb-4 w-24 h-24 object-contain"
										/>
										<h3 className="text-2xl font-semibold">{value.title}</h3>
									</div>

									{/* Subtitle and Description (hover view, moves up into place) */}
									<div className="absolute top-full left-0 right-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:top-12 transition-all duration-700">
										<h4 className="text-xl font-medium mb-2">
											{value.subTitle}
										</h4>
										<p className="text-center px-4">{value.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
