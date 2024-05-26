import { http } from "../axios";
import {
	PropensityListInterface,
	PropensityResultSaveInterface,
	ProPensityResultSaveResponseInterface,
} from "./test.schema";

export const requestGetPropensityList = async () => {
	try {
		return await (
			await http.get(`/youngustandard/propensity/question`)
		).data;
	} catch (error) {
		throw error;
	}
};

export const requestSavePropensityResult = async (req: PropensityResultSaveInterface) => {
	try {
		return await (
			await http.post(`/youngustandard/propensity/result/3478817030`, req)
		).data;
	} catch (error) {
		throw error;
	}
};
