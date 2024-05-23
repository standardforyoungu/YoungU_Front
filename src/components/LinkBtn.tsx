import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	href: string;
	title: string;
	bgColor: string;
}

export default function LinkBtn({ href, title, bgColor }: Props) {
	return (
		<Link
			href={href}
			className={`p-[10px] flex gap-1 ${bgColor} rounded-[8px] w-[180px] h-[40px] items-center justify-center`}>
			<span className="text-White head5">{title}</span>
			<Image src={"/icons/arrow-right.svg"} alt="arrow" width={16} height={16} />
		</Link>
	);
}
