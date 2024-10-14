import {
	type ResetPasswordData,
	type MsgStatus,
	type RegisterUserData,
} from "~/types/auth";
import apiClient from "./axiosInstace";

// export const postLogin = async (
// 	loginData: LoginData,
// ): Promise<LoginResponse> => {
// 	const response = await apiClient.post("/login", loginData);
// 	return response.data;
// };

export const postResetPassword = async (
	resetPasswordData: ResetPasswordData,
): Promise<MsgStatus> => {
	const response = await apiClient.post<MsgStatus>(
		"auth/forgot-password",
		resetPasswordData,
	);
	return response.data;
};

export const postRegister = async (
	registerUserData: RegisterUserData,
): Promise<MsgStatus> => {
	const response = await apiClient.post<MsgStatus>(
		"auth/register",
		registerUserData,
	);
	return response.data;
};
