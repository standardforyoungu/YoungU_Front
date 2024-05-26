import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { ChildInfoInterface, ChildInfoListInterface } from "./child.schema";

export const usePostSaveChildInfoQuery = () => {
	return useMutation({
		mutationKey: ["POST", "saveChildInfo"],
		mutationFn: (req: ChildInfoInterface) => http.post("/youngustandard/user/child", req).then((res) => res.data),
	});
};

export const useGetChildInfoListQuery = (mbr_id: string) => {
	return useQuery<ChildInfoListInterface, Error>({
		queryKey: ["GET", "getChildInfoList"],
		queryFn: async () => await (await http.get(`/youngustandard/user/${mbr_id}/child`)).data,
	});
};

export const useDeleteChildInfoQuery = (mbr_id: string, chl_id: number) => {
	return useMutation({
		mutationKey: ["DELETE", "deleteChildInfo"],
		mutationFn: async () => {
			await (
				await http.delete(`/youngustandard/user/${mbr_id}/child`, { data: chl_id })
			).data;
		},
	});
};
