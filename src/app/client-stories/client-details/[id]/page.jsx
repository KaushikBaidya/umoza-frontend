"use client";
import { clients } from "@/data/clients";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ClientDetails() {
	const id = useParams();
	const router = useRouter();

	const currentId = parseInt(id.id);

	const stories = clients;

	const story = stories.find((story) => story.id === currentId);

	if (!story) {
		return <div>Story not found!</div>;
	}

	const currentIndex = stories.findIndex((story) => story.id === currentId);

	const previousStory =
		currentIndex === 0
			? stories[stories.length - 1]
			: stories[currentIndex - 1];
	const nextStory =
		currentIndex === stories.length - 1
			? stories[0]
			: stories[currentIndex + 1];

	const handlePrevious = () => {
		router.push(`/client-stories/client-details/${previousStory.id}`);
	};

	const handleNext = () => {
		router.push(`/client-stories/client-details/${nextStory.id}`);
	};

	return (
		<section className="max-w-6xl mx-auto flex justify-center items-center h-[80vh]">
			<div className="">
				<div className="gap-20">
					<div className="md:flex">
						<div className="md:shrink-0">
							<Image
								src={story.image}
								alt={story.name}
								width={300}
								height={100}
								className="w-full h-auto max-h-[300px] object-contain sm:object-cover mb-4 rounded-tr-[5rem] rounded-bl-[5rem]"
							/>
						</div>

						<div className="p-5 flex flex-col space-y-5">
							<div className="uppercase tracking-wide text-3xl text-umojablue font-bold">
								{story.name}
							</div>
							<h2 className="text-xl font-medium italic text-umojablue">
								{story.description}
							</h2>
							<p className="text-lg font-medium text-gray-700">
								{story.fullEescription}
							</p>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-300" />
				<div className="flex justify-between p-6">
					<div className="flex flex-col items-center">
						<button
							onClick={handlePrevious}
							className="flex items-center justify-center gap-2 text-2xl font-medium text-white bg-umojablue px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
						>
							<FaArrowLeft />
							<span>Previous</span>
						</button>
						<span className="text-lg font-semibold text-gray-700 mt-2 uppercase">
							{previousStory.name}
						</span>
					</div>

					<div className="flex flex-col items-center">
						<button
							onClick={handleNext}
							className="flex items-center justify-center gap-2 text-2xl font-medium text-white bg-umojablue px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
						>
							<span>Next</span>
							<FaArrowRight />
						</button>
						<span className="text-lg font-semibold text-gray-700 mt-2 uppercase">
							{nextStory.name}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
