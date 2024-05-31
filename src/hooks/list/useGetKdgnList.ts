import { useGetKdgnListQuery } from "@/api/list/list.query";
import { KdgnListReqInterface } from "@/api/list/list.schema";
import { useMemo } from "react";

export const useGetKdgnList = (req: KdgnListReqInterface) => {
	const { data, isSuccess } = useGetKdgnListQuery(req);

	const lastPageNum = useMemo(() => data?.last_page_num ?? null, [data?.last_page_num]);
	const currentPage = useMemo(() => data?.current_page ?? null, [data?.current_page]);
	const classList = useMemo(() => data?.engl_kd_clas_list ?? [], [data?.engl_kd_clas_list]);

	return { isSuccess, lastPageNum, currentPage, classList };
};
