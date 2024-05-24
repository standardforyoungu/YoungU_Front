"use client";

import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="문의하기" url="/my-page" />
			{children}
		</>
	);
}
