"use client";

import { Checkbox } from "~/components/ui/checkbox";

type Props = {
	text: string;
};

export function CheckboxInput(props: Props) {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" />
			<label
				htmlFor="terms"
				className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{props.text}
			</label>
		</div>
	);
}
