import { FaBook, FaBuilding, FaCalculator, FaUsers } from "react-icons/fa";

export default function Stats({
	femaleBorrowers,
	employees,
	branches,
	foundedYear,
}) {
	return (
		<section className="py-20">
			<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-5">
				<div className="flex flex-col items-center">
					<FaBook className="text-8xl text-umojayellow mb-4" />
					<p className="text-umojablue font-bold text-3xl">{femaleBorrowers}</p>
					<p className="text-umojablue text-lg">Female Borrowers</p>
				</div>
				<div className="flex flex-col items-center">
					<FaUsers className="text-8xl text-umojayellow mb-4" />
					<p className="text-umojablue font-bold text-3xl">{employees}</p>
					<p className="text-umojablue text-lg">Employees</p>
				</div>
				<div className="flex flex-col items-center">
					<FaBuilding className="text-8xl text-umojayellow mb-4" />
					<p className="text-umojablue font-bold text-3xl">{branches}</p>
					<p className="text-umojablue text-lg">Branches</p>
				</div>
				<div className="flex flex-col items-center">
					<FaCalculator className="text-8xl text-umojayellow mb-4" />
					<p className="text-umojablue font-bold text-3xl">{foundedYear}</p>
					<p className="text-umojablue text-lg">Founded</p>
				</div>
			</div>
		</section>
	);
}
