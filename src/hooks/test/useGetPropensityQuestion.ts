import { useGetPropensityQuestionQuery } from "@/api/test/test.query";
import { useMemo } from "react";

export const useGetPropensityQuestion = () => {
	const { data } = useGetPropensityQuestionQuery();

	const questionList = useMemo(() => data?.question_list ?? [], [data?.question_list]);

	return { questionList };
};
