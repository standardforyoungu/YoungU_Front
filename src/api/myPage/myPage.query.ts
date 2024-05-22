import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { DeleteChildInfoReqInterface, PatchChildInfoReqInterface, PostChildInfoReqInterface } from "./myPage.schema";

// 유저 정보 조회
export const useGetUserInfoQuery = () => {
	return useQuery({
		queryKey: ["GET", "user"],
		queryFn: () => http.get(`/youngustandard/user/3483424773`).then((res) => res.data),
		enabled: !!window.localStorage.getItem("OU_UserAttribute"),
	});
};

// 아이 정보 리스트 조회
export const useGetChildInfoListQuery = () => {
	return useQuery({
		queryKey: ["GET", "childInfo"],
		queryFn: () => http.get(`/youngustandard/user/3483424773/child`).then((res) => res.data),
		enabled: !!window.localStorage.getItem("OU_UserAttribute"),
	});
};

// 아이 정보 조회
export const useGetChildInfoQuery = (childId: number) => {
	return useQuery({
		queryKey: ["GET", "childInfo", childId],
		queryFn: async () => {
			const response = await http.get(`/youngustandard/user/3483424773/child`);
			const data = await response.data;

			const child = data?.child_list?.find(({ chl_id }: { chl_id: number }) => chl_id === childId) ?? null;
			return child;
		},
		enabled: !!window.localStorage.getItem("OU_UserAttribute"),
	});
};

// 아이 정보 저장
export const usePostChildInfoMutation = () => {
	return useMutation({
		mutationKey: ["POST", "childInfo"],
		mutationFn: (req: PostChildInfoReqInterface) =>
			http.post(`/youngustandard/user/3483424773/child`, req).then((res) => res.data),
	});
};

// 아이 정보 수정
export const usePatchChildInfoMutation = () => {
	return useMutation({
		mutationKey: ["PATCH", "childInfo"],
		mutationFn: (req: PatchChildInfoReqInterface) =>
			http.patch(`/youngustandard/user/3483424773/child`, req).then((res) => res.data),
	});
};

// 아이 정보 삭제
export const useDeleteChildInfoMutation = () => {
	return useMutation({
		mutationKey: ["DELETE", "childInfo"],
		mutationFn: (req: DeleteChildInfoReqInterface) =>
			http.delete(`/youngustandard/user/3483424773/child`, { data: req }).then((res) => res.data),
	});
};
