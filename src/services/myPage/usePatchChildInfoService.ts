import { usePatchChildInfoMutation } from "@/api/user/user.query";
import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const usePatchChildInfoService = () => {
	const mutation = usePatchChildInfoMutation();
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
