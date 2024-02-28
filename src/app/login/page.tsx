"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";

import TextInput from "../components/Inputs/TextInput";
import Image from "next/image";
import PrimaryButton from "../components/Inputs/Buttons/PrimaryButton";

const Login = () => {
	const [showPassword, setShowPassword] =
		React.useState(false);

	const onClickShowPassword = () =>
		setShowPassword(
			(prevState) => !prevState,
		);

	return (
		<div
			className="flex flex-col items-start gap-6 bg-cover bg-center h-full"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<div
				className="flex flex-col justify-start items-center gap-48 bg-white
       bg-opacity-25 backdrop-blur-sm rounded-none drop-shadow-lg px-0 py-12 m-0 h-full sm:px-16 sm:m-7 sm:rounded-3xl w-full sm:w-96"
			>
				<Image
					alt="Dynamic Logo"
					width={
						260
					}
					height={
						60
					}
					src="dynamicLogo.svg"
				/>
				<div className="flex flex-col p-5 gap-4">
					<TextInput
						placeholder="Email"
						id="email"
						startIcon={
							<AlternateEmailRoundedIcon />
						}
					/>
					<TextInput
						placeholder="Password"
						id="password"
						startIcon={
							<PasswordRoundedIcon />
						}
						endIcon={
							<VisibilityRoundedIcon />
						}
						onEndButtonClick={
							onClickShowPassword
						}
						type={
							showPassword
								? "text"
								: "password"
						}
					/>
					<PrimaryButton>
						Login
					</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Login;
