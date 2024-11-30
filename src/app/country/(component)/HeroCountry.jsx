export default function HeroCountry({ countryBg, countryTitle }) {
	return (
		<section
			className="relative bg-cover bg-center h-[50vh] lg:h-[70vh]"
			style={{ backgroundImage: `url(${countryBg})` }}
		>
			<div className="absolute inset-0 bg-black opacity-60"></div>
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
				<h1 className="text-3xl font-bold mb-2">{countryTitle}</h1>
			</div>
		</section>
	);
}
