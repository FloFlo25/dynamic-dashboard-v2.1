"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postResetPassword } from "~/api/auth";
import BackIcon from "~/app/_components/Icons/BackIcon";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import TextField from "~/app/_components/Inputs/TextField";
import { Form } from "~/components/ui/form";
import { toast } from "~/components/ui/use-toast";

const FormSchema = z.object({
	email: z.string().email(),
});

export default function ForgotPassword() {
	const router = useRouter();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const response = await postResetPassword({ email: data.email, lang: "en" });

		if (response.status)
			toast({
				title: "Wrong credentials",
				variant: "destructive",
				icon: <BugIcon fill="accent-light" />,
			});
	};

	return (
		<div>
			<div className="flex flex-col items-center">
				<h1 className="text-[32px]">Forgot password?</h1>
				<p className="text-center text-[20px] text-black opacity-40">
					No worries, we’ll send you the reset instrutions on your email.
				</p>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mt-8 flex w-full flex-col items-center justify-center space-y-6"
				>
					<TextField
						control={form.control}
						name="email"
						placeholder="Email"
						startIconPath="icons/Email.svg"
					/>

					<PrimaryButton type="submit">Send</PrimaryButton>
					<PrimaryButton
						className="text-black"
						icon={<BackIcon />}
						variant="tertiary"
						onClick={() => router.push("../")}
					>
						Back
					</PrimaryButton>
				</form>
			</Form>
		</div>
	);
}
