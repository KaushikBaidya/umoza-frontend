import Image from "next/image";
import UmozaMap from "@/assets/Umoja-Map.png";
import Link from "next/link";

export default function PresenceSection() {
	return (
		<section>
			<div className="text-white bg-umojablue bg-patternBg bg-[length:2000px_600px] bg-center bg-repeat">
				<div className="bg-umojablue/95 py-20">
					<div className="max-w-6xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-8 uppercase">Our Presence</h2>
						<div className="flex justify-center items-center relative">
							<Image
								src={UmozaMap}
								alt="Map"
								className="mx-auto h-auto max-w-full" // Ensures the image is responsive
								useMap="#countrymap"
							/>
							<Link
								href="/country/uganda"
								className="absolute w-4 h-4 rounded-full circle"
								style={{ top: "385px", left: "685px" }}
							></Link>
							<Link
								href="/country/kenya"
								className="absolute w-4 h-4 rounded-full  circle"
								style={{ top: "395px", left: "745px" }}
							></Link>
							<Link
								href="/country/zambia"
								className="absolute w-4 h-4 rounded-full  circle"
								style={{ top: "555px", left: "615px" }}
							></Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
