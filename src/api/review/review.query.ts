import { useMutation } from "@tanstack/react-query";
import { http } from "../axios";
import { PostReviewReqInterface } from "./review.schema";

export const usePostReviewMutation = () => {
	return useMutation({
		mutationKey: ["POST", "review"],
		mutationFn: (req: PostReviewReqInterface) => http.post("/youngustandard/review", req).then((res) => res.data),
	});
};
