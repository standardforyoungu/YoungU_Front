import { useGetKdgnListQuery } from "@/api/list.query";
import { KdgnListReqSchema } from "@/api/list.schema";
import { useMemo } from "react";

export const useGetKdgnList = (req: KdgnListReqSchema) => {
	const { data: response, isPending } = useGetKdgnListQuery(req);

	const result = useMemo(() => response?.data?.result ?? null, [response?.data?.result]);
	const kdgn_list = useMemo(() => response?.data?.kdgn_list ?? [], [response?.data?.kdgn_list]);

	return { result, kdgn_list, isPending };
};
