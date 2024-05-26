import { SuccessResInterface } from "@/types/resType";
import { usePostVoteMutation } from "./../../api/vote/vote.query";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

export const usePostVoteService = () => {
	const router = useRouter();
	const mutation = usePostVoteMutation();

	const onSuccess = (res: SuccessResInterface) => {
		toast("Success", res?.message);
		router.push("/");
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
