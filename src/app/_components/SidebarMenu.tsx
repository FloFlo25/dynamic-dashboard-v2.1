"use client";

import Link from "next/link";
import CalendarIcon from "./Icons/CalendarIcon";
import CartIcon from "./Icons/CartIcon";
import CreditsIcon from "./Icons/CreditsIcon";
import HomeIcon from "./Icons/HomeIcon";
import PersonalFile from "./Icons/PersonalFile";
import { usePathname } from "next/navigation";

const sidebarMenuItems = [
	{ title: "Home", route: "/", icon: <HomeIcon className="fill-white" /> },
	{
		title: "Credits",
		route: "/credits",
		icon: <CreditsIcon className="fill-white" />,
	},
	{
		title: "Subscriptions",
		route: "/subscriptions",
		icon: <CartIcon className="fill-white" />,
	},
	{
		title: "Reserve",
		route: "/reserve",
		icon: <CalendarIcon className="fill-white" />,
	},
	{
		title: "Personal file",
		route: "/personal-file",
		icon: <PersonalFile className="fill-white" />,
	},
];

export const SidebarMenu = () => {
	const currentPath = usePathname();
	const isCurrentPath = (sidebarMenuItem: {
		title: string;
		route: string;
		icon: React.ReactNode;
	}) => currentPath === sidebarMenuItem.route;

	return (
		<nav className="grid gap-2 text-lg mt-4 font-medium">
			{sidebarMenuItems.map((sidebarMenuItem, key) => (
				<Link
					href={sidebarMenuItem.route}
					key={key}
					className={`relative flex items-center gap-4 rounded-xl px-3 py-3 text-${isCurrentPath(sidebarMenuItem) ? "white" : "inactive"} hover:bg-secondary-main ${isCurrentPath(sidebarMenuItem) ? "bg-secondary-main shadow-[0_2px_3px_hsl(229,17%,10%)] before:absolute before:left-[0.5px] before:h-[calc(100%_-_20px)] before:w-1 before:rounded-r-lg before:bg-white before:content-['']" : ""}`}
				>
					<div
						className={`${!isCurrentPath(sidebarMenuItem) ? "brightness-[70%]" : ""}`}
					>
						{sidebarMenuItem.icon}
					</div>
					<span>{sidebarMenuItem.title}</span>
				</Link>
			))}
		</nav>
	);
};
