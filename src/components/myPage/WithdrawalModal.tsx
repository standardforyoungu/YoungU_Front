import { useModal } from "@/hooks/useModal";
import React from "react";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export default function WithdrawalModal() {
	const { type, isOpen, onClose } = useModal();
	const isModalOpen = isOpen && type === "withdrawal";

	return (
		<AlertDialog open={isModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="head4 text-gray-20">회원탈퇴 확인</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-60 body2">
						회원을 탈퇴하면 모든 데이터가 삭제됩니다.
						<br />
						탈퇴하시겠어요?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-[10px]">
					<Button onClick={onClose} className="bg-gray-95 text-gray-60 w-full">
						취소
					</Button>
					<Button className="text-WHITE w-full">확인</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
