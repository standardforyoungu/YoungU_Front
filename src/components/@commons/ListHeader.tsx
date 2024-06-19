"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { ChevronLeft } from "lucide-react";

interface Props {
	mainTitle: string;
	subTitle?: string;
	url: string;
	onClick?: () => void;
}

export default function ListHeader({ mainTitle, subTitle, url, onClick = () => {} }: Props) {
	const router = useRouter();

	return (
		<header className="flex gap-1 items-center px-[20px] py-[16px] head3 bg-White border-b border-[#0000001a] w-full sticky top-0 z-10 ">
			<ChevronLeft
				className="text-gray-10 cursor-pointer"
				size={24}
				onClick={() => {
					router.push(url, { scroll: false });
					onClick();
				}}
			/>
			<p className="text-gray-10">{mainTitle}</p>
			{subTitle && <p className="text-gray-40">{subTitle}</p>}
		</header>
	);
}
