import axios from "axios";

const DEVELOPMENT_API_URL = "https://test.dynamicapp.ro:5999/";

const apiClient = axios.create({
	baseURL: DEVELOPMENT_API_URL,
	headers: { "Content-Type": "application/json" },
});

export default apiClient;
