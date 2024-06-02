"use client";

import React from "react";
import * as z from "zod";

import { usePostChildInfoService } from "@/services/user/usePostChildInfoService";
import ChildForm, { formSchema } from "@/components/user/ChildForm";

export default function SettingPage() {
	const { mutate, onSuccess, onError } = usePostChildInfoService();

	const defaultValue = {
		chl_nck_nm: "",
		chl_sex: "",
		chl_age: "",
	};

	const onSubmit = (value: z.infer<typeof formSchema>) => {
		mutate(value, { onSuccess, onError });
	};

	return (
		<ChildForm
			info="검사를 진행할 아이 정보를 작성해주세요."
			buttonText="저장하고 검사 시작하기"
			defaultValue={defaultValue}
			onSubmit={onSubmit}
		/>
	);
}
