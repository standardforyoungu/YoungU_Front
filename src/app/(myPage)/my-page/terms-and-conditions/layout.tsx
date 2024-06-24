import { Metadata } from "next";
import React from "react";
import ListHeader from "@/components/@commons/ListHeader";

export const metadata: Metadata = {
	title: "이용약관 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ListHeader mainTitle="이용약관" url="/my-page" />
			{children}
		</div>
	);
}
