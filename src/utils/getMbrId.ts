export const getMbrId = () => {
	let mbr_id = "";
	if (typeof window !== "undefined") {
		try {
			mbr_id = window.localStorage.getItem("mbr_id") ?? "";
		} catch {
			mbr_id = "";
		}
	}

	return mbr_id;
};
