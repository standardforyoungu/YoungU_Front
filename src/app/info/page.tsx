import ListItem from "@/components/ListItem/Index";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

function page() {
	return (
		<div className="h-full">
			<ListItem />
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

export default page;
