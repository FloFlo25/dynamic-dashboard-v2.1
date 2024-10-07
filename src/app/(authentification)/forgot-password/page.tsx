"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import generateZodSchemas from "~/helper/functions/generateZodSchemas";
import AuthLayout from "../layout";

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
		<div>
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
				<PrimaryButton type="submit">Submit</PrimaryButton>
				<PrimaryButton style={{ background: "transparent" }}>
					<Link href="/login"> ← Back</Link>
				</PrimaryButton>
			</form>
		</div>
	);
}
