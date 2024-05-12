"use client";

import { useGetKdgnListQuery } from "@/api/list.query";
import ListItem, { ListItemInterface } from "@/components/ListItem/Index";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetKdgnList } from "@/hooks/list/useGetKdgnList";

import React, { useState } from "react";

const testListData: ListItemInterface[] = [
	{
		title: "쥬빌리프라임주니어(JUBILEEPRIME)어학학원",
		phone: "010-9805-7346",
		address: "서울시 성내동 502-12",
		link: "http://www.naver.com",
	},
	{
		title: "쥬빌리프라임주니어(JUBILEEPRIME)어학학원",
		phone: "010-9805-7346",
		address: "서울시 성내동 502-12",
		link: "",
	},
];

function InfoListPage() {
	// const { data, isPending } = useGetKdgnListQuery({ regn: 1, offset: 1 });

	return (
		<div className="h-full">
			{testListData.map((data) => (
				<ListItem title={data.title} phone={data.phone} address={data.address} link={data.link} />
			))}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						{/* map 으로 버튼 생성 
							버튼 몇개까지 ?
						*/}
						<PaginationLink href="#" className="text-BLACK w-[32px] h-[32px] bg-gray-99 mx-1 ">
							1
						</PaginationLink>

						<PaginationLink href="#" className="text-BLACK w-[32px] h-[32px] bg-gray-99 ">
							2
						</PaginationLink>
					</PaginationItem>
					{/* <PaginationItem>
						<PaginationEllipsis />
					</PaginationItem> */}
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}

export default InfoListPage;
