import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "성향검사 결과 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="flex items-center justify-between px-[20px] py-[16px] head3 bg-White border-b border-[#0000001a] w-full sticky top-0 z-10 ">
				<p className="text-gray-10">성향검사 결과</p>
				<Link href={"/"}>
					<Image src={"/icons/home.svg"} alt="home" width={24} height={24} />
				</Link>
			</header>
			{children}
		</>
	);
}
