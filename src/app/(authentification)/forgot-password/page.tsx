"use client";

import { Input } from "@mui/base";
import { useForm } from "react-hook-form";

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// Handle login logic with email and password data
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register("email", {
					required: true,
					maxLength: 80,
				})}
				error={!!errors.email} // Set error prop based on validation
				placeholder="Enter your email"
			/>
			<Input
				{...register("password", {
					required: true,
					minLength: 6,
				})}
				error={!!errors.password}
				placeholder="Enter your password"
				type="password"
			/>
			<button type="submit">Login</button>
		</form>
	);
}

export default LoginForm;

// import React from "react";
// import { type SubmitHandler, useForm } from "react-hook-form";
// import TextField from "../../components/Inputs/TextFields/TextField";

// type FormFields = {
// 	email: string;
// 	password: string;
// };

// export default function ForgotPassword() {
// 	const { handleSubmit, register, formState } = useForm<FormFields>({
// 		defaultValues: { email: "", password: "" },
// 	});

// 	const onSubmit: SubmitHandler<FormFields> = (data) => {
// 		console.log(data);
// 	};

// 	return (
// 		<form className="flex flex-col w-96">
// 			<TextField
// 				placeholder="Email"
// 				{...register("email")}
// 			/>
// 			<TextField
// 				placeholder="Password"
// 				{...register("password")}
// 			/>
// 			<button
// 				className="bg-red-500 rounded w-[120px] h-[32px]"
// 				onClick={handleSubmit(onSubmit)}
// 			>
// 				Submit
// 			</button>
// 		</form>
// 	);
// }
