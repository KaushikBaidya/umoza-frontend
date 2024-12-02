import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePostData } from "@/hooks/dataApi";
import Input from "@/components/ui/Input";
import { SelectFromDb, SelectFromOptions } from "@/components/ui/SelectList";
import { selectOptions } from "@/data/selectOptions";
import InputFile from "@/components/ui/InputFile";

const schema = yup
	.object({
		cvBankId: yup.string(),
		fullName: yup.string().required("Required."),
		email: yup.string().required("Required."),
		companyId: yup.string().required("Required."),
		departmentId: yup.string().required("Required."),
		jobType: yup.string().required("Required."),
	})
	.shape({
		fileUrl: yup
			.mixed()
			.required()
			.test("required", "You need to provide a file", (value) => {
				return value && value.length;
			}),
	});

export default function SubmitCV() {
	const [submitting, setSubmitting] = useState(false);
	const { mutateAsync } = usePostData();
	const [file, setFile] = useState("");

	const {
		handleSubmit,
		control,
		reset,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { fullName, email, companyId, departmentId, jobType, fileUrl } = errors;

	const onSubmit = async (formData) => {
		var data = new FormData();
		data.append("fullName", formData.fullName);
		data.append("email", formData.email);
		data.append("companyId", formData.companyId);
		data.append("departmentId", formData.departmentId);
		data.append("jobType", formData.jobType);
		data.append("file", file);

		setSubmitting(true);
		try {
			const { status } = await mutateAsync({
				path: "/CvBank/create",
				formData: data,
			});
			if (status === 201) {
				toast.success("Saved successfully!");
				reset();
				setFile("");
			}
		} catch (error) {
			if (error.response) {
				toast.error("Response : " + error.response.data);
			} else if (error.request) {
				toast.error("Request : " + error.message);
			} else {
				toast.error("Error :", error.message);
			}
		} finally {
			// action={() => {}},
			setSubmitting(false);
		}
	};
	return (
		<section className="py-20 text-umojablue">
			<div className="container mx-auto max-w-6xl px-4">
				<h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
					SUBMIT YOUR CV
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="p-8 rounded border border-umojayellowdark"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<Input
							name="fullName"
							label="Name"
							type="text"
							register={register}
							errorMessage={fullName?.message}
						/>
						<Input
							name="email"
							label="Email"
							type="email"
							register={register}
							errorMessage={email?.message}
						/>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
						<SelectFromDb
							control={control}
							label="SELECT CATEGORY"
							path="/departments/select"
							name="departmentId"
							errorMessage={departmentId?.message}
						/>
						<SelectFromDb
							control={control}
							label="COUNTRY"
							path="/company/select"
							name="companyId"
							errorMessage={companyId?.message}
						/>
						<SelectFromOptions
							register={register}
							options={selectOptions.jobType}
							label="OPPORTUNITY TYPE"
							name="jobType"
							errorMessage={jobType?.message}
						/>
					</div>

					<div className="mt-6">
						<InputFile
							name="fileUrl"
							label="UPLOAD CV"
							register={register}
							action={setFile}
							errorMessage={fileUrl?.message}
						/>
					</div>

					<div className="mt-6 text-center">
						<button
							type="submit"
							className="px-6 py-3 border border-umojablue text-umojablue rounded hover:bg-blue-800 hover:text-white cursor-pointer "
							disabled={submitting}
						>
							SEND
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
