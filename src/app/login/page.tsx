"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";

import TextInput from "../components/Inputs/TextInput";

const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const onClickShowPassword = () =>
		setShowPassword((prevState) => !prevState);

	return (
		<div>
			<h1>Login</h1>
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
