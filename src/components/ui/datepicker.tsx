"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "~/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "./calendar";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { format } from "date-fns";

type Props = {
	placeholder?: string;
};

export function DatePicker({ placeholder }: Props) {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-full h-[48px]  justify-start text-left rounded font-normal",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarMonthRoundedIcon />
					{date ? (
						format(date, "PPP")
					) : (
						<span className="px-6">{placeholder ?? "Pick a date"}</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
