import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { PostPropensityResultReqInterface } from "./test.schema";

export const useGetPropensityQuestionQuery = () => {
	return useQuery({
		queryKey: ["GET", "propensity", "question"],
		queryFn: () => http.get("/youngustandard/propensity/question").then((res) => res.data),
	});
};

export const usePostPropensityResultMutation = () => {
	let mbr_id: string;
	if (typeof window !== "undefined") {
		try {
			mbr_id = window.localStorage.getItem("mbr_id") ?? "";
		} catch {
			mbr_id = "";
		}
	}
	return useMutation({
		mutationKey: ["POST", "propensity", "result"],
		mutationFn: (req: PostPropensityResultReqInterface) =>
			http.post(`/youngustandard/propensity/result/${mbr_id}`, req).then((res) => res.data),
	});
};
