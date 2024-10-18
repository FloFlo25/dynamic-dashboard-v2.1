import React from "react";
import SidebarDesktop from "../_components/SidebarDesktop";
import SidebarMobile from "../_components/SidebarMobile";

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
	return (
		<div className="flex min-h-screen bg-secondary-main ">
			<SidebarDesktop />
			<SidebarMobile />
			{children}
		</div>
	);
};

export default layout;
