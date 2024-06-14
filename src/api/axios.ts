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
		switch (error.response?.status) {
			// 엑세스 토큰 없을 때
			case 401:
			// 리프레시 토큰 만료
			case 408:
				window.localStorage.removeItem("OU_UserAttribute");
				window.localStorage.removeItem("mbr_id");
				location.replace("/");
				toast("Error", "토큰이 만료되었습니다. 다시 로그인 해주세요.");
		}
		return Promise.reject(error);
	},
);
