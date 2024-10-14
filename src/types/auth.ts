export type MsgStatus = { msg: string; status: boolean };
export type ResetPasswordData = { email: string; lang: "ro" | "en" };
export type RegisterUserData = {
	tac: boolean;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	gender: "m" | "f";
	password: string;
	birth_date: string;
	password_confirmation: string;
	receive_emails: boolean;
	lang: "ro" | "en";
};
