import { Metadata } from "next";
import React from "react";
import ListHeader from "@/components/@commons/ListHeader";

export const metadata: Metadata = {
	title: "마이페이지 설정 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="설정" url="/my-page" />
			{children}
		</>
	);
}
