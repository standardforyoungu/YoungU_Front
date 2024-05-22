import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";
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
import { Loader2 } from "lucide-react";

export default function ConfirmEmail() {
	const router = useRouter();
	const { type, isOpen, data, onClose } = useModal();
	const isModalOpen = isOpen && type === "confirmEmail";
	const [isLoading, setIsLoading] = useState(false);

	const onConfirm = () => {
		setIsLoading(true);
		sendContactEmail(data?.value)
			.then(() => {
				toast.success("성공적으로 메일을 전송했습니다.");
				router.push("/my-page");
				onClose();
			})
			.finally(() => setIsLoading(false));
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
					<Button onClick={onClose} className="bg-gray-95 text-gray-60 w-full">
						아니요, 수정할게요
					</Button>
					<Button onClick={onConfirm} className="text-WHITE w-full flex items-center gap-1">
						{isLoading && <Loader2 size={14} className="animate-spin" />}
						네, 맞아요
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
