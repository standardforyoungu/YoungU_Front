"use client";

import { loadKakaoSdk } from "@/utils/loadKakaoSdk";
import { useEffect } from "react";

export default function KakaoProvider() {
	useEffect(() => {
		loadKakaoSdk();
	}, []);

	return <></>;
}
