"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ScrollBtnProps {
	scrollTopHandler: () => void;
}

export default function ScrollBtn({ scrollTopHandler }: ScrollBtnProps) {
	const [showBtn, setShowBtn] = useState(true);

	const onClickHandler = () => {
		scrollTopHandler();
	};

	return (
		<button
			onClick={onClickHandler}
			className={`${
				!showBtn && "hidden"
			} w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center fixed bottom-5 right-[270px] sm:right-5 `}>
			<Image src={"/icons/arrow-right.svg"} alt="scrollToTop" width={20} height={20} className="-rotate-90" />
		</button>
	);
}
