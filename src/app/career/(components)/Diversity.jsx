import Image from "next/image";
import React from "react";
import DiversityImage from "@/assets/diversity.jpeg";

export default function Diversity() {
	return (
		<section className="bg-gray-100 py-20">
			<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
				<div className="">
					<Image
						src={DiversityImage}
						alt="Diversity"
						className="object-cover w-full rounded-3xl "
					/>
				</div>
				<div className="">
					<h3 className="text-3xl font-bold text-blue-900 uppercase mb-4">
						Diversity and Inclusion
					</h3>
					<div className="grid grid-cols-1 gap-4 text-justify text-lg text-gray-700">
						<p>
							Diversity, inclusion and equity are all deeply ingrained within
							Umoja International. The organization acknowledges and celebrates
							many perspectives and backgrounds within our workforce and this is
							characterized by inventiveness and originality which make Umoja a
							great place to work.
						</p>
						<p>
							Our dedication is directed towards establishing an environment
							that works towards inclusivity, wherein individuals from every
							background are given a warm reception from the moment they start
							working with us and throughout their career at Umoja. This
							commitment resonates throughout our team composition,
							undertakings, and ventures which all embrace global diversity and
							create a working environment where everyone can feel safe, heard
							and thrive.
						</p>
						<p>
							Umoja International endeavors to ensure that every individual’s
							voice has space to be heard and that pathways to development and
							meaningful contribution remain unobstructed from barriers.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
