import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

export interface ListItemInterface {
	title: string;
	phone: string;
	address: string;
	link?: string;
}

export default function CngdList({ title, phone, address, link }: ListItemInterface) {
	return (
		<div className="max-h-[165] w-full py-[1.5rem] bg-White border-b border-gray-99">
			<div className="flex flex-col w-full px-6">
				<h4 className="head4 text-gray-20 my-1">{title}</h4>
				<div className="flex gap-[2.5px] items-center my-[0.2rem]">
					<Image src={"/icons/phone-call.svg"} alt="phon" width={16} height={16} />
					<p className="body2 text-gray-40">{phone}</p>
				</div>
				<div className="flex gap-[2.5px] items-center my-[0.2rem]">
					<Image src={"/icons/map-pin.svg"} alt="pin" width={16} height={16} />
					<p className="body2 text-gray-40">{address}</p>
				</div>
				<Link
					className={cn(buttonVariants({ variant: link ? "list-big" : "disable", size: "lg" }), "mt-3 rounded-[8px]")}
					href={link ? link : "#"}
					target="_blank">
					{link ? "홈페이지 바로가기" : "홈페이지를 찾을 수 없어요"}
				</Link>
			</div>
		</div>
	);
}
