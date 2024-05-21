import { usePostLoginMutation } from "@/api/login/login.query";
import { LoginResInterface } from "@/api/login/login.schema";
import { FailedResInterface } from "@/types/resType";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const usePostLoginService = () => {
	const router = useRouter();
	const mutation = usePostLoginMutation();
	const onSuccess = (data: LoginResInterface) => {
		if (data?.result === "Success") {
			if (typeof window !== "undefined") {
				toast.success("로그인을 성공했습니다.");
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
