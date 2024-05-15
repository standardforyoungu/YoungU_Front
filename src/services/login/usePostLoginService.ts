import { usePostLoginMutation } from "@/api/login.query";
import { LoginSuccessResInterface } from "@/api/login.schema";
import { useRouter } from "next/navigation";

export const usePostLoginService = () => {
	const router = useRouter();
	const mutation = usePostLoginMutation();

	const onSuccess = (data: LoginSuccessResInterface) => {
		if (data?.result === "Success") {
			if (typeof window !== "undefined") {
				window.localStorage.setItem("OU_UserAttribute", data?.access_token);
				const redirect = window.sessionStorage.getItem("redirect");
				router.push(redirect ?? "/");
			}
		} else {
			// 에러 처리 필요
		}
	};

	return { ...mutation, onSuccess };
};
