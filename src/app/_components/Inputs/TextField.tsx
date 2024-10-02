import Image from "next/image";
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
}: TextFieldProps<TFieldValues, TName>) => (
	<div>
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
								type={textFieldProps.type}
								placeholder={placeholder}
								{...field}
							/>
						</div>
					</FormControl>
					<FormMessage className="absolute top-[30px]" />
				</FormItem>
			)}
		/>
	</div>
);

export default TextField;
