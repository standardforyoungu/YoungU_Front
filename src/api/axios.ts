import axios from "axios";

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_DOMAIN,
	withCredentials: true,
});

http.interceptors.request.use(
	function (config) {
		let accessToken;
		if (typeof window !== "undefined") {
			try {
				accessToken = window.localStorage.getItem("OU_UserAttribute");
			} catch {
				accessToken = "";
			}
		}
		config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);
