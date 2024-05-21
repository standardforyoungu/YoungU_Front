import { toast } from "react-toastify";
import { FailedResInterface, SuccessResInterface } from "./../../types/resType";
import { usePostChildInfoMutation } from "@/api/myPage/myPage.query";
import { useRouter } from "next/navigation";

export const usePostChildInfoService = () => {
	const mutation = usePostChildInfoMutation();
	const router = useRouter();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			toast.success(data?.message);
			router.push("/my-page/child-list");
		}
	};

	const onError = (error: any) => {
		toast.error(error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
