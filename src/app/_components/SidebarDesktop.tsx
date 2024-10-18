import Link from "next/link";
import { SidebarMenu } from "./SidebarMenu";
import UserSidebarItem from "./UserSidebarItem";
import Separator from "./Separator";
import DynamicLogoSVG from "./Others/DynamicLogoSVG";

const SidebarDesktop = () => {
	return (
		<aside className="bg-primary-dark m-2 hidden w-[420px] rounded-md p-8 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center lg:h-[60px] ">
					<Link href="/" className="flex items-center gap-2 font-semibold">
						<DynamicLogoSVG className="w-[200px]" />
					</Link>
				</div>
				<Separator />

				<SidebarMenu />
				<UserSidebarItem />
			</div>
		</aside>
	);
};

export default SidebarDesktop;
