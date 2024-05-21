import { useGetUserInfoQuery } from "@/api/myPage/myPage.query";
import { useMemo } from "react";

export const useGetUserInfo = () => {
	const { data } = useGetUserInfoQuery();

	const userInfo = useMemo(() => data ?? null, [data]);

	return { userInfo };
};
