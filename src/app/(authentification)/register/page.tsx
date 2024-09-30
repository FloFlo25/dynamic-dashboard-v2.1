"use client";


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Link from "next/link";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import DatePicker from "~/app/_components/Inputs/DatePicker";
import Dropdown from "~/app/_components/Inputs/DropDown";
import TextField from "~/app/_components/Inputs/TextField";
import {
	Form
} from "~/components/ui/form";
import AuthLayout from "../AuthLayout";

const FormSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	birthday: z.date().max(new Date()),
	gender: z.enum(["male, female"]),
	phone: z.string().max(10),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

const URL = "https://test.dynamicapp.ro:5999/auth/login";

const Register = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			birthday: undefined,
			gender: undefined,
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<AuthLayout>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full text-center"
				>
					<TextField
						control={form.control}
						name="firstName"
						placeholder="First name"
						startIconPath="icons/Badge.svg"
					/>
					<TextField
						control={form.control}
						name="lastName"
						placeholder="Last name"
						startIconPath="icons/Badge.svg"
					/>

					<div className="flex gap-2">
						<DatePicker
							control={form.control}
							name="birthday"
							placeholder="Birthday"
							startIconPath="icons/Birthday.svg"
						/>
						<Dropdown
							control={form.control}
							name="gender"
							placeholder="Gender"
							startIconPath="icons/Gender.svg"
							items={[
								{ value: "male", text: "male" },
								{ value: "female", text: "female" },
							]}
						/>
					</div>
					<TextField
						control={form.control}
						name="phone"
						placeholder="Phone number"
						startIconPath="icons/Phone.svg"
					/>
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
						startIconPath="icons/Password.svg"
					/>
					<TextField
						control={form.control}
						name="confirmPassword"
						placeholder="Confirm password"
						startIconPath="icons/Password.svg"
					/>
					<PrimaryButton type="submit">Register</PrimaryButton>
					<p style={{ color: "white" }}>
						{"You already have an account? "}
						<Link href="/login" className={"text-red-600 font-bold underline"}>
							Login
						</Link>
					</p>
				</form>
			</Form>
		</AuthLayout>
	);
};

export default Register;
