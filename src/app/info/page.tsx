"use client";

import { KdgnListInterface } from "@/api/list/list.schema";
import { scrollState } from "@/atom/scrollState";
import ListHeader from "@/components/@commons/ListHeader";
import Loading from "@/components/@commons/Loading";
import CngdList from "@/components/list/CngdList";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetKdgnList } from "@/hooks/list/useGetKdgnList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

function InfoListPage() {
	const router = useRouter();
	const [currentPageNum, setCurrentPageNum] = useState(1);
	const [scroll, setScroll] = useRecoilState(scrollState);
	const { isSuccess, lastPageNum, currentPage, classList, isPending } = useGetKdgnList({
		regn: 1,
		city_cd: 1,
		offset: currentPageNum,
	});

	return (
		<div className="h-screen flex flex-col">
			<ListHeader mainTitle="송파/강동구" subTitle="영어유치부" url="/" />
			{isPending ? (
				<Loading />
			) : isSuccess ? (
				<div className="h-fit pb-6 sm:pb-24">
					<div>
						{classList?.map((item: KdgnListInterface) => (
							<CngdList
								title={item.engl_kd_clas_nm}
								phone={item.engl_kd_clas_telno}
								address={item.engl_kd_clas_addr}
								link={item.engl_kd_clas_lnk}
								key={item.engl_kd_clas_id}
							/>
						))}
					</div>

					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									href="#"
									disabled={currentPage === 1}
									onClick={() => {
										if (currentPage! <= 1) {
											return;
										} else {
											setCurrentPageNum(1);
											setScroll(scroll * -1);
										}
									}}
								/>
							</PaginationItem>
							<PaginationItem>
								{lastPageNum &&
									Array.from({ length: lastPageNum }, (_, index) => (
										<PaginationLink
											onClick={() => {
												setCurrentPageNum(index + 1);
												setScroll(scroll * -1);
											}}
											key={index}
											href="#"
											className={`w-[32px] h-[32px] mx-1 text-gray-80 hover:text-gray-10 hover:bg-gray-99 ${
												index + 1 === currentPageNum && "text-gray-10 bg-gray-99"
											}`}>
											{index + 1}
										</PaginationLink>
									))}
							</PaginationItem>
							<PaginationItem>
								<PaginationNext
									disabled={currentPage === lastPageNum}
									onClick={() => {
										if (currentPage! >= lastPageNum!) {
											return;
										} else {
											setCurrentPageNum(lastPageNum!);
											setScroll(scroll * -1);
										}
									}}
									href="#"
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			) : (
				<div className="flex flex-col h-full flex-1 justify-center items-center">
					<div className="flex flex-col items-center justify-center gap-4 h-full">
						<Image src="/images/icon_diabled.svg" alt="logo" width={72} height={72} />
						<div className="flex flex-col gap-[2px] items-center">
							<p className="head4 text-gray-40">정보를 가져올 수 없습니다</p>
							<p className="body1 text-gray-60">잠시 후 다시 시도해주세요</p>
						</div>
						<Button onClick={() => router.push("/")} className="bg-orange-10 text-orange-100 head5">
							홈으로 이동
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

export default InfoListPage;
