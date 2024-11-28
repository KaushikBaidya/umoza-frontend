import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import { clients } from "@/data/clients";
import Link from "next/link";
import Image from "next/image";

const ClientStoryCard = ({ story }) => {
	return (
		<div className="w-[24rem] md:w-full flex justify-center  rounded-lg p-4">
			<div className="w-full">
				<Image
					src={story.image}
					alt={story.name}
					width={500}
					height={500}
					className="w-40 md:w-full h-auto max-h-[300px] object-contain md:object-cover mb-4 rounded-tl-[50px] rounded-br-[50px]"
				/>
				<div className="text-umojablue text-justify">
					<h3 className="text-2xl font-semibold mb-2">{story.name}</h3>
					<p className="text-gray-700 mb-4">{story.description}</p>
					<p>{story.country}</p>
				</div>
			</div>
		</div>
	);
};

export default function ClientStories() {
	const stories = clients;
	return (
		<section>
			<div className="py-20 grid gap-5 place-items-center">
				<h2 className="text-3xl font-bold text-center mb-10 uppercase text-umojablue">
					CLIENT STORIES
				</h2>
				<div className="container w-full px-4 md:px-0 md:w-2/3">
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
								autoplay: false,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 5,
								autoplay: false,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
								autoplay: {
									delay: 6000,
									disableOnInteraction: false,
								},
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
								autoplay: {
									delay: 6000,
									disableOnInteraction: false,
								},
							},
						}}
					>
						{stories.map((story, index) => (
							<SwiperSlide key={index}>
								<ClientStoryCard story={story} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="flex justify-center mt-20">
						<Link
							href="client-stories"
							className="inline-block px-4 py-2 bottom-2 relative bg-umojablue text-white font-semibold rounded-lg hover:bg-umojayellow hover:text-umojablue transition duration-300"
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
