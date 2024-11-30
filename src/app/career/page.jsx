"use client";
import React from "react";
import Banner from "./(components)/Banner";
import BuildingCareer from "./(components)/BuildingCareer";
import Diversity from "./(components)/Diversity";
import WhyWorkAtUmoja from "./(components)/WhyWorkAtUmoja";
// import JobOpportunities from "./(components)/JobOpportunities";

export default function Career() {
	return (
		<section>
			<Banner />
			<BuildingCareer />
			<Diversity />
			<WhyWorkAtUmoja />
			{/* <JobOpportunities /> */}
		</section>
	);
}
