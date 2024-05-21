"use client";

import { useGetKdgnListQuery } from "@/api/list/list.query";
import { KdgnListInterface } from "@/api/list/list.schema";
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

function InfoListPage() {
	const { data, isPending, isSuccess } = useGetKdgnListQuery({ regn: 1, offset: 1 });

	return (
		<div className="h-full">
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
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						{isSuccess &&
							Array.from({ length: data.last_page_num }, (_, index) => (
								<PaginationLink key={index} href="#" className="text-BLACK w-[32px] h-[32px] bg-gray-99 mx-1 ">
									{index + 1}
								</PaginationLink>
							))}
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
