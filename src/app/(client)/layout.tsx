import React from "react";
import SidebarDesktop from "../_components/SidebarDesktop";
import SidebarMobile from "../_components/SidebarMobile";

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
	return (
		<div className="grid min-h-screen bg-black md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<SidebarDesktop />
			{children}
			<SidebarMobile />
		</div>
	);
};

export default layout;
