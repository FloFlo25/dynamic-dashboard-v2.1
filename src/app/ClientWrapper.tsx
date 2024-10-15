"use client";

import { isUserLoggedIn } from "~/lib/utils";
import SidebarDesktop from "./_components/SidebarDesktop";
import SidebarMobile from "./_components/SidebarMobile";

export default function ClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			{isUserLoggedIn() && (
				<div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
					<SidebarDesktop />
					<SidebarMobile />
				</div>
			)}
			{children}
		</div>
	);
}
