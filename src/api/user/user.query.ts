import { getMbrId } from "./../../utils/getMbrId";
import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { DeleteChildInfoReqInterface, PatchChildInfoReqInterface, PostChildInfoReqInterface } from "./user.schema";

// 유저 정보 조회
export const useGetUserInfoQuery = () => {
	const mbr_id = getMbrId();

	return useQuery({
		queryKey: ["GET", "user"],
		queryFn: () => http.get(`/youngustandard/user/${mbr_id}`).then((res) => res.data),
		enabled: typeof window !== undefined,
	});
};

// 아이 정보 리스트 조회
export const useGetChildInfoListQuery = () => {
	const mbr_id = getMbrId();

	return useQuery({
		queryKey: ["GET", "childInfo"],
		queryFn: () => http.get(`/youngustandard/user/${mbr_id}/child`).then((res) => res.data),
	});
};

// 아이 정보 조회
export const useGetChildInfoQuery = (childId: number) => {
	const mbr_id = getMbrId();

	return useQuery({
		queryKey: ["GET", "childInfo", childId],
		queryFn: async () => {
			const response = await http.get(`/youngustandard/user/${mbr_id}/child`);
			const data = await response.data;

			const child = data?.child_list?.find(({ chl_id }: { chl_id: number }) => chl_id === childId) ?? null;
			return { ...child, chl_age: child.chl_age.toString() };
		},
	});
};

// 아이 정보 저장
export const usePostChildInfoMutation = () => {
	const mbr_id = getMbrId();

	return useMutation({
		mutationKey: ["POST", "childInfo"],
		mutationFn: (req: PostChildInfoReqInterface) =>
			http.post(`/youngustandard/user/${mbr_id}/child`, req).then((res) => res.data),
	});
};

// 아이 정보 수정
export const usePatchChildInfoMutation = () => {
	const mbr_id = getMbrId();

	return useMutation({
		mutationKey: ["PATCH", "childInfo"],
		mutationFn: (req: PatchChildInfoReqInterface) =>
			http.patch(`/youngustandard/user/${mbr_id}/child`, req).then((res) => res.data),
	});
};

// 아이 정보 삭제
export const useDeleteChildInfoMutation = () => {
	const mbr_id = getMbrId();

	return useMutation({
		mutationKey: ["DELETE", "childInfo"],
		mutationFn: (req: DeleteChildInfoReqInterface) =>
			http.delete(`/youngustandard/user/${mbr_id}/child`, { data: req }).then((res) => res.data),
	});
};
