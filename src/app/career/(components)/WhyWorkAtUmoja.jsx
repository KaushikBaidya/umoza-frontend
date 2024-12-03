import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import Image from "next/image";

const testimonials = [
	{
		name: "Rose Chebet – Umoja Fanisi",
		image: "/assets/career/Rose-e1715057970837.webp",
		description:
			"I started my career as a Loan Officer and then I joined Umoja Fanisi as a Branch Manager....",
		fullDescription:
			"I started my career as a Loan Officer and then I joined Umoja Fanisi as a Branch Manager. Now I am an Area Manager for Kisii area in Kenya.I have experienced growth in my personal journey and in my professional career I have gained more experiences, I have been promoted and I can also create a path for my team to grow.I enjoy my work place with its collaborative environment and the opportunity to work with talented people.",
	},
	{
		name: "Bridget Atukunda - Umoja Microfinance",
		image: "/assets/career/Bridget-300x256.webp",
		description:
			"I joined Umoja Microfinance in March 2021 as a loan officer working from Kansanga branch...",
		fullDescription:
			"I joined Umoja Microfinance in March 2021 as a loan officer working from Kansanga branch, fresh graduate where I was later promoted to branch manager on at Rwimi branch where I was able to learn the importance of collaboration, team work and managerial skills and it was due to these skills that I was then promoted to an HR Liaison field officer in July 2023.In this position I was able to mentor staff, help in issues that were affecting them and also teaching them how to be better employees as well as motivating them with my experience and journey.This as well worked as a motivation for me to yearn and desire to be a better person which pushed me further to a bigger and greater position of being an HR and Admin Assistant  in March 2024.In this journey I have grown to believe that everything is possible and as a person you always have to push yourself in order to reach further desirable heights.Working with Umoja has by far greatly impacted my career journey in a way that when I joined Umoja I had no plan for who exactly I wanted to be and what I wanted to do professionally I was lost and confused with different career objectives.Umoja has shaped me in a way that it has cleared my vision my for career path and growth, working in a community helped me realise my need to want to be a mentor, a guide to individuals like me who might think its",
	},
	{
		name: "Belina Kaziira - Umoja Fanisi",
		image: "/assets/career/Belina-150x150.webp",
		description:
			"I joined Umoja on 1st November 2020 as an HR Assistant and administrator...",
		fullDescription:
			"I joined Umoja on 1st November 2020 as an HR Assistant and administrator. Being part of the inaugural team at Umoja fills me with pride and hope experiencing the journey of growth and development we have embarked on together. On 1/3/2023 I was promoted to HR Officer and I am currently stationed at Umoja Fanisi Kenya, where I continue to contribute to the organization’s success and evolution.Working at Umoja Microfinance has had a positive impact on my career journey, especially the fact that Umoja believed in my abilities despite having had no experience as I was a fresh graduate and I was able transition from an HR Assistant to an HR Officer. This has been instrumental in shaping my growth and development in the field of Human Resources.At Umoja, I gained valuable knowledge and skills in HR practices, procedures, and policies. This provided me with a solid understanding of the HR functions and processes within a financial institution, as well as practical experience in areas such as recruitment, onboarding, and employee relations.The promotion to HR Officer at Umoja Microfinance was a significant milestone in my career journey. It demonstrated that my hard work, dedication, and contributions as an HR Assistant were recognized and valued by the organization. This advancement allowed me to take on more responsibilities and this motivated me to go back to school and upgrade to a Masters in Human Resource so I can equipe myself with more knowledge and be able to advance.The supportive work environment and mentorship I received at Umoja from my supervisors Grace Komugisha and Marion Looney played a crucial role in my professional development as these two ladies have greatly equipped me, motivated and prepared me for the challenges and milestones of the HR department.Overall, my experience at Umoja Microfinance has been transformative, empowering me to grow and excel in my HR career. I am grateful for the opportunities, knowledge, and skills I have gained during my time at Umoja Microfinance, and I look forward to further advancing my career in Human Resources with confidence and competence.My favorite thing about working at Umoja Microfinance includes the positive company culture, the unity amongst staff, flexibility, the training opportunities, the unwavering support from supervisors and ooh not forgetting the work life balance and happy Fridays.",
	},
	// {
	//   name: "Ismael Mayengo - Umoja Microfinance",
	//   image: "/assets/career/Ismael-e1715006346502.webp",
	//   description: "I joined Umoja on 9th September 2021 as a loans officer...",
	//   fullDescription:
	//     "I joined Umoja on 9th September 2021 as a loans officer in Bugiri branch Eastern Uganda and around May 2022 I was promoted as a branch manager trainee at Nakulabye branch and later promoted to full branch manager. In December 2023 Umoja advertised for internal auditor position since I was once an accountant before Umoja I humbly applied and went for interviews and I passed and became Umoja internal auditor on 10th December till date.I originally wanted to become an Accountant but slots for that were not yet open so I applied for loans officer and took the opportunity and worked hard thus Umoja gave me an opportunity to continue with my career path and now I am an Internal Audit Officer for Umoja. With my salary I have been able to pay for myself Professional course for accountants in Uganda and East Africa which I am still pursuing. Working with the audit department, I have been able to acquire all necessary skills with the guidance of the head making me a good auditor.Umoja is an organisation that puts its staffs first through taking care of them and trying to address their challenges in their respective departments. Umoja also gives an opportunity to grow from one position to another and also grow careerwise. Lastly Umoja makes sure that salary is on time which motives me as a staff to concentrate on my work. Thank you so much for the opportunity!",
	// },
];

const TestimonialCard = ({ name, image, description, fullDescription }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={`p-6 rounded-lg w-full max-w-xs mx-auto transition-all duration-300 ${
				isExpanded ? "h-auto" : "h-64"
			}`}
		>
			<div className={`flex flex-col h-48 ${isExpanded ? "h-auto" : "h-48"}`}>
				<div className="flex items-center space-x-4">
					<Image
						src={image}
						alt={name}
						width={300}
						height={300}
						className="w-12 h-12 rounded-full"
					/>
					<h4 className="font-semibold text-lg">{name}</h4>
				</div>
				<p className="text-gray-700 my-4 text-justify">
					{isExpanded ? fullDescription : description}
				</p>
				<button
					className="text-umojablue focus:outline-none mt-auto"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? "▲ HIDE" : "▼ READ MORE"}
				</button>
			</div>
		</div>
	);
};

export default function WhyWorkAtUmoja() {
	return (
		<section className="py-20">
			<div className="container mx-auto max-w-6xl px-4">
				<h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
					WHY WORK AT UMOJA
				</h2>
				<p className="text-center text-lg mb-12">
					UMOJA prioritizes the professional growth of its employees, providing
					a working environment that recognizes achievements, supports
					development, and celebrates milestones fostering a fulfilling career
					journey.
				</p>

				<Swiper
					slidesPerView={1} // Default to 1 slide
					spaceBetween={15}
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
					breakpoints={{
						640: {
							slidesPerView: 1, // 1 slide for small screens
						},
						768: {
							slidesPerView: 3, // 3 slides for medium screens
						},
						1024: {
							slidesPerView: 3, // 3 slides for larger screens
						},
					}}
					modules={[Pagination, Autoplay, Keyboard]} // Removed Mousewheel
					className="mySwiper"
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<TestimonialCard
								image={testimonial.image}
								name={testimonial.name}
								description={testimonial.description}
								fullDescription={testimonial.fullDescription}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
