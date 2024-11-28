"use client";

import AboutCoreValues from "./(components)/AboutCoreValues";
import AboutSection from "./(components)/AboutSection";
import AboutUmozaTeam from "./(components)/AboutUmozaTeam";
import AboutWeStandFor from "./(components)/AboutWeStandFor";

export default function About() {
	return (
		<main>
			<AboutSection />
			<AboutWeStandFor />
			<AboutCoreValues />
			<AboutUmozaTeam />
		</main>
	);
}
