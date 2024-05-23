import { usePostLoginMutation } from "@/api/login/login.query";
import { LoginResInterface } from "@/api/login/login.schema";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const usePostLoginService = () => {
	const router = useRouter();
	const mutation = usePostLoginMutation();

	const onSuccess = (data: LoginResInterface) => {
		if (data?.result === "Success") {
			if (typeof window !== "undefined") {
				toast("Success", "로그인을 성공했습니다.");
				window.localStorage.setItem("OU_UserAttribute", data?.access_token);
				const redirect = window.sessionStorage.getItem("redirect");
				router.push(redirect ?? "/");
			}
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
