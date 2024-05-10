"use client";
import Image from "next/image";
import React from "react";
import MainCards from "./components/MainCards";
import { useModal } from "@/hooks/useModal";

export default function Main() {
	const { isOpen, type } = useModal();
	const isModalOpen = isOpen && type === "login";

	return (
		<div className={`w-full flex flex-col ${isModalOpen && "bg-BLACK opacity-20"}`}>
			<div className="bg-gray-99 w-full px-[20px] pb-[20px]">
				<div className="flex flex-col gap-[10px] justify-center items-center pt-[44px] pb-[28px] relative">
					<Image
						src={"/icons/beta_tag.svg"}
						alt={"tag"}
						width={49}
						height={25}
						className="absolute top-[1.5rem] right-[7.9rem]"
					/>
					<Image src={"/images/logo.svg"} alt={"logo"} width={174} height={42} />
					<p className="body1 text-gray-60">우리 아이와 딱 맞는 영유 찾기</p>
				</div>
				<MainCards />
			</div>
		</div>
	);
}
