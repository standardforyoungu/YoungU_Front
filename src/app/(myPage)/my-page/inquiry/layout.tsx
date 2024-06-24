import { Metadata } from "next";
import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export const metadata: Metadata = {
	title: "문의하기 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="문의하기" url="/my-page" />
			{children}
		</>
	);
}
