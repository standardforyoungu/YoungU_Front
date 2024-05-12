"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollBtn() {
	const [showBtn, setShowBtn] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const checkScroll = () => {
			window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false);
		};
		window.addEventListener("scroll", checkScroll);

		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`${
				!showBtn && "hidden"
			} w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center fixed bottom-5 right-[270px] sm:right-5`}>
			<Image src={"/icons/arrow-right.svg"} alt="scrollToTop" width={20} height={20} className="-rotate-90" />
		</button>
	);
}
