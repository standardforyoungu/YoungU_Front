import { useMutation, useQuery } from "@tanstack/react-query";
import { requestGetPropensityList, requestSavePropensityResult } from "./test.api";
import {
	PropensityListInterface,
	PropensityResultSaveInterface,
	ProPensityResultSaveResponseInterface,
} from "./test.schema";

export const useGetPropensityListQuery = () => {
	return useQuery<PropensityListInterface, Error>({
		queryKey: ["GET", "propensityList"],
		queryFn: requestGetPropensityList,
	});
};

export const usePostPropensitySaveQuery = () => {
	return useMutation({
		mutationKey: ["POST", "propensityResultSave"],
		mutationFn: requestSavePropensityResult,
	});
};
