import { usePostReviewMutation } from "@/api/review/review.query";
import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";

export const usePostReviewService = () => {
	const mutation = usePostReviewMutation();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			toast("Success", data?.message);
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
