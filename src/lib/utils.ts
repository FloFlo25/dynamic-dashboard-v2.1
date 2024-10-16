import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type LoginResponse, type MsgStatus } from "~/types/auth";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isMsgStatus(response: LoginResponse): response is MsgStatus {
	return (response as MsgStatus).msg !== undefined;
}
