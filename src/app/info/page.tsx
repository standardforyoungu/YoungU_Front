"use client";

import { useGetKdgnListQuery } from "@/api/list/list.query";
import { KdgnListInterface } from "@/api/list/list.schema";
import ListItem from "@/components/molcules/ListItem/Index";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

function InfoListPage() {
	const router = useRouter();
	const { data, isSuccess } = useGetKdgnListQuery({ regn: 1, city_cd: 1, offset: 1 });

	return (
		<>
			{isSuccess ? (
				<div className="h-full">
					<div className="py-[1.5rem] px-[1.5rem]">
						{isSuccess &&
							data?.engl_kd_clas_list?.map((item: KdgnListInterface) => (
								<ListItem
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
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								{isSuccess &&
									Array.from({ length: data.last_page_num }, (_, index) => (
										<PaginationLink key={index} href="#" className="text-Black w-[32px] h-[32px] bg-gray-99 mx-1 ">
											{index + 1}
										</PaginationLink>
									))}
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
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
