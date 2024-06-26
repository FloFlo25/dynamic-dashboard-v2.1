type ApiPropertyType = {
    URL: string;
    METHOD: "POST" | "GET";
    LANG: "ro" | "en";
};

type ApiListType = Record<string, ApiPropertyType>;

export const API_LIST: ApiListType = {
    forgot_password: {
        URL: "https://test.dynamicapp.ro:5999/auth/forgot-password",
        METHOD: "POST",
        LANG: "ro",
    }
}