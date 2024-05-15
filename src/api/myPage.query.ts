import { useQuery } from "@tanstack/react-query";
import { http } from "./axios";

// 유저 정보 조회
export const useGetUserInfoQuery = () => {};

// 아이 정보 조회
export const useGetChildInfoQuery = () => {
	return useQuery({
		queryKey: ["GET", "childInfo"],
		queryFn: () => http.get("/youngustandard/child").then((res) => res.data),
	});
};

// 아이 정보 저장
export const usePostChildInfoMutation = () => {};

// 아이 정보 수정
export const usePatchChildInfoMutation = () => {};

// 아이 정보 삭제
export const useDeleteChildInfoMutation = () => {};
