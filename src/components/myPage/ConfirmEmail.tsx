import { useModal } from "@/hooks/useModal";
import React from "react";
import { sendContactEmail } from "@/utils/sendContactEmail";
import { toast } from "react-toastify";
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

export default function ConfirmEmail() {
	const router = useRouter();
	const { type, isOpen, data, onClose } = useModal();
	const isModalOpen = isOpen && type === "confirmEmail";

	const onConfirm = () => {
		onClose();
		data?.setIsLoading(true);
		sendContactEmail(data?.value)
			.then(() => {
				toast.success("성공적으로 메일을 전송했습니다.");
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
					<Button onClick={onClose} className="!h-[40px] !head5 bg-gray-95 text-gray-60 w-full hover:bg-gray-95">
						아니요, 수정할게요
					</Button>
					<Button onClick={onConfirm} className="!h-[40px] !head5 text-White w-full hover:bg-orange-100">
						네, 맞아요
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
