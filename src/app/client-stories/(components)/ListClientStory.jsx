import { clients } from "@/data/clients";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ListClientStory() {
	const stories = clients;
	const countries = [...new Set(stories.map((story) => story.country))];
	const [selectedCountry, setSelectedCountry] = useState(countries[0]);

	const filteredStories = stories.filter(
		(story) => story.country === selectedCountry
	);

	return (
		<section>
			<div className="py-20 grid gap-5 px-6 sm:px-10 lg:px-14">
				{/* Country Selector */}
				<div className="flex gap-2 flex-wrap mb-10 justify-center sm:justify-start">
					{countries.map((country) => (
						<button
							key={country}
							onClick={() => setSelectedCountry(country)}
							className={`px-4 py-2 rounded-full transition duration-300 ${
								selectedCountry === country
									? "bg-umojayellow text-umojablue"
									: "bg-umojablue text-white hover:bg-umojayellow hover:text-umojablue"
							}`}
						>
							{country}
						</button>
					))}
				</div>

				{/* Stories Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredStories.map((story) => (
						<div
							key={story.id}
							className="rounded-tl-[50px] rounded-br-[50px] shadow mb-4 grid grid-cols-1"
						>
							<Image
								src={story.image}
								alt={story.name}
								width={300}
								height={100}
								className="w-full h-auto max-h-[300px] object-contain sm:object-cover mb-4 rounded-tr-[5rem] rounded-bl-[5rem]"
							/>
							<div className="text-left text-umojablue h-auto px-4 ">
								<h3 className="text-xl sm:text-2xl font-semibold mb-2">
									{story.name}
								</h3>
								<p className="text-gray-700 mb-4 text-sm sm:text-base font-semibold text-justify">
									{story.description}
								</p>
								<div className="flex gap-10 sm:gap-20 justify-between items-center py-5">
									<p className="text-xs sm:text-sm">{story.country}</p>
									<Link
										href={`/client-stories/client-details/${story.id}`}
										className="inline-block px-3 py-1 bg-umojablue text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-umojayellow hover:text-umojablue transition duration-300"
									>
										Read More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
