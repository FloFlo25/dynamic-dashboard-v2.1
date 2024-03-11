"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import TextField from "~/app/_components/Inputs/TextFields/TextField";
import { DatePicker } from "~/components/ui/datepicker";
import generateZodSchemas from "~/helper/functions/generateZodSchemas";
import AuthLayout from "../AuthLayout";

const { schema, fieldNames } = generateZodSchemas({
	email: z.string().email(),
	password: z.string().min(8),
	birthday: z.date().max(new Date()),
});

type FormFields = z.infer<typeof schema>;

const URL = "https://test.dynamicapp.ro:5999/auth/login";

const Register = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = React.useState(false);

	const formHook = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onClickShowPassword = () => setShowPassword((prevState) => !prevState);

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<AuthLayout>
			<>
				<Image
					alt="Dynamic Logo"
					width={260}
					height={60}
					src="dynamicLogo.svg"
				/>
				<form
					className="flex flex-col p-5 gap-4 items-center"
					onSubmit={formHook.handleSubmit(onSubmit)}
				>
					<TextField
						id={fieldNames.email}
						name={fieldNames.email}
						formHook={formHook}
						placeholder="Email"
						startAdornment={<AlternateEmailRoundedIcon />}
					/>
					{/* <TextField
						id={fieldNames.birthday}
						name={fieldNames.birthday}
						formHook={formHook}
						type="date"
						placeholder="Birthday"
						startAdornment={<CakeRoundedIcon />}
						endAdornment={<CakeRoundedIcon />}
					/> */}
					<DatePicker placeholder="Birthday" />
					<TextField
						id={fieldNames.password}
						name={fieldNames.password}
						placeholder="Password"
						formHook={formHook}
						type={showPassword ? "text" : "password"}
						startAdornment={<PasswordRoundedIcon />}
						endAdornment={
							showPassword ? (
								<VisibilityOffRoundedIcon />
							) : (
								<VisibilityRoundedIcon />
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
				</form>
			</>
		</AuthLayout>
	);
};

export default Register;
