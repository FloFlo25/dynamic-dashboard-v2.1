"use client";

import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import TextField from "../../components/Inputs/TextFields/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "~/app/components/Inputs/Buttons/PrimaryButton";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

export default function ForgotPassword() {
	const formHook = useForm<FormFields>({
		defaultValues: {
			email: "test@email.com",
		},
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<form
			className="tutorial gap-2"
			onSubmit={formHook.handleSubmit(onSubmit)}
		>
			<TextField
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
					formHook.formState.errors
						.email?.message
				}
			/>
			<TextField
				placeholder="Password"
				register={{
					...formHook.register(
						"password",
					),
				}}
				errorMessage={
					formHook.formState.errors
						.password?.message
				}
			/>
			<PrimaryButton type="submit">
				Submit
			</PrimaryButton>
		</form>
	);
}
