import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const usePostReviewService = () => {
	const mutation = usePostReviewService();
	const router = useRouter();

	const onSuccess = (data: SuccessResInterface) => {
		if (data?.result === "Success") {
			toast("Success", data?.message);
			// TODO_JIYEON:
			router.push("");
		}
	};
};
