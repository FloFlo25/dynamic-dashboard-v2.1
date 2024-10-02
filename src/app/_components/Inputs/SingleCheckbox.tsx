import { FormControl } from "@mui/base";
import { useId } from "react";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Checkbox } from "~/components/ui/checkbox";
import { FormField, FormItem, FormLabel } from "~/components/ui/form";

type SingleCheckboxProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
	label?: React.ReactNode;
};

const SingleCheckbox = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	label,
	...singleCheckboxProps
}: SingleCheckboxProps<TFieldValues, TName>) => {
	const id = useId();

	return (
		<div>
			<FormField
				{...singleCheckboxProps}
				render={({ field }) => (
					<FormItem className="flex justify-center w-full">
						<FormControl className="flex space-x-1 items-center">
							<Checkbox
								{...field}
								id={id}
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
							<label
								htmlFor={id}
								className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{label}
							</label>
						</FormControl>
					</FormItem>
				)}
			/>
		</div>
	);
};

export default SingleCheckbox;
