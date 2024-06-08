"use client";

import * as z from "zod";
import { usePostChildInfoService } from "@/services/user/usePostChildInfoService";
import ChildForm, { formSchema } from "@/components/user/ChildForm";

export default function AddChild() {
	const defaultValue = {
		chl_nck_nm: "",
		chl_sex: "",
		chl_age: "",
	};
	const { mutate, onSuccess, onError } = usePostChildInfoService();

	const onSubmit = (value: z.infer<typeof formSchema>) => {
		mutate(value, { onSuccess, onError });
	};

	return (
		<ChildForm info="아이 정보를 작성해주세요" buttonText="저장하기" defaultValue={defaultValue} onSubmit={onSubmit} />
	);
}
