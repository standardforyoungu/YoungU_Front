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

export interface PrpnsDataDTO {
	prpns_data: "INTP";
	prpns_chrct: string;
	prpns_chrct_img1: string;
	prpns_chrct_img2: string;
	prmr_lrn_mthd: string;
	post_lrn_mthd: string;
	prpns_expln: string;
	actv_kyw_1: string;
	actv_kyw_2: string;
	actv_kyw_3: string;
	actv_kyw_4: string;
	actv_kyw_5: string;
	actv_kyw_6: string;
	actv_kyw_7: string;
}

export interface GetPropensityResultResInterface {
	result: "Success";
	prpnsDataDTO: PrpnsDataDTO;
}
