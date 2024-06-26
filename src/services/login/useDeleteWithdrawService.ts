import { useDeleteWithdrawMutation } from "@/api/login/login.query";
import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const useDeleteWithdrawService = () => {
	const router = useRouter();
	const mutation = useDeleteWithdrawMutation();

	const onSuccess = (res: SuccessResInterface) => {
		if (res?.result === "Success") {
			toast("Success", res.message);
			setTimeout(() => {
				window.localStorage.removeItem("OU_UserAttribute");
				window.localStorage.removeItem("mbr_id");
				router.push("/");
			}, 300);
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
