import { useMutation, useQuery } from "@tanstack/react-query";
import { PostVoteInterface } from "./vote.schema";
import { http } from "../axios";

export const useGetRegnQuery = () => {
	return useQuery({
		queryKey: ["GET", "regn"],
		queryFn: () => http.get("/youngustandard/regn").then((res) => res.data),
	});
};

export const usePostVoteMutation = () => {
	return useMutation({
		mutationKey: ["POST", "vote"],
		mutationFn: (req: PostVoteInterface) => http.post("/youngustandard/vote", req).then((res) => res.data),
	});
};
