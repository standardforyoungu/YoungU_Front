import LinkBtn from "@/components/LinkBtn";
import Image from "next/image";
import React from "react";

export default function Main() {
	return (
		<div className="w-full flex flex-col">
			<header className="flex justify-between px-[20px] py-[16px] bg-WHITE border-b border-[#0000001a]">
				<Image src={"/icons/main_symbol.png"} alt={"symbol"} width={30} height={32} />
				<Image src={"/icons/user.png"} alt={"user"} width={32} height={32} />
			</header>
			<div className="bg-gray-99 w-full px-[20px] pb-[20px]">
				<div className="flex flex-col gap-[10px] justify-center items-center pt-[44px] pb-[28px] relative">
					<Image
						src={"/icons/beta_tag.png"}
						alt={"tag"}
						width={49}
						height={25}
						className="absolute top-[1.5rem] right-[7.9rem]"
					/>
					<Image src={"/images/logo.png"} alt={"logo"} width={174} height={42} />
					<p className="body1 text-gray-60">우리 아이와 딱 맞는 영유 찾기</p>
				</div>
				<div className="flex flex-col gap-[10px]">
					<div className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-orange-10`}>
						<Image src={`/icons/symbol_orange.png`} alt="symbol" width={24} height={26} />
						<h1 className={`text-orange-200 head3 text-center`}>
							성향검사를 통해
							<br />
							아이에게 맞는 학습법을 알아보세요!
						</h1>
						<Image src={"/images/search.png"} alt="cardImg" width={105} height={99} />
						<LinkBtn href={""} title={"성향검사 시작하기"} bgColor={"bg-orange-100"} />
					</div>
					<div className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-mint-10`}>
						<Image src={`/icons/symbol_mint.png`} alt="symbol" width={24} height={26} />
						<h1 className={`text-mint-200 head3 text-center`}>
							우리 동네 영어 유치부 정보를
							<br />
							확인해보세요!
						</h1>
						<Image src={"/images/academyList.png"} alt="cardImg" width={176} height={142} />
						<LinkBtn href={""} title={"영어 유치부 알아보기"} bgColor={"bg-mint-100"} />
						<p className="text-[#8a8a8a] body3">송파/강동 이외 지역은 순차 오픈 예정입니다.</p>
					</div>
					<div className={`w-full h-fit rounded-[12px] py-8 flex flex-col gap-4 items-center bg-blue-10`}>
						<Image src={`/icons/symbol_blue.png`} alt="symbol" width={24} height={26} />
						<h1 className={`text-blue-200 head3 text-center`}>
							영유스탠다드가 찾아갈
							<br /> 다음 동네는?
						</h1>
						<Image src={"/images/map.png"} alt="cardImg" width={143.22} height={110} />
						<LinkBtn href={""} title={"다음 동네 투표하러 가기"} bgColor={"bg-blue-100"} />
					</div>
				</div>
			</div>
		</div>
	);
}
