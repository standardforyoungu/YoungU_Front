import { useGetChildInfoQuery } from "@/api/myPage/myPage.query";
import { useMemo } from "react";

export const useGetChildInfo = (mbr_id: string) => {
	const { data, isPending } = useGetChildInfoQuery(mbr_id);

	const childList = useMemo(() => {
		data?.chlList ?? [];
	}, [data?.chlList]);

	return { isPending, childList };
};
