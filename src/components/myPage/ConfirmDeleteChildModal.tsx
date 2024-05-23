import { useModal } from "@/hooks/useModal";
import React from "react";
import { useDeleteChildInfoService } from "@/services/myPage/useDeleteChildInfoService";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export default function ConfirmDeleteChildModal() {
	const { type, isOpen, data, onClose } = useModal();
	const isModalOpen = isOpen && type === "confirmDeleteChild";
	const { mutate, onSuccess, onError } = useDeleteChildInfoService();

	const onDelete = () => {
		mutate({ chl_id: data?.idx }, { onSuccess, onError });
		onClose();
	};

	return (
		<AlertDialog open={isModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="head4 text-gray-20">데이터 삭제 확인</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-60 body2">
						삭제하면 모든 데이터가 삭제됩니다.
						<br />
						삭제하시겠어요?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-[10px]">
					<Button onClick={onClose} className="bg-gray-95 text-gray-60 w-full">
						취소
					</Button>
					<Button className="text-White w-full" onClick={onDelete}>
						삭제하기
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
