import {
	Input,
	type InputOwnProps,
	type InputInputSlotPropsOverrides,
	type InputOwnerState,
	type InputRootSlotPropsOverrides,
	type SlotComponentProps,
} from "@mui/base";

type slotPropsType = {
	root?: SlotComponentProps<
		"div",
		InputRootSlotPropsOverrides,
		InputOwnerState
	>;
	input?: SlotComponentProps<
		"input",
		InputInputSlotPropsOverrides,
		InputOwnerState
	>;
};

type Props = { onEndIconClick?: (() => void) | undefined } & InputOwnProps;

const baseAdornmentClassNames =
	"inline-flex  items-center justify-center text-white";

const TextField = ({ onEndIconClick, ...props }: Props) => {
	const slotProps: slotPropsType = {
		root: {
			className: "focus-within:border-white w-full flex bg-[#1F222D] rounded hover:border-white border-solid border-2 border-black",
		},
		input: {
			className: `bg-[#1F222D] focus:outline-none rounded text-white placeholder-[#C4C4C4] py-3 px-4 w-full`,
		},
	};

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
						className={`${baseAdornmentClassNames} rounded-full my-1.5 mr-2 px-1.5 hover:bg-black hover:cursor-pointer`}
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
