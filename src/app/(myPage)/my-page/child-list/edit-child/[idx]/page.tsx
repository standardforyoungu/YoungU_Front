"use client";

import ChildForm from "@/components/myPage/ChildForm";
import { useGetChildInfo } from "@/hooks/myPage/useGetChildInfo";
import { usePatchChildInfoService } from "@/services/myPage/usePatchChildInfoService";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	chl_nck_nm: z.string(),
	chl_sex: z.string(),
	chl_age: z.string(),
});

export default function EditChildPage({ params }: { params: { idx: string } }) {
	const { childList } = useGetChildInfo();
	const child = childList?.find(({ chl_id }: { chl_id: number }) => +params.idx === chl_id);
	const { mutate, onSuccess, onError } = usePatchChildInfoService();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			chl_nck_nm: child?.chl_nck_nm ?? "",
			chl_sex: child?.chl_sex ?? "",
			chl_age: child?.chl_age ?? "",
		},
	});

	const onSubmit = (value: z.infer<typeof formSchema>) => {
		mutate({ ...value, chl_id: +params.idx }, { onSuccess, onError });
	};

	return <ChildForm form={form} onSubmit={onSubmit} />;
}
