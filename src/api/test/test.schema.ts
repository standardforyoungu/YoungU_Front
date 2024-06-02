export interface QuestionList {
	test_qstn_id: number;
	test_qstn_cntnt: string;
	chc1_prpns: string;
	chc1_cntnt: string;
	chc2_prpns: string;
	chc2_cntnt: string;
}

export interface GetPropensityQuestionResInterface {
	result: "Success";
	question_list: QuestionList;
}

export interface PostPropensityResultReqInterface {
	chl_id: string;
	result_list: Array<string>;
}
