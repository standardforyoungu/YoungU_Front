"use client";

import IconBadge from "@/components/@commons/IconBadge";
import InfoBadge from "@/components/@commons/InfoBadge";
import ContentBox from "@/components/@layouts/ContentBox";
import { Button } from "@/components/ui/button";
import footerText from "./footer-data.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGetUserInfo } from "@/hooks/myPage/useGetUserInfo";

export default function TestPage() {
	const { userInfo } = useGetUserInfo();
	const childCnt = userInfo?.chl_list?.length ?? 0;

	return (
		<div className="w-full h-auto flex flex-col">
			<ContentBox>
				<div className="w-full flex justify-center">
					<InfoBadge title="검사 소개" />
				</div>
				<div className="w-full h-auto pt-6">
					<p className="body2 text-center text-gray-10">
						더 이상 선택이 아닌 영어 유치부, <br />
						우리 아이와 잘 맞는 영어유치부는 어디일까요?
					</p>
					<p className="head3 text-center pt-[6px] text-gray-10">
						우리 아이 성향검사를 기반으로 <br />
						<strong className="text-orange-100">맞춤 영유</strong>를 <strong className="text-orange-100">추천</strong>
						해줄게요
					</p>
				</div>
				<div className="flex mt-6 justify-center gap-2">
					<IconBadge title="총 문항수" highlight="20문제" iconHref="/icons/list.svg" />
					<IconBadge title="예상 소요시간" highlight="약 5분" iconHref="/icons/timer.svg" />
				</div>
				<div className="flex flex-col items-center justify-center mt-10">
					<div className="w-[10rem] h-[10rem] relative">
						<Image src="/images/infoPic.svg" alt="infoPic" layout="fill" objectFit="cover" className="w-full" />
					</div>
					<Link href={childCnt ? "/test/profile" : "/test/setting"}>
						<Button variant={"medium"} className="w-[13.5rem] mt-10">
							성향 검사 시작하기
						</Button>
					</Link>
				</div>
			</ContentBox>
			<div className="w-full h-auto px-5 py-12 bg-gray-97 text-gray-60">
				<p className="head4 my-3">검사 전 확인해주세요.</p>
				<ul className="list-disc px-5">
					{footerText.map((data, _idx) => (
						<li className="body3 leading-5 mb-1" key={_idx}>
							{data}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
