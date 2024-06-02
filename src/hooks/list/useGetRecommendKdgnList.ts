import { useGetRecommendKdgnListQuery } from "@/api/list/list.query";
import { useMemo } from "react";

export const useGetRecommendKdgnList = (prpns_data: string) => {
	const { data } = useGetRecommendKdgnListQuery(prpns_data);

	const kdgnList = useMemo(() => data?.engl_kd_clas_list ?? [], [data?.engl_kd_clas_list]);

	return { kdgnList };
};
