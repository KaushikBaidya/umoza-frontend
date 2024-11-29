"use client";

import ListClientStory from "./(components)/ListClientStory";

export default function ClientStories() {
	return (
		<main>
			<section>
				<div className="bg-slide2 h-[50vh] lg:h-[70vh] bg-cover bg-[center-top]"></div>

				<div className="px-2 lg:px-32 py-20 text-lg font-medium text-gray-800 text-justify flex flex-col gap-10">
					<div className="flex justify-center items-center">
						<div className="responsive-iframe">
							<iframe
								src="https://www.youtube.com/embed/FwTz9wsqz-Q?si=0PqFPgg1-iV-Pi1S"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>
					</div>
					<ListClientStory />
				</div>
			</section>
		</main>
	);
}
