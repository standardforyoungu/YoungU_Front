"use client";

import React, { ReactNode } from "react";
import { useGetWindowSize } from "@/hooks/useGetWindowSize";

export default function Layout({ children }: { children: ReactNode }) {
	const screen = useGetWindowSize();
	return (
		<div className="min-w-screen w-full flex justify-center items-center gap-[80px] h-full min-h-screen bg-gray-95">
			{screen === "WEB" && (
				<div className="flex justify-center items-center w-[360px] h-[800px] bg-gray-40">광고 영역</div>
			)}
			<div className="sm:min-w-[360px] sm:max-w-[430px] sm:w-full sm:mx-auto w-[500px]">{children}</div>
		</div>
	);
}
