export interface GetUserInfoResInterface {}

export interface ChildList {
	chl_id: number;
	chl_nck_nm: string;
	chl_sex: string;
	chl_age: string;
	chl_mbti: string | null;
}

export interface GetChildInfoSuccessResInterface {
	result: "Success";
	mbr_id: string;
	chl_list: Array<ChildList>;
}

export interface GetChildInfoFailedResInterface {
	result: "Fail";
	message: string;
}
