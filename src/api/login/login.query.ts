import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";

export const usePostLoginMutation = () => {
	return useMutation({
		mutationKey: ["POST", "login"],
		mutationFn: (code: string) => http.post("/youngustandard/login/oauth2/callback", { code }).then((res) => res.data),
	});
};

export const useDeleteWithdrawMutation = () => {
	return useMutation({
		mutationKey: ["DELETE", "withdraw"],
		mutationFn: () => http.delete(`/youngustandard/withdraw`).then((res) => res.data),
	});
};

export const useGetLogoutMutation = () => {
	return useMutation({
		mutationKey: ["GET", "logout"],
		mutationFn: () => http.get("/youngustandard/logout").then((res) => res.data),
	});
};
