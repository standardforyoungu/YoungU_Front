import React from "react";
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
			} w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center fixed bottom-5 right-5`}>
			<Image src={"/icons/arrow.svg"} alt="scrollToTop" width={20} height={20} className="-rotate-90" />
		</button>
	);
}
