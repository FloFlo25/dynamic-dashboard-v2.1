"use client";

import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "~/app/_components/Inputs/TextFields/TextField";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import AuthLayout from "../AuthLayout";
import generateZodSchemas from "~/helper/functions/generateZodSchemas";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import DynamicLogo from "~/app/_components/Others/DynamicLogo";
import Link from "next/link";

const { schema, fieldNames } = generateZodSchemas({
	email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

export default function ForgotPassword() {
	const formHook = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<AuthLayout>
			<DynamicLogo />
			<div className="flex flex-col items-center">
				<h1 className="text-[32px]">Forgot password?</h1>
				<p className="text-black opacity-40 text-center text-[20px]">
					No worries, we’ll send you the reset instrutions on your email.
				</p>
			</div>
			<form
				className="tutorial gap-2 flex flex-col items-center"
				onSubmit={formHook.handleSubmit(onSubmit)}
			>
				<TextField
					id={fieldNames.email}
					name={fieldNames.email}
					formHook={formHook}
					placeholder="Email"
					startAdornment={<AlternateEmailRoundedIcon />}
				/>
				<PrimaryButton type="submit">Submit</PrimaryButton>
				<PrimaryButton style={{ background: "transparent" }}>
					<Link href="/login"> ← Back</Link>
				</PrimaryButton>
			</form>
		</AuthLayout>
	);
}
