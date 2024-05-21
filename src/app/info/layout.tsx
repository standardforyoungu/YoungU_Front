import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="송파/강동구" subTitle="영어유치부" />
			{children}
		</>
	);
}
