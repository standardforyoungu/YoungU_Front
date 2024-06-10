import { useGetRegnQuery } from "@/api/vote/vote.query";
import { RegionList } from "@/api/vote/vote.schema";
import { useMemo } from "react";

export const useGetRegn = () => {
	const { data, isSuccess, isPending } = useGetRegnQuery();
	const regionList: Array<RegionList> = useMemo(() => data?.region_list ?? [], [data]);
	const voteList: Array<{ cityname: string; list: Array<{ title: string; value: number }> }> = [];

	if (!!regionList.length) {
		regionList?.forEach(({ regn_cd, city_cd, regn_nm, city_nm }: RegionList) => {
			if (voteList[regn_cd - 1]) {
				regn_cd === 1
					? voteList[regn_cd - 1].list.push({ title: city_nm, value: city_cd })
					: voteList[regn_cd - 1].list.push({ title: city_nm, value: city_cd + 7 });
			} else {
				regn_cd === 1
					? (voteList[regn_cd - 1] = { cityname: regn_nm, list: [{ title: city_nm, value: city_cd }] })
					: (voteList[regn_cd - 1] = { cityname: regn_nm, list: [{ title: city_nm, value: city_cd + 7 }] });
			}
		});
	}

	return { voteList, isSuccess, isPending };
};
