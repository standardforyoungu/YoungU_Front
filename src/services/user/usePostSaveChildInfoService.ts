import { ChildInfoResSchema } from "@/api/child/child.schema";
import { usePostChildInfoMutation } from "@/api/myPage/myPage.query";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const userPostSaveChildInfoService = () => {
	const router = useRouter();
	const mutation = usePostChildInfoMutation();

	const onSuccess = (data: ChildInfoResSchema) => {
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
