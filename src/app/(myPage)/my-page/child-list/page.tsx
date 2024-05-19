"use client";

import { useGetChildInfo } from "@/hooks/myPage/useGetChildInfo";
import React from "react";

export default function ChildList() {
	let mbr_id = "";
	if (typeof window !== "undefined") {
		mbr_id = window.localStorage.getItem("mbr_id") ?? "";
	}
	const { childList } = useGetChildInfo(mbr_id);

	return <div>page</div>;
}
