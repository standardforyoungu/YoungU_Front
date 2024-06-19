import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { http } from "../axios";
import { PostReviewReqInterface } from "./review.schema";
import { getMbrId } from "@/utils/getMbrId";

// 리뷰 작성 확인
export const useGetIsReviewedQuery = () => {
	const mbr_id = getMbrId();

	return useQuery({
		queryKey: ["GET", "review"],
		queryFn: () => http.get(`/youngustandard/review/${mbr_id}`).then((res) => res.data),
	});
};

// 리뷰 작성
export const usePostReviewMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ["POST", "review"],
		mutationFn: (req: PostReviewReqInterface) => http.post("/youngustandard/review", req).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["GET", "review"],
			});
		},
	});
};
