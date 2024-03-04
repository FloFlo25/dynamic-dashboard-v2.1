import { type ButtonProps } from "@mui/base/Button";
import { Button } from "@mui/base/Button/Button";
import React from "react";

type Props = ButtonProps;

const PrimaryButton = ({ ...props }: Props) => {
	return (
		<Button
			className={`bg-[#ED1C24] normal-case rounded text-white shadow-none hover:bg-[#8b0101] active:bg-[#640b0b] w-fit px-10 py-2
			 font-bold font-mono`}
		>
			{props.children}
		</Button>
	);
};

export default PrimaryButton;
