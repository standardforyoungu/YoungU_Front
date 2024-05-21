import { useDeleteChildInfoMutation } from "@/api/myPage/myPage.query";
import { SuccessResInterface } from "@/types/resType";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteChildInfoService = () => {
	const mutation = useDeleteChildInfoMutation();
	const queryClient = useQueryClient();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			toast.success(data?.message);
			queryClient.invalidateQueries({ queryKey: ["GET", "childInfo"] });
		}
	};

	const onError = (error: any) => {
		toast.error(error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
