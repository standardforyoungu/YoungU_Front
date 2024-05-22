"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useModal } from "@/hooks/useModal";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	contents: z.string().min(1).max(200),
	email: z.string().email().min(1),
});

export default function InquiryPage() {
	const { onOpen } = useModal();
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			contents: "",
			email: "",
		},
		mode: "onBlur",
	});

	const isValid =
		!form.formState.errors.contents &&
		!form.formState.errors.email &&
		!!form.getValues("contents") &&
		!!form.getValues("email");

	const onSubmit = (value: z.infer<typeof formSchema>) => {
		form.reset();
		onOpen("confirmEmail", { value, setIsLoading });
	};

	return (
		<>
			{isLoading ? (
				<div className="w-full h-full flex justify-center items-center">
					<div className="relative">
						<div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-10 rounded-full animate-spin" />
						<div className="w-8 h-8 bg-WHITE rounded-full absolute top-2 right-[7.5px]" />
					</div>
				</div>
			) : (
				<div className="p-[20px] flex flex-col gap-4">
					<div className="flex flex-col gap-[6px]">
						<h2 className="head2 text-gray-10">
							<span className="text-orange-100">영유스탠다드</span>를 이용하면서
							<br />
							불편한 점, 바라는 점을 말씀해주세요.
						</h2>
						<p className="body2 text-gray-60">*어학원 제휴 및 광고, 정보 수정 등 기타 문의도 가능</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[28px]">
							<FormField
								control={form.control}
								name="contents"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												className={`rounded-[6px] border-gray-95 h-[260px] py-2 px-3 body1 placeholder:body2 text-gray-20 focus:border-orange-200 placeholder:text-gray-80 resize-none ${
													field.value && "border-orange-200"
												}`}
												placeholder="개인정보(이름, 연락처, 주민등록번호 등)가 포함되지 않도록 작성해주세요."
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="flex flex-col gap-[10px]">
										<FormLabel className="!head4 text-gray-10">답변 받을 이메일</FormLabel>
										<FormControl>
											<Input
												placeholder="이메일 주소를 입력해주세요."
												className={`rounded-[6px] border-gray-95 focus:border-orange-200 placeholder:body2 placeholder:text-gray-90 text-gray-40 head5 ${
													field.value && "border-orange-200"
												}`}
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className="h-[56px] bg-orange-100 !head4 text-WHITE disabled:bg-gray-90"
								type="submit"
								disabled={!isValid}>
								영유스탠다드에 문의하기
							</Button>
						</form>
					</Form>
				</div>
			)}
		</>
	);
}
