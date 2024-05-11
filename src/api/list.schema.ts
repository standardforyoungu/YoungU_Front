export const KinderClassListReqSchema = {};

export interface KdgnList {
	engl_kd_clas_id: number;
	engl_kd_clas_nm: string;
	engl_kd_clas_addr: string;
	engl_kd_clas_telno: string;
	engl_kd_clas_lnk?: string;
}

export interface KdgnListResSchema {
	result: "Success" | "Fail";
	kdgn_list: Array<KdgnList>;
}

export interface KdgnListReqSchema {
	regn: number;
	offset: number;
}
