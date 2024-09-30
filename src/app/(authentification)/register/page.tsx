"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import BadgeIcon from "/public/icons/Badge.svg";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import AuthLayout from "../AuthLayout";
import TextField from "~/app/_components/Inputs/TextFields";
import Image from "next/image";
import DropDown from "~/app/_components/Inputs/DropDown";

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
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
						<TextField
							control={form.control}
							name="birthday"
							placeholder="Birthday"
							startIconPath="icons/Birthday.svg"
						/>
						<DropDown
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
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</AuthLayout>
	);
};

export default Register;
