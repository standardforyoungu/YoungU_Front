import { Metadata } from "next";
import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export const metadata: Metadata = {
	title: "개인정보 처리방침 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ListHeader mainTitle="개인정보 처리방침" url="/my-page" />
			{children}
		</div>
	);
}
