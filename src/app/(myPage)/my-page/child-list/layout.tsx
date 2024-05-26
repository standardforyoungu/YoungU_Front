"use client";

import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="아이 정보 관리" url="/my-page" />
			{children}
		</>
	);
}
