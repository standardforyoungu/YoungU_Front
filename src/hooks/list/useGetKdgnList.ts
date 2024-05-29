import { useGetKdgnListQuery } from "@/api/list/list.query";
import { KdgnListReqInterface } from "@/api/list/list.schema";
import { useMemo } from "react";

export const useGetKdgnList = (req: KdgnListReqInterface) => {
	const { data: response, isPending } = useGetKdgnListQuery(req);

	const result = useMemo(() => response?.result ?? null, [response?.result]);
	const kdgn_list = useMemo(() => response?.engl_kd_clas_list ?? [], [response?.engl_kd_clas_list]);

	return { result, kdgn_list, isPending };
};
