import { toast } from "@/utils/toast";
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

http.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		// 로그아웃
		if (error.response?.status === 405) {
			if (typeof window !== "undefined") {
				window.localStorage.removeItem("OU_UserAttribute");
				window.localStorage.removeItem("mbr_id");
				location.replace("/");
				toast("Error", "토큰이 만료되었습니다. 다시 로그인 해주세요.");
			}
		}
		return Promise.reject(error);
	},
);
