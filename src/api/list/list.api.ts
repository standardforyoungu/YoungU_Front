import { http } from "../axios";
import { KdgnListInterface, KdgnListReqInterface, RecommendKdgnListInterface } from "./list.schema";

export const requestGetKdgnList = async (req: KdgnListReqInterface): Promise<KdgnListInterface> => {
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
