import Image from "next/image";
import UmozaTeam from "@/assets/umoza-team.jpeg";

export default function AboutUmozaTeam() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-12 gap-14 py-20 px-10 md:px-64 bg-umojayellowlight">
			<div className="lg:col-span-5 space-y-6">
				<h2 className="text-umojablue text-3xl font-bold mb-4">
					THE UMOJA TEAM
				</h2>
				<div className="grid grid-cols-1 gap-4 text-gray-700 text-justify ">
					<p>
						At Umoja, we are inspired by our values, especially having a
						deep-rooted sense of integrity in all that we do. With diverse
						teams, we succeed by supporting each other and doing the right thing
						in the right way.
					</p>

					<p>
						Last but not least, we listen. We really listen. At Umoja you will
						have a voice to share your ideas, feedback, and celebrate your
						successes.
					</p>
					<p>
						If you are interested in joining our team, you can take a look at
						all our current vacancies on our Careers page where you can apply
						directly for roles or you can submit your CV to be added to our
						database for future opportunities.
					</p>
				</div>
			</div>

			<div className="lg:col-span-7">
				<Image
					src={UmozaTeam}
					alt="Umoja Team"
					className="object-contain w-full h-64 sm:h-96 rounded-tl-full rounded-br-full"
				/>
			</div>
		</section>
	);
}
