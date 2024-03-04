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

const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const onClickShowPassword = () =>
		setShowPassword((prevState) => !prevState);

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
				<div className="flex flex-col p-5 gap-4 items-center">
					<TextField
						id="email"
						placeholder="Email"
						startAdornment={
							<AlternateEmailRoundedIcon />
						}
					/>
					<TextField
						id="email"
						placeholder="Password"
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
					<Link href="/forgot-password">
						Forgot your
						password?
					</Link>
					<PrimaryButton>
						Login
					</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Login;
