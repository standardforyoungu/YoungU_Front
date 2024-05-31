import { http } from "../axios";
import { KdgnListReqInterface, KdgnListResInterface, RecommendKdgnListInterface } from "./list.schema";

export const requestGetKdgnList = async (req: KdgnListReqInterface): Promise<KdgnListResInterface> => {
	try {
		return await (
			await http.get(`/youngustandard/${req.regn}/${req.city_cd}/${req.offset}`)
		).data;
	} catch (error) {
		throw error;
	}
};

export const requestGetRecommendKdgnList = async (prpns_data: string): Promise<RecommendKdgnListInterface> => {
	try {
		return await (
			await http.get(`youngustandard/recommend/${prpns_data}`)
		).data;
	} catch (error) {
		throw error;
	}
};
