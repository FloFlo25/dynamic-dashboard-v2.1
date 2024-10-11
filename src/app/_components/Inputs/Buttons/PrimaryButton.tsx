import React from "react";
import { Button, type ButtonProps } from "~/components/ui/button";
import { cn } from "~/lib/utils";

type Props = ButtonProps & { icon?: React.ReactNode };

const PrimaryButton = ({ children, icon, ...props }: Props) => {
	return (
		<Button {...props} className={cn("w-fit gap-2", props.className)}>
			{icon}
			{children}
		</Button>
	);
};

export default PrimaryButton;
