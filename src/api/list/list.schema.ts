export interface KdgnListInterface {
	engl_kd_clas_id: number;
	engl_kd_clas_nm: string;
	engl_kd_clas_addr: string;
	engl_kd_clas_telno: string;
	engl_kd_clas_lnk?: string;
}

export interface KdgnListReqInterface {
	regn: number;
	city_cd: number;
	offset: number;
}

export interface KdgnListInterface {
	result: string;
	last_page_num: number;
	current_page: number;
	engl_kd_clas_list: Array<KdgnListInterface>;
}

export interface RecommendKdgnListInterface {
	result: string;
	engl_kd_clas_list: Array<KdgnListInterface>;
}
