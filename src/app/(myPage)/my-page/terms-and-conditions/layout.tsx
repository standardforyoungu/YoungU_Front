"use client";

import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ListHeader mainTitle="이용약관" url="/" />
			{children}
		</div>
	);
}
