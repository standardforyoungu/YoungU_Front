"use client";

import Image from "next/image";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useModal } from "@/hooks/useModal";
import { toast } from "@/utils/toast";

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from "@/components/ui/drawer";
import { Button } from "../ui/button";
import KakaoShareBtn from "./KakaoShareBtn";

export default function Share() {
	const { isOpen, type, onClose, setOpenChange } = useModal();
	const isModalOpen = isOpen && type === "share";

	const onClickCopyBoard = () => {
		toast("Success", "복사되었어요!");
	};

	return (
		<Drawer open={isModalOpen} onDrag={onClose} onOpenChange={setOpenChange}>
			<DrawerContent className="gap-1 p-5">
				<DrawerHeader className="gap-[1px] p-0">
					<KakaoShareBtn />
					<CopyToClipboard text={window.location.href}>
						<Button
							onClick={onClickCopyBoard}
							className="bg-White text-gray-60 flex justify-center items-center gap-2 rounded-t-none !body1 !h-[56px]">
							<Image src={"/icons/link.svg"} alt="link" width={16} height={16} />
							<span>URL 복사하기</span>
						</Button>
					</CopyToClipboard>
				</DrawerHeader>
				<DrawerFooter className="p-0">
					<Button onClick={onClose} className="bg-White text-orange-100 !head4 !h-[56px]">
						취소
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
