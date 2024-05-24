import ListHeader from "@/components/@commons/ListHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="설정" url="/my-page" />
			{children}
		</>
	);
}
