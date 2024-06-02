import { SuccessResInterface } from "./../../types/resType";
import { usePostChildInfoMutation } from "@/api/user/user.query";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const usePostChildInfoService = () => {
	const mutation = usePostChildInfoMutation();
	const router = useRouter();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			toast("Success", data?.message);
			router.push("/my-page/child-list");
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
