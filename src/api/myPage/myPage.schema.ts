export interface GetUserInfoResInterface {
	result: "Success";
	mbr_id: string;
	mbr_nck_nm: string;
	prf_img: string;
	thumb_img: string;
}

export interface ChildList {
	chl_id: number;
	chl_nck_nm: string;
	chl_sex: string;
	chl_age: string;
	chl_mbti: string | null;
}

export interface GetChildInfoResInterface {
	result: "Success";
	mbr_id: string;
	chl_list: Array<ChildList>;
}

export interface PostChildInfoReqInterface {
	chl_nck_nm: string;
	chl_sex: string;
	chl_age: string;
}

export interface PatchChildInfoReqInterface {
	chl_id: number;
	chl_nck_nm: string;
	chl_sex: string;
	chl_age: string;
}

export interface DeleteChildInfoReqInterface {
	chl_id: number;
}
