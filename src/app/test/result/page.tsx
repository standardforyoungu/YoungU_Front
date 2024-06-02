"use client";

import { KdgnListInterface } from "@/api/list/list.schema";
import CngdList from "@/components/list/CngdList";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function ResultPage() {
	const searchParams = useSearchParams();
	const childIdx = searchParams.get("childIdx");
	const ref = useRef<HTMLDivElement>(null);
	const { onOpen } = useModal();

	useEffect(() => {
		const isReviewed = localStorage.getItem("isReviewed");
		const observer = new IntersectionObserver((entries, observer) => {
			if (!entries[0].isIntersecting) {
				return;
			} else {
				if (isReviewed) {
					return;
				} else {
					onOpen("review");
				}
			}
		});

		if (!!ref?.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const list = [
		{
			engl_kd_clas_id: 1,
			engl_kd_clas_nm: "제스아일랜드",
			engl_kd_clas_addr: "서울시 송파구 위례성대로12길 18, 2층",
			engl_kd_clas_telno: "02-412-9696",
			engl_kd_clas_lnk: "http://jesisland.co.kr/SEN3/main.asp",
		},
		{
			engl_kd_clas_id: 23,
			engl_kd_clas_nm: "쥬빌리프라임주니어(JUBILEEPRIME)어학학원",
			engl_kd_clas_addr: "서울특별시 송파구 송이로 238",
			engl_kd_clas_telno: "02-403-0511",
			engl_kd_clas_lnk: "http://jubileeprime.com/",
		},
		{
			engl_kd_clas_id: 24,
			engl_kd_clas_nm: "라이즈어학원 송파캠퍼스",
			engl_kd_clas_addr: "서울특별시 송파구 백제고분로 170, 고광빌딩 3-4층",
			engl_kd_clas_telno: "02-2088-2360",
			engl_kd_clas_lnk: "https://www.risekorea.com/#one",
		},
		{
			engl_kd_clas_id: 25,
			engl_kd_clas_nm: "LCI 잠실",
			engl_kd_clas_addr: "서울 송파구 석촌호수로 88 대원빌딩 5층",
			engl_kd_clas_telno: "02-423-0505",
			engl_kd_clas_lnk: "https://blog.naver.com/lci_jamsil",
		},
	];

	return (
		<div>
			<div className="pt-3 px-5 pb-[18px] w-full">
				<div className="w-full relative rounded-t-[16px] h-[213px] pt-6 pb-2 px-11 bg-orange-10 flex flex-col gap-2 items-center">
					<p className="head4 text-gray-40 w-[200px] text-center ">
						우리 아이는
						<br />
						<span className="head3 text-orange-100">창의적인 고슴도치</span>
					</p>
					<div className="relative w-[233px] h-[126px]">
						<Image src={"/images/propensity_result_01.png"} alt="graph" width={233} height={126} />
						<Image
							src={"/images/animal_hedgehog.svg"}
							alt="animal"
							width={102}
							height={72}
							className="absolute bottom-0 right-[65px]"
						/>
					</div>
				</div>
				<div className="bg-[#F67B4E]/5 rounded-b-[16px] h-[154px] w-full px-4 py-5 flex flex-col gap-[10px] items-center justify-center">
					<p className="body2 text-gray-20">우리 아이는 독창적이고 분석적으로 문제를 해결하는 학습 방식이 잘 맞아요</p>
					<div className="flex flex-wrap justify-center items-center gap-[6px] w-[300px]">
						{["#손유희", "#창작활동", "#노래&율동", "#그림 그리기", "#스토리텔링"].map((el) => (
							<div key={el} className="bg-White py-[6px] px-3 text-orange-100 head6">
								{el}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full h-[6px] bg-gray-99" />
			<div className="py-8 px-5">
				<h2 className="text-gray-20 head2">추천 영어유치부</h2>
				{list.map((item: KdgnListInterface) => (
					<CngdList
						title={item.engl_kd_clas_nm}
						phone={item.engl_kd_clas_telno}
						address={item.engl_kd_clas_addr}
						link={item.engl_kd_clas_lnk}
						key={item.engl_kd_clas_id}
					/>
				))}
				<div ref={ref} className="h-4" />
			</div>
			<button className="w-14 h-14 bg-mint-100 fixed right-5 bottom-[84px] rounded-full flex justify-center items-center">
				<Image src={"/icons/share.svg"} alt="share" width={20} height={20} />
			</button>
		</div>
	);
}
