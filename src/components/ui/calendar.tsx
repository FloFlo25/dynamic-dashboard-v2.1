"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { format, setMonth } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium hidden",
				nav: "space-x-1 flex items-center",
				nav_button: cn(
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
				),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex",
				head_cell:
					"text-slate-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-slate-400",
				row: "flex w-full mt-2",
				cell: cn(
					"relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-slate-100 [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-slate-800 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50",
					props.mode === "range"
						? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
						: "[&:has([aria-selected])]:rounded-md",
				),
				day: cn(
					"h-8 w-8 p-0 font-normal rounded-full aria-selected:opacity-100",
				),
				day_range_start: "day-range-start",
				day_range_end: "day-range-end",
				day_selected:
					"bg-slate-900 text-slate-50 hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50 dark:hover:text-slate-900 dark:focus:bg-slate-50 dark:focus:text-slate-900",
				day_today:
					"bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
				day_outside:
					"day-outside text-slate-500 opacity-50  aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400",
				day_disabled: "text-slate-500 opacity-50 dark:text-slate-400",
				day_range_middle:
					"aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
				day_hidden: "invisible",
				caption_dropdowns: "flex gap-2",
				...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
				IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,

				Dropdown: (props) => {
					const { fromYear, toYear, fromMonth, toMonth, fromDate, toDate } =
						useDayPicker();

					const { goToMonth, currentMonth } = useNavigation();

					if (props.name == "months") {
						const selectItems = Array.from({ length: 12 }, (_, i) => ({
							value: i.toString(),
							label: format(setMonth(new Date(), i), "MMM"),
						}));
						return (
							<Select
								onValueChange={(newValue) => {
									const newDate = new Date(currentMonth);
									newDate.setMonth(parseInt(newValue));
									goToMonth(newDate);
								}}
								value={props.value?.toString()}
							>
								<SelectTrigger>{format(currentMonth, "MMM")}</SelectTrigger>
								<SelectContent>
									{selectItems.map((selectItem) => (
										<SelectItem key={selectItem.value} value={selectItem.value}>
											{selectItem.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						);
					}
					if (props.name == "years") {
						const earliestYear =
							fromYear ?? fromMonth?.getFullYear() ?? fromDate?.getFullYear();

						const latestYear =
							toYear ?? toMonth?.getFullYear() ?? toDate?.getFullYear();

						const selectItems: { value: string; label: string }[] = [];

						if (earliestYear && latestYear) {
							const yearsLength = latestYear - earliestYear + 1;
							selectItems.push(
								...Array.from({ length: yearsLength }, (_, i) => ({
									value: (earliestYear + i).toString(),
									label: (earliestYear + i).toString(),
								})),
							);
						}

						return (
							<Select
								onValueChange={(newValue) => {
									const newDate = new Date(currentMonth);
									newDate.setFullYear(parseInt(newValue));
									goToMonth(newDate);
								}}
								value={props.value?.toString()}
							>
								<SelectTrigger>{currentMonth.getFullYear()}</SelectTrigger>
								<SelectContent>
									{selectItems.map((selectItem) => (
										<SelectItem key={selectItem.value} value={selectItem.value}>
											{selectItem.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						);
					}

					return null;
				},
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
