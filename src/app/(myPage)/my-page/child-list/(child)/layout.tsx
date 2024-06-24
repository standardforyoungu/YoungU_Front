import ListHeader from "@/components/@commons/ListHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "마이페이지 아이정보 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="아이 정보 관리" url="/my-page/child-list" />
			{children}
		</>
	);
}
