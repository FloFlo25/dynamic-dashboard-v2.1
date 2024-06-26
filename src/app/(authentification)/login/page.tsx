"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import TextField from "~/app/_components/Inputs/TextFields/TextField";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import AuthLayout from "../AuthLayout";
import generateZodSchemas from "~/helper/functions/generateZodSchemas";
import { CheckboxInput } from "~/app/_components/Checbox";
import DynamicLogo from "~/app/_components/Others/DynamicLogo";

const { schema, fieldNames } = generateZodSchemas({
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

	const onClickShowPassword = () => setShowPassword((prevState) => !prevState);

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
		axios
			.post(URL, {
				email: data.email,
				password: data.password,
				lang: "ro",
			})
			.then((response) => {
				if (
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					response.data.msg == "invalid_credentials"
				) {
					return;
				}

				//TODO: Talk with Eugen
				// router.push("/test");

				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<AuthLayout>
			<>
				<DynamicLogo />
				<form
					className="flex flex-col p-5 gap-4 items-center"
					onSubmit={formHook.handleSubmit(onSubmit)}
				>
					<TextField
						id="email"
						name={fieldNames.email}
						placeholder="Email"
						startAdornment={
							<AlternateEmailRoundedIcon style={{ color: "white" }} />
						}
					/>
					<TextField
						id="password"
						name={fieldNames.password}
						placeholder="Password"
						type={showPassword ? "text" : "password"}
						startAdornment={<PasswordRoundedIcon style={{ color: "white" }} />}
						endAdornment={
							showPassword ? (
								<VisibilityOffRoundedIcon style={{ color: "white" }} />
							) : (
								<VisibilityRoundedIcon style={{ color: "white" }} />
							)
						}
						onEndIconClick={onClickShowPassword}
					/>
					<Link
						href="/forgot-password"
						className={"text-red-600 font-bold underline"}
					>
						Forgot your password?
					</Link>
					<PrimaryButton type="submit">Login</PrimaryButton>
					<CheckboxInput text="Remember me" />
				</form>
				<p style={{ color: "white" }}>
					You don’t have an account?
					<Link
						href="/register"
						className={"text-red-600 font-bold underline"}
					>
						Register
					</Link>
				</p>
			</>
		</AuthLayout>
	);
};

export default Login;
