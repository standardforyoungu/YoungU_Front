import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { KdgnListReqInterface, KdgnListResInterface, RecommendKdgnListInterface } from "./list.schema";
import { http } from "../axios";

export const useGetKdgnListQuery = (req: KdgnListReqInterface) => {
	return useQuery<KdgnListResInterface>({
		queryKey: ["GET", req],
		queryFn: () => http.get(`/youngustandard/${req.regn}/${req.city_cd}/${req.offset}`).then((res) => res.data),
		placeholderData: keepPreviousData,
	});
};

export const useGetRecommendKdgnListQuery = (prpns_data: string) => {
	return useQuery<RecommendKdgnListInterface>({
		queryKey: ["GET", prpns_data],
		queryFn: () => http.get(`youngustandard/recommend/${prpns_data}`).then((res) => res.data),
		placeholderData: keepPreviousData,
	});
};
