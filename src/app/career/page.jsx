"use client";
import React, { Suspense } from "react";
import Banner from "./(components)/Banner";
import BuildingCareer from "./(components)/BuildingCareer";
import Diversity from "./(components)/Diversity";
import WhyWorkAtUmoja from "./(components)/WhyWorkAtUmoja";
import JobOpportunities from "./(components)/JobOpportunities";
import SubmitCV from "./(components)/SubmitCV";
import { FallbackLoading } from "@/components/ui/Loading";

export default function Career() {
	return (
		<section>
			<Banner />
			<BuildingCareer />
			<Diversity />
			<WhyWorkAtUmoja />
			<Suspense fallback={<FallbackLoading />}>
				<JobOpportunities />
			</Suspense>
			<SubmitCV />
		</section>
	);
}
