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

export default function ConfirmEmail() {
	const { type, isOpen, data, onClose } = useModal();
	const isModalOpen = isOpen && type === "confirmEmail";

	return (
		<AlertDialog open={isModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="head4 text-gray-20">이메일 확인</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-60 body2">
						{data?.email}
						<br />이 이메일이 맞나요?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-[10px]">
					<Button onClick={onClose} className="bg-gray-95 text-gray-60 w-full">
						아니요, 수정할게요
					</Button>
					<Button className="text-WHITE w-full">네, 맞아요</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
