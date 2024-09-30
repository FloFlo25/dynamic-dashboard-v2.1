"use client";

import * as React from "react";
import { format } from "date-fns";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "~/components/ui/form";
import Image from "next/image";

type DatepickerProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
	startIconPath?: string;
	placeholder: string;
};

const DatePicker = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	startIconPath,
	placeholder,
	...datepickerProps
}: DatepickerProps<TFieldValues, TName>) => {
	return (
		<FormField
			{...datepickerProps}
			render={({ field }) => (
				<FormItem>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant={"outline"}
									className="rounded-md py-0 px-2 text-sm justify-start flex gap-2"
								>
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
									{field.value ? (
										format(field.value, "P")
									) : (
										<span className="text-slate-500">{placeholder}</span>
									)}
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Calendar
								mode="single"
								selected={field.value}
								onSelect={field.onChange}
								initialFocus
							/>
						</PopoverContent>
						<FormMessage className="absolute top-[30px]" />
					</Popover>
				</FormItem>
			)}
		/>
	);
};

export default DatePicker;
