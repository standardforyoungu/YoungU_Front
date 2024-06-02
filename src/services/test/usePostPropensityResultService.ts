import { usePostPropensityResultMutation } from "@/api/test/test.query";
import { toast } from "@/utils/toast";

export const usePostPropensityResultService = () => {
	const mutation = usePostPropensityResultMutation();

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onError };
};
