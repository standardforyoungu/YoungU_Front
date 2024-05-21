"use client";

import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="개인정보 처리방침" />
			{children}
		</>
	);
}
