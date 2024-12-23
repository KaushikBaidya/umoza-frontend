"use client";
import Error from "@/components/error/Error";
import { HashLoading } from "@/components/ui/Loading";
import { useGetData } from "@/hooks/dataApi";
import { useRouter } from "next/navigation";
import { FaBriefcase } from "react-icons/fa";

export default function JobOpportunities() {
	const {
		data: list,
		error,
		isLoading,
		isError,
	} = useGetData("cvbank", `/jobs/list`);

	const router = useRouter();

	if (isLoading) return <HashLoading />;

	if (isError) return <Error message={error?.message} />;

	const data = list.data;

	return (
		<section>
			<div className="py-20 bg-gray-100 flex flex-col items-center">
				<div className="container max-w-6xl px-4 text-center">
					<h2 className="text-3xl font-bold text-blue-900 mb-8">
						JOB OPPORTUNITIES
					</h2>
				</div>
				<div className="container max-w-6xl px-4 gap-6 items-center justify-center">
					<div className="flex flex-col items-center md:grid grid-cols-3 gap-6">
						{Array.isArray(data) && data.length > 0 ? (
							data.map((item, index) => (
								<div
									className="max-w-xs w-full p-6 rounded-lg shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl"
									key={index}
								>
									<div className="mb-4 flex flex-col items-start">
										<FaBriefcase className="text-umojablue text-2xl mb-2" />
										<span className="block text-xs font-medium tracking-widest uppercase text-gray-500">
											{item.companyName}
										</span>
										<h2 className="text-lg font-semibold tracking-wide text-umojablue">
											{item.title}
										</h2>
									</div>
									<button
										onClick={() =>
											item.jobId &&
											router.push(`/career/job-description/${item.jobId}`)
										}
										className="w-full px-6 py-3 border border-umojablue text-umojablue rounded hover:bg-umojablue hover:text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
										title={`Apply for ${item.title}`}
									>
										Apply Now
									</button>
								</div>
							))
						) : (
							<div className="col-span-full text-center">
								<p className="text-lg text-gray-500">
									No job opportunities available.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
