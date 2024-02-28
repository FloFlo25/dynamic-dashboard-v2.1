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
			placeholder={
				props.placeholder ??
				"Placeholder"
			}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						{
							startIcon
						}
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
				disableUnderline:
					true,
			}}
			variant="filled"
			hiddenLabel
			InputLabelProps={{
				shrink: false,
			}}
			sx={{
				"& .MuiInputBase-input":
					{
						padding: "10px 0",
					},
				"& .MuiInputAdornment-positionStart svg":
					{
						color: "black",
					},
				"& .MuiFilledInput-root":
					{
						background: "white",
						overflow: "hidden",
						border: "2px solid grey",
						borderRadius: "14px",
						"&:hover": {
							background: "white",
							borderColor: "black",
						},
						"&.Mui-focused:not(:hover)":
							{
								background: "white",
								borderColor: "black",
							},
					},
			}}
		/>
	);
};

export default TextInput;
