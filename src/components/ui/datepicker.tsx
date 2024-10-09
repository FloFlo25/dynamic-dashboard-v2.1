"use client";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { format } from "date-fns";
import React from "react";
import { cn } from "~/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type Props = {
	placeholder?: string;
};

export function DatePicker({ placeholder }: Readonly<Props>) {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="white"
					className={cn(
						"h-[48px] w-full justify-start rounded text-left font-normal",
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
