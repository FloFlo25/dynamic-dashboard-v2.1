import Link from "next/link";
import HomeIcon from "./Icons/HomeIcon";
import { Button } from "~/components/ui/button";
import { SidebarMenu } from "./SidebarMenu";
import UserSidebarItem from "./UserSidebarItem";

const SidebarDesktop = () => {
	return (
		<aside className="bg-primary-dark m-2 hidden rounded-md md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link href="/" className="flex items-center gap-2 font-semibold">
						<span className="">Dynamic</span>
					</Link>
					<Button variant="tertiary" size="icon" className="ml-auto h-8 w-8">
						<HomeIcon />
						<span className="sr-only">Toggle notifications</span>
					</Button>
				</div>
				<SidebarMenu />
				<div></div>
				<UserSidebarItem />
			</div>
		</aside>
	);
};

export default SidebarDesktop;
