"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postLogin } from "~/api/auth";
import BugIcon from "~/app/_components/Icons/BugIcon";
import CheckIcon from "~/app/_components/Icons/CheckIcon";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import TextField from "~/app/_components/Inputs/TextField";
import { Form } from "~/components/ui/form";
import { toast } from "~/components/ui/use-toast";

const FormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, "Passwords have atleast 8 characters"),
});

const Login = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const response = await postLogin(data);

		if (!response.status) {
			toast({
				title: "Invalid email or password.",
				variant: "destructive",
				icon: <BugIcon className="fill-accent-light" />,
			});
			return;
		}
		toast({
			title: "Login succesful!",
			variant: "success",
			icon: <CheckIcon className="fill-success-light" />,
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex w-full flex-col items-center justify-center space-y-6"
			>
				<TextField
					control={form.control}
					name="email"
					placeholder="Email"
					startIconPath="icons/Email.svg"
				/>
				<TextField
					control={form.control}
					name="password"
					placeholder="Password"
					type="password"
					startIconPath="icons/Password.svg"
				/>
				<Link
					href="/forgot-password"
					className={"font-bold text-red-600 underline"}
				>
					Forgot your password?
				</Link>
				<PrimaryButton type="submit">Login</PrimaryButton>
				<p style={{ color: "white" }}>
					{"You dont't have an account? "}
					<Link href="/register" className={"font-bold text-red-600 underline"}>
						Register
					</Link>
				</p>
			</form>
		</Form>
	);
};

export default Login;
