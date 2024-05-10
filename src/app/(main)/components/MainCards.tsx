"use client";

import Image from "next/image";
import React from "react";
import LinkBtn from "@/components/LinkBtn";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

export default function MainCards() {
	const { isLoggedIn } = useIsLoggedIn();

	const checkLogin = (link: string) => {
		if (isLoggedIn) {
			return link;
		} else {
			return "/login";
		}
	};

	return (
		<div className="flex flex-col gap-[10px]">
			<div className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-orange-10`}>
				<Image src={`/icons/symbol_orange.svg`} alt="symbol" width={24} height={26} />
				<h1 className={`text-orange-200 head3 text-center`}>
					성향검사를 통해
					<br />
					아이에게 맞는 학습법을 알아보세요!
				</h1>
				<Image src={"/images/search.svg"} alt="cardImg" width={105} height={99} />
				<LinkBtn href={checkLogin("/test")} title={"성향검사 시작하기"} bgColor={"bg-orange-100"} />
			</div>
			<div className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-mint-10`}>
				<Image src={`/icons/symbol_mint.svg`} alt="symbol" width={24} height={26} />
				<h1 className={`text-mint-200 head3 text-center`}>
					우리 동네 영어 유치부 정보를
					<br />
					확인해보세요!
				</h1>
				<Image src={"/images/academyList.svg"} alt="cardImg" width={176} height={142} />
				<LinkBtn href={"/info"} title={"영어 유치부 알아보기"} bgColor={"bg-mint-100"} />
				<p className="text-[#8a8a8a] body3">송파/강동 이외 지역은 순차 오픈 예정입니다.</p>
			</div>
			<div className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-blue-10`}>
				<Image src={`/icons/symbol_blue.svg`} alt="symbol" width={24} height={26} />
				<h1 className={`text-blue-200 head3 text-center`}>
					영유스탠다드가 찾아갈
					<br /> 다음 동네는?
				</h1>
				<Image src={"/images/map.svg"} alt="cardImg" width={143.22} height={110} />
				<LinkBtn href={"/vote"} title={"다음 동네 투표하러 가기"} bgColor={"bg-blue-100"} />
			</div>
		</div>
	);
}
