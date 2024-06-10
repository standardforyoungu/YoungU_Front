export interface RegionList {
	regn_cd: number;
	city_cd: number;
	regn_nm: string;
	city_nm: string;
}

export interface GetRegnInterface {
	result: "Success";
	region_list_size: number;
	region_list: Array<RegionList>;
}

export type VoteType = Array<number>;

export interface PostVoteInterface {
	info: Array<VoteType>;
}
