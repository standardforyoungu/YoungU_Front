import { useGetPropensityResultQuery } from "@/api/test/test.query";
import { PrpnsDataDTO } from "@/api/test/test.schema";
import { useMemo } from "react";

export const useGetPropensityResult = (chl_id: string) => {
	const { data } = useGetPropensityResultQuery(chl_id);

	const prpnsDataDTO: PrpnsDataDTO = useMemo(() => data?.prpnsDataDTO ?? null, [data?.prpnsDataDTO]);
	const keywords = [
		prpnsDataDTO?.actv_kyw_1,
		prpnsDataDTO?.actv_kyw_2,
		prpnsDataDTO?.actv_kyw_3,
		prpnsDataDTO?.actv_kyw_4,
		prpnsDataDTO?.actv_kyw_5,
		prpnsDataDTO?.actv_kyw_6,
		prpnsDataDTO?.actv_kyw_7,
	]?.filter((el) => el !== null);

	return { prpnsDataDTO, keywords };
};
