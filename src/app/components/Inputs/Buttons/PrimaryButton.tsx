import Button, {
	type ButtonProps,
} from "@mui/material/Button/Button";
import React from "react";

type Props = { test?: boolean } & ButtonProps;

const PrimaryButton = ({ test, ...props }: Props) => {
	return (
		<Button
			variant="contained"
			className="bg-[#ED1C24] normal-case rounded shadow-none hover:bg-[#8b0101] w-fit px-10 font-bold font-mono"
		>
			{props.children}
		</Button>
	);
};

export default PrimaryButton;
