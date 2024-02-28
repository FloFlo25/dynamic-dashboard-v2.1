import {
	IconButton,
	InputAdornment,
	TextField,
	type TextFieldProps,
} from "@mui/material";
import React from "react";

type Props = {
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	onEndButtonClick?: (() => void) | undefined;
} & TextFieldProps;

const TextInput = ({
	startIcon,
	endIcon,
	onEndButtonClick,
	...props
}: Props) => {
	return (
		<TextField
			{...props}
			label=""
			placeholder={props.placeholder ?? "Placeholder"}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						{startIcon}
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="end">
						{onEndButtonClick ? (
							<IconButton
								onClick={
									onEndButtonClick
								}
							>
								{
									endIcon
								}
							</IconButton>
						) : (
							endIcon
						)}
					</InputAdornment>
				),
			}}
			InputLabelProps={{
				shrink: false,
			}}
			sx={{
				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						borderRadius: "14px",
						borderWidth: "2px",
					},
					"&.Mui-focused fieldset": {
						borderColor: "black",
					},
					"& legend span": {
						color: "red",
					},
				},
				"& .MuiInputAdornment-positionStart svg":
					{ color: "black" },
			}}
		/>
	);
};

export default TextInput;
