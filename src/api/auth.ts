import {
	type ResetPasswordResponse,
	type ResetPasswordData,
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
): Promise<ResetPasswordResponse> => {
	const response = await apiClient.post<ResetPasswordResponse>(
		"/forgot-password",
		resetPasswordData,
	);
	return response.data;
};
