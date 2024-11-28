import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import the fade effect CSS
import { Pagination, Autoplay, Keyboard, EffectFade } from "swiper/modules";

export default function HeroSection() {
	return (
		<section>
			<Swiper
				slidesPerView={1}
				spaceBetween={15}
				loop={true}
				autoplay={{
					delay: 6000, // Keep autoplay delay as is (6 seconds)
					disableOnInteraction: false,
				}}
				effect="fade" // Set the effect to fade
				modules={[Pagination, Autoplay, Keyboard, EffectFade]} // Include EffectFade module
				className="mySwiper"
			>
				{/* Slide 1 */}
				<SwiperSlide>
					<div className="bg-slide1 h-[70vh] bg-cover bg-[center-top] transition-opacity duration-1000 ease-in-out"></div>
				</SwiperSlide>

				{/* Slide 2 */}
				<SwiperSlide>
					<div className="bg-slide2 h-[70vh] bg-cover bg-[center-top] transition-opacity duration-1000 ease-in-out"></div>
				</SwiperSlide>

				{/* Slide 3 */}
				<SwiperSlide>
					<div className="bg-slide3 h-[70vh] bg-cover bg-[center-top] transition-opacity duration-1000 ease-in-out"></div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
