import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { usePostData } from "@/hooks/dataApi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";

const schema = yup.object({
	fullName: yup.string().required("Required."),
	email: yup.string().required("Required."),
	phone: yup.string().required("Required."),
	message: yup.string().required("Required."),
});
function Contact() {
	const [submitting, setSubmitting] = useState(false);

	const { mutateAsync } = usePostData();

	const {
		handleSubmit,
		control,
		reset,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { fullName, email, message, phone } = errors;

	const onSubmit = async (formData) => {
		var data = new FormData();
		data.append("fullName", formData.fullName);
		data.append("email", formData.email);
		data.append("phone", formData.phone);
		data.append("message", formData.message);
		setSubmitting(true);
		try {
			const { status } = await mutateAsync({
				path: "/SendMessage/create",
				formData: data,
			});
			if (status === 201) {
				toast.success("Saved successfully!");
				reset();
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
			setSubmitting(false);
		}
	};

	return (
		<>
			<section className="" id="contact">
				<div className="container max-w-6xl p-6 mx-auto md:w-[40%] space-y-6 sm:space-y-12">
					<div className="p-6 space-y-2 lg:col-span-5">
						<h2 className="text-umojablue text-3xl font-bold mb-4 uppercase text-center">
							Contact Us
						</h2>
						<div className=" text-primary font-semibold">
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="flex flex-col space-y-3"
							>
								<Input
									className="border-sky-400 border-2"
									name="fullName"
									label="Full Name"
									type="text"
									register={register}
									errorMessage={fullName?.message}
									showPlaceHolder={true}
									fromControl="form-controlNoBorder"
								/>
								<Input
									name="email"
									label="Email"
									type="text"
									register={register}
									errorMessage={email?.message}
									showPlaceHolder={true}
									fromControl="form-controlNoBorder"
								/>
								<Input
									name="phone"
									label="Phone"
									type="text"
									register={register}
									errorMessage={phone?.message}
									showPlaceHolder={true}
									fromControl="form-controlNoBorder"
								/>
								<TextArea
									control={control}
									name="message"
									label="Message"
									errorMessage={message?.message}
									showPlaceHolder={true}
									fromControl="form-controlNoBorder"
								/>

								<div className="flex justify-center mt-4">
									<button
										type="submit"
										className="px-4 py-2 bottom-2 bg-umojablue hover:bg-umojayellow hover:text-umojablue text-white rounded-md transition duration-300"
										disabled={submitting}
									>
										SEND
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
