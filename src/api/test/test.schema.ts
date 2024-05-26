export interface PropensityInterface {
	test_qstn_id: number;
	test_qstn_cntnt: string;
	chc1_prpns: string;
	chc1_cntnt: string;
	chc2_prpns: string;
	chc2_cntnt: string;
}

export interface PropensityListInterface {
	result: string;
	question_list: PropensityInterface[];
}

export interface PropensityResultSaveInterface {
	chl_id: number;
	result_list: Array<String>;
}

export interface ProPensityResultSaveResponseInterface {
	result: string;
	message: string;
	chl_id: number;
}
