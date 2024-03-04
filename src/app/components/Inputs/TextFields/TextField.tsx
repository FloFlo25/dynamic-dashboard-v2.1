import { Input, type InputOwnProps } from "@mui/base";
import { type RefCallBack, type UseFormRegisterReturn } from "react-hook-form";
import { type slotPropsType } from "~/helper/types/TextFieldTypes";

type Props = {
	onEndIconClick?: (() => void) | undefined;
	ref?: RefCallBack;
} & UseFormRegisterReturn &
	InputOwnProps;

const baseAdornmentClassNames =
	"inline-flex  items-center justify-center text-white";

const slotProps: slotPropsType = {
	root: {
		className: "focus-within:border-white w-full flex bg-[#1F222D] rounded hover:border-white border-solid border-2 border-black",
	},
	input: {
		className: `bg-[#1F222D] focus:outline-none rounded text-white placeholder-[#C4C4C4] py-3 px-4 w-full`,
	},
};

const TextField = ({ onEndIconClick, ...props }: Props) => {
	console.log(props);

	return (
		<Input
			{...props}
			slotProps={slotProps}
			placeholder={props.placeholder ?? "Placeholder"}
			startAdornment={
				props.startAdornment ? (
					<div
						className={`${baseAdornmentClassNames} m-3`}
					>
						{
							props.startAdornment
						}
					</div>
				) : (
					""
				)
			}
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
	);
};

export default TextField;
