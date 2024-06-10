import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { PostPropensityResultReqInterface } from "./test.schema";
import { getMbrId } from "@/utils/getMbrId";

export const useGetPropensityQuestionQuery = () => {
	return useQuery({
		queryKey: ["GET", "propensity", "question"],
		queryFn: () => http.get("/youngustandard/propensity/question").then((res) => res.data),
	});
};

export const usePostPropensityResultMutation = () => {
	const mbr_id = getMbrId();

	return useMutation({
		mutationKey: ["POST", "propensity", "result"],
		mutationFn: (req: PostPropensityResultReqInterface) =>
			http.post(`/youngustandard/propensity/result/${mbr_id}`, req).then((res) => res.data),
	});
};

export const useGetPropensityResultQuery = (chl_id: string) => {
	const mbr_id = getMbrId();

	return useQuery({
		queryKey: ["GET", "propensity", "result", chl_id],
		queryFn: () => http.get(`/youngustandard/propensity/result/${mbr_id}/${chl_id}`).then((res) => res.data),
	});
};
