import { useGetUserInfoQuery } from "@/api/user/user.query";
import { useMemo } from "react";

export const useGetUserInfo = () => {
	const { data } = useGetUserInfoQuery();

	const userInfo = useMemo(() => data ?? null, [data]);

	return { userInfo };
};
