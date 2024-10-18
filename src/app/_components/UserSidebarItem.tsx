import React from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import PersonIcon from "./Icons/PersonIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import LogoutIcon from "./Icons/LogoutIcon";

const UserSidebarItem = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="tertiary"
					className="mx-0  mt-auto flex h-fit justify-items-start self-start rounded-full px-0 focus-visible:ring-0"
				>
					<div className="mt-auto flex items-center gap-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-blue-700">
							A
						</div>
						<div className="flex flex-col items-start">
							<div className="">Adriana Floruta</div>
							<div>Trainer</div>
						</div>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="border-0 bg-secondary-main p-2 rounded-xl w-[200px] text-white"
				align="start"
			>
				<DropdownMenuItem className="flex gap-2">
					<PersonIcon className="w-4 fill-white" />
					<span>Profile</span>
				</DropdownMenuItem>
				<DropdownMenuItem className="flex gap-2 mt-2">
					<SettingsIcon className="w-4 fill-white" />
					<span>Settings</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="mx-1 my-2" />
				<DropdownMenuItem className="flex gap-2">
					<LogoutIcon className="w-4 fill-white" />
					<span>Logout</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserSidebarItem;
