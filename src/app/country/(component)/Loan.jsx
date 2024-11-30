import Image from "next/image";

export default function Loan({ countryData }) {
	return (
		<section className="py-10 px-5 max-w-6xl mx-auto">
			<h2 className="text-umojablue text-center text-4xl font-bold mb-5">
				Loan Products
			</h2>
			<p className="text-lg text-gray-700 text-justify py-8">
				UMOJA Microfinance is providing financial services to the poor to
				empower them economically and to bring them out of poverty through
				multi-dimensional interventions. UMOJA Microfinance introduced the
				microfinance program primarily targeting poor women but based on
				experience and demand UMOJA Microfinance will gradually expand to other
				segments of society i.e., smallholder farmers. Broadly there are two
				types of loan products: Umoja Micro Loan and Umoja Small Business Loan.
			</p>
			<div className="grid grid-cols-1 gap-8 mx-auto">
				{countryData.accordionSections &&
					countryData.accordionSections.map((section, sectionIndex) => (
						<div
							className="rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 p-5 lg:p-10 text-justify"
							key={sectionIndex}
						>
							<div className="w-full">
								<Image
									src={section.image}
									alt={`Visual for ${section.sectionName}`}
									width={500}
									height={300}
									className="object-cover rounded-lg h-72 w-full"
								/>
							</div>
							<div>
								<h3 className="text-3xl font-bold text-umojablue">
									{section.sectionName}
								</h3>
								<h4 className="text-lg font-bold text-gray-700 mb-2">
									{section.title}
								</h4>
								<div className="grid">
									<p className=" text-gray-700 text-lg mb-2">
										{section.description}
									</p>
								</div>
							</div>
							<div className="grid col-span-full">
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
									{section.keyPoints.map((keyPoint, index) => (
										<div
											key={index}
											className="flex items-center bg-umojablue border border-white hover:border-umojayellow p-6 rounded-bl-[10px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[10px] shadow-md hover:transform hover:scale-110 transition-transform duration-300"
										>
											<p className="w-full font-bold text-md text-white text-center ">
												{keyPoint}
												{/* <hr className="h-1 mt-4 mx-8 bg-umojayellow" /> */}
											</p>
										</div>
									))}
								</div>
							</div>
							<div>
								<h4 className="text-2xl font-semibold text-umojablue mb-2">
									{section.question_1}
								</h4>

								<ul className="list-disc list-inside text-lg text-gray-700">
									{section.content_1 &&
										section.content_1.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
								</ul>
							</div>
							<div>
								<h4 className="text-2xl font-semibold text-umojablue mb-2">
									{section.question_2}
								</h4>

								<ul className="list-disc list-inside text-lg text-gray-700">
									{section.content_2 &&
										section.content_2.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
								</ul>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
