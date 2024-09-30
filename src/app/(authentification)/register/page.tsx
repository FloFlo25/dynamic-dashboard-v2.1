"use client";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import PrimaryButton from "~/app/_components/Inputs/Buttons/PrimaryButton";
import TextField from "~/app/_components/Inputs/TextFields/TextField";
import { DatePicker } from "~/components/ui/datepicker";
import generateZodSchemas from "~/helper/functions/generateZodSchemas";
import AuthLayout from "../AuthLayout";
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
import { Button } from "~/components/ui/button";

const { schema, fieldNames } = generateZodSchemas({
	firstName: z.string().min(2),
	lastName: z.string(),
	birthday: z.date().max(new Date()),
	gender: z.enum(["male, female"]),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const URL = "https://test.dynamicapp.ro:5999/auth/login";

const Register = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const form = useForm<FormFields>({
		resolver: zodResolver(schema),
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

	const onClickShowPassword = () => setShowPassword((prevState) => !prevState);

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<AuthLayout>
			<Form {...form}>
				<form
					className="flex flex-col p-5 gap-4 items-center"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="shadcn" {...field} />
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</AuthLayout>
	);
};

export default Register;
