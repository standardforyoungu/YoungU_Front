import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "../axios";
import { ChildInfoInterface, ChildInfoListInterface } from "./child.schema";

export const usePostSaveChildInfoQuery = () => {
	return useMutation({
		mutationKey: ["POST", "saveChildInfo"],
		mutationFn: (req: ChildInfoInterface) => http.post("/youngustandard/user/child", req).then((res) => res.data),
	});
};

export const useGetChildInfoListQuery = () => {
	return useQuery<ChildInfoListInterface, Error>({
		queryKey: ["GET", "getChildInfoList"],
		queryFn: async () => await (await http.get(`/youngustandard/user/child`)).data,
	});
};

export const useDeleteChildInfoQuery = () => {
	return useMutation({
		mutationKey: ["DELETE", "deleteChildInfo"],
		mutationFn: ({ chl_id }: { chl_id: number }) =>
			http.delete(`/youngustandard/user/child`, { data: chl_id }).then((res) => res.data),
	});
};
