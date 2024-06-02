import { usePostChildInfoMutation } from "@/api/user/user.query";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const usePostSaveChildInfoService = () => {
	const router = useRouter();
	const mutation = usePostChildInfoMutation();

	const onSuccess = (data: any) => {
		if (data?.result === "Success") {
			if (typeof window !== "undefined") {
				toast("Success", "아이정보 저장에 성공했습니다.");
				router.push("/test/profile");
			}
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
