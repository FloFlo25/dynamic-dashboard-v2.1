import Link from "next/link";
import CalendarIcon from "./Icons/CalendarIcon";
import CartIcon from "./Icons/CartIcon";
import CreditsIcon from "./Icons/CreditsIcon";
import HomeIcon from "./Icons/HomeIcon";
import PersonalFile from "./Icons/PersonalFile";

const sidebarMenuItems = [
	{ title: "Home", route: "/", icon: <HomeIcon /> },
	{ title: "Credits", route: "/credits", icon: <CreditsIcon /> },
	{ title: "Subscriptions", route: "/subscriptions", icon: <CartIcon /> },
	{ title: "Reserve", route: "/reserve", icon: <CalendarIcon /> },
	{ title: "Personal file", route: "/personal-file", icon: <PersonalFile /> },
];

export const SidebarMenu = () => {
	return (
		<nav className="grid gap-2 text-lg font-medium">
			<Link href="#" className="flex items-center gap-2 text-lg font-semibold">
				<span className="sr-only">Acme Inc</span>
			</Link>
			{sidebarMenuItems.map((sidebarMenuItem, key) => (
				<Link
					href={sidebarMenuItem.route}
					key={key}
					className="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
				>
					{sidebarMenuItem.icon}
					{sidebarMenuItem.title}
				</Link>
			))}
		</nav>
	);
};
