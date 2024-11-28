import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import UmozaBanner from "@/assets/umoza-banner.webp";

export default function WhoWeAre() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<section className="bg-white p-20">
			<div className="container max-w-7xl mx-auto space-y-6 sm:space-y-12">
				<div className="block max-w-5xl gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white shadow rounded-2xl p-10">
					<div className="p-6 space-y-2 lg:col-span-5">
						<h2 className="text-umojablue text-3xl font-bold mb-4 uppercase">
							who we are
						</h2>
						<p className="text-gray-700">
							Welcome to Umoja International LLC, where we believe in turning
							dreams into reality, one loan at a time! As an international
							microfinance company, we are on a mission to empower individuals
							and communities across Eastern and Southern Africa by providing
							accessible financial solutions to women entrepreneurs.
						</p>

						<div
							className={`transition-all duration-500 ease-in-out overflow-hidden ${
								isExpanded ? "max-h-96" : "max-h-0"
							}`}
						>
							{isExpanded && (
								<span>
									<br />
									At Umoja, we understand that every entrepreneur, no matter how
									big or small, deserves a chance to grow. That’s why we offer
									flexible microloans, financial literacy sensitization, and
									ongoing support to help our clients build sustainable
									businesses and create lasting impact in their communities.
									<br />
									<br />
									With a team of dedicated professionals who believe in what we
									do, we are committed to breaking down barriers and unlocking
									opportunities for those who are often overlooked by
									traditional financial institutions.
									<br />
									<br />
									Join us on our journey to make a difference and spread the
									power of microfinance far and wide. Together, we can create a
									world where everyone has the chance to thrive and succeed.
								</span>
							)}
						</div>
						<button
							onClick={toggleReadMore}
							className="mt-4 text-blue-700 hover:text-blue-900 focus:outline-none"
						>
							{isExpanded ? "▲ HIDE" : "▼ READ MORE"}
						</button>

						<Link
							href="/about"
							className="btn bg-umojablue hover:bg-umojayellow text-umojablue"
						>
							MORE ABOUT UMOJA INTERNATIONAL
						</Link>
					</div>
					<Image
						src={UmozaBanner}
						alt="banner"
						className="object-cover w-full h-64 rounded-tr-full rounded-bl-full sm:h-96 lg:col-span-7 dark:bg-gray-500"
					/>
				</div>
			</div>
		</section>
	);
}
