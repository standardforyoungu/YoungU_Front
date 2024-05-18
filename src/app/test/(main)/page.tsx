import IconBadge from "@/components/@commons/IconBadge";
import InfoBadge from "@/components/@commons/InfoBadge";
import ContentBox from "@/components/@layouts/ContentBox";
import { Button } from "@/components/ui/button";
import footerText from "./footer-data.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TestPage() {
	return(
	<div className='w-full h-auto flex flex-col'>
	<ContentBox>
	  <div className="w-full flex justify-center">
	  	<InfoBadge title="검사 소개"/>
	  </div>
	  <div className="w-full h-auto pt-10">
		<p className="head5 text-center">더 이상 선택이 아닌 영어 유치부, <br/>우리 아이와 잘 맞는 영어유치부는 어디일까요?</p>
		<p className="head3 text-center pt-5">우리 아이 성향검사를 기반으로 <br/><strong className="text-orange-100">맞춤 영유</strong>를 <strong className="text-orange-100">추천</strong>해줄게요</p>
	</div>
	<div className="flex mt-10 justify-center gap-2">
		<IconBadge title="총 문항수" highlight="20문제" iconHref="/icons/list.svg"/>
		<IconBadge title="예상 소요시간" highlight="약 5분" iconHref="/icons/timer.svg"/>
	</div>
	<div className="flex flex-col items-center justify-center mt-20">
    	<div className="w-[10rem] h-[10rem] relative">
			<Image
				src="/images/infoPic.svg"
				alt="infoPic"
				layout="fill"
				objectFit="cover"
				className="w-full"
			/>
		</div>
		<Link href="/">
			<Button variant={'secondary'} className="text-WHITE w-[13.5rem] h-[3rem] mt-10 relative flex justify-center items-center gap-1">
				<p className="body1">성향 검사 시작하기</p>
				<div className="w-[1rem] h-[1rem] relative">
					<Image src="/icons/arrow-right.svg" layout="fill" objectFit="cover" alt="arrow"/>
				</div>	
			</Button>
		</Link>
	</div>
	</ContentBox>
	<div className="w-full h-auto px-5 py-12 bg-[#EDEDED] text-gray-60">
		<p className="head4 my-3">검사 전 확인해주세요.</p>
		<ul className="list-disc px-5">
			{
				footerText.map((data, _idx)=><li className="body3 leading-5 mb-1" key={_idx}>{data}</li>)
			}
		</ul>
	</div>	
  </div>)
};
