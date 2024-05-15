import { useMutation } from "@tanstack/react-query";
import { http } from "./axios";

export const usePostLoginMutation = () => {
	return useMutation({
		mutationKey: ["POST", "login"],
		mutationFn: (code: string) => http.post("/youngustandard/login/oauth2/callback", { code }).then((res) => res.data),
	});
};
