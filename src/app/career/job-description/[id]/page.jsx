"use client";
import { useGetData } from "@/hooks/dataApi";
import { useParams } from "next/navigation";
import React from "react";
import ApplyForThisJob from "../../(components)/ApplyForThisJob";
import { HashLoading } from "@/components/ui/Loading";
import Error from "@/components/error/Error";

export default function JobDescription() {
	const id = useParams();

	const {
		data: list,
		error,
		isLoading,
		isError,
	} = useGetData("careerDetails", `/Jobs/details/${id.id}`);

	if (isLoading) return <HashLoading />;

	if (isError) return <Error message={error?.message} />;

	const data = list?.data || [];

	console.log(data);

	return (
		<section>
			<div className="mt-0">
				<div className="relative bg-jobBg w-full h-[70vh] bg-cover bg-no-repeat bg-opacity-20 bg-blend-overlay"></div>

				<div className="px-8 md:px-16 lg:px-32 py-20 flex flex-col gap-10">
					<div className="grid grid-cols-1  gap-12">
						<div className="text-justify p-8">
							<div className="pb-4 text-1xl font-bold text-black">
								<h2 className="text-3xl font-bold text-umojablue ">
									{data.title}
								</h2>
								<p>Department: {data.departmentName} </p>
								<p>Loaction: {data.companyName} </p>
							</div>
							<div className="iHaveList">
								<div dangerouslySetInnerHTML={{ __html: data.section }} />
							</div>
						</div>

						<ApplyForThisJob jobId={data.jobId} companyId={data.companyId} />
					</div>
				</div>
			</div>
		</section>
	);
}
