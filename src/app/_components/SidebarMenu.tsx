import Link from "next/link";
import CalendarIcon from "./Icons/CalendarIcon";
import CartIcon from "./Icons/CartIcon";
import CreditsIcon from "./Icons/CreditsIcon";
import HomeIcon from "./Icons/HomeIcon";
import PersonalFile from "./Icons/PersonalFile";

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
	return (
		<nav className="grid gap-2 text-lg font-medium">
			{sidebarMenuItems.map((sidebarMenuItem, key) => (
				<Link
					href={sidebarMenuItem.route}
					key={key}
					className="flex items-center gap-4 rounded-xl px-3  py-2 text-white hover:bg-red-300"
				>
					{sidebarMenuItem.icon}
					{sidebarMenuItem.title}
				</Link>
			))}
		</nav>
	);
};
