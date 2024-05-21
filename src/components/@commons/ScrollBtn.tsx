import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ScrollBtnProps {
	showBtn: boolean;
	scrollTopHandler: () => void;
}

export default function ScrollBtn({ showBtn, scrollTopHandler }: ScrollBtnProps) {
	const onClickHandler = () => {
		scrollTopHandler();
	};

	return (
		<button
			onClick={onClickHandler}
			className={`${
				!showBtn && "hidden"
			} w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center fixed bottom-5 lg:left-[850px] md:left-[405px] sm:left-[320px] inset-x-0 z-50 mx-auto`}>
			<Image src={"/icons/arrow-right.svg"} alt="scrollToTop" width={20} height={20} className="-rotate-90" />
		</button>
	);
}
// `bg-WHITE fixed inset-x-0 bottom-[45%] z-50 mt-24 w-[320px] mx-auto lg:left-[440px] flex h-auto flex-col rounded-[8px] p-6 shadow-lg gap-[26.5px]`,
