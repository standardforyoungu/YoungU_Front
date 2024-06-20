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
				window.localStorage.setItem("OU_UserAttribute", data?.access_token);
				window.localStorage.setItem("mbr_id", data?.mbr_id);
				const redirect = window.sessionStorage.getItem("redirect");
				router.push(redirect ?? "/");
				toast("Success", "로그인을 성공했습니다.");
			} else {
				toast("Error", "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
			}
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
