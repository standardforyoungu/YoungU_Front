import { useGetChildInfoQuery } from "@/api/myPage.query";
import { useMemo } from "react";

export const useGetChildInfo = () => {
	const { data, isPending } = useGetChildInfoQuery();

	const childList = useMemo(() => {
		data?.chlList ?? [];
	}, [data?.chlList]);

	return { isPending, childList };
};
