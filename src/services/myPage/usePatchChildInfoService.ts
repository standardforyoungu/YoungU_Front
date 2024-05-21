import { usePatchChildInfoMutation } from "@/api/myPage/myPage.query";
import { SuccessResInterface } from "@/types/resType";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const usePatchChildInfoService = () => {
	const mutation = usePatchChildInfoMutation();
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
