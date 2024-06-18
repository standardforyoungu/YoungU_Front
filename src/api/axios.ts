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
			// 토큰 만료 후 재발급
			case 201:
				const accessToken = error.response?.data?.access_token;
				window.localStorage.setItem("OU_UserAttribute", accessToken);
				error.config.headers.Authorization = `Bearer ${accessToken}`;
				return axios(error.config);
		}
		return Promise.reject(error);
	},
);
