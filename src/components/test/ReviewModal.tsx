"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { usePostReviewService } from "@/services/review/usePostReviewService";
import { usePathname } from "next/navigation";
import { getMbrId } from "@/utils/getMbrId";

export default function ReviewModal() {
	const pathname = usePathname();
	const { mutate, onSuccess, onError } = usePostReviewService();
	const { type, isOpen, onClose, setOpenChange } = useModal();
	const isModalOpen = isOpen && pathname === "/test/result" && type === "review";
	const [review, setReview] = useState({ mbr_rvw: "", mbr_star: "" });

	const onSubmit = () => {
		const mbr_id = getMbrId();
		const req = { ...review, mbr_id };
		mutate(req, {
			onSuccess: (data) => {
				onSuccess(data);
				localStorage.setItem("isReviewed", "true");
			},
			onError,
		});
		onClose();
	};

	return (
		<AlertDialog open={isModalOpen} onOpenChange={setOpenChange}>
			<AlertDialogContent className="bottom-[20%]">
				<AlertDialogHeader>
					<X className="self-end" onClick={onClose} />
					<AlertDialogTitle className="head3 text-gray-20">
						<p>
							영유스탠다드의
							<br />
							<span className="text-orange-100">성향검사</span>가 도움이 됐나요?
						</p>
					</AlertDialogTitle>
					<div className="text-gray-60 body2 flex gap-[2px] justify-center pt-4 pb-6">
						{[1, 2, 3, 4, 5].map((el) => (
							<Image
								onClick={() => setReview({ ...review, mbr_star: el.toString() })}
								className="cursor-pointer"
								key={el}
								src={`/icons/star${!review?.mbr_star || el > +review.mbr_star ? "_disabled" : ""}.svg`}
								alt="star"
								width={40}
								height={40}
							/>
						))}
					</div>
					<AlertDialogDescription className="flex flex-col gap-[6px]">
						<Textarea
							className="w-[280px] h-[200px] resize-none border-gray-95 placeholder:text-gray-80 placeholder:body2 rounded-[6px] text-gray-20 !body1 focus:border-orange-100"
							placeholder="영유스탠다드가 어떤 서비스를 제공하면 좋을지 자유롭게 남겨주세요."
							value={review?.mbr_rvw}
							onChange={(e) => setReview({ ...review, mbr_rvw: e.target.value })}
						/>
						<Button variant={"medium"} className="w-full" onClick={onSubmit}>
							평가 보내기
						</Button>
						<span className="mt-[2px] body2 text-gray-80">소중한 후기를 남겨주셔서 감사합니다!</span>
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
}
