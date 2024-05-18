"use client";

import React, { ReactNode, useRef } from "react";
import Header from "./@commons/Header";
import ScrollBtn from "./@commons/ScrollBtn";

export default function Layout({ children }: { children: ReactNode }) {
	const contentsRef = useRef<HTMLDivElement>(null);

	const scrollTopHandler = () => {
		if (contentsRef.current) {
			contentsRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div className="min-w-screen w-full flex justify-center items-center gap-[80px] h-full min-h-screen bg-gray-95">
			<div className="sm:hidden md:hidden flex justify-center items-center w-[360px] h-screen bg-gray-40">
				광고 영역
			</div>
			<div
				ref={contentsRef}
				className="sm:min-w-[360px] relative sm:max-w-[430px] sm:w-full sm:mx-auto w-[500px] min-h-screen overflow-scroll max-h-screen scrollbar-hide bg-WHITE">
				<Header />
				<ScrollBtn scrollTopHandler={scrollTopHandler} />
				{children}
			</div>
		</div>
	);
}
