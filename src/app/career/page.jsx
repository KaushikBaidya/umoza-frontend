import React from "react";
import Banner from "./(components)/Banner";
import BuildingCareer from "./(components)/BuildingCareer";
import Diversity from "./(components)/Diversity";
// import JobOpportunities from "./(components)/JobOpportunities";

export default function Career() {
	return (
		<section>
			<Banner />
			<BuildingCareer />
			<Diversity />
			{/* <JobOpportunities /> */}
		</section>
	);
}
