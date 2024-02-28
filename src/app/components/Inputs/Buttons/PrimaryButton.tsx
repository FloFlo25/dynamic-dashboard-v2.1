import Button, {
	type ButtonProps,
} from "@mui/material/Button/Button";
import React from "react";

type Props = { test?: boolean } & ButtonProps;

const PrimaryButton = ({ test, ...props }: Props) => {
	return (
		<Button
			variant="contained"
			className="bg-red-700 normal-case rounded shadow-none hover:bg-red-900 w-fit px-10"
		>
			{props.children}
		</Button>
	);
};

export default PrimaryButton;
