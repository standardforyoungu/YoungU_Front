import { useDeleteChildInfoMutation } from "@/api/myPage/myPage.query";
import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteChildInfoService = () => {
	const mutation = useDeleteChildInfoMutation();
	const queryClient = useQueryClient();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			toast("Success", data?.message);
			queryClient.invalidateQueries({ queryKey: ["GET", "childInfo"] });
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
