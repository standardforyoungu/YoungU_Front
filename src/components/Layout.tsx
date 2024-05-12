"use client";

import React, { ReactNode } from "react";
import Header from "./@commons/Header";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="min-w-screen w-full flex justify-center items-center gap-[80px] h-full min-h-screen bg-gray-95">
			<div className="sm:hidden md:hidden flex justify-center items-center w-[360px] h-screen bg-gray-40">
				광고 영역
			</div>
			<div className="sm:min-w-[360px] sm:max-w-[430px] sm:w-full sm:mx-auto w-[500px] overflow-scroll max-h-screen relative scrollbar-hide bg-WHITE">
				<Header />
				{children}
			</div>
		</div>
	);
}
