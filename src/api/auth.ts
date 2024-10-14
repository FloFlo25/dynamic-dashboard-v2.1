import {
	type ResetPasswordData,
	type MsgStatus,
	type RegisterUserData,
	type LoginData,
	type LoginResponse,
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
) => {
	const response = await apiClient.post<MsgStatus>(
		"auth/forgot-password",
		resetPasswordData,
	);
	return response.data;
};

export const postRegister = async (registerUserData: RegisterUserData) => {
	const response = await apiClient.post<MsgStatus>(
		"auth/register",
		registerUserData,
	);
	return response.data;
};

export const postLogin = async (loginData: LoginData) => {
	const response = await apiClient.post<LoginResponse>("auth/login", loginData);
	return response.data;
};
