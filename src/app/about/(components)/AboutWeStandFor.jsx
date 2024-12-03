const values = [
	{
		title: "Vision",
		subTitle: "To Improve lives through financial inclusion for all people.",
	},
	{
		title: "Mission",
		subTitle:
			"We exist to serve & empower people to build a brighter future together.",
	},
	{
		title: "Objective",
		subTitle:
			"To transform the Microfinance industry by pursuing excellence in all we do.",
	},
];

const Card = ({ title, subTitle }) => {
	return (
		<div className="bg-umojablue grid gap-3 rounded-2xl p-8 h-full text-center rounded-bl-[20px] rounded-tl-[70px] rounded-br-[70px] rounded-tr-[20px]">
			<h2 className="text-umojayellow text-3xl font-bold">{title}</h2>
			<p className="text-sm md:text-base">{subTitle}</p>
			<hr className="h-px mt-4 mx-8 bg-umojayellow" />
		</div>
	);
};

export default function AboutWeStandFor() {
	return (
		<section>
			<div className="grid grid-cols-1 gap-14 py-14 px-10 md:px-64">
				<h2 className=" font-bold text-umojablue text-3xl flex justify-center items-center uppercase">
					What we stand for
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-justify">
					<div className="grid gap-4">
						<p>
							UMOJA means Unity in Swahili and this really embodies what we
							stand for. We stand for unity in opportunities and we work hard to
							ensure everything we do serves our aim of financial inclusion for
							all women.
						</p>
						<p>
							UMOJA's interventions aim to achieve large scale, positive changes
							through economic and social programmes that enable women to
							realise they're potential. The goal of UMOJA is to reduce poverty
							and empower women within the community by creating economic
							opportunities through microfinance support. UMOJA firmly believes
							and is actively involved in promoting human rights, dignity and
							gender equity
						</p>
					</div>
					<div className="grid gap-4">
						<p>
							through social, economic, and human capacity building. UMOJA is
							committed to making it's programs socially and financially
							sustainable, using new methods and improved technologies.
						</p>
						<p>
							Umoja International LLC is driven by enhancing the quality of life
							through comprehensive financial inclusion across communities. By
							supporting individuals with essential access to capital, we
							empower individuals to reach there true potential as entrepreneurs
							making an impact in the lives of there families and those around
							them.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white text-center text-sm ">
					{values.map((value, index) => (
						<Card title={value.title} subTitle={value.subTitle} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}
