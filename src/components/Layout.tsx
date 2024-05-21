"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import ScrollBtn from "@/components/@commons/ScrollBtn";

export default function Layout({ children }: { children: ReactNode }) {
	const contentsRef = useRef<HTMLDivElement>(null);
	const [showBtn, setShowBtn] = useState(true);

	useEffect(() => {
		if (contentsRef?.current) {
			contentsRef.current.addEventListener("scroll", () => {
				if (contentsRef.current && contentsRef.current.scrollTop < 50) {
					setShowBtn(false);
				} else {
					setShowBtn(true);
				}
			});
		}
	}, []);

	const scrollTopHandler = () => {
		if (contentsRef?.current) {
			contentsRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div className="min-w-screen w-full flex items-center justify-center gap-[80px] h-full min-h-screen bg-gray-95">
			<div className="sm:hidden md:hidden flex justify-center items-center w-[360px] h-screen bg-gray-40">
				광고 영역
			</div>
			<div className="flex flex-col sm:min-w-[360px] !relative sm:max-w-[430px] sm:w-full sm:mx-auto w-[480px] min-h-screen h-full overflow-scroll max-h-screen scrollbar-hide bg-WHITE">
				<div className="h-screen">{children}</div>
				<ScrollBtn showBtn={showBtn} scrollTopHandler={scrollTopHandler} />
			</div>
		</div>
	);
}
