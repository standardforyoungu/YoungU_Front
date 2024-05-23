import { useModal } from "@/hooks/useModal";
import React from "react";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export default function MaximumChildModal() {
	const { type, isOpen, onClose } = useModal();
	const isModalOpen = isOpen && type === "maximumChild";

	return (
		<AlertDialog open={isModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader className="h-[80px] justify-center">
					<AlertDialogTitle className="head4 text-gray-20">
						아이 정보는 <span className="text-orange-100">최대 3개</span>까지 저장 가능합니다.
						<br />
						아이 정보를 삭제한 후 다시 시도해주세요.
					</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<Button className="text-White w-full" onClick={onClose}>
						확인
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
