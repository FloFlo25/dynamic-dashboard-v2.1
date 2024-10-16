import Link from "next/link";
import { SidebarMenu } from "./SidebarMenu";
import UserSidebarItem from "./UserSidebarItem";

const SidebarDesktop = () => {
	return (
		<aside className="bg-primary-dark m-2 hidden rounded-md md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="mx-6 flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link href="/" className="flex items-center mx-[-16px] gap-2 font-semibold">
						<span className="">Dynamic</span>
					</Link>
				</div>

				<SidebarMenu />
				<div></div>
				<UserSidebarItem />
			</div>
		</aside>
	);
};

export default SidebarDesktop;
