"use client";

import React from "react";

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useModal } from "@/hooks/useModal";
import { getKakaoAuthCode } from "@/utils/getAuthCode";
import { X } from "lucide-react";
import Image from "next/image";

export default function Login() {
	const { isOpen, type, onClose, setOpenChange } = useModal();
	const isModalOpen = isOpen && type === "login";

	return (
		<Drawer open={isModalOpen} onDrag={onClose} onOpenChange={setOpenChange}>
			<DrawerContent className="bg-White">
				<DrawerHeader className="flex flex-col gap-6">
					<div className="flex justify-end">
						<X size={24} className="text-gray-90" onClick={onClose} />
					</div>
					<DrawerTitle className="flex flex-col items-center gap-6">
						<Image src={"/icons/main_symbol.svg"} alt="symbol" width={55} height={63} />
						<p className="head2">
							지금 로그인하고
							<br />
							<span className="text-orange-100">아이 성향 테스트</span> 받아보세요
						</p>
					</DrawerTitle>
				</DrawerHeader>
				<DrawerFooter className="px-[30px] pb-[69px]">
					<Image src={"/icons/start_in_3sec.svg"} alt="start_in_3cd" width={106} height={34} className="mx-auto" />
					<button onClick={getKakaoAuthCode} className="h-[45px] w-full rounded-[6px] bg-[#FEE500] relative mb-[10px]">
						<Image
							alt="kakao"
							src={"/icons/kakao.svg"}
							width={18}
							height={16.8}
							className="absolute left-[14px] top-[14.1px]"
						/>
						<span className="text-center">카카오 로그인</span>
					</button>
					<p className="text-gray-60 body3 text-center">
						회원가입과 함께 <span className="font-semibold underline underline-offset-2 cursor-pointer">이용약관</span>{" "}
						및 <span className="font-semibold underline underline-offset-2 cursor-pointer">개인정보처리방침</span>에
						동의합니다.
					</p>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
