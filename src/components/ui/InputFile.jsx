import React from "react";
import ErrorMessage from "../error/ErrorMessage";

export default function InputFile({
	name,
	label,
	register,
	errorMessage = "",
	action,
	accept,
}) {
	return (
		<div className="form-row w-full">
			<label>{label}</label>
			<input
				{...register(name)}
				type="file"
				onChange={(e) => {
					action(e.target.files[0]);
				}}
				className="border-red-800"
				accept={accept}
			/>
			<ErrorMessage message={errorMessage} />
		</div>
	);
}
