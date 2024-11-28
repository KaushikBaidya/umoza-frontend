import Image from "next/image";
import UmozaMap from "@/assets/Umoja-Map.png";
import Link from "next/link";

export default function PresenceSection() {
	return (
		<section>
			<div className="text-white bg-umojablue bg-patternBg bg-[length:2000px_600px] bg-center bg-repeat">
				<div className="bg-umojablue/95 py-20">
					<div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold mb-8 uppercase">Our Presence</h2>
						<div className="relative w-full flex justify-center">
							{/* Ensure the image scales responsively */}
							<div className="relative w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
								<Image
									src={UmozaMap}
									alt="Map"
									className="w-full h-auto" // Makes image responsive
									useMap="#countrymap"
								/>
								{/* Responsive positioning of the map markers */}
								<Link
									href="/country/uganda"
									className="absolute w-4 h-4 rounded-full bg-blue-700 animate-ping"
									style={{ top: "48%", left: "65%" }} // Adjust based on % for responsiveness
								></Link>
								<Link
									href="/country/kenya"
									className="absolute w-4 h-4 rounded-full bg-blue-700 animate-ping"
									style={{ top: "49%", left: "72%" }}
								></Link>
								<Link
									href="/country/zambia"
									className="absolute w-4 h-4 rounded-full bg-blue-700 animate-ping"
									style={{ top: "70%", left: "57%" }}
								></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
