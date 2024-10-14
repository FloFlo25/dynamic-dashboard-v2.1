export type MsgStatus = { msg: string; status: boolean };

export type SuccessLoginResponse = {
	access_token: string;
	refresh_token: string;
	status: true; // Success is explicitly true
};

export type DecodedJWT = {
	iat: number;
	nbf: number;
	jti: string;
	exp: number;
	identity: Identity;
	fresh: boolean;
	type: string;
};

export type Identity = {
	user_id: number;
	email: string;
	type: "worker" | "client";
	worker_id: number | null;
	customer_id: number | null;
};

export type LoginResponse = SuccessLoginResponse | MsgStatus;
export type LoginData = { email: string; password: string };
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
