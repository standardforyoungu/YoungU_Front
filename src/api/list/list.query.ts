import { useQuery } from "@tanstack/react-query";
import { requestGetKdgnList, requestGetRecommendKdgnList } from "./list.api";
import { KdgnListInterface, KdgnListReqInterface, RecommendKdgnListInterface } from "./list.schema";

export const useGetKdgnListQuery = (req: KdgnListReqInterface) => {
	return useQuery<KdgnListInterface>({
		queryKey: ["GET", req],
		queryFn: () => requestGetKdgnList(req),
	});
};

export const useGetRecommendKdgnListQuery = (prpns_data: string) => {
	return useQuery<RecommendKdgnListInterface>({
		queryKey: ["GET", prpns_data],
		queryFn: () => requestGetRecommendKdgnList(prpns_data),
	});
};
