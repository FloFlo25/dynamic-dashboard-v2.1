"use client";

import Image from "next/image";
import { useState } from "react";
import {
	type ControllerProps,
	type FieldPath,
	type FieldValues,
} from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "~/components/ui/form";
import { Input, type InputProps } from "~/components/ui/input";

type TextFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> &
	InputProps & {
		startIconPath?: string;
		placeholder: string;
	};

const TextField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	startIconPath,
	placeholder,
	...textFieldProps
}: TextFieldProps<TFieldValues, TName>) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const passwordInputType = isPasswordVisible ? "text" : "password";

	return (
		<FormField
			{...textFieldProps}
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<div className="flex bg-white rounded-md px-2">
							{startIconPath ? (
								<Image
									src={startIconPath}
									alt={startIconPath}
									width={24}
									height={24}
								/>
							) : (
								<></>
							)}
							<Input
								className="bg-white border-none"
								type={
									textFieldProps.type !== "password"
										? textFieldProps.type
										: passwordInputType
								}
								placeholder={placeholder}
								{...field}
							/>
							{textFieldProps.type === "password" ? (
								<Image
									src={isPasswordVisible ? "icons/Hide.svg" : "icons/Show.svg"}
									alt={"showpassword"}
									onClick={() =>
										setIsPasswordVisible((prevState) => !prevState)
									}
									width={24}
									height={24}
								/>
							) : (
								<></>
							)}
						</div>
					</FormControl>
					<FormMessage className="absolute top-[30px]" />
				</FormItem>
			)}
		/>
	);
};

export default TextField;
