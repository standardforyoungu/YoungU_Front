"use client";

import React from "react";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { useModal } from "@/hooks/useModal";
import { getKakaoAuthCode } from "@/utils/getAuthCode";

export default function Login() {
	const { isOpen, type, onClose, setOpenChange } = useModal();
	const isModalOpen = isOpen && type === "login";

	return (
		<Drawer open={isModalOpen} onDrag={onClose} onOpenChange={setOpenChange}>
			<DrawerContent className="bg-WHITE">
				<DrawerHeader>
					<DrawerTitle>로그인</DrawerTitle>
					<DrawerDescription>로그인 설명</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<button onClick={getKakaoAuthCode}>로그인하기</button>
					<DrawerClose asChild>
						<button onClick={onClose}>cancle</button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
