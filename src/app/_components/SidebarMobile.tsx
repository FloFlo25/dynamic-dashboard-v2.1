import { Button } from "~/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "~/components/ui/sheet";
import HomeIcon from "./Icons/HomeIcon";
import { SidebarMenu } from "./SidebarMenu";
import UserSidebarItem from "./UserSidebarItem";

const SidebarMobile = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="tertiary" size="icon" className="shrink-0 md:hidden">
					<HomeIcon />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="bg-primary-dark flex flex-col border-none"
				hideCloseButton
			>
				<SheetClose className="h-10 w-10 bg-red-500" />
				<SidebarMenu />
				<UserSidebarItem />
			</SheetContent>
		</Sheet>
	);
};

export default SidebarMobile;
