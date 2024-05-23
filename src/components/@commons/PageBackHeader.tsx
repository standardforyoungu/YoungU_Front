"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface pageBackHeader {
	title: string;
}

export default function PageBackHeader(props: pageBackHeader) {
	const router = useRouter();
	const { title } = props;
	return (
		<header className="flex justify-between px-[20px] py-[16px] bg-White border-b border-[#0000001a] w-full sticky top-0 z-10">
			<button className="flex justify-start items-center gap-4" onClick={() => router.back()}>
				<Image src={"/icons/arrow-bracket.svg"} alt="arrow-bracket" width={12} height={12} />
				<p className="head2">{title}</p>
			</button>
		</header>
	);
}
