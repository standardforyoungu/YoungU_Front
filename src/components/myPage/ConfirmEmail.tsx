import { useModal } from "@/hooks/useModal";
import React from "react";
import { sendContactEmail } from "@/utils/sendContactEmail";
import { useRouter } from "next/navigation";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { toast } from "@/utils/toast";

export default function ConfirmEmail() {
	const router = useRouter();
	const { type, isOpen, data, onClose } = useModal();
	const isModalOpen = isOpen && type === "confirmEmail";

	const onConfirm = () => {
		onClose();
		data?.setIsLoading(true);
		sendContactEmail(data?.value)
			.then(() => {
				toast("Success", "답변이 제출되었습니다.");
				router.push("/my-page");
			})
			.finally(() => {
				data?.setIsLoading(false);
			});
	};

	return (
		<AlertDialog open={isModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="head4 text-gray-20">이메일 확인</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-60 body2">
						{data?.value?.email}
						<br />이 이메일이 맞나요?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="gap-[10px]">
					<Button onClick={onClose} variant={"popup-secondary"} className="shrink-0">
						아니요, 수정할게요
					</Button>
					<Button onClick={onConfirm} variant={"popup"} className="w-full">
						네, 맞아요
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
