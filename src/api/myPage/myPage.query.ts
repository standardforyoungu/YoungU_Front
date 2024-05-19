import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { DeleteChildInfoReqInterface, PatchChildInfoReqInterface, PostChildInfoReqInterface } from "./myPage.schema";

// 유저 정보 조회
export const useGetUserInfoQuery = (mbr_id: string) => {
	return useQuery({
		queryKey: ["GET", "user", mbr_id],
		queryFn: () => http.get(`/youngustandard/user/${mbr_id}`).then((res) => res.data),
		enabled: !mbr_id,
	});
};

// 아이 정보 조회
export const useGetChildInfoQuery = (mbr_id: string) => {
	return useQuery({
		queryKey: ["GET", "childInfo"],
		queryFn: () => http.get(`/youngustandard/user/${mbr_id}/child`).then((res) => res.data),
		enabled: !mbr_id,
	});
};

// 아이 정보 저장
export const usePostChildInfoMutation = () => {
	return useMutation({
		mutationKey: ["POST", "childInfo"],
		mutationFn: ({ mbr_id, req }: { mbr_id: string; req: PostChildInfoReqInterface }) =>
			http.post(`/youngustandard/user/${mbr_id}/child`, req).then((res) => res.data),
	});
};

// 아이 정보 수정
export const usePatchChildInfoMutation = () => {
	return useMutation({
		mutationKey: ["PATCH", "childInfo"],
		mutationFn: ({ mbr_id, req }: { mbr_id: string; req: PatchChildInfoReqInterface }) =>
			http.patch(`/youngustandard/user/${mbr_id}/child`, req).then((res) => res.data),
	});
};

// 아이 정보 삭제
export const useDeleteChildInfoMutation = () => {
	return useMutation({
		mutationKey: ["DELETE", "childInfo"],
		mutationFn: ({ mbr_id, req }: { mbr_id: string; req: DeleteChildInfoReqInterface }) =>
			http.delete(`/youngustandard/user/${mbr_id}/child`, { data: req }).then((res) => res.data),
	});
};
