import React from "react";
import { Button, type ButtonProps } from "~/components/ui/button";

type Props = ButtonProps & { icon?: React.ReactNode };

const PrimaryButton = ({ children, icon, ...props }: Props) => {
	return (
		<Button {...props} className="w-fit gap-2 px-4">
			{icon}
			{children}
		</Button>
	);
};

export default PrimaryButton;
