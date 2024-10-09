"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import TextField from "~/app/_components/Inputs/TextField";
import { Form } from "~/components/ui/form";
import axios from "axios";
import { useToast } from "~/components/ui/use-toast";

const FormSchema = z.object({ email: z.string(), password: z.string() });

type AuthResponse =
	| { auth_token: string; refresh_token: string }
	| { msg: string };

const Login = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const URL = "https://test.dynamicapp.ro:5999/auth/login";

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const response = await axios.post<AuthResponse>(URL, {
			email: data.email,
			password: data.password,
		});

		if ("msg" in response.data) {
			// If the response contains a msg, show the error message
			toast({ title: response.data.msg });
		} else {
			// If the response contains the tokens, handle the success case
			const { auth_token, refresh_token } = response.data;
			toast({ title: "Success!" });

			// You can store the tokens here or do other actions
			localStorage.setItem("auth_token", auth_token);
			localStorage.setItem("refresh_token", refresh_token);
		}
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
