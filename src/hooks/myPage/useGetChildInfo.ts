import { useMemo } from "react";
import { useGetChildInfoQuery } from "@/api/myPage/myPage.query";

export const useGetChildInfo = (childId: number) => {
	const { data } = useGetChildInfoQuery(childId);

	const childInfo = useMemo(() => data ?? null, [data]);

	return childInfo;
};
