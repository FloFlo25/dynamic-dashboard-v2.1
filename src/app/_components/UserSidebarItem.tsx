import React from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const UserSidebarItem = () => {
	return (
		// <div className="mt-auto p-2 flex items-center gap-4">
		// 	<div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-blue-700">
		// 		A
		// 	</div>
		// 	<div className="">
		// 		<div >Adriana Floruta</div>
		// 		<div>Trainer</div>
		// 	</div>
		// </div>
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="tertiary"
					size="icon"
					className="overflow-hidden rounded-full"
				>
					<Image
						src="/placeholder-user.jpg"
						width={36}
						height={36}
						alt="Avatar"
						className="overflow-hidden rounded-full"
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserSidebarItem;
