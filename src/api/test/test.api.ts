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
	let mbr_id = "";

	if (typeof window !== "undefined") {
		try {
			mbr_id = window.localStorage.getItem("mbr_id") ?? "";
		} catch (error) {
			console.error("로컬 스토리지 접근 중 에러 발생:", error);
		}
	}

	return await http.post(`/youngustandard/propensity/result/${mbr_id}`, req).then((res) => res.data);
};
