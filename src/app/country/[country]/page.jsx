import { notFound } from "next/navigation";
import HeroCountry from "../(component)/HeroCountry";
import Stats from "../(component)/Stats";
import Loan from "../(component)/Loan";
import { countries } from "@/data/countries";
import Contact from "../(component)/Contact";

export default async function CountryPage({ params }) {
	const { country } = await params;
	const countryData = countries.find(
		(c) => c.country === country.toLowerCase()
	);

	if (!countryData) {
		notFound(); // Built-in Next.js function to handle 404 pages
	}

	return (
		<div>
			<HeroCountry
				countryBg={countryData.bannerImage}
				countryTitle={countryData.title}
			/>
			<Stats
				femaleBorrowers={countryData.stats.femaleBorrowers}
				employees={countryData.stats.employees}
				foundedYear={countryData.stats.foundedYear}
				branches={countryData.stats.branches}
			/>
			<Loan countryData={countryData} />
			<Contact countryData={countryData} />
		</div>
	);
}
