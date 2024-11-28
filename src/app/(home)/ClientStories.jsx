import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import { clients } from "@/data/clients";
import Link from "next/link";
import Image from "next/image";

const ClientStoryCard = ({ story }) => {
	return (
		<div className="w-full sm:w-full flex justify-center rounded-lg p-4 mb-4">
			<div className="w-full bg-white ">
				{/* Image */}
				<Image
					src={story.image}
					alt={story.name}
					width={300}
					height={100}
					className="w-full h-auto max-h-[300px] object-contain sm:object-cover mb-4 rounded-tr-[5rem] rounded-bl-[5rem]"
				/>
				{/* Content */}
				<div className="text-umojablue p-4 text-left">
					<h3 className="text-lg sm:text-xl font-semibold mb-2">
						{story.name}
					</h3>
					<p className="text-sm sm:text-base text-gray-700 mb-4">
						{story.description}
					</p>
					<p className="text-sm text-gray-500">{story.country}</p>
				</div>
			</div>
		</div>
	);
};

export default function ClientStories() {
	const stories = clients;

	return (
		<section>
			<div className="py-20 pr-2 sm:px-6 lg:px-8">
				<h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 uppercase text-umojablue">
					Client Stories
				</h2>
				<div className="max-w-7xl mx-auto">
					<Swiper
						spaceBetween={10}
						loop={true}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
							dynamicBullets: true,
						}}
						keyboard={true}
						modules={[Pagination, Autoplay, Keyboard]}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							640: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
					>
						{/* Slide content */}
						{stories.map((story, index) => (
							<SwiperSlide key={index}>
								<ClientStoryCard story={story} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="flex justify-center mt-10">
						<Link
							href="client-stories"
							className="inline-block px-6 py-3 bg-umojablue text-white font-semibold rounded-lg hover:bg-umojayellow hover:text-umojablue transition duration-300"
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
