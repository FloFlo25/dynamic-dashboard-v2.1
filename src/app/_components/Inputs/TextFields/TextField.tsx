import { Input, type InputOwnProps } from "@mui/base";
import { type UseFormReturn } from "react-hook-form";
import { type slotPropsType } from "~/helper/types/TextFieldTypes";

type Props = {
	onEndIconClick?: (() => void) | undefined;
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	formHook?: UseFormReturn<any>;
} & InputOwnProps;

const baseAdornmentClassNames =
	"inline-flex  items-center justify-center text-white";

const slotProps: slotPropsType = {
	root: {
		className:
			"focus-within:border-white w-full flex bg-[#ffffff21] rounded hover:border-white border-solid border-2 border-[#ffffff2f]",
	},
	input: {
		className: `bg-transparent focus:outline-none rounded text-white placeholder-[#ffffff7c] py-3 px-4 w-full`,
	},
};

const TextField = ({ onEndIconClick, name, formHook, ...props }: Props) => {
	const error = formHook?.formState.errors[name]?.message as string;

	return (
		<div className="w-full">
			<Input
				{...props}
				{...formHook?.register(name)}
				slotProps={slotProps}
				placeholder={props.placeholder ?? "Placeholder"}
				startAdornment={
					props.startAdornment ? (
						<div className={`${baseAdornmentClassNames} m-3`}>
							{props.startAdornment}
						</div>
					) : (
						""
					)
				}
				style={{ color: "white" }}
				endAdornment={
					props.endAdornment ? (
						<div
							onClick={(e) => {
								e.preventDefault();
								onEndIconClick?.();
							}}
							className={`${baseAdornmentClassNames} rounded-full my-1.5 mr-2 px-1.5 hover:bg-[#373c4e] hover:cursor-pointer active:bg-[#4b526b]`}
						>
							{props.endAdornment}
						</div>
					) : (
						""
					)
				}
			/>
			{error && <div className="text-red-500">{error}</div>}
		</div>
	);
};

export default TextField;
