"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkBtn from "@/components/LinkBtn";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { useModal } from "@/hooks/useModal";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function MainCards() {
	const router = useRouter();
	const { isLoggedIn } = useIsLoggedIn();
	const { onOpen } = useModal();
	const [isVoted, setIsVoted] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			!!window?.localStorage?.getItem("isVoted") && setIsVoted(true);
		}
	}, []);

	const onClickBtn = () => {
		if (!isLoggedIn) {
			onOpen("login");
			sessionStorage.setItem("redirect", "/");
		} else {
			router.push("/test");
		}
	};

	return (
		<div className="flex flex-col gap-[10px] w-full">
			<div
				className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-orange-10 hover:-translate-y-2 duration-300`}>
				<Image src={`/icons/symbol_orange.svg`} alt="symbol" width={24} height={26} />
				<h1 className={`text-orange-200 head3 text-white text-center`}>
					성향검사를 통해
					<br />
					아이에게 맞는 학습법을 알아보세요!
				</h1>
				<Image src={"/images/search.svg"} alt="cardImg" width={105} height={99} />
				<Button
					onClick={onClickBtn}
					className="w-[220px] !h-[40px] flex gap-1 items-center bg-orange-100 text-White !head5">
					<span className="text-White head5">성향검사 시작하기</span>
					<Image src={"/icons/arrow.svg"} alt="arrow" width={16} height={16} />
				</Button>
			</div>
			<div
				className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-mint-10 hover:-translate-y-2 duration-300`}>
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
			<div
				className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-blue-10 hover:-translate-y-2 duration-300`}>
				<Image src={`/icons/symbol_blue.svg`} alt="symbol" width={24} height={26} />
				<h1 className={`text-blue-200 head3 text-center`}>
					영유스탠다드가 찾아갈
					<br /> 다음 동네는?
				</h1>
				<Image src={"/images/map.svg"} alt="cardImg" width={143.22} height={110} />
				<Button
					disabled={isVoted}
					onClick={() => router.push("/vote")}
					className="w-[220px] !h-[40px] flex gap-1 items-center bg-blue-100 text-White !head5">
					<span className="text-White head5">다음 동네 투표하러 가기</span>
					<Image src={"/icons/arrow.svg"} alt="arrow" width={16} height={16} />
				</Button>
			</div>
		</div>
	);
}
