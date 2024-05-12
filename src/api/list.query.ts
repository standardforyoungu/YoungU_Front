import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { KdgnListReqSchema } from "./list.schema";

export const useGetKdgnListQuery = (req: KdgnListReqSchema) => {
	return useQuery({
		queryKey: ["GET", "KdgnList", req.regn, req.offset],
		queryFn: () => fetch(`http://43.202.67.202/youngustandard/${req.regn}/${req.offset}`).then((res) => res.json()),
		placeholderData: keepPreviousData,
	});
};
