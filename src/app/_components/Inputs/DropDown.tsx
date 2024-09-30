import Image from "next/image";
import React from "react";
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

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";

type ValueTextItem = { value: string; text: string };

type DropdownProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
	startIconPath?: string;
	placeholder: string;
	items: ValueTextItem[];
};

const DropDown = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	startIconPath,
	placeholder,
	items,
	...dropdownProps
}: DropdownProps<TFieldValues, TName>) => {
	return (
		<div>
			<FormField
				{...dropdownProps}
				render={({ field }) => (
					<FormItem>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<div className="flex bg-white rounded-md px-2 w-full">
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
									<SelectTrigger>
										<SelectValue placeholder={placeholder} />
									</SelectTrigger>
								</div>
							</FormControl>
							<SelectContent>
								{items.map((item) => (
									<SelectItem key={item.value} value={item.value}>
										{item.text}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default DropDown;
