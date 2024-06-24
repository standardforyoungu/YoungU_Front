import { Metadata } from "next";
import React from "react";
import ListHeader from "@/components/@commons/ListHeader";

export const metadata: Metadata = {
	title: "성향검사 아이정보 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="성향검사" url="/test" />
			{children}
		</>
	);
}
