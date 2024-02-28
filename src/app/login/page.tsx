"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";

import TextInput from "../components/Inputs/TextInput";
import Image from "next/image";

const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const onClickShowPassword = () =>
		setShowPassword((prevState) => !prevState);

	return (
		<div
			className="flex flex-col items-center gap-6 bg-cover bg-center h-full"
			style={{
				backgroundImage: `url("https://dynamicstudio.ro/wp-content/uploads/2022/11/Burning-Cardio.jpg")`,
			}}
		>
			<Image
				alt="Dynamic Logo"
				width={380}
				height={60}
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
			</div>
		</div>
	);
};

export default Login;
