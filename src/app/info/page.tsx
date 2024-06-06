"use client";

import { KdgnListInterface } from "@/api/list/list.schema";
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

function InfoListPage() {
	const router = useRouter();
	const [currentPageNum, setCurrentPageNum] = useState(1);
	const { isSuccess, lastPageNum, currentPage, classList } = useGetKdgnList({
		regn: 1,
		city_cd: 1,
		offset: currentPageNum,
	});

	return (
		<>
			{isSuccess ? (
				<div className="h-fit pb-6">
					<div className="px-[1.5rem]">
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
									onClick={() => {
										if (currentPage! <= 1) {
											return;
										} else {
											setCurrentPageNum(1);
										}
									}}
								/>
							</PaginationItem>
							<PaginationItem>
								{lastPageNum &&
									Array.from({ length: lastPageNum }, (_, index) => (
										<PaginationLink
											onClick={() => setCurrentPageNum(index + 1)}
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
									onClick={() => {
										if (currentPage! >= lastPageNum!) {
											return;
										} else {
											setCurrentPageNum(lastPageNum!);
										}
									}}
									href="#"
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			) : (
				<div className="flex flex-col h-full justify-center items-center">
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
		</>
	);
}

export default InfoListPage;
