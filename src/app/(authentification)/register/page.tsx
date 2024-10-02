"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Link from "next/link";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import DatePicker from "~/app/_components/Inputs/DatePicker";
import Dropdown from "~/app/_components/Inputs/DropDown";
import TextField from "~/app/_components/Inputs/TextField";
import { Form } from "~/components/ui/form";
import AuthLayout from "../AuthLayout";
import { format } from "date-fns";
import SingleCheckbox from "~/app/_components/Inputs/SingleCheckbox";
import { useToast } from "~/components/ui/use-toast";

const FormSchema = z
	.object({
		firstName: z.string().min(2),
		lastName: z.string().min(2),
		birthday: z.date().max(new Date()),
		gender: z.union([z.literal("m"), z.literal("f")]),
		phone: z.string().max(10),
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
		tos: z.boolean().default(false),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

const URL = "https://test.dynamicapp.ro:5999/auth/login";

const Register = () => {
	const { toast } = useToast();

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
			phone: "",
			tos: false,
		},
	});

	type RegisterUser = {
		tac: boolean;
		first_name: string;
		last_name: string;
		email: string;
		phone_number: string;
		birth_date: string;
		gender: "m" | "f";
		password: string;
		password_confirmation: string;
		receive_emails: boolean;
		lang: "ro" | "en";
	};

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const apiData: RegisterUser = {
			email: data.email,
			first_name: data.firstName,
			last_name: data.lastName,
			gender: data.gender,
			birth_date: format(data.birthday, "y-MM-dd"),
			lang: "en",
			password: data.password,
			password_confirmation: data.confirmPassword,
			phone_number: data.phone,
			receive_emails: false,
			tac: true,
		};
		console.log(apiData);
	}

	return (
		<AuthLayout>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full flex flex-col justify-center"
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

					<div className="flex w-full gap-2">
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
								{ value: "m", text: "Male" },
								{ value: "f", text: "Female" },
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
						type="password"
						name="password"
						placeholder="Password"
						startIconPath="icons/Password.svg"
					/>
					<TextField
						control={form.control}
						type="password"
						name="confirmPassword"
						placeholder="Confirm password"
						startIconPath="icons/Password.svg"
					/>
					<SingleCheckbox
						control={form.control}
						name="tos"
						label={
							<>
								Accept{" "}
								<Link
									href={"/terms-and-conditions"}
									className="text-red-600 underline"
								>
									Terms and Conditions
								</Link>
							</>
						}
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
