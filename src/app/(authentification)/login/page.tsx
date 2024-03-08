"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import React from "react";

import Image from "next/image";
import PrimaryButton from "../../components/Inputs/Buttons/PrimaryButton";
import TextField from "../../components/Inputs/TextFields/TextField";
import Link from "next/link";
import { z } from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loginData } from "~/helper/types/loginTypes";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const Login = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = React.useState(false);

	const formHook = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const URL = "https://test.dynamicapp.ro:5999/auth/login";

	const onClickShowPassword = () =>
		setShowPassword((prevState) => !prevState);

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		axios.post(URL, {
			email: data.email,
			password: data.password,
			lang: "ro",
		})
			.then((response) => {
				if (
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					response.data.msg ==
					"invalid_credentials"
				) {
					return;
				}

				router.push("/test");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div
			className="flex flex-col items-start gap-6 bg-cover bg-center h-full"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<div
				className="flex flex-col justify-start items-center gap-48 bg-[#1f222d57]
       bg-opacity-25 backdrop-blur-sm rounded-none drop-shadow-lg px-0 py-12 m-0 h-full w-full sm:px-16 sm:m-7 sm:rounded sm:w-[500px]"
			>
				<Image
					alt="Dynamic Logo"
					width={260}
					height={60}
					src="dynamicLogo.svg"
				/>
				<form
					className="flex flex-col p-5 gap-4 items-center"
					onSubmit={formHook.handleSubmit(
						onSubmit,
					)}
				>
					<TextField
						id="email"
						placeholder="Email"
						register={{
							...formHook.register(
								"email",
								{
									required: "This is required",
								},
							),
						}}
						errorMessage={
							formHook
								.formState
								.errors
								.email
								?.message
						}
						startAdornment={
							<AlternateEmailRoundedIcon />
						}
					/>
					<TextField
						id="email"
						placeholder="Password"
						register={{
							...formHook.register(
								"password",
								{
									required: "This is required",
								},
							),
						}}
						errorMessage={
							formHook
								.formState
								.errors
								.password
								?.message
						}
						type={
							showPassword
								? "text"
								: "password"
						}
						startAdornment={
							<PasswordRoundedIcon />
						}
						endAdornment={
							showPassword ? (
								<VisibilityOffRoundedIcon />
							) : (
								<VisibilityRoundedIcon />
							)
						}
						onEndIconClick={
							onClickShowPassword
						}
					/>
					<Link
						href="/forgot-password"
						className={
							"text-red-600 font-bold underline"
						}
					>
						Forgot your
						password?
					</Link>
					<PrimaryButton type="submit">
						Login
					</PrimaryButton>
				</form>
			</div>
		</div>
	);
};

export default Login;
