export interface ChildInfoInterface {
	chl_id?: number;
	chl_nck_nm: string;
	chl_sex: string;
	chl_age: string;
	chi_mbti?: string;
}

export interface ChildInfoListInterface {
	result: string;
	mbr_id: string;
	child_list: ChildInfoInterface[];
}
