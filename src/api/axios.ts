import axios from "axios";

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DOMAIN,
	withCredentials: true,
});

// TODO_JIYEON: accessToken 없을 때 작업 추가 해야함
