import { useGetChildInfoQuery } from "@/api/myPage/myPage.query";
import { useMemo } from "react";

export const useGetChildInfo = () => {
	const { data, isPending } = useGetChildInfoQuery();

	const childList = useMemo(() => data?.child_list ?? [], [data?.child_list]);

	return { isPending, childList };
};
