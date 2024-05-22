"use client";

import * as z from "zod";
import { usePostChildInfoService } from "@/services/myPage/usePostChildInfoService";
import ChildForm, { formSchema } from "@/components/myPage/ChildForm";

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

	return <ChildForm defaultValue={defaultValue} onSubmit={onSubmit} />;
}
