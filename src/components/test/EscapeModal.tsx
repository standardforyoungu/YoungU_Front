import { useRouter } from "next/navigation";
import React from "react";
import { useModal } from "@/hooks/useModal";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export default function EscapeModal() {
	const router = useRouter();
	const { type, isOpen, data, onClose } = useModal();
	const isModalOpen = isOpen && type === "escape";

	const onEscape = () => {
		onClose();
		router.push("/test");
	};

	return (
		<AlertDialog open={isModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="head4 text-gray-20">페이지를 이동하시겠어요?</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-60 body2">
						변경사항이 저장되지 않을 수 있습니다.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-[10px]">
					<Button onClick={onClose} variant={"popup-secondary"} className="w-full">
						취소
					</Button>
					<Button onClick={onEscape} variant={"popup"} className="w-full">
						이동
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
