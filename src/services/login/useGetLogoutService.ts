import { useGetLogoutMutation } from "@/api/login/login.query";
import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const useGetLogoutService = () => {
	const mutation = useGetLogoutMutation();
	const router = useRouter();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			if (typeof window !== "undefined") {
				toast("Success", data.message);
				window.localStorage.removeItem("OU_UserAttribute");
				window.localStorage.removeItem("mbr_id");
				router.push("/");
			}
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
